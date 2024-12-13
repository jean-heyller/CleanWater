import { EffectComposer, Sepia } from "@react-three/postprocessing";

const PostProcessing = ({ children }) => {
    return (
        <EffectComposer>
            <Sepia />
            {children}
        </EffectComposer>
    );
};

export default PostProcessing;