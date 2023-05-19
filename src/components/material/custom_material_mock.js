import { extend } from '@react-three/fiber'
import { shaderMaterial } from '@react-three/drei'
import glsl from 'babel-plugin-glsl/macro'

const CustomMaterial = shaderMaterial(
  {
    time: 0,
  },
  glsl`
    
      `,
  glsl`
  
  `
)

extend({ CustomMaterial })

export { CustomMaterial }
