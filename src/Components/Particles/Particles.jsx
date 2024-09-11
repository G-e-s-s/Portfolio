import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFireflyPreset } from "tsparticles-preset-firefly";

const Firefly = (args) => {
  const particlesInit = useCallback(async (engine) => {
    await loadFireflyPreset(engine);
  }, []);

  const particlesConfig = {
    preset: "firefly",
  };
  return (
      <Particles options={particlesConfig} init={particlesInit}></Particles>
  );
};
export default Firefly;