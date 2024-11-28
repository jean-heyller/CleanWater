import { Center, Float, Text3D } from "@react-three/drei";
import { useMemo, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Color } from "three";
import { useTranslation } from "react-i18next";
import { CuboidCollider, RigidBody } from "@react-three/rapier";

const Title3D = (props) => {
  const { t } = useTranslation("general");

  const text = useMemo(() => `${t("Escasez de agua")}`, [t]);

  const [hue, setHue] = useState(290);
  const [direction, setDirection] = useState(1);
  const saturation = "100%";
  const lightness = "50%";

  useFrame((state, delta) => {
    const hueStep = 50 * delta;

    setHue((prevHue) => {
      let nextHue = prevHue + hueStep * direction;
      if (nextHue >= 360) {
        nextHue = 360;
        setDirection(-1);
      } else if (nextHue <= 300) {
        nextHue = 300;
        setDirection(1);
      }
      return nextHue;
    });
  });

  const color = useMemo(() => {
    return new Color(`hsl(${hue}, ${saturation}, ${lightness})`);
  }, [hue]);
  return (
    <Center {...props} top>
      <Float speed={1} rotationIntensity={0.5} floatIntensity={0.5}>
        <RigidBody type="dinamic" colliders={false}>
          <Text3D
            font={"/fonts/3d/Before-the-Rainbow.json"}
            height={0.2}
            lineHeight={0.5}
            letterSpacing={0.08}
            size={3.9}
            rotation={[0, 3.15, 0]}
          >
            {text}
            <meshPhongMaterial
              color={color}
              emissive={0xf8270a}
              specular={0x930c12}
              shininess={100}
            />
          </Text3D>
          <CuboidCollider args={[19, 3, 4]} position={[-17, 1, 0]}/>
        </RigidBody>
      </Float>
    </Center>
  );
};

export default Title3D;
