import { extend } from '@react-three/fiber'
import { shaderMaterial } from '@react-three/drei'
import glsl from 'babel-plugin-glsl/macro'
import vert from './vert'
import frag from './frag'

const CustomMaterial = shaderMaterial(
  {
    time: 0,
    viewAngle: null,
    fogRange: null,
    FOG_COLOR:null,
    SNOW_COLOR:null,
    DEEP_COLOR:null,
    CRACKS_SCALE:null,
    CRACKS_THICKNESS:null,
    CRACKS_COLOR:null,
    transparency:null,
    enableSnow:null,
  },
  glsl`
  ${vert}
      `,
  glsl`
  ${frag}
  `
)

extend({ CustomMaterial })

export { CustomMaterial }
