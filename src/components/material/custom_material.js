import { extend } from '@react-three/fiber'
import { shaderMaterial } from '@react-three/drei'
import glsl from 'babel-plugin-glsl/macro'

const CustomMaterial = shaderMaterial(
  {
    time: 0,
  },
  glsl`
  varying vec2 vUv;
  void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    vUv = uv;
  }  
      `,
  glsl`
  #pragma glslify: cnoise3 = require(glsl-noise/classic/3d.glsl)
  uniform float time;
  varying vec2 vUv;

  vec2 hash2( vec2 p )
  {
    //white noise
    return fract(sin(vec2(dot(p,vec2(127.1,311.7)),dot(p,vec2(269.5,183.3))))*43758.5453);
  }

  vec3 hash3( vec2 p )
  {
    vec3 q = vec3( dot(p,vec2(127.1,311.7)), 
    dot(p,vec2(269.5,183.3)), 
    dot(p,vec2(419.2,371.9)) );
    return fract(sin(q)*43758.5453);
  }
  
  vec3 voronoi( in vec2 x )
  {
    vec2 n = floor(x);
    vec2 f = fract(x);

    //----------------------------------
    // first pass: regular voronoi
    //----------------------------------
	  vec2 mg, mr;

    float md = 8.0;
    for( int j=-1; j<=1; j++ )
    for( int i=-1; i<=1; i++ )
    {
        vec2 g = vec2(float(i),float(j));
		vec2 o = hash2( n + g );
		#ifdef ANIMATE
        o = 0.5 + 0.5*sin( iTime + 6.2831*o );
        #endif	
        vec2 r = g + o - f;
        float d = dot(r,r);

        if( d<md )
        {
            md = d;
            mr = r;
            mg = g;
        }
    }

    //----------------------------------
    // second pass: distance to borders
    //----------------------------------
    md = 8.0;
    for( int j=-2; j<=2; j++ )
    for( int i=-2; i<=2; i++ )
    {
        vec2 g = mg + vec2(float(i),float(j));
		vec2 o = hash2( n + g );
		#ifdef ANIMATE
        o = 0.5 + 0.5*sin( iTime + 6.2831*o );
        #endif	
        vec2 r = g + o - f;

        if( dot(mr-r,mr-r)>0.00001 )
        md = min( md, dot( 0.5*(mr+r), normalize(r-mr) ) );
    }

    return vec3( md, mr );
  }

  void main(){
    float noise = cnoise3(vec3(vUv * 50.0, time * 0.2));
    
    vec3 c = voronoi( 8.0* vUv );

    vec3 col = c.x*vec3(1.0);

    col = mix(vec3(1.0,1.0,1.0), vec3(0.0), smoothstep( 0.01, 0.02, c.x ));

    gl_FragColor = vec4(col, 1.0);
  }
  `
)

extend({ CustomMaterial })

export { CustomMaterial }
