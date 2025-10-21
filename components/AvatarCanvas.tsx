'use client';

import { Suspense, useEffect, useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, OrbitControls, useGLTF } from '@react-three/drei';
import { Color } from 'three';
import type { Group, Mesh, MeshStandardMaterial } from 'three';
import { clone } from 'three/examples/jsm/utils/SkeletonUtils';

const AVATAR_URL = '/models/model-optimized.glb';

type AvatarCanvasProps = {
  baseColor: string;
  accentColor?: string;
};

const applyMaterialColor = (material: MeshStandardMaterial, target: Color, intensity: number) => {
  const colorInstance = material.color.clone().lerp(target, intensity);
  material.color.copy(colorInstance);
  material.needsUpdate = true;
};

const HumanAvatar = ({ baseColor, accentColor }: AvatarCanvasProps) => {
  const gltf = useGLTF(AVATAR_URL);
  const avatarRef = useRef<Group>(null);
  const clonedScene = useMemo(() => clone(gltf.scene), [gltf.scene]);

  useEffect(() => {
    const base = new Color(baseColor);
    const accent = accentColor ? new Color(accentColor) : base.clone().offsetHSL(0.02, -0.1, 0.1);

    const skinTone = new Color('#e8c7b0');
    const hairTone = new Color('#2f251e');
    const shoeTone = accent.clone().offsetHSL(-0.08, 0.05, -0.1);

    clonedScene.traverse((child) => {
      if (!(child as Mesh).isMesh) return;
      const mesh = child as Mesh;
      mesh.castShadow = true;
      mesh.receiveShadow = true;

      const materials = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
      materials.forEach((mat, idx) => {
        const material = mat as MeshStandardMaterial;
        if (!material || !('color' in material)) return;

        const name = `${mesh.name}${material.name}`.toLowerCase();
        const isSkin = name.includes('skin') || name.includes('face') || name.includes('body');
        const isHair = name.includes('hair') || name.includes('brow');
        const isShoe = name.includes('shoe') || name.includes('boot') || name.includes('foot');

        if (isSkin) {
          applyMaterialColor(material, skinTone, 0.95);
        } else if (isHair) {
          applyMaterialColor(material, hairTone, 0.85);
        } else if (isShoe) {
          applyMaterialColor(material, shoeTone, 0.75);
        } else {
          const target = idx === 0 ? base : accent;
          applyMaterialColor(material, target, 0.65);
        }
      });
    });
  }, [clonedScene, baseColor, accentColor]);

  useFrame((_, delta) => {
    if (!avatarRef.current) return;
    avatarRef.current.rotation.y += delta * 0.25;
  });

  return (
    <group ref={avatarRef} position={[0, -1.4, 0]} scale={1.1}>
      <primitive object={clonedScene} />
    </group>
  );
};

const SoftGround = ({ tint }: { tint: string }) => {
  const groundColor = useMemo(() => {
    const base = new Color(tint);
    const softened = base.clone().lerp(new Color('#ffffff'), 0.55);
    return `#${softened.getHexString()}`;
  }, [tint]);

  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.7, 0]}>
      <circleGeometry args={[2.1, 72]} />
      <meshStandardMaterial color={groundColor} roughness={0.95} />
    </mesh>
  );
};

export const AvatarCanvas = ({ baseColor, accentColor }: AvatarCanvasProps) => {
  return (
    <Canvas camera={{ position: [1.8, 1.75, 2.5], fov: 31 }} className="avatar-canvas">
      <color attach="background" args={[1, 1, 1]} />
      <ambientLight intensity={0.58} />
      <directionalLight position={[3, 4, 2]} intensity={1.05} />
      <spotLight position={[-2, 3.5, 2]} intensity={0.5} angle={0.55} penumbra={0.45} />
      <Suspense fallback={null}>
        <HumanAvatar baseColor={baseColor} accentColor={accentColor} />
        <SoftGround tint={baseColor} />
        <Environment preset="sunset" />
      </Suspense>
      <OrbitControls enablePan={false} minPolarAngle={Math.PI / 3.2} maxPolarAngle={(Math.PI * 2) / 3.2} enableZoom={false} />
    </Canvas>
  );
};

useGLTF.preload(AVATAR_URL);
