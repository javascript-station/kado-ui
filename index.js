#!/usr/bin/env node

import path from "path";
import chalk from "chalk";
import prompts from "prompts";
import { copy } from "fs-extra";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const srcRoot = path.join(__dirname, "src");

async function main() {
  console.log(chalk.cyan("Hello, welcome to kado-ui 🎁"));

  const { targetPath } = await prompts({
    type: "text",
    name: "targetPath",
    message: "Where do you want to have the css and component files?",
    initial: "./",
  });

  const userPath = path.resolve(process.cwd(), targetPath);

  const foldersToCopy = ["styles", "components", "utils"];

  for (const folder of foldersToCopy) {
    const srcFolder = path.join(srcRoot, folder);
    const destFolder = path.join(userPath, folder);
    try {
      await copy(srcFolder, destFolder, { overwrite: false });
      console.log(chalk.green(`✅ Copied ${folder} to ${targetPath}/${folder}`));
    } catch (err) {
      console.error(chalk.red(`❌ Failed to copy ${folder}: ${err.message}`));
    }
  }

  console.log(chalk.blue("\n🎉 Done!"));
}

main();
