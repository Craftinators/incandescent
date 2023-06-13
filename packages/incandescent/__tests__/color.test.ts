// noinspection SpellCheckingInspection

import { describe, test, expect } from "vitest";
import { Color } from "../src";

describe("color", () => {
	test("GIVEN white color EXPECT to equal grayscaled white color", () => {
		expect(Color.white).toStrictEqual(Color.white.grayscale);
	});

	test("GIVEN HEX code EXPECT to equal RGB", () => {
		expect(Color.fromHEX("b148c4")).toStrictEqual(new Color(177, 72, 196));
		expect(Color.fromHEX("#b148c4")).toStrictEqual(new Color(177, 72, 196));
		expect(() => Color.fromHEX("blah")).toThrowError();
	});

	test("GIVEN RGB color EXPECT to equal HEX", () => {
		expect(new Color(231, 152, 72).toHEX()).toBe("e79848");
	});
});
