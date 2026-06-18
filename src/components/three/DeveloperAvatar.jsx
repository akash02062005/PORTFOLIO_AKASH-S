import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { RoundedBox } from '@react-three/drei'
import * as THREE from 'three'

/**
 * A stylised 3D developer character — an Indian man in a hoodie with an
 * over-ear headset, holding an open laptop. The whole figure slowly rotates,
 * and the laptop screen (facing him) reveals "AKASH S / B.E CSE / PSNA CET"
 * as it turns around.
 */
const SKIN = '#a9743f'
const SKIN_DARK = '#90602f'
const HAIR = '#0e0e14'
const HOODIE = '#2c3142'
const HOODIE_DARK = '#222636'
const METAL = '#aeb6c2'
const BLACK = '#191920'

export default function DeveloperAvatar({ scale = 1 }) {
  const root = useRef()

  // laptop screen content drawn on a canvas → used as a texture
  const screenTex = useMemo(() => {
    const c = document.createElement('canvas')
    c.width = 512
    c.height = 320
    const x = c.getContext('2d')
    const g = x.createLinearGradient(0, 0, 0, 320)
    g.addColorStop(0, '#0b1226')
    g.addColorStop(1, '#05060f')
    x.fillStyle = g
    x.fillRect(0, 0, 512, 320)
    // glowing border
    x.strokeStyle = 'rgba(34,211,238,0.65)'
    x.lineWidth = 6
    x.strokeRect(12, 12, 488, 296)
    // little window dots
    x.fillStyle = '#ff5f57'; x.beginPath(); x.arc(42, 40, 8, 0, 7); x.fill()
    x.fillStyle = '#febc2e'; x.beginPath(); x.arc(70, 40, 8, 0, 7); x.fill()
    x.fillStyle = '#28c840'; x.beginPath(); x.arc(98, 40, 8, 0, 7); x.fill()
    // text
    x.textAlign = 'center'
    x.fillStyle = '#eafdff'
    x.font = 'bold 74px Arial, sans-serif'
    x.fillText('AKASH S', 256, 150)
    x.fillStyle = '#a9ecff'
    x.font = '600 44px Arial, sans-serif'
    x.fillText('B.E CSE', 256, 212)
    x.fillStyle = '#22d3ee'
    x.font = '600 42px Arial, sans-serif'
    x.fillText('PSNA CET', 256, 266)
    const t = new THREE.CanvasTexture(c)
    t.colorSpace = THREE.SRGBColorSpace
    t.anisotropy = 8
    return t
  }, [])

  useFrame((state) => {
    const t = state.clock.elapsedTime
    if (root.current) {
      root.current.rotation.y = t * 0.5 // steady reveal of the laptop screen
      root.current.position.y = Math.sin(t * 1.1) * 0.04
    }
  })

  return (
    <group ref={root} scale={scale}>
      {/* lighting */}
      <hemisphereLight args={['#dfeeff', '#160f22', 0.7]} />
      <pointLight position={[3.5, 4, 5]} intensity={1.4} color="#fff1df" />
      <pointLight position={[-4, 1, 3]} intensity={0.6} color="#a9dcff" />
      <pointLight position={[0, 2.5, -4]} intensity={1.0} color="#22d3ee" />

      {/* ===== Head ===== */}
      <group position={[0, 1.2, 0]}>
        <mesh scale={[0.92, 1.04, 0.94]}>
          <sphereGeometry args={[0.8, 48, 48]} />
          <meshPhysicalMaterial color={SKIN} roughness={0.55} clearcoat={0.15} clearcoatRoughness={0.4} />
        </mesh>
        {/* jaw shading */}
        <mesh position={[0, -0.52, 0.16]} scale={[0.62, 0.5, 0.6]}>
          <sphereGeometry args={[0.6, 32, 32]} />
          <meshStandardMaterial color={SKIN_DARK} roughness={0.6} />
        </mesh>

        {/* hair */}
        <mesh position={[0, 0.28, -0.04]} scale={[1.02, 0.9, 1.05]}>
          <sphereGeometry args={[0.82, 40, 40, 0, Math.PI * 2, 0, Math.PI * 0.58]} />
          <meshStandardMaterial color={HAIR} roughness={0.7} metalness={0.1} />
        </mesh>
        {[-0.45, -0.22, 0.0, 0.22, 0.45].map((hx, i) => (
          <mesh key={i} position={[hx, 0.48 - Math.abs(hx) * 0.18, 0.46]} rotation={[0.6, 0, hx * 0.6]}>
            <coneGeometry args={[0.14, 0.36, 7]} />
            <meshStandardMaterial color={HAIR} roughness={0.7} />
          </mesh>
        ))}

        {/* eyebrows */}
        <mesh position={[-0.28, 0.22, 0.72]} rotation={[0, 0, -0.1]}>
          <boxGeometry args={[0.25, 0.05, 0.06]} />
          <meshStandardMaterial color={HAIR} />
        </mesh>
        <mesh position={[0.28, 0.22, 0.72]} rotation={[0, 0, 0.1]}>
          <boxGeometry args={[0.25, 0.05, 0.06]} />
          <meshStandardMaterial color={HAIR} />
        </mesh>
        {/* eyes */}
        <mesh position={[-0.28, 0.04, 0.71]} scale={[1, 1.1, 0.5]}>
          <sphereGeometry args={[0.15, 22, 22]} />
          <meshStandardMaterial color="#f5f5f8" roughness={0.3} />
        </mesh>
        <mesh position={[0.28, 0.04, 0.71]} scale={[1, 1.1, 0.5]}>
          <sphereGeometry args={[0.15, 22, 22]} />
          <meshStandardMaterial color="#f5f5f8" roughness={0.3} />
        </mesh>
        <mesh position={[-0.28, 0.03, 0.83]}>
          <sphereGeometry args={[0.07, 16, 16]} />
          <meshStandardMaterial color="#241608" />
        </mesh>
        <mesh position={[0.28, 0.03, 0.83]}>
          <sphereGeometry args={[0.07, 16, 16]} />
          <meshStandardMaterial color="#241608" />
        </mesh>
        {/* nose */}
        <mesh position={[0, -0.08, 0.84]} scale={[0.7, 1.1, 1]}>
          <sphereGeometry args={[0.09, 16, 16]} />
          <meshStandardMaterial color={SKIN_DARK} roughness={0.55} />
        </mesh>
        {/* moustache + smile */}
        <mesh position={[0, -0.3, 0.74]}>
          <boxGeometry args={[0.3, 0.05, 0.05]} />
          <meshStandardMaterial color={HAIR} />
        </mesh>
        <mesh position={[0, -0.42, 0.72]} rotation={[0, 0, Math.PI]}>
          <torusGeometry args={[0.13, 0.02, 12, 24, Math.PI]} />
          <meshStandardMaterial color="#7d4a44" />
        </mesh>

        {/* ===== Headset ===== */}
        {/* headband arching over the head */}
        <mesh position={[0, 0.05, 0]}>
          <torusGeometry args={[0.86, 0.05, 14, 40, Math.PI]} />
          <meshStandardMaterial color={BLACK} roughness={0.5} metalness={0.3} />
        </mesh>
        {/* ear cups */}
        {[-1, 1].map((s) => (
          <group key={s} position={[s * 0.82, -0.05, 0]}>
            <mesh rotation={[0, 0, Math.PI / 2]}>
              <cylinderGeometry args={[0.2, 0.2, 0.14, 24]} />
              <meshStandardMaterial color={BLACK} roughness={0.5} metalness={0.2} />
            </mesh>
            <mesh position={[s * 0.08, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
              <torusGeometry args={[0.2, 0.018, 12, 28]} />
              <meshBasicMaterial color="#22d3ee" />
            </mesh>
          </group>
        ))}
        {/* mic boom toward the mouth */}
        <mesh position={[-0.55, -0.32, 0.45]} rotation={[1.0, 0, -0.5]}>
          <cylinderGeometry args={[0.018, 0.018, 0.7, 10]} />
          <meshStandardMaterial color={BLACK} />
        </mesh>
        <mesh position={[-0.25, -0.42, 0.74]}>
          <sphereGeometry args={[0.05, 14, 14]} />
          <meshStandardMaterial color={BLACK} />
        </mesh>
      </group>

      {/* neck */}
      <mesh position={[0, 0.52, 0]}>
        <cylinderGeometry args={[0.22, 0.27, 0.36, 24]} />
        <meshStandardMaterial color={SKIN_DARK} roughness={0.6} />
      </mesh>

      {/* ===== Hoodie torso ===== */}
      <mesh position={[0, -0.4, 0]} scale={[1, 1, 0.85]}>
        <cylinderGeometry args={[0.7, 0.92, 1.35, 36]} />
        <meshStandardMaterial color={HOODIE} roughness={0.85} />
      </mesh>
      {/* hood (down) behind the neck */}
      <mesh position={[0, 0.32, -0.28]} rotation={[0.5, 0, 0]}>
        <torusGeometry args={[0.34, 0.16, 16, 28]} />
        <meshStandardMaterial color={HOODIE_DARK} roughness={0.85} />
      </mesh>
      {/* shoulders */}
      <mesh position={[-0.66, 0.08, 0]}>
        <sphereGeometry args={[0.33, 24, 24]} />
        <meshStandardMaterial color={HOODIE} roughness={0.85} />
      </mesh>
      <mesh position={[0.66, 0.08, 0]}>
        <sphereGeometry args={[0.33, 24, 24]} />
        <meshStandardMaterial color={HOODIE} roughness={0.85} />
      </mesh>
      {/* kangaroo pocket */}
      <mesh position={[0, -0.62, 0.62]} rotation={[0.12, 0, 0]}>
        <boxGeometry args={[0.8, 0.34, 0.12]} />
        <meshStandardMaterial color={HOODIE_DARK} roughness={0.85} />
      </mesh>
      {/* drawstrings */}
      {[-0.12, 0.12].map((sx, i) => (
        <mesh key={i} position={[sx, -0.05, 0.66]}>
          <cylinderGeometry args={[0.015, 0.015, 0.4, 8]} />
          <meshStandardMaterial color="#cfd6e6" />
        </mesh>
      ))}

      {/* ===== Arms holding the laptop ===== */}
      {[-1, 1].map((s) => (
        <group key={s}>
          {/* upper arm / sleeve */}
          <mesh position={[s * 0.6, -0.4, 0.28]} rotation={[0.9, 0, s * 0.25]}>
            <cylinderGeometry args={[0.17, 0.16, 0.8, 18]} />
            <meshStandardMaterial color={HOODIE} roughness={0.85} />
          </mesh>
          {/* forearm */}
          <mesh position={[s * 0.42, -0.62, 0.66]} rotation={[1.35, 0, s * 0.2]}>
            <cylinderGeometry args={[0.14, 0.13, 0.6, 18]} />
            <meshStandardMaterial color={HOODIE_DARK} roughness={0.85} />
          </mesh>
          {/* hand */}
          <mesh position={[s * 0.5, -0.55, 0.95]}>
            <sphereGeometry args={[0.13, 18, 18]} />
            <meshStandardMaterial color={SKIN} roughness={0.6} />
          </mesh>
        </group>
      ))}

      {/* ===== Laptop ===== */}
      <group position={[0, -0.5, 0.92]} rotation={[0, 0, 0]}>
        {/* base / keyboard deck */}
        <RoundedBox args={[1.45, 0.06, 0.95]} radius={0.03} smoothness={3} position={[0, 0, 0]} rotation={[0.08, 0, 0]}>
          <meshStandardMaterial color={METAL} metalness={0.85} roughness={0.35} />
        </RoundedBox>
        {/* keyboard hint */}
        <mesh position={[0, 0.035, 0.08]} rotation={[0.08, 0, 0]}>
          <boxGeometry args={[1.25, 0.005, 0.6]} />
          <meshStandardMaterial color="#2a2e38" roughness={0.7} />
        </mesh>
        {/* lid + screen (hinged at the back edge, tilted toward the man) */}
        <group position={[0, 0.0, -0.45]} rotation={[-1.15, 0, 0]}>
          {/* outer lid shell (faces the camera initially) */}
          <RoundedBox args={[1.45, 0.92, 0.05]} radius={0.03} smoothness={3} position={[0, 0.46, 0]}>
            <meshStandardMaterial color={METAL} metalness={0.85} roughness={0.35} />
          </RoundedBox>
          {/* glowing logo on the outer shell (camera-facing side, +z) */}
          <mesh position={[0, 0.46, 0.03]}>
            <circleGeometry args={[0.12, 24]} />
            <meshBasicMaterial color="#22d3ee" />
          </mesh>
          {/* screen with the text — on the inner face toward the man (-z local) */}
          <mesh position={[0, 0.46, -0.028]} rotation={[0, Math.PI, 0]}>
            <planeGeometry args={[1.28, 0.78]} />
            <meshBasicMaterial map={screenTex} toneMapped={false} side={THREE.DoubleSide} />
          </mesh>
        </group>
      </group>

      {/* soft base glow ring */}
      <mesh position={[0, -1.18, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.85, 0.018, 16, 90]} />
        <meshBasicMaterial color="#22d3ee" transparent opacity={0.5} />
      </mesh>
    </group>
  )
}
