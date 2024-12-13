/* eslint-disable react/no-unknown-property */
import { useVideoTexture } from "@react-three/drei";

const VideoMar = ({ videoRef }) => {
    const texture = useVideoTexture("/video/mar.mp4", {
        muted: true,
        loop: true,
        start: true
    });

    if (texture) {
        videoRef.current = texture.image;
    }

    return (
        <mesh>
            <planeGeometry args={[16, 9]} />
            <meshBasicMaterial map={texture} toneMapped={false} />
        </mesh>
    );
}

export default VideoMar;