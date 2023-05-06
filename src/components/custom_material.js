import * as THREE from 'three'
import { extend } from '@react-three/fiber'
import { shaderMaterial } from '@react-three/drei'
import glsl from 'babel-plugin-glsl/macro'
import vShader from '../assets/shaders/vs.glsl'
import fShader from '../assets/shaders/fg.glsl'

const CustomMaterial = shaderMaterial(
  {
    time: 0,
  },
  glsl`
      varying vec2 vUv;
      void main() {
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        vUv = uv;
      }`,
  glsl`
      #pragma glslify: cnoise3 = require(glsl-noise/classic/3d.glsl) 
      uniform float time;
      uniform bumpScale

      varying vec2 vUv;
      void main() {
        float noise = cnoise3(vec3(vUv * 50.0, time * 0.2));
        vec3 color = vec3(1.0, 0.5 + noise * 0.5, 0.0);
        
        gl_FragColor = vec4(color, 1.0);
      }`
)

extend({ CustomMaterial })

export { CustomMaterial }
