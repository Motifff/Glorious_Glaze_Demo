import { useRef, useState } from 'react'
import * as THREE from 'three'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { Canvas, useFrame, useThree, useLoader } from '@react-three/fiber'
import { PresentationControls,OrbitControls, ContactShadows, RoundedBox } from '@react-three/drei'
import { CustomMaterial } from './material/custom_material'

function ShaderBox() {
  const ref = useRef()
  const controlsRef = useRef()

  const obj = useLoader(OBJLoader, process.env.PUBLIC_URL+'/surface.obj')

  useFrame((state, delta) => {
    // Get the polar and azimuthal angles of the camera
    const polarAngle = controlsRef.current.getPolarAngle()
    const azimuthalAngle = controlsRef.current.getAzimuthalAngle()
    const viewAngle = new THREE.Vector3(0,polarAngle,azimuthalAngle)
    // Update the time uniform in the material
    ref.current.material.uniforms.time.value += delta
    ref.current.material.uniforms.viewAngle.value = viewAngle
    ref.current.material.uniformsNeedUpdate = true
  })

  return (
    <>
      <mesh scale={[3.0, 0.1, 3.0]}>
        <RoundedBox ref={ref}>
          <customMaterial key={CustomMaterial.key}/>
        </RoundedBox>
      </mesh>
      <ContactShadows 
        position={[0, -1, 0]} 
        opacity={0.5} 
        scale={12} 
        blur={2.5} 
        far={4} 
      >
      </ContactShadows>
      <OrbitControls enableZoom={true} enablePan={false} ref={controlsRef}/>
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
