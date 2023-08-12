import { clamp } from "./Util";

class Color {
	public constructor(
		public r: number,
		public g: number,
		public b: number,
	) {
		this.validate();
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
		// Map all components to [0, 255] interval
		this.r = clamp(Math.trunc(this.r), 0, 255);
		this.g = clamp(Math.trunc(this.g), 0, 255);
		this.b = clamp(Math.trunc(this.b), 0, 255);
	}
}

export { Color };
