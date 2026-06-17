import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Html } from '@react-three/drei'
import * as THREE from 'three'

/**
 * A single floating "project planet" orbiting the galaxy centre.
 * Hover to bloom, click to open the project. A glowing ring marks award winners.
 */
export default function ProjectPlanet({
  project,
  index,
  total,
  radius = 4.2,
  onSelect,
  active,
}) {
  const ref = useRef()
  const meshRef = useRef()
  const [hovered, setHovered] = useState(false)

  const angle = (index / total) * Math.PI * 2
  const yOffset = Math.sin(index * 1.7) * 0.6
  const size = 0.55 + (project.award ? 0.18 : 0)

  useFrame((state) => {
    const t = state.clock.elapsedTime
    if (ref.current) {
      const a = angle + t * 0.12
      ref.current.position.x = Math.cos(a) * radius
      ref.current.position.z = Math.sin(a) * radius
      ref.current.position.y = yOffset + Math.sin(t + index) * 0.18
    }
    if (meshRef.current) {
      meshRef.current.rotation.y = t * 0.4
      const target = hovered || active ? 1.35 : 1
      meshRef.current.scale.setScalar(
        THREE.MathUtils.lerp(meshRef.current.scale.x, target, 0.12)
      )
    }
  })

  return (
    <group ref={ref}>
      <mesh
        ref={meshRef}
        onPointerOver={(e) => {
          e.stopPropagation()
          setHovered(true)
          document.body.style.cursor = 'pointer'
        }}
        onPointerOut={() => {
          setHovered(false)
          document.body.style.cursor = 'auto'
        }}
        onClick={(e) => {
          e.stopPropagation()
          onSelect(project)
        }}
      >
        <icosahedronGeometry args={[size, 4]} />
        <meshStandardMaterial
          color={project.color}
          emissive={project.color}
          emissiveIntensity={hovered || active ? 1.1 : 0.45}
          roughness={0.25}
          metalness={0.7}
        />
      </mesh>

      {/* award halo ring */}
      {project.award && (
        <mesh rotation={[Math.PI / 2.2, 0, 0]}>
          <torusGeometry args={[size + 0.35, 0.03, 16, 80]} />
          <meshBasicMaterial color="#fcd34d" transparent opacity={0.9} />
        </mesh>
      )}

      <pointLight color={project.color} intensity={hovered ? 3 : 1.2} distance={4} />

      <Html center distanceFactor={10} position={[0, size + 0.7, 0]} zIndexRange={[10, 0]}>
        <div
          onClick={() => onSelect(project)}
          className="pointer-events-auto cursor-pointer select-none whitespace-nowrap rounded-full border border-white/15 bg-black/60 px-3 py-1 text-center text-[11px] font-semibold text-white backdrop-blur-sm transition"
          style={{
            boxShadow: hovered ? `0 0 20px ${project.color}` : 'none',
            opacity: hovered || active ? 1 : 0.85,
          }}
        >
          {project.award ? '🏆 ' : ''}
          {project.name}
        </div>
      </Html>
    </group>
  )
}
