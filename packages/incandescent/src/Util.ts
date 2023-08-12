export function clamp(value: number, min: number, max: number): number {
	return Math.max(min, Math.min(max, value));
}

export function clamp01(value: number): number {
	return clamp(value, 0, 1);
}
