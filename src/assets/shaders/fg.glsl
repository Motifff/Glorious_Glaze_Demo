#pragma glslify: cnoise3 = require(glsl-noise/classic/3d.glsl) 
uniform float time;
varying vec2 vUv;
void main() {
    float noise = cnoise3(vec3(vUv * 50.0, time * 0.2));
    vec3 color = vec3(1.0, 0.5 + noise * 0.5, 0.0);
    gl_FragColor = vec4(color, 1.0);
}