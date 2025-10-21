declare module 'three/examples/jsm/utils/SkeletonUtils.js' {
  import type { AnimationClip, Object3D, Skeleton } from 'three';

  export function clone<T extends Object3D>(source: T): T;
  export function retarget(
    target: Object3D | Skeleton,
    source: Object3D | Skeleton,
    options: Record<string, unknown>,
  ): void;
  export function retargetClip(
    target: Skeleton | Object3D,
    source: Skeleton | Object3D,
    clip: AnimationClip,
    options: Record<string, unknown>,
  ): AnimationClip;
}
