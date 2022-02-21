import React from "react"
import Particles from "react-tsparticles"
import ParticlesConfig from "./particle-config.js"

export default function particleBackground() {
    return (
        <Particles params= {ParticlesConfig}></Particles>
    );
}