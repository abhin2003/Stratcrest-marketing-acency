"use client";

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import * as THREE from 'three';

// -------------------------------------------------------------
// 1. Globe Mesh (Outer Sphere structured Lat/Lon)
// -------------------------------------------------------------
function ParticleGlobe({ radius = 3.5 }) {
  const pointsRef = useRef<THREE.Points>(null);

  const [positions, colors] = useMemo(() => {
    const lats = 90;
    const lons = 140;
    const pos = [];
    const cols = [];
    const colorTop = new THREE.Color('#D8B4FE'); // Light glowing purple
    const colorBottom = new THREE.Color('#4C1D95'); // Deep purple

    for (let lat = 0; lat <= lats; lat++) {
      const theta = (lat * Math.PI) / lats;
      const sinTheta = Math.sin(theta);
      const cosTheta = Math.cos(theta);

      for (let lon = 0; lon <= lons; lon++) {
        const phi = (lon * 2 * Math.PI) / lons;
        const sinPhi = Math.sin(phi);
        const cosPhi = Math.cos(phi);

        const x = radius * sinTheta * cosPhi;
        const y = radius * cosTheta;
        const z = radius * sinTheta * sinPhi;

        pos.push(x, y, z);

        const mixRatio = (y / radius + 1) / 2;
        const c = colorBottom.clone().lerp(colorTop, mixRatio);
        cols.push(c.r, c.g, c.b);
      }
    }

    return [new Float32Array(pos), new Float32Array(cols)];
  }, [radius]);

  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.1;
      pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.05;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.045}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

// -------------------------------------------------------------
// 2. Premium 3D Coin (Replacing Extruded Logo)
// -------------------------------------------------------------
// -------------------------------------------------------------
// 2. Premium 3D Coin (Replacing Extruded Logo)
// -------------------------------------------------------------
// -------------------------------------------------------------
// 2. Premium 3D Coin (Replacing Extruded Logo)
// -------------------------------------------------------------
// -------------------------------------------------------------
// 2. Premium 3D Coin (Replacing Extruded Logo)
// -------------------------------------------------------------
function PremiumCoin() {
  const meshRef = useRef<THREE.Group>(null);

  // Load the image texture
  // We use the standard TextureLoader. Make sure you have a 'logo.png' in your 'public' folder!
  const texture = useMemo(() => new THREE.TextureLoader().load('/logo.png'), []);
  texture.colorSpace = THREE.SRGBColorSpace;

  // Hexagon Coin Base Geometry
  const baseGeom = useMemo(() => {
    const shape = new THREE.Shape();
    const radius = 10;
    for (let i = 0; i < 6; i++) {
      const angle = (i * Math.PI) / 3 + Math.PI / 6;
      if (i === 0) shape.moveTo(radius * Math.cos(angle), radius * Math.sin(angle));
      else shape.lineTo(radius * Math.cos(angle), radius * Math.sin(angle));
    }
    shape.closePath();

    const extrudeSettings = {
      depth: 2, // Thick metal depth
      bevelEnabled: true,
      bevelSegments: 4,
      bevelSteps: 2,
      bevelSize: 0.3,
      bevelThickness: 0.3
    };

    const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    geometry.center();
    return geometry;
  }, []);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y -= delta * 0.25; 
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 1.5) * 0.08;
    }
  });

  return (
    <group key="premium-coin-v4" ref={meshRef} scale={0.18}>
      
      {/* 1. Coin Base (Gunmetal) */}
      <mesh geometry={baseGeom}>
        <meshPhysicalMaterial 
          color="#1E293B" // Gunmetal slate
          metalness={0.95}
          roughness={0.3}
          clearcoat={0.5}
          clearcoatRoughness={0.2}
        />
      </mesh>

      {/* 2. Front Image Texture (This is where your logo.png goes!) */}
      <mesh position={[0, 0, 1.35]}>
        <planeGeometry args={[12, 12]} />
        <meshBasicMaterial map={texture} color="#FFFFFF" transparent={true} depthTest={true} />
      </mesh>

      {/* 3. Back Image Texture (Mirrored) */}
      <mesh position={[0, 0, -1.35]} rotation={[0, Math.PI, 0]}>
        <planeGeometry args={[12, 12]} />
        <meshBasicMaterial map={texture} color="#FFFFFF" transparent={true} depthTest={true} />
      </mesh>
      
    </group>
  );
}

// -------------------------------------------------------------
// 3. Base Concentric Ring Stand
// -------------------------------------------------------------
function BaseRings({ radius = 3.2 }) {
  const ringRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (ringRef.current) {
      ringRef.current.rotation.z += delta * 0.05;
    }
  });

  return (
    <group ref={ringRef} position={[0, -radius * 0.95, 0]} rotation={[Math.PI / 2, 0, 0]}>
      {[0.4, 0.8, 1.2, 1.6].map((r, i) => (
        <mesh key={i}>
          <ringGeometry args={[r, r + 0.015, 64]} />
          <meshBasicMaterial color="#7C3AED" transparent opacity={0.3 - i * 0.05} side={THREE.DoubleSide} />
        </mesh>
      ))}
    </group>
  );
}

// -------------------------------------------------------------
// 4. Scene Controller (Mouse Parallax Interaction)
// -------------------------------------------------------------
function SceneGroup() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    const targetX = (state.pointer.x * Math.PI) / 8;
    const targetY = (state.pointer.y * Math.PI) / 8;

    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetX, 0.05);
    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -targetY, 0.05);
  });

  return (
    <group ref={groupRef}>
      <ParticleGlobe />
      <PremiumCoin />
      <BaseRings />
    </group>
  );
}

// -------------------------------------------------------------
// 5. Main Canvas Wrapper Component
// -------------------------------------------------------------
export default function HeroCanvas() {
  return (
    <div id="hero-3d-canvas" style={{ width: '100%', height: '100%', minHeight: '500px', position: 'relative', backgroundColor: 'transparent', overflow: 'visible' }}>
      <Canvas
        dpr={[1, 1.5]} // Clamp pixel ratio for massive performance gain on retina displays
        camera={{ position: [0, 0, 9.5], fov: 45 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <ambientLight intensity={1.5} />
        {/* Rim Lights */}
        <pointLight position={[10, 10, -5]} intensity={5} color="#D8B4FE" />
        <pointLight position={[-10, -10, -5]} intensity={3} color="#5B21B6" />
        
        {/* Photorealistic Environment Reflections */}
        <React.Suspense fallback={null}>
          <Environment preset="studio" resolution={256} />
        </React.Suspense>
        
        <SceneGroup />
      </Canvas>
    </div>
  );
}
