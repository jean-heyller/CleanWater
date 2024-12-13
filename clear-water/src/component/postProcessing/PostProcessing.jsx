import { EffectComposer, Sepia } from "@react-three/postprocessing";

const PostProcessing = () => {
    return (
        <EffectComposer>
            <Sepia></Sepia>
        </EffectComposer>
    );
};

export default PostProcessing;
