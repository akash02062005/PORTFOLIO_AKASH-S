import { useMemo, useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

/**
 * A living 3D neural network: glowing nodes connected by synapse lines,
 * with a travelling pulse of "signals" and gentle mouse parallax.
 */
function NeuralNet({ count = 90, radius = 7, maxDist = 2.3 }) {
  const group = useRef()
  const pointsRef = useRef()
  const linesRef = useRef()
  const { pointer } = useThree()

  // Generate node positions inside a sphere
  const { positions, linePositions, signalPath } = useMemo(() => {
    const pos = []
    for (let i = 0; i < count; i++) {
      // random point in a sphere (rejection-free)
      const r = radius * Math.cbrt(Math.random())
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      pos.push(
        r * Math.sin(phi) * Math.cos(theta),
        r * Math.sin(phi) * Math.sin(theta),
        r * Math.cos(phi)
      )
    }

    // connect nearby nodes
    const lines = []
    const adjacency = []
    for (let i = 0; i < count; i++) {
      for (let j = i + 1; j < count; j++) {
        const dx = pos[i * 3] - pos[j * 3]
        const dy = pos[i * 3 + 1] - pos[j * 3 + 1]
        const dz = pos[i * 3 + 2] - pos[j * 3 + 2]
        const d = Math.sqrt(dx * dx + dy * dy + dz * dz)
        if (d < maxDist) {
          lines.push(pos[i * 3], pos[i * 3 + 1], pos[i * 3 + 2])
          lines.push(pos[j * 3], pos[j * 3 + 1], pos[j * 3 + 2])
          adjacency.push([i, j])
        }
      }
    }
    return {
      positions: new Float32Array(pos),
      linePositions: new Float32Array(lines),
      signalPath: adjacency,
    }
  }, [count, radius, maxDist])

  useFrame((state) => {
    const t = state.clock.elapsedTime
    if (group.current) {
      group.current.rotation.y = t * 0.04
      group.current.rotation.x = Math.sin(t * 0.1) * 0.12
      // subtle parallax toward the pointer
      group.current.rotation.y += pointer.x * 0.25
      group.current.rotation.x += pointer.y * 0.12
    }
    if (pointsRef.current) {
      const s = 1 + Math.sin(t * 2) * 0.06
      pointsRef.current.material.size = 0.12 * s
    }
  })

  return (
    <group ref={group}>
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={linePositions.length / 3}
            array={linePositions}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color="#22d3ee"
          transparent
          opacity={0.18}
          blending={THREE.AdditiveBlending}
        />
      </lineSegments>

      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={positions.length / 3}
            array={positions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.12}
          color="#a5f3fc"
          transparent
          opacity={0.9}
          sizeAttenuation
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>

      <TravellingSignals positions={positions} path={signalPath} />
    </group>
  )
}

/** Small bright dots that travel along the synapse edges like firing signals. */
function TravellingSignals({ positions, path, n = 18 }) {
  const ref = useRef()
  const data = useMemo(() => {
    const arr = []
    for (let i = 0; i < n; i++) {
      arr.push({
        edge: Math.floor(Math.random() * path.length),
        t: Math.random(),
        speed: 0.25 + Math.random() * 0.6,
      })
    }
    return arr
  }, [path, n])

  const buffer = useMemo(() => new Float32Array(n * 3), [n])

  useFrame((_, delta) => {
    if (!path.length) return
    for (let i = 0; i < data.length; i++) {
      const s = data[i]
      s.t += delta * s.speed
      if (s.t > 1) {
        s.t = 0
        s.edge = Math.floor(Math.random() * path.length)
      }
      const [a, b] = path[s.edge]
      buffer[i * 3] = positions[a * 3] + (positions[b * 3] - positions[a * 3]) * s.t
      buffer[i * 3 + 1] =
        positions[a * 3 + 1] + (positions[b * 3 + 1] - positions[a * 3 + 1]) * s.t
      buffer[i * 3 + 2] =
        positions[a * 3 + 2] + (positions[b * 3 + 2] - positions[a * 3 + 2]) * s.t
    }
    if (ref.current) {
      ref.current.geometry.attributes.position.needsUpdate = true
    }
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={n}
          array={buffer}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.28}
        color="#f0abfc"
        transparent
        opacity={0.95}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  )
}

export default NeuralNet
