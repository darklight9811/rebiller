export const lerp = (min: number, max: number, lerp: number) => min * (1 - lerp) + max * lerp

export const clamp = (min: number, max: number, num: number) => min > num ? min : max < num ? max : num