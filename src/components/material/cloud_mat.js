import * as THREE from 'three'
import { extend } from '@react-three/fiber'
import { shaderMaterial } from '@react-three/drei'
import glsl from 'babel-plugin-glsl/macro'

const CustomMaterial = shaderMaterial(
  {
    time: 0,
  },
  glsl`
    uniform float time;
    varying vec3 vPosition;
    varying float vHeight;
    void main() {
      vPosition = position;
      vec3 newPosition = position;
      newPosition.z += sin(position.x * 10.0 + time) * 0.2;
      newPosition.z += sin(position.y * 10.0 + time * 0.8) * 0.3;
      vHeight = (length(newPosition) - 1.0) * 4.0;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
    }
  `,
  glsl`
  uniform float time;
  varying vec3 vPosition;
  varying float vHeight;
  #define CLOUDS
  #define anoise (abs(noise(p) * 2. - 1.))
  DECL_FBM_FUNC(fbm_clouds, 4, anoise)
  
  #define vol_coeff_absorb 30.034
  _mutable(volume_sampler_t) cloud;
  
  float illuminate_volume(
    _inout(volume_sampler_t) cloud,
    _in(vec3) V,
    _in(vec3) L
  ) {
    return exp(cloud.height) / .055;
  }
  
  void clouds_map(
    _inout(volume_sampler_t) cloud,
    _in(float) t_step
  ) {
    float dens = fbm_clouds(
      cloud.pos * 3.2343 + vec3(.35, 13.35, 2.67),
      2.0276, .5, .5);
  
    #define cld_coverage .29475675 // higher=less clouds
    #define cld_fuzzy .0335 // higher=fuzzy, lower=blockier
    dens *= smoothstep(cld_coverage, cld_coverage + cld_fuzzy, dens);
  
    dens *= band(.2, .35, .65, cloud.height);
  
    integrate_volume(cloud,
      cloud.pos, cloud.pos, // unused dummies 
      dens, t_step);
  }
  
  void clouds_march(
    _in(ray_t) eye,
    _inout(volume_sampler_t) cloud,
    _in(float) max_travel,
    _in(mat3) rot
  ) {
    const int steps = 75;
    const float t_step = max_ray_dist / float(steps);
    float t = 0.;
  
    for (int i = 0; i < steps; i++) {
      if (t > max_travel || cloud.alpha >= 1.) return;
  
      vec3 o = cloud.origin + t * eye.direction;
      cloud.pos = mul(rot, o - planet.origin);
  
      cloud.height = (length(cloud.pos) - planet.radius) / max_height;
      t += t_step;
      clouds_map(cloud, t_step);
    }
  }
  
  void clouds_shadow_march(
    _in(vec3) dir,
    _inout(volume_sampler_t) cloud,
    _in(mat3) rot
  ) {
    const int steps = 5;
    const float t_step = max_height / float(steps);
    float t = 0.;
  
    for (int i = 0; i < steps; i++) {
      vec3 o = cloud.origin + t * dir;
      cloud.pos = mul(rot, o - planet.origin);
  
      cloud.height = (length(cloud.pos) - planet.radius) / max_height;
      t += t_step;
      clouds_map(cloud, t_step);
    }
  }
  `
)

extend({ CustomMaterial1 })

export { CustomMaterial1 }
