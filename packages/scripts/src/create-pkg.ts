import * as fs from "node:fs/promises";
import * as process from "node:process";

export async function createPkg(): Promise<void> {
	// Removes '/usr/local/bin/node'
	process.argv.splice(0, 1);

	// If no args were provided return
	if (process.argv.length === 0) {
		console.log("You must provide a package name!");
		return;
	}

	// Get package name from first command line argument
	// Example: pnpm create-pkg (package-name)
	const packageName: string = process.argv[0] as string;
	const packagePath: string = "packages/" + packageName;

	// Check if the package already exists
	try {
		await fs.access(packagePath, fs.constants.F_OK);

		// Exists
		console.log("The package already exists!");
	} catch {
		// If the package doesn't exist, create a directory
		await fs.mkdir(packagePath, { recursive: false }).then(() => {
			console.log("Created " + packageName);
		});
	}
}
