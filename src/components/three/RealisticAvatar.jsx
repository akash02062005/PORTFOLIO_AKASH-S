import { useRef, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

/**
 * A refined, semi-realistic stylised avatar of a young man that feels alive:
 *  • head + torso follow the mouse across the whole screen (global listener)
 *  • eyes/pupils track the cursor independently
 *  • automatic blinking, breathing and gentle idle sway
 *  • soft three-point lighting + physical skin material for a polished look
 */
const SKIN = '#edb98a'
const SKIN_DARK = '#d79f6e'
const HAIR = '#13131c'
const SHIRT = '#283163'
const SHIRT2 = '#3b4794'
const LIP = '#9c5650'

export default function RealisticAvatar({ scale = 1 }) {
  const mouse = useRef({ x: 0, y: 0 })
  const root = useRef()
  const head = useRef()
  const torso = useRef()
  const pupilL = useRef()
  const pupilR = useRef()
  const eyeL = useRef()
  const eyeR = useRef()
  const blink = useRef({ t: 0, next: 2.5 })

  useEffect(() => {
    const onMove = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1
      mouse.current.y = (e.clientY / window.innerHeight) * 2 - 1
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  useFrame((state, dt) => {
    const t = state.clock.elapsedTime
    const mx = mouse.current.x
    const my = mouse.current.y

    // head turns toward the cursor (with a little idle drift)
    if (head.current) {
      const targetY = mx * 0.6 + Math.sin(t * 0.6) * 0.04
      const targetX = my * 0.4 + Math.sin(t * 0.8) * 0.02
      head.current.rotation.y = THREE.MathUtils.lerp(head.current.rotation.y, targetY, 0.08)
      head.current.rotation.x = THREE.MathUtils.lerp(head.current.rotation.x, targetX, 0.08)
    }
    // whole body subtle parallax + float
    if (root.current) {
      root.current.rotation.y = THREE.MathUtils.lerp(root.current.rotation.y, mx * 0.16, 0.06)
      root.current.position.y = Math.sin(t * 1.1) * 0.04
    }
    // breathing
    if (torso.current) {
      const b = 1 + Math.sin(t * 1.6) * 0.018
      torso.current.scale.set(1, b, 0.82)
    }
    // pupils track cursor within the socket
    const px = THREE.MathUtils.clamp(mx, -1, 1) * 0.045
    const py = THREE.MathUtils.clamp(-my, -1, 1) * 0.035
    if (pupilL.current) pupilL.current.position.set(-0.3 + px, -0.02 + py, 0.86)
    if (pupilR.current) pupilR.current.position.set(0.3 + px, -0.02 + py, 0.86)

    // blinking — squash the eyes briefly on a random schedule
    const bk = blink.current
    bk.t += dt
    let open = 1
    if (bk.t >= bk.next) {
      const local = bk.t - bk.next
      const dur = 0.16
      if (local <= dur) open = 1 - Math.sin((local / dur) * Math.PI)
      else bk.next = bk.t + 2.2 + Math.random() * 3.2
    }
    if (eyeL.current) eyeL.current.scale.y = 0.08 + open * 0.92
    if (eyeR.current) eyeR.current.scale.y = 0.08 + open * 0.92
  })

  return (
    <group ref={root} scale={scale}>
      {/* three-point lighting for a polished, semi-real look */}
      <hemisphereLight args={['#dfeeff', '#1a1026', 0.7]} />
      <pointLight position={[3.5, 4, 5]} intensity={1.5} color="#fff1df" />
      <pointLight position={[-4, 1, 3]} intensity={0.55} color="#a9dcff" />
      <pointLight position={[0, 2.5, -4]} intensity={1.1} color="#22d3ee" />
      <pointLight position={[-1, -1, 4]} intensity={0.4} color="#8b5cf6" />

      {/* ===== Head (tracks mouse) ===== */}
      <group ref={head} position={[0, 1.15, 0]}>
        {/* skull / face */}
        <mesh scale={[0.94, 1.06, 0.95]} castShadow>
          <sphereGeometry args={[0.8, 64, 64]} />
          <meshPhysicalMaterial color={SKIN} roughness={0.5} clearcoat={0.18} clearcoatRoughness={0.4} sheen={0.35} sheenColor={'#ffd9b0'} />
        </mesh>
        {/* jaw / chin shading */}
        <mesh position={[0, -0.55, 0.18]} scale={[0.62, 0.5, 0.6]}>
          <sphereGeometry args={[0.6, 40, 40]} />
          <meshPhysicalMaterial color={SKIN_DARK} roughness={0.55} />
        </mesh>
        {/* cheeks */}
        <mesh position={[-0.42, -0.18, 0.55]} scale={[0.45, 0.4, 0.4]}>
          <sphereGeometry args={[0.4, 24, 24]} />
          <meshStandardMaterial color={'#ecae84'} roughness={0.55} />
        </mesh>
        <mesh position={[0.42, -0.18, 0.55]} scale={[0.45, 0.4, 0.4]}>
          <sphereGeometry args={[0.4, 24, 24]} />
          <meshStandardMaterial color={'#ecae84'} roughness={0.55} />
        </mesh>

        {/* ears */}
        <mesh position={[-0.76, -0.05, 0]} scale={[0.7, 1.1, 0.9]}>
          <sphereGeometry args={[0.15, 22, 22]} />
          <meshPhysicalMaterial color={SKIN_DARK} roughness={0.55} />
        </mesh>
        <mesh position={[0.76, -0.05, 0]} scale={[0.7, 1.1, 0.9]}>
          <sphereGeometry args={[0.15, 22, 22]} />
          <meshPhysicalMaterial color={SKIN_DARK} roughness={0.55} />
        </mesh>

        {/* hair cap */}
        <mesh position={[0, 0.26, -0.04]} scale={[1.03, 0.92, 1.06]}>
          <sphereGeometry args={[0.84, 48, 48, 0, Math.PI * 2, 0, Math.PI * 0.6]} />
          <meshStandardMaterial color={HAIR} roughness={0.72} metalness={0.12} />
        </mesh>
        {/* layered fringe spikes */}
        {[-0.5, -0.28, -0.08, 0.12, 0.32, 0.52].map((x, i) => (
          <mesh key={i} position={[x, 0.5 - Math.abs(x) * 0.18, 0.5]} rotation={[0.6, 0, x * 0.7]}>
            <coneGeometry args={[0.15, 0.46, 8]} />
            <meshStandardMaterial color={HAIR} roughness={0.72} metalness={0.12} />
          </mesh>
        ))}
        {/* back/top tufts */}
        {[-0.3, 0, 0.3].map((x, i) => (
          <mesh key={`t${i}`} position={[x, 0.7, -0.1]} rotation={[-0.3, 0, x]}>
            <coneGeometry args={[0.14, 0.4, 8]} />
            <meshStandardMaterial color={HAIR} roughness={0.72} metalness={0.12} />
          </mesh>
        ))}
        {/* sideburns */}
        <mesh position={[-0.73, 0.02, 0.2]} scale={[0.5, 1.1, 0.6]}>
          <sphereGeometry args={[0.2, 16, 16]} />
          <meshStandardMaterial color={HAIR} roughness={0.72} />
        </mesh>
        <mesh position={[0.73, 0.02, 0.2]} scale={[0.5, 1.1, 0.6]}>
          <sphereGeometry args={[0.2, 16, 16]} />
          <meshStandardMaterial color={HAIR} roughness={0.72} />
        </mesh>

        {/* eyebrows */}
        <mesh position={[-0.3, 0.24, 0.74]} rotation={[0, 0, -0.12]}>
          <boxGeometry args={[0.27, 0.055, 0.07]} />
          <meshStandardMaterial color={HAIR} roughness={0.6} />
        </mesh>
        <mesh position={[0.3, 0.24, 0.74]} rotation={[0, 0, 0.12]}>
          <boxGeometry args={[0.27, 0.055, 0.07]} />
          <meshStandardMaterial color={HAIR} roughness={0.6} />
        </mesh>

        {/* eyes (groups squash for blink) */}
        <group ref={eyeL} position={[-0.3, -0.02, 0.72]}>
          <mesh scale={[1, 1.15, 0.55]}>
            <sphereGeometry args={[0.17, 28, 28]} />
            <meshStandardMaterial color="#f7f7fb" roughness={0.25} />
          </mesh>
        </group>
        <group ref={eyeR} position={[0.3, -0.02, 0.72]}>
          <mesh scale={[1, 1.15, 0.55]}>
            <sphereGeometry args={[0.17, 28, 28]} />
            <meshStandardMaterial color="#f7f7fb" roughness={0.25} />
          </mesh>
        </group>
        {/* pupils (track cursor) */}
        <group ref={pupilL} position={[-0.3, -0.02, 0.86]}>
          <mesh>
            <sphereGeometry args={[0.085, 20, 20]} />
            <meshStandardMaterial color="#4a3320" roughness={0.3} />
          </mesh>
          <mesh position={[0, 0, 0.04]}>
            <sphereGeometry args={[0.045, 16, 16]} />
            <meshStandardMaterial color="#140d06" />
          </mesh>
          <mesh position={[0.03, 0.04, 0.07]}>
            <sphereGeometry args={[0.022, 10, 10]} />
            <meshBasicMaterial color="#ffffff" />
          </mesh>
        </group>
        <group ref={pupilR} position={[0.3, -0.02, 0.86]}>
          <mesh>
            <sphereGeometry args={[0.085, 20, 20]} />
            <meshStandardMaterial color="#4a3320" roughness={0.3} />
          </mesh>
          <mesh position={[0, 0, 0.04]}>
            <sphereGeometry args={[0.045, 16, 16]} />
            <meshStandardMaterial color="#140d06" />
          </mesh>
          <mesh position={[0.03, 0.04, 0.07]}>
            <sphereGeometry args={[0.022, 10, 10]} />
            <meshBasicMaterial color="#ffffff" />
          </mesh>
        </group>

        {/* nose */}
        <mesh position={[0, -0.1, 0.86]} scale={[0.7, 1, 1]}>
          <sphereGeometry args={[0.085, 16, 16]} />
          <meshPhysicalMaterial color={SKIN_DARK} roughness={0.5} />
        </mesh>

        {/* soft smile */}
        <mesh position={[0, -0.42, 0.74]} rotation={[0, 0, Math.PI]}>
          <torusGeometry args={[0.14, 0.022, 12, 24, Math.PI]} />
          <meshStandardMaterial color={LIP} roughness={0.5} />
        </mesh>

        {/* light stubble hint */}
        <mesh position={[0, -0.46, 0.34]} scale={[0.78, 0.42, 0.6]}>
          <sphereGeometry args={[0.6, 32, 32]} />
          <meshStandardMaterial color={'#3a2a22'} transparent opacity={0.18} roughness={0.9} />
        </mesh>
      </group>

      {/* neck */}
      <mesh position={[0, 0.5, 0]}>
        <cylinderGeometry args={[0.22, 0.28, 0.38, 28]} />
        <meshPhysicalMaterial color={SKIN_DARK} roughness={0.55} />
      </mesh>

      {/* torso (breathes) */}
      <mesh ref={torso} position={[0, -0.4, 0]} scale={[1, 1, 0.82]}>
        <cylinderGeometry args={[0.64, 0.86, 1.25, 36]} />
        <meshStandardMaterial color={SHIRT} roughness={0.7} />
      </mesh>
      {/* shoulders */}
      <mesh position={[-0.64, 0.05, 0]}>
        <sphereGeometry args={[0.31, 26, 26]} />
        <meshStandardMaterial color={SHIRT} roughness={0.7} />
      </mesh>
      <mesh position={[0.64, 0.05, 0]}>
        <sphereGeometry args={[0.31, 26, 26]} />
        <meshStandardMaterial color={SHIRT} roughness={0.7} />
      </mesh>
      {/* collar */}
      <mesh position={[0, 0.32, 0.06]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.29, 0.06, 16, 36]} />
        <meshStandardMaterial color={SHIRT2} roughness={0.6} />
      </mesh>

      {/* glowing base ring */}
      <mesh position={[0, -1.08, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.76, 0.018, 16, 90]} />
        <meshBasicMaterial color="#22d3ee" transparent opacity={0.5} />
      </mesh>
    </group>
  )
}
