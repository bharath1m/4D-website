// src/shaders/glow.js
export const glowShader = {
    uniforms: {
      tDiffuse: { value: null },
      uIntensity: { value: 1.0 },
      uColor: { value: [1.0, 0.0, 1.0] }, // Glow color
      uRadius: { value: 1.0 },
      uTime: { value: 0 }
    },
  
    vertexShader: `
      varying vec2 vUv;
  
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
  
    fragmentShader: `
      uniform sampler2D tDiffuse;
      uniform float uIntensity;
      uniform vec3 uColor;
      uniform float uRadius;
      uniform float uTime;
  
      varying vec2 vUv;
  
      float gaussian(vec2 p, float radius) {
        return exp(-dot(p, p) / (2.0 * radius * radius));
      }
  
      void main() {
        vec4 texel = texture2D(tDiffuse, vUv);
        vec2 center = vec2(0.5);
        vec2 diff = vUv - center;
  
        // Animated glow radius
        float radius = uRadius * (1.0 + sin(uTime * 2.0) * 0.2);
  
        // Calculate glow based on distance from center
        float glow = gaussian(diff, radius);
  
        // Animate glow color
        vec3 glowColor = uColor;
        glowColor += vec3(sin(uTime), cos(uTime), -sin(uTime)) * 0.2;
  
        // Add pulsing intensity
        float pulsingIntensity = uIntensity * (1.0 + sin(uTime * 3.0) * 0.3);
  
        // Combine original color with glow
        vec3 finalColor = mix(texel.rgb, glowColor, glow * pulsingIntensity);
  
        gl_FragColor = vec4(finalColor, 1.0);
      }
    `
  };
  
  // Helper function to create glow effect
  export const createGlowEffect = (renderer, scene, camera) => {
    const composer = new EffectComposer(renderer);
    
    // Add render pass
    const renderPass = new RenderPass(scene, camera);
    composer.addPass(renderPass);
  
    // Add custom glow pass
    const glowPass = new ShaderPass(glowShader);
    glowPass.uniforms.uIntensity.value = 1.0;
    glowPass.uniforms.uRadius.value = 0.5;
    composer.addPass(glowPass);
  
    // Update function
    const update = (time) => {
      glowPass.uniforms.uTime.value = time;
    };
  
    return {
      composer,
      update
    };
  };
  
  // Usage example:
  /*
  import { createGlowEffect } from './shaders/glow';
  
  // In your main scene setup:
  const glow = createGlowEffect(renderer, scene, camera);
  
  // In your animation loop:
  function animate(time) {
    requestAnimationFrame(animate);
    glow.update(time * 0.001);
    glow.composer.render();
  }
  animate();
  */