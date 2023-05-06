import { useFrame } from 'react-three-fiber'
import { useHDRI } from '@react-three/drei'

function HDRI() {
  const [texture] = useHDRI('/path/to/hdri.hdr')
  const material = useRef()
  useFrame(({ clock }) => {
    material.current.envMapIntensity = Math.sin(clock.getElapsedTime()) * 0.5 + 0.5
    material.current.needsUpdate = true
  })
  return (
    <mesh>
      <sphereBufferGeometry args={[1, 32, 32]} />
      <meshStandardMaterial ref={material} envMap={texture} />
    </mesh>
  )
}
