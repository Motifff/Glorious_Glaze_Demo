import { useRef, useState } from 'react'
import * as THREE from 'three'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { Canvas, useFrame, useThree, useLoader } from '@react-three/fiber'
import { PresentationControls,OrbitControls, ContactShadows, RoundedBox } from '@react-three/drei'
import { CustomMaterial } from './material/custom_material'

function ShaderBox(props) {
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
    ref.current.material.uniforms.snowRange.value = props.materialData.snowRange;
    ref.current.material.uniforms.FOG_COLOR.value = props.materialData.fogColor;
    ref.current.material.uniforms.SNOW_COLOR.value = props.materialData.snowColor;
    ref.current.material.uniforms.baseColorL.value = props.materialData.baseColorL;
    ref.current.material.uniforms.baseColorH.value = props.materialData.baseColorH;
    ref.current.material.uniforms.CRACKS_SCALE.value = props.materialData.crackScale;
    ref.current.material.uniforms.CRACKS_THICKNESS.value = props.materialData.crackThickness;
    ref.current.material.uniforms.CRACKS_COLOR.value = props.materialData.crackColor;
    ref.current.material.uniforms.transparency.value = props.materialData.transparency;
    ref.current.material.uniforms.enableSnow.value = props.materialData.enableSnow;
    ref.current.material.uniforms.noiseScale.value = props.materialData.noiseScale;

    ref.current.material.uniformsNeedUpdate = true
  })

  return (
    <>
      <mesh scale={[3.0,0.2,3.0]} >
        <RoundedBox args={[1.0,1.0,1.0]} radius={0.05} ref={ref}>
          <customMaterial key={CustomMaterial.key}/>
        </RoundedBox>
        <RoundedBox args={[1.02,0.4,1.02]} radius={0.05}>
          <meshBasicMaterial attach="material" color={'#3F2A17'} />
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
      <OrbitControls enableZoom={true} enablePan={false} maxPolarAngle={Math.PI / 12 * 4} ref={controlsRef}/>
    </>
  )
}

function CrackExample(props){
  return (
    <Canvas shadows>
      <ShaderBox
        materialData={props.materialData}
      >
      </ShaderBox>
    </Canvas>
  );
};

export default CrackExample;
