import React from "react"
import Particles from "react-tsparticles"
import ParticlesConfig from "./particle-config.js"

export default function particleBackground() {
    return (
        <Particles id="tsparticles" params= {ParticlesConfig}></Particles>
    );
}