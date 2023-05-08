import { MathFunctions } from "./MathFucntions";

class ProgressBar {
	private internal_progress: number;

	public constructor(public readonly title: string, progress: number = 0) {
		this.internal_progress = progress;
	}

	public get progress() {
		return this.internal_progress;
	}

	public set progress(value: number) {
		this.internal_progress = MathFunctions.clamp(value);
	}
}

export { ProgressBar };
