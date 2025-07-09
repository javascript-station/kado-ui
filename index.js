#!/usr/bin/env node
// index.js
import path from "path";
import chalk from "chalk";
import fs from "fs-extra";
import { Command } from "commander";
import { fileURLToPath } from "url";

const { writeJson, pathExists, copy } = fs;

const program = new Command();
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const CONFIG_FILE = "kado-ui.json";

//
// 1) INIT COMMAND
//
program
  .command("init")
  .description("Create a kado-ui.json config in your project root")
  .action(async () => {
    const configPath = path.resolve(process.cwd(), CONFIG_FILE);
    if (await pathExists(configPath)) {
      console.log(chalk.yellow("⚠️  kado-ui.json already exists — no action taken."));
      process.exit(1);
    }

    const defaultConfig = {
      cssDir: "styles/kado-ui",
      componentsDir: "components/kado-ui",
    };

    await writeJson(configPath, defaultConfig, { spaces: 2 });
    console.log(chalk.green(`✅  Created ${CONFIG_FILE} with default paths:`));
    console.log(defaultConfig);
  });

//
// 2) ADD COMMAND
//
program
  .command("add <templateFile>")
  .description("Add a CSS/component file into your project")
  .action(async (templateFile) => {
    const projectRoot = process.cwd();
    const configPath = path.join(projectRoot, CONFIG_FILE);

    if (!(await pathExists(configPath))) {
      console.log(
        chalk.red(`❌  No ${CONFIG_FILE} found. Run \`npx kado-ui init\` first.`)
      );
      process.exit(1);
    }

    // load user config
    const config = await import(`file://${configPath}`).then((m) => m.default || m);

    // figure out where to copy:
    const ext = path.extname(templateFile).toLowerCase();
    let targetDir;
    if (ext === ".css") targetDir = config.cssDir;
    else if (templateFile.endsWith(".tsx")) {
      // you might inspect filename for 'hook' vs 'component'
      if (/hook/i.test(templateFile)) targetDir = config.hooksDir;
      else targetDir = config.componentsDir;
    } else if (templateFile.endsWith(".ts")) targetDir = config.utilsDir;
    else {
      console.log(chalk.red(`❌  Don’t know where to put “${templateFile}”.`));
      process.exit(1);
    }

    const srcPath = path.join(__dirname, "src", templateFile);
    const destPath = path.join(projectRoot, targetDir, templateFile);

    if (!(await pathExists(srcPath))) {
      console.log(chalk.red(`❌  Template "${templateFile}" not found in CLI bundle.`));
      process.exit(1);
    }

    await copy(srcPath, destPath, { overwrite: false });
    console.log(chalk.green(`✅  "${templateFile}" copied to ${targetDir}`));
  });

//
// 3) ERROR & HELP
//
program.on("command:*", () => {
  console.error(chalk.red(`❌  Unknown command: ${program.args.join(" ")}`));
  program.help({ error: true });
});

program.parse(process.argv);
