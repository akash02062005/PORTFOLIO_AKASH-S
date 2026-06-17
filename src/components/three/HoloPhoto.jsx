import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { useTexture, Float, RoundedBox, Torus } from '@react-three/drei'
import * as THREE from 'three'

/**
 * "Holo-Akash" — the uploaded headshot reborn as a floating holographic
 * projection: a glowing glass frame, additive cyan tint, an orbiting synapse
 * ring and a drifting particle aura. Tilts toward the pointer so it feels live.
 */
export default function HoloPhoto({ scale = 1, src = '/akash-photo.jpg' }) {
  const tex = useTexture(src)
  tex.colorSpace = THREE.SRGBColorSpace
  tex.anisotropy = 8

  const root = useRef()
  const ringA = useRef()
  const ringB = useRef()
  const scan = useRef()

  // portrait aspect (≈ 4:5)
  const w = 2.7
  const h = 3.4

  useFrame((state) => {
    const t = state.clock.elapsedTime
    if (root.current) {
      root.current.rotation.y = THREE.MathUtils.lerp(
        root.current.rotation.y,
        state.pointer.x * 0.5,
        0.05
      )
      root.current.rotation.x = THREE.MathUtils.lerp(
        root.current.rotation.x,
        -state.pointer.y * 0.3,
        0.05
      )
    }
    if (ringA.current) ringA.current.rotation.z = t * 0.35
    if (ringB.current) ringB.current.rotation.z = -t * 0.25
    if (scan.current) {
      // a thin scan-line sweeping up the portrait
      scan.current.position.y = ((t * 0.6) % 1) * h - h / 2
      scan.current.material.opacity = 0.35 + Math.sin(t * 3) * 0.15
    }
  })

  return (
    <Float speed={1.6} rotationIntensity={0.25} floatIntensity={0.9}>
      <group ref={root} scale={scale}>
        {/* soft glow backing */}
        <mesh position={[0, 0, -0.08]}>
          <planeGeometry args={[w + 0.7, h + 0.7]} />
          <meshBasicMaterial
            color="#22d3ee"
            transparent
            opacity={0.22}
            blending={THREE.AdditiveBlending}
            depthWrite={false}
          />
        </mesh>

        {/* glass / metal frame */}
        <RoundedBox args={[w + 0.22, h + 0.22, 0.1]} radius={0.1} smoothness={4} position={[0, 0, -0.05]}>
          <meshStandardMaterial
            color="#0b0f24"
            emissive="#8b5cf6"
            emissiveIntensity={0.7}
            metalness={0.85}
            roughness={0.25}
          />
        </RoundedBox>

        {/* the photo */}
        <mesh>
          <planeGeometry args={[w, h]} />
          <meshBasicMaterial map={tex} toneMapped={false} />
        </mesh>

        {/* holographic cyan tint */}
        <mesh position={[0, 0, 0.012]}>
          <planeGeometry args={[w, h]} />
          <meshBasicMaterial
            color="#22d3ee"
            transparent
            opacity={0.1}
            blending={THREE.AdditiveBlending}
            depthWrite={false}
          />
        </mesh>

        {/* sweeping scan line */}
        <mesh ref={scan} position={[0, 0, 0.02]}>
          <planeGeometry args={[w, 0.06]} />
          <meshBasicMaterial
            color="#a5f3fc"
            transparent
            opacity={0.4}
            blending={THREE.AdditiveBlending}
            depthWrite={false}
          />
        </mesh>

        {/* orbiting synapse rings */}
        <Torus ref={ringA} args={[2.35, 0.012, 16, 140]} rotation={[Math.PI / 2.1, 0, 0]}>
          <meshBasicMaterial color="#22d3ee" transparent opacity={0.55} />
        </Torus>
        <Torus ref={ringB} args={[2.6, 0.01, 16, 140]} rotation={[Math.PI / 2.6, Math.PI / 6, 0]}>
          <meshBasicMaterial color="#ec4899" transparent opacity={0.4} />
        </Torus>

        <HoloParticles />

        <pointLight color="#22d3ee" intensity={1.6} distance={10} position={[2.5, 2, 3]} />
        <pointLight color="#8b5cf6" intensity={1.2} distance={10} position={[-2.5, -1.5, 3]} />
      </group>
    </Float>
  )
}

function HoloParticles({ count = 90 }) {
  const ref = useRef()
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const r = 2.8 + Math.random() * 1.6
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 1.15
      arr[i * 3 + 2] = r * Math.cos(phi) * 0.5
    }
    return arr
  }, [count])

  useFrame((state) => {
    if (ref.current) ref.current.rotation.y = state.clock.elapsedTime * 0.1
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial
        size={0.045}
        color="#a5f3fc"
        transparent
        opacity={0.85}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  )
}
