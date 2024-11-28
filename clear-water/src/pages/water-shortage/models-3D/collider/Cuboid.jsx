import React from "react";
import { CuboidCollider, RigidBody } from "@react-three/rapier";

const Cuboid = (props) => {
  return (
    <RigidBody type="fixed">
      <CuboidCollider {...props} args={[23, 0, 13]}/>
    </RigidBody>
  );
};

export default Cuboid;
