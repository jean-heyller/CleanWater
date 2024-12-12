import { EffectComposer, Noise, Vignette } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import React from "react";

const PostProcessing = () => {
  return (
    <EffectComposer>
      <Noise premultiply blendFunction={BlendFunction.ADD}/>
      <Vignette
        offset={0.7}
        darkness={0.5}
        eskil={false}
        blendFunction={BlendFunction.NORMAL}
      />
    </EffectComposer>
  );
};

export default PostProcessing;
