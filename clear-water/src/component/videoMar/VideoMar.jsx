/* eslint-disable react/no-unknown-property */
import { useVideoTexture } from "@react-three/drei";

const VideoMar = () => {
    const texture = useVideoTexture("/video/mar.mp4", {
        muted: true,
        loop: true,
        start: true
    });
    
    return (
        <mesh>
            <planeGeometry args={[100, 100]} />
            <meshBasicMaterial map={texture} />
        </mesh>
    );
}

export default VideoMar;