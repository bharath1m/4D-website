// src/components/Effects/PostProcessing.jsx
import React from 'react';
import {
  EffectComposer,
  Bloom,
  ChromaticAberration,
  Vignette,
  Noise,
  ColorAverage,
  HueSaturation
} from '@react-three/postprocessing';
import { BlendFunction } from 'postprocessing';

const PostProcessing = () => {
  return (
    <EffectComposer>
      <Bloom
        intensity={1.5}
        luminanceThreshold={0.2}
        luminanceSmoothing={0.9}
        height={300}
      />
      <ChromaticAberration
        offset={[0.002, 0.002]}
        blendFunction={BlendFunction.NORMAL}
      />
      <Vignette
        darkness={0.7}
        offset={0.3}
      />
      <Noise opacity={0.05} />
      <ColorAverage
        blendFunction={BlendFunction.OVERLAY}
      />
      <HueSaturation
        hue={0}
        saturation={0.1}
      />
    </EffectComposer>
  );
};

export default PostProcessing;