import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Icosahedron, Torus } from '@react-three/drei'
import * as THREE from 'three'

/**
 * "Aria" — the AI guide. An abstract digital researcher entity:
 * a pulsing energy core, orbiting synapse rings and a particle aura.
 * Reacts subtly to the pointer so it feels alive and watching.
 */
export default function AvatarGuide({ scale = 1 }) {
  const root = useRef()
  const core = useRef()
  const ringA = useRef()
  const ringB = useRef()
  const ringC = useRef()

  useFrame((state) => {
    const t = state.clock.elapsedTime
    if (root.current) {
      root.current.rotation.y = THREE.MathUtils.lerp(
        root.current.rotation.y,
        state.pointer.x * 0.6,
        0.04
      )
      root.current.rotation.x = THREE.MathUtils.lerp(
        root.current.rotation.x,
        -state.pointer.y * 0.4,
        0.04
      )
    }
    if (core.current) {
      const s = 1 + Math.sin(t * 2.2) * 0.05
      core.current.scale.setScalar(s)
    }
    if (ringA.current) ringA.current.rotation.z = t * 0.6
    if (ringB.current) ringB.current.rotation.x = t * 0.5
    if (ringC.current) ringC.current.rotation.y = t * 0.7
  })

  return (
    <Float speed={2} rotationIntensity={0.4} floatIntensity={1.1}>
      <group ref={root} scale={scale}>
        {/* energy core */}
        <Icosahedron ref={core} args={[1, 6]}>
          <MeshDistortMaterial
            color="#8b5cf6"
            emissive="#22d3ee"
            emissiveIntensity={0.5}
            distort={0.4}
            speed={2.5}
            roughness={0.1}
            metalness={0.9}
          />
        </Icosahedron>

        {/* inner bright nucleus */}
        <Icosahedron args={[0.45, 2]}>
          <meshBasicMaterial color="#a5f3fc" />
        </Icosahedron>

        {/* orbiting synapse rings */}
        <Torus ref={ringA} args={[1.7, 0.018, 16, 100]}>
          <meshBasicMaterial color="#22d3ee" transparent opacity={0.8} />
        </Torus>
        <Torus ref={ringB} args={[2.0, 0.014, 16, 100]} rotation={[Math.PI / 3, 0, 0]}>
          <meshBasicMaterial color="#ec4899" transparent opacity={0.7} />
        </Torus>
        <Torus ref={ringC} args={[2.3, 0.012, 16, 100]} rotation={[0, Math.PI / 3, Math.PI / 4]}>
          <meshBasicMaterial color="#8b5cf6" transparent opacity={0.6} />
        </Torus>

        <ParticleAura />
        <pointLight color="#22d3ee" intensity={2.2} distance={8} />
      </group>
    </Float>
  )
}

function ParticleAura({ count = 120 }) {
  const ref = useRef()
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const r = 2.6 + Math.random() * 1.4
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      arr[i * 3 + 2] = r * Math.cos(phi)
    }
    return arr
  }, [count])

  useFrame((state) => {
    if (ref.current) ref.current.rotation.y = state.clock.elapsedTime * 0.08
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#a5f3fc"
        transparent
        opacity={0.8}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  )
}
