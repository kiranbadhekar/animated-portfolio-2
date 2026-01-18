import { shaderMaterial } from "@react-three/drei";
import { extend, Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useRef } from "react";

/* =======================
   AURORA MATERIAL
======================= */

const AuroraMaterial = shaderMaterial(
  {
    time: 0,
    speed: 8.0,
    hueOffset: 0.0,
  },

  `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
  }
  `,

  `
  varying vec2 vUv;
  uniform float time;
  uniform float speed;
  uniform float hueOffset;

  vec3 hsv2rgb(vec3 c) {
    vec4 K = vec4(1.0, 2.0/3.0, 1.0/3.0, 3.0);
    vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
    return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
  }

  void main() {
    float wave =
      sin(vUv.x * 6.0 + time * speed * 1.2) * 0.1 +
      sin(vUv.y * 4.0 + time * speed * 0.8) * 0.1;

    float hue = mix(
      0.42,
      0.8,
      fract(vUv.y * 1.2 + time * speed * 0.15 + wave + hueOffset)
    );

    float alpha = smoothstep(0.1, 0.9, vUv.y);

    vec3 color = hsv2rgb(vec3(hue, 0.7, 0.9));
    color *= alpha;

    gl_FragColor = vec4(color, 1.0);
  }
  `
);

extend({ AuroraMaterial });

/* =======================
   AURORA LAYER
======================= */

function AuroraLayer({ position, rotation, speed, hueOffset }) {
  const ref = useRef();

  useFrame(({ clock }) => {
    ref.current.material.uniforms.time.value =
      clock.getElapsedTime();
  });

  return (
    <mesh ref={ref} position={position} rotation={rotation}>
      <planeGeometry args={[1000, 1000]} />
      <auroraMaterial speed={speed} hueOffset={hueOffset} />
    </mesh>
  );
}

/* =======================
   🔥 HARD AURORA CURTAIN (REFINED)
======================= */

function AuroraCurtain({ x, width, baseOpacity, speed, color, tilt = 0 }) {
  const ref = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    // Vertical motion
    ref.current.position.y = (t * speed) % 50 - 25;

    // Subtle breathing (Apple-style)
    ref.current.material.opacity =
      baseOpacity + Math.sin(t * 0.4) * 0.04;
  });

  return (
    <mesh
      ref={ref}
      position={[x, -25, -28]}
      rotation={[0, 0, tilt]}
    >
      <planeGeometry args={[width, 50]} />
      <meshBasicMaterial
        color={color}
        transparent
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </mesh>
  );
}

/* =======================
   SCENE
======================= */

export default function AuroraSky() {
  return (
    <Canvas
      camera={{ position: [0, 10, 30], fov: 50 }}
      style={{ position: "fixed", inset: 0, zIndex: -1 }}
    >
      <ambientLight intensity={0.55} />

      {/* 🔥 HARD VERTICAL CURTAINS — REFINED */}
      
      {/* Left — secondary */}
      <AuroraCurtain
        x={-10}
        width={0.16}
        baseOpacity={0.22}
        speed={0.6}
        color="#5eead4"
        tilt={0.015}
      />

      {/* Center — HERO curtain */}
      <AuroraCurtain
        x={-1.5}
        width={0.28}
        baseOpacity={0.32}
        speed={0.8}
        color="#8b5cf6"
        tilt={-0.01}
      />

      {/* Right — secondary */}
      <AuroraCurtain
        x={8}
        width={0.18}
        baseOpacity={0.24}
        speed={0.7}
        color="#6366f1"
        tilt={0.02}
      />

      {/* Aurora Layers */}
      <AuroraLayer
        position={[0, -10, -50]}
        rotation={[-Math.PI / 2, 0, 0]}
        speed={0.5}
        hueOffset={0.0}
      />

      <AuroraLayer
        position={[0, 0, -20]}
        rotation={[-Math.PI / 2.5, 0, 0]}
        speed={0.8}
        hueOffset={0.1}
      />

      <AuroraLayer
        position={[0, 5, 0]}
        rotation={[-Math.PI / 3, 0, 0]}
        speed={1.2}
        hueOffset={0.2}
      />
    </Canvas>
  );
}
