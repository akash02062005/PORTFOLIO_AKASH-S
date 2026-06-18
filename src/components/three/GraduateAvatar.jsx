import { useRef, useMemo, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { RoundedBox } from '@react-three/drei'
import * as THREE from 'three'

/**
 * A graduation-day avatar of an Indian man — black mortarboard cap + gown,
 * a coloured stole, realistic-ish face — holding a certificate that reads
 * "AKASH S / B.E CSE / PSNA CET". Move the mouse to rotate him.
 */
const SKIN = '#a9743f'
const SKIN_DARK = '#90602f'
const HAIR = '#0e0e14'
const GOWN = '#14141b'
const GOWN_HI = '#23232f'
const STOLE = '#1e3a8a'
const GOLD = '#d4af37'

export default function GraduateAvatar({ scale = 1 }) {
  const root = useRef()
  const mouse = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const onMove = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1
      mouse.current.y = (e.clientY / window.innerHeight) * 2 - 1
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  // certificate face drawn on a canvas
  const certTex = useMemo(() => {
    const c = document.createElement('canvas')
    c.width = 640
    c.height = 448
    const x = c.getContext('2d')
    x.fillStyle = '#f6eed2'
    x.fillRect(0, 0, 640, 448)
    x.strokeStyle = '#b08d2e'
    x.lineWidth = 10
    x.strokeRect(22, 22, 596, 404)
    x.strokeStyle = '#1e3a8a'
    x.lineWidth = 3
    x.strokeRect(40, 40, 560, 368)
    x.textAlign = 'center'
    x.fillStyle = '#1e3a8a'
    x.font = 'bold 40px Georgia, serif'
    x.fillText('CERTIFICATE', 320, 108)
    x.fillStyle = '#7a6320'
    x.font = 'italic 24px Georgia, serif'
    x.fillText('of Achievement', 320, 144)
    x.fillStyle = '#16213e'
    x.font = 'bold 74px Georgia, serif'
    x.fillText('AKASH S', 320, 252)
    x.fillStyle = '#243b6b'
    x.font = '600 38px Georgia, serif'
    x.fillText('B.E CSE', 320, 312)
    x.fillStyle = '#b08d2e'
    x.font = '600 34px Georgia, serif'
    x.fillText('PSNA CET', 320, 362)
    x.beginPath()
    x.arc(545, 365, 32, 0, 7)
    x.fillStyle = '#c0392b'
    x.fill()
    x.fillStyle = '#ffffff'
    x.font = 'bold 30px Arial'
    x.fillText('★', 545, 376)
    const t = new THREE.CanvasTexture(c)
    t.colorSpace = THREE.SRGBColorSpace
    t.anisotropy = 8
    return t
  }, [])

  useFrame((state) => {
    const t = state.clock.elapsedTime
    if (root.current) {
      const targetY = mouse.current.x * Math.PI * 1.0
      const targetX = mouse.current.y * 0.22
      root.current.rotation.y = THREE.MathUtils.lerp(root.current.rotation.y, targetY, 0.08)
      root.current.rotation.x = THREE.MathUtils.lerp(root.current.rotation.x, targetX, 0.08)
      root.current.position.y = Math.sin(t * 1.1) * 0.04
    }
  })

  return (
    <group ref={root} scale={scale}>
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
        <mesh position={[0, -0.52, 0.16]} scale={[0.62, 0.5, 0.6]}>
          <sphereGeometry args={[0.6, 32, 32]} />
          <meshStandardMaterial color={SKIN_DARK} roughness={0.6} />
        </mesh>
        {/* hair (sides/back, mostly under cap) */}
        <mesh position={[0, 0.18, -0.06]} scale={[1.03, 0.7, 1.06]}>
          <sphereGeometry args={[0.82, 40, 40, 0, Math.PI * 2, 0, Math.PI * 0.5]} />
          <meshStandardMaterial color={HAIR} roughness={0.7} />
        </mesh>

        {/* eyebrows */}
        <mesh position={[-0.28, 0.2, 0.72]} rotation={[0, 0, -0.1]}>
          <boxGeometry args={[0.25, 0.05, 0.06]} />
          <meshStandardMaterial color={HAIR} />
        </mesh>
        <mesh position={[0.28, 0.2, 0.72]} rotation={[0, 0, 0.1]}>
          <boxGeometry args={[0.25, 0.05, 0.06]} />
          <meshStandardMaterial color={HAIR} />
        </mesh>
        {/* eyes */}
        <mesh position={[-0.28, 0.03, 0.71]} scale={[1, 1.1, 0.5]}>
          <sphereGeometry args={[0.15, 22, 22]} />
          <meshStandardMaterial color="#f5f5f8" roughness={0.3} />
        </mesh>
        <mesh position={[0.28, 0.03, 0.71]} scale={[1, 1.1, 0.5]}>
          <sphereGeometry args={[0.15, 22, 22]} />
          <meshStandardMaterial color="#f5f5f8" roughness={0.3} />
        </mesh>
        <mesh position={[-0.28, 0.02, 0.83]}>
          <sphereGeometry args={[0.07, 16, 16]} />
          <meshStandardMaterial color="#241608" />
        </mesh>
        <mesh position={[0.28, 0.02, 0.83]}>
          <sphereGeometry args={[0.07, 16, 16]} />
          <meshStandardMaterial color="#241608" />
        </mesh>
        {/* nose */}
        <mesh position={[0, -0.1, 0.84]} scale={[0.7, 1.1, 1]}>
          <sphereGeometry args={[0.09, 16, 16]} />
          <meshStandardMaterial color={SKIN_DARK} roughness={0.55} />
        </mesh>
        {/* smile */}
        <mesh position={[0, -0.4, 0.72]} rotation={[0, 0, Math.PI]}>
          <torusGeometry args={[0.14, 0.02, 12, 24, Math.PI]} />
          <meshStandardMaterial color="#7d4a44" />
        </mesh>

        {/* ===== Mortarboard cap ===== */}
        {/* skull cap */}
        <mesh position={[0, 0.42, 0]} scale={[1.02, 0.55, 1.04]}>
          <sphereGeometry args={[0.78, 32, 32, 0, Math.PI * 2, 0, Math.PI * 0.5]} />
          <meshStandardMaterial color="#101015" roughness={0.6} />
        </mesh>
        {/* flat board */}
        <mesh position={[0, 0.72, 0]} rotation={[0, 0.25, 0]}>
          <boxGeometry args={[1.55, 0.05, 1.55]} />
          <meshStandardMaterial color="#0c0c11" roughness={0.55} />
        </mesh>
        {/* center button */}
        <mesh position={[0, 0.77, 0]}>
          <cylinderGeometry args={[0.06, 0.06, 0.04, 16]} />
          <meshStandardMaterial color={GOLD} metalness={0.6} roughness={0.3} />
        </mesh>
        {/* tassel cord + strands hanging to the right */}
        <mesh position={[0.3, 0.74, 0.34]} rotation={[0.5, 0, -0.6]}>
          <cylinderGeometry args={[0.012, 0.012, 0.66, 8]} />
          <meshStandardMaterial color={GOLD} metalness={0.5} roughness={0.4} />
        </mesh>
        <mesh position={[0.6, 0.5, 0.62]}>
          <coneGeometry args={[0.07, 0.28, 10]} />
          <meshStandardMaterial color={GOLD} metalness={0.5} roughness={0.4} />
        </mesh>
      </group>

      {/* neck */}
      <mesh position={[0, 0.5, 0]}>
        <cylinderGeometry args={[0.2, 0.25, 0.34, 24]} />
        <meshStandardMaterial color={SKIN_DARK} roughness={0.6} />
      </mesh>

      {/* ===== Gown ===== */}
      <mesh position={[0, -0.5, 0]} scale={[1, 1, 0.9]}>
        <cylinderGeometry args={[0.62, 1.05, 1.55, 40]} />
        <meshStandardMaterial color={GOWN} roughness={0.85} />
      </mesh>
      {/* shoulders */}
      <mesh position={[-0.68, 0.05, 0]}>
        <sphereGeometry args={[0.34, 24, 24]} />
        <meshStandardMaterial color={GOWN_HI} roughness={0.85} />
      </mesh>
      <mesh position={[0.68, 0.05, 0]}>
        <sphereGeometry args={[0.34, 24, 24]} />
        <meshStandardMaterial color={GOWN_HI} roughness={0.85} />
      </mesh>
      {/* white shirt + tie at the neckline */}
      <mesh position={[0, 0.16, 0.5]} rotation={[0.2, 0, 0]} scale={[0.4, 0.5, 0.3]}>
        <sphereGeometry args={[0.34, 20, 20]} />
        <meshStandardMaterial color="#eef1f6" roughness={0.7} />
      </mesh>
      <mesh position={[0, -0.05, 0.6]} rotation={[0.15, 0, 0]}>
        <boxGeometry args={[0.1, 0.45, 0.05]} />
        <meshStandardMaterial color="#7a1f2b" roughness={0.6} />
      </mesh>
      {/* coloured stole down both front sides */}
      {[-0.2, 0.2].map((sx, i) => (
        <mesh key={i} position={[sx, -0.25, 0.56]} rotation={[0.12, 0, sx * 0.3]}>
          <boxGeometry args={[0.16, 1.05, 0.05]} />
          <meshStandardMaterial color={STOLE} roughness={0.7} />
        </mesh>
      ))}
      {[-0.2, 0.2].map((sx, i) => (
        <mesh key={`g${i}`} position={[sx, -0.78, 0.585]}>
          <boxGeometry args={[0.16, 0.08, 0.05]} />
          <meshStandardMaterial color={GOLD} metalness={0.5} roughness={0.4} />
        </mesh>
      ))}

      {/* ===== Arms (gown sleeves) holding the certificate ===== */}
      {[-1, 1].map((s) => (
        <group key={s}>
          <mesh position={[s * 0.62, -0.45, 0.3]} rotation={[1.0, 0, s * 0.3]}>
            <cylinderGeometry args={[0.18, 0.16, 0.85, 18]} />
            <meshStandardMaterial color={GOWN} roughness={0.85} />
          </mesh>
          <mesh position={[s * 0.45, -0.7, 0.72]} rotation={[1.4, 0, s * 0.2]}>
            <cylinderGeometry args={[0.15, 0.13, 0.6, 18]} />
            <meshStandardMaterial color={GOWN_HI} roughness={0.85} />
          </mesh>
          {/* hand */}
          <mesh position={[s * 0.55, -0.62, 1.02]}>
            <sphereGeometry args={[0.13, 18, 18]} />
            <meshStandardMaterial color={SKIN} roughness={0.6} />
          </mesh>
        </group>
      ))}

      {/* ===== Certificate held in hands (faces the viewer) ===== */}
      <group position={[0, -0.55, 1.0]} rotation={[-0.32, 0, 0]}>
        {/* parchment with text */}
        <mesh>
          <planeGeometry args={[1.5, 1.05]} />
          <meshBasicMaterial map={certTex} toneMapped={false} side={THREE.DoubleSide} />
        </mesh>
        {/* thin backing/frame */}
        <RoundedBox args={[1.58, 1.13, 0.04]} radius={0.02} smoothness={3} position={[0, 0, -0.03]}>
          <meshStandardMaterial color="#e8dcb5" roughness={0.7} />
        </RoundedBox>
      </group>

      {/* base glow ring */}
      <mesh position={[0, -1.25, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.95, 0.018, 16, 90]} />
        <meshBasicMaterial color="#22d3ee" transparent opacity={0.5} />
      </mesh>
    </group>
  )
}
