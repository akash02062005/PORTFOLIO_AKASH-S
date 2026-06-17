import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import * as THREE from 'three'

/**
 * A friendly low-poly cartoon/anime avatar of a young man — dark spiky hair,
 * warm skin, a navy shirt and big bright eyes. The head turns toward the
 * pointer and the whole figure gently floats, so it feels alive without any
 * of the heavy "holographic" treatment.
 */
const SKIN = '#f0c290'
const SKIN_SHADOW = '#e0a772'
const HAIR = '#15151f'
const SHIRT = '#2c356a'
const SHIRT2 = '#3b4690'

export default function ToonAvatar({ scale = 1 }) {
  const root = useRef()
  const head = useRef()

  useFrame((state) => {
    const t = state.clock.elapsedTime
    if (head.current) {
      head.current.rotation.y = THREE.MathUtils.lerp(head.current.rotation.y, state.pointer.x * 0.55, 0.05)
      head.current.rotation.x = THREE.MathUtils.lerp(head.current.rotation.x, -state.pointer.y * 0.32, 0.05)
    }
    if (root.current) root.current.position.y = Math.sin(t * 1.2) * 0.05
  })

  return (
    <Float speed={1.3} rotationIntensity={0.12} floatIntensity={0.5}>
      <group ref={root} scale={scale}>
        {/* key + rim lights for clean toon shading */}
        <pointLight position={[2.5, 3, 4]} intensity={1.2} color="#ffffff" />
        <pointLight position={[-3, 1, 2]} intensity={0.6} color="#22d3ee" />
        <pointLight position={[2, -1.5, 3]} intensity={0.5} color="#8b5cf6" />

        {/* ===== Head (turns to pointer) ===== */}
        <group ref={head} position={[0, 1.15, 0]}>
          {/* face */}
          <mesh scale={[0.92, 1.05, 0.9]}>
            <sphereGeometry args={[0.8, 48, 48]} />
            <meshStandardMaterial color={SKIN} roughness={0.62} metalness={0} />
          </mesh>

          {/* ears */}
          <mesh position={[-0.74, -0.05, 0]}>
            <sphereGeometry args={[0.13, 20, 20]} />
            <meshStandardMaterial color={SKIN_SHADOW} roughness={0.62} />
          </mesh>
          <mesh position={[0.74, -0.05, 0]}>
            <sphereGeometry args={[0.13, 20, 20]} />
            <meshStandardMaterial color={SKIN_SHADOW} roughness={0.62} />
          </mesh>

          {/* hair cap */}
          <mesh position={[0, 0.26, -0.02]} scale={[1.0, 0.86, 1.03]}>
            <sphereGeometry args={[0.86, 40, 40, 0, Math.PI * 2, 0, Math.PI * 0.62]} />
            <meshStandardMaterial color={HAIR} roughness={0.85} />
          </mesh>

          {/* spiky fringe */}
          {[-0.45, -0.2, 0.05, 0.3, 0.52].map((x, i) => (
            <mesh key={i} position={[x, 0.52 - Math.abs(x) * 0.22, 0.52]} rotation={[0.55, 0, x * 0.6]}>
              <coneGeometry args={[0.16, 0.42, 6]} />
              <meshStandardMaterial color={HAIR} roughness={0.85} />
            </mesh>
          ))}

          {/* sideburns */}
          <mesh position={[-0.72, 0.04, 0.18]} scale={[0.5, 1, 0.6]}>
            <sphereGeometry args={[0.2, 16, 16]} />
            <meshStandardMaterial color={HAIR} roughness={0.85} />
          </mesh>
          <mesh position={[0.72, 0.04, 0.18]} scale={[0.5, 1, 0.6]}>
            <sphereGeometry args={[0.2, 16, 16]} />
            <meshStandardMaterial color={HAIR} roughness={0.85} />
          </mesh>

          {/* eye whites */}
          <mesh position={[-0.3, -0.02, 0.72]} scale={[1, 1.2, 0.6]}>
            <sphereGeometry args={[0.16, 22, 22]} />
            <meshStandardMaterial color="#ffffff" roughness={0.3} />
          </mesh>
          <mesh position={[0.3, -0.02, 0.72]} scale={[1, 1.2, 0.6]}>
            <sphereGeometry args={[0.16, 22, 22]} />
            <meshStandardMaterial color="#ffffff" roughness={0.3} />
          </mesh>
          {/* irises / pupils */}
          <mesh position={[-0.3, -0.02, 0.84]}>
            <sphereGeometry args={[0.075, 18, 18]} />
            <meshStandardMaterial color="#3a2a1a" />
          </mesh>
          <mesh position={[0.3, -0.02, 0.84]}>
            <sphereGeometry args={[0.075, 18, 18]} />
            <meshStandardMaterial color="#3a2a1a" />
          </mesh>
          {/* sparkle highlights */}
          <mesh position={[-0.27, 0.04, 0.9]}>
            <sphereGeometry args={[0.022, 8, 8]} />
            <meshBasicMaterial color="#ffffff" />
          </mesh>
          <mesh position={[0.33, 0.04, 0.9]}>
            <sphereGeometry args={[0.022, 8, 8]} />
            <meshBasicMaterial color="#ffffff" />
          </mesh>

          {/* eyebrows */}
          <mesh position={[-0.3, 0.22, 0.76]} rotation={[0, 0, -0.1]}>
            <boxGeometry args={[0.26, 0.05, 0.06]} />
            <meshStandardMaterial color={HAIR} />
          </mesh>
          <mesh position={[0.3, 0.22, 0.76]} rotation={[0, 0, 0.1]}>
            <boxGeometry args={[0.26, 0.05, 0.06]} />
            <meshStandardMaterial color={HAIR} />
          </mesh>

          {/* nose */}
          <mesh position={[0, -0.12, 0.82]}>
            <sphereGeometry args={[0.06, 12, 12]} />
            <meshStandardMaterial color={SKIN_SHADOW} />
          </mesh>

          {/* mouth / soft smile */}
          <mesh position={[0, -0.4, 0.72]}>
            <boxGeometry args={[0.22, 0.04, 0.05]} />
            <meshStandardMaterial color="#a05a55" />
          </mesh>
        </group>

        {/* neck */}
        <mesh position={[0, 0.5, 0]}>
          <cylinderGeometry args={[0.22, 0.26, 0.35, 24]} />
          <meshStandardMaterial color={SKIN_SHADOW} roughness={0.62} />
        </mesh>

        {/* torso / shirt */}
        <mesh position={[0, -0.35, 0]} scale={[1, 1, 0.82]}>
          <cylinderGeometry args={[0.62, 0.82, 1.2, 32]} />
          <meshStandardMaterial color={SHIRT} roughness={0.72} />
        </mesh>
        {/* shoulders */}
        <mesh position={[-0.62, 0.06, 0]}>
          <sphereGeometry args={[0.3, 22, 22]} />
          <meshStandardMaterial color={SHIRT} roughness={0.72} />
        </mesh>
        <mesh position={[0.62, 0.06, 0]}>
          <sphereGeometry args={[0.3, 22, 22]} />
          <meshStandardMaterial color={SHIRT} roughness={0.72} />
        </mesh>
        {/* collar */}
        <mesh position={[0, 0.33, 0.06]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.28, 0.06, 16, 32]} />
          <meshStandardMaterial color={SHIRT2} roughness={0.6} />
        </mesh>

        {/* soft glowing base ring */}
        <mesh position={[0, -1.02, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.72, 0.02, 16, 80]} />
          <meshBasicMaterial color="#22d3ee" transparent opacity={0.5} />
        </mesh>
      </group>
    </Float>
  )
}
