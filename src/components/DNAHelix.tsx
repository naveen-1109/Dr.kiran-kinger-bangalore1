import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment } from "@react-three/drei";
import * as THREE from "three";

function HelixStrand() {
  const groupRef = useRef<THREE.Group>(null);
  const numPoints = 40;
  const radius = 1.2;
  const height = 8;

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.3;
    }
  });

  const { spheres1, spheres2, connections } = useMemo(() => {
    const s1: THREE.Vector3[] = [];
    const s2: THREE.Vector3[] = [];
    const conn: [THREE.Vector3, THREE.Vector3][] = [];

    for (let i = 0; i < numPoints; i++) {
      const t = i / numPoints;
      const angle = t * Math.PI * 4;
      const y = (t - 0.5) * height;

      const p1 = new THREE.Vector3(Math.cos(angle) * radius, y, Math.sin(angle) * radius);
      const p2 = new THREE.Vector3(Math.cos(angle + Math.PI) * radius, y, Math.sin(angle + Math.PI) * radius);

      s1.push(p1);
      s2.push(p2);
      if (i % 3 === 0) conn.push([p1, p2]);
    }
    return { spheres1: s1, spheres2: s2, connections: conn };
  }, []);

  return (
    <group ref={groupRef}>
      {spheres1.map((pos, i) => (
        <mesh key={`a${i}`} position={pos}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial color="#0ea5e9" emissive="#0ea5e9" emissiveIntensity={0.3} />
        </mesh>
      ))}
      {spheres2.map((pos, i) => (
        <mesh key={`b${i}`} position={pos}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial color="#2dd4bf" emissive="#2dd4bf" emissiveIntensity={0.3} />
        </mesh>
      ))}
      {connections.map(([start, end], i) => {
        const mid = new THREE.Vector3().lerpVectors(start, end, 0.5);
        const dir = new THREE.Vector3().subVectors(end, start);
        const len = dir.length();
        const quat = new THREE.Quaternion().setFromUnitVectors(
          new THREE.Vector3(0, 1, 0),
          dir.normalize()
        );
        return (
          <mesh key={`c${i}`} position={mid} quaternion={quat}>
            <cylinderGeometry args={[0.02, 0.02, len, 8]} />
            <meshStandardMaterial color="#94a3b8" transparent opacity={0.4} />
          </mesh>
        );
      })}
    </group>
  );
}

function FloatingOrb({ position, color, size = 0.15 }: { position: [number, number, number]; color: string; size?: number }) {
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={2}>
      <mesh position={position}>
        <sphereGeometry args={[size, 32, 32]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} transparent opacity={0.6} />
      </mesh>
    </Float>
  );
}

const DNAHelix = () => {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }} gl={{ alpha: true, antialias: true }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <pointLight position={[-5, -5, 5]} intensity={0.5} color="#2dd4bf" />
        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={1}>
          <HelixStrand />
        </Float>
        <FloatingOrb position={[3, 2, -2]} color="#0ea5e9" size={0.2} />
        <FloatingOrb position={[-3, -2, -1]} color="#2dd4bf" size={0.15} />
        <FloatingOrb position={[2, -3, -3]} color="#0ea5e9" size={0.1} />
        <FloatingOrb position={[-2, 3, -2]} color="#2dd4bf" size={0.12} />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
};

export default DNAHelix;
