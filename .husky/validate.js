// Check if ShellJS is installed
try {
  const shell = require('shelljs');
} catch (e) {
  console.error(
    "ShellJS is not installed. Please go to the project's root directory and run 'npm install' to set it up."
  );
  process.exit(1);
}

const path = require('path');
const shell = require('shelljs');

// Check if Husky is installed locally
if (
  !shell.test('-f', path.join(__dirname, '..', 'node_modules', '.bin', 'husky'))
) {
  console.error(
    "Husky is not installed. Please go to the project's root directory and run 'npm install' to set it up."
  );
  process.exit(1);
}

// Navigate to the 'front' directory and run the desired commands
shell.cd(path.join(__dirname, '..', 'front'));

const commands = [
  // 'type-check',
  // 'stylelint',
  // 'lint'
];

for (const command of commands) {
  const fullCommand = `npm run ${command}`;

  if (shell.exec(fullCommand).code !== 0) {
    console.error(
      `Command "${fullCommand}" failed. Please fix the errors and try committing again.`
    );
    shell.exit(1);
  }
}
