class Color {
	public constructor(public readonly r: number, public readonly g: number, public readonly b: number) {}

	public static readonly black: Color = new Color(0, 0, 0);

	public static readonly white: Color = new Color(255, 255, 255);

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
}

export { Color };
