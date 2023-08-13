import { clamp, clamp01 } from "./Util";

class Color {
	public constructor(
		public r: number,
		public g: number,
		public b: number,
	) {
		this.validate();
	}

	public static from01(r: number, g: number, b: number) {
		return new Color(r * 255, g * 255, b * 255);
	}

	public static fromHEX(hex: string): Color {
		if (!/[\dA-Fa-f]{6}/g.test(hex)) throw new Error(`Invalid hex format "${hex}"`);
		if (/#[\dA-Fa-f]{6}/g.test(hex)) hex = hex.slice(1);
		return new Color(
			Number.parseInt(hex.slice(0, 2), 16),
			Number.parseInt(hex.slice(2, 4), 16),
			Number.parseInt(hex.slice(4, 6), 16),
		);
	}

	public static fromHSV(hue: number, saturation: number, value: number): Color {
		hue = clamp(hue, 0, 360);
		saturation = clamp01(saturation);
		value = clamp01(value);

		const chroma = saturation * value;
		const hue_prime = hue / 60;
		const x = chroma * (1 - Math.abs((hue_prime % 2) - 1));
		let rgb_point: [number, number, number] = [0, 0, 0];
		switch (Math.trunc(hue_prime)) {
			case 0:
				rgb_point = [chroma, x, 0];
				break;
			case 1:
				rgb_point = [x, chroma, 0];
				break;
			case 2:
				rgb_point = [0, chroma, x];
				break;
			case 3:
				rgb_point = [0, x, chroma];
				break;
			case 4:
				rgb_point = [x, 0, chroma];
				break;
			case 5:
				rgb_point = [chroma, 0, x];
				break;
		}

		const match = value - chroma;
		return this.from01(rgb_point[0] + match, rgb_point[1] + match, rgb_point[2] + match);
	}

	public static random(): Color {
		return new Color(Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256));
	}

	public grayscale(): Color {
		const gray = Math.round(0.299 * this.r + 0.587 * this.g + 0.114 * this.b);
		return new Color(gray, gray, gray);
	}

	public toHEX(): string {
		return this.r.toString(16) + this.g.toString(16) + this.b.toString(16);
	}

	public equals(other: Color): boolean {
		return this.r === other.r && this.g === other.g && this.b === other.b;
	}

	private validate(): void {
		this.r = clamp(Math.round(this.r), 0, 255);
		this.g = clamp(Math.round(this.g), 0, 255);
		this.b = clamp(Math.round(this.b), 0, 255);
	}
}

export { Color };
