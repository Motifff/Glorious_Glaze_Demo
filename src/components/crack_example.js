import { useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { PresentationControls,OrbitControls, ContactShadows } from '@react-three/drei'
import { CustomMaterial } from './material/custom_material'

function ShaderPlane() {
  const ref = useRef()
  const { width, height } = useThree((state) => state.viewport)
  useFrame((state, delta) => (ref.current.time += delta))
  return (
    <mesh scale={[width, height, 1]}>
      <planeGeometry />
      <customMaterial ref={ref} key={CustomMaterial.key} toneMapped={true} colorStart={'#505050'} colorEnd={'black'} />
    </mesh>
  )
}

function PbShaderBox() {
  const ref = useRef()
  const { width, height } = useThree((state) => state.viewport)
  useFrame((state, delta) => {
    // Update the time uniform in the material
    ref.current.material.uniforms.time.value += delta
    ref.current.material.uniformsNeedUpdate = true

    // Rotate the box
    //ref.current.rotation.x += 0.01
    //ref.current.rotation.y += 0.02
  })

  return (
    <PresentationControls
      config={{ mass: 2, tension: 500 }}
      snap={{ mass: 4, tension: 1500 }}
      rotation={[0, 0.3, 0]}
      polar={[-Math.PI / 3, Math.PI / 3]}
      azimuth={[-Math.PI / 1.4, Math.PI / 2]}>
      <mesh scale={[2, 2, 2]} ref={ref}>
        <boxGeometry />
        <customMaterial key={CustomMaterial.key} toneMapped={true} colorStart={'#505050'} colorEnd={'black'} />
      </mesh>
    </PresentationControls>
  )
}

function ShaderBox() {
  const ref = useRef()
  const controlsRef = useRef()

  useFrame((state, delta) => {
    // Update the time uniform in the material
    ref.current.material.uniforms.time.value += delta
    ref.current.material.uniformsNeedUpdate = true

    // Get the polar and azimuthal angles of the camera
    const polarAngle = controlsRef.current.getPolarAngle()
    const azimuthalAngle = controlsRef.current.getAzimuthalAngle()

    // Log the angles to the console
    console.log('polar angle:', polarAngle)
    console.log('azimuthal angle:', azimuthalAngle)
  })

  return (
    <>
      <mesh scale={[3.5, 0.1, 3.5]} ref={ref}>
        <boxGeometry />
        <customMaterial key={CustomMaterial.key} toneMapped={true} colorStart={'#505050'} colorEnd={'black'} />
      </mesh>
      <ContactShadows 
        position={[0, -1, 0]} 
        opacity={0.5} 
        scale={12} 
        blur={2.5} 
        far={4} 
      >
      </ContactShadows>
      <OrbitControls enableZoom={true} ref={controlsRef} maxPolarAngle={Math.PI / 12 * 4}/>
    </>
  )
}

const CrackExample = (props) => {
  return (
    <Canvas shadows>
      <ShaderBox></ShaderBox>
    </Canvas>
  );
};

export default CrackExample;
