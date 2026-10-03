"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function Core() {
  const group = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (!group.current) {
      return;
    }

    group.current.rotation.y += delta * 0.16;
    group.current.rotation.x =
      Math.sin(state.clock.elapsedTime * 0.4) * 0.06;
  });

  return (
    <group ref={group}>
      <mesh>
        <icosahedronGeometry args={[0.78, 1]} />
        <meshStandardMaterial
          color="#146ef5"
          emissive="#00c8ff"
          emissiveIntensity={0.9}
          metalness={0.6}
          roughness={0.3}
        />
      </mesh>

      <mesh scale={1.16}>
        <icosahedronGeometry args={[0.78, 1]} />
        <meshBasicMaterial
          color="#00c8ff"
          transparent
          opacity={0.08}
          wireframe
        />
      </mesh>
    </group>
  );
}

function Orbit({
  radius,
  rotation,
  speed,
}: {
  radius: number;
  rotation: [number, number, number];
  speed: number;
}) {
  const ref = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.z += delta * speed;
    }
  });

  return (
    <group ref={ref} rotation={rotation}>
      <mesh>
        <torusGeometry args={[radius, 0.01, 6, 96]} />
        <meshBasicMaterial
          color="#00c8ff"
          transparent
          opacity={0.28}
        />
      </mesh>

      <mesh position={[radius, 0, 0]}>
        <sphereGeometry args={[0.045, 10, 10]} />
        <meshBasicMaterial color="#00c8ff" />
      </mesh>
    </group>
  );
}

function Particles() {
  const points = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const count = 72;
    const data = new Float32Array(count * 3);

    for (let i = 0; i < count; i += 1) {
      const t = i / count;
      const angle = t * Math.PI * 2 * 5.5;
      const radius = 2.8 + (i % 9) * 0.16;

      data[i * 3] = Math.cos(angle) * radius;
      data[i * 3 + 1] = Math.sin(angle * 0.72) * radius * 0.62;
      data[i * 3 + 2] = Math.sin(angle) * radius;
    }

    return data;
  }, []);

  useFrame((_, delta) => {
    if (points.current) {
      points.current.rotation.y += delta * 0.008;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>

      <pointsMaterial
        color="#00c8ff"
        size={0.024}
        transparent
        opacity={0.42}
        sizeAttenuation
      />
    </points>
  );
}

function Scene() {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!group.current) {
      return;
    }

    const targetX = state.pointer.y * 0.1;
    const targetY = state.pointer.x * 0.16;

    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      targetX,
      0.025
    );

    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      targetY,
      0.025
    );
  });

  return (
    <group ref={group}>
      <ambientLight intensity={0.35} />
      <pointLight position={[3, 2, 4]} color="#00c8ff" intensity={4} />

      <Core />

      <Orbit
        radius={1.45}
        rotation={[0.6, 0.25, 0.3]}
        speed={0.22}
      />

      <Orbit
        radius={2.05}
        rotation={[1.05, 0.6, -0.25]}
        speed={-0.14}
      />

      <Particles />
    </group>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6.4], fov: 42 }}
      dpr={[1, 1.15]}
      gl={{
        antialias: false,
        alpha: true,
        powerPreference: "high-performance",
      }}
      frameloop="always"
    >
      <Scene />
    </Canvas>
  );
}