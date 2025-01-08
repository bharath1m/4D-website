// src/shaders/background.js
export const backgroundShader = {
    uniforms: {
      uTime: { value: 0 },
      uResolution: { value: [0, 0] },
      uMouse: { value: [0, 0] },
      uColor1: { value: [1.0, 0.0, 1.0] }, // #ff00ff
      uColor2: { value: [0.0, 1.0, 1.0] }  // #00ffff
    },
  
    vertexShader: `
      varying vec2 vUv;
      varying vec3 vPosition;
  
      void main() {
        vUv = uv;
        vPosition = position;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
  
    fragmentShader: `
      uniform float uTime;
      uniform vec2 uResolution;
      uniform vec2 uMouse;
      uniform vec3 uColor1;
      uniform vec3 uColor2;
      
      varying vec2 vUv;
      varying vec3 vPosition;
  
      #define PI 3.14159265359
  
      // Noise function
      float noise(vec2 p) {
        return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453123);
      }
  
      // Smooth noise
      float smoothNoise(vec2 p) {
        vec2 ip = floor(p);
        vec2 fp = fract(p);
        
        float a = noise(ip);
        float b = noise(ip + vec2(1.0, 0.0));
        float c = noise(ip + vec2(0.0, 1.0));
        float d = noise(ip + vec2(1.0, 1.0));
  
        fp = fp * fp * (3.0 - 2.0 * fp);
  
        return mix(
          mix(a, b, fp.x),
          mix(c, d, fp.x),
          fp.y
        );
      }
  
      // Fractal noise
      float fractalNoise(vec2 p) {
        float f = 0.0;
        p = p * 3.0;
        f += 0.5000 * smoothNoise(p); p = p * 2.0;
        f += 0.2500 * smoothNoise(p); p = p * 2.0;
        f += 0.1250 * smoothNoise(p); p = p * 2.0;
        f += 0.0625 * smoothNoise(p);
        return f;
      }
  
      void main() {
        // Create gradient based on position
        vec2 uv = vUv;
        vec2 center = vec2(0.5);
        float dist = length(uv - center);
  
        // Add movement
        float movement = sin(uTime * 0.2) * 0.1;
        dist += movement;
  
        // Create base gradient
        vec3 color = mix(uColor1, uColor2, dist);
  
        // Add noise
        float noise = fractalNoise(uv * 3.0 + uTime * 0.1);
        color += noise * 0.15;
  
        // Add mouse interaction
        float mouseDist = length(uv - uMouse);
        float mouseGlow = exp(-mouseDist * 4.0);
        color += vec3(mouseGlow * 0.3);
  
        // Add pulsing glow
        float pulse = sin(uTime) * 0.5 + 0.5;
        color += pulse * 0.1;
  
        gl_FragColor = vec4(color, 1.0);
      }
    `
  };