export class Color {
	public constructor(public r: number, public g: number, public b: number) {}

	public static readonly black: Color = new Color(0, 0, 0);

	public static readonly white: Color = new Color(255, 255, 255);

	public get grayscale(): Color {
		const gray = Math.round(0.299 * this.r + 0.587 * this.g + 0.114 * this.b);
		return new Color(gray, gray, gray);
	}

	public static fromHEX(hex: string): Color {
		return new Color(
			Number.parseInt(hex.slice(0, 2), 16),
			Number.parseInt(hex.slice(2, 4), 16),
			Number.parseInt(hex.slice(4, 6), 16),
		);
	}

	public toHEX(): string {
		return this.r.toString(16) + this.g.toString(16) + this.b.toString(16);
	}
}
