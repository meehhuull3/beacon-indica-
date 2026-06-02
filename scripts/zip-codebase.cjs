const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const projectRoot = path.join(__dirname, '..');
const tempZipDir = path.join(projectRoot, '../temp-zip-dir');
const zipPath = path.join(projectRoot, '../beacon_indica_static_codebase.zip');

function copyFiltered(srcDir, destDir) {
  fs.mkdirSync(destDir, { recursive: true });
  const entries = fs.readdirSync(srcDir, { withFileTypes: true });
  for (const entry of entries) {
    const name = entry.name;
    if (
      name === 'node_modules' ||
      name === 'dist' ||
      name === '.git' ||
      name === '.tanstack' ||
      name === 'temp-zip-dir'
    ) {
      continue;
    }
    const srcPath = path.join(srcDir, name);
    const destPath = path.join(destDir, name);
    if (entry.isDirectory()) {
      copyFiltered(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

try {
  console.log('Preparing temporary directory for codebase backup...');
  if (fs.existsSync(tempZipDir)) {
    fs.rmSync(tempZipDir, { recursive: true, force: true });
  }
  
  copyFiltered(projectRoot, tempZipDir);
  console.log('Successfully filtered and copied source files.');

  console.log('Compressing codebase into backup ZIP at:', zipPath);
  if (fs.existsSync(zipPath)) {
    fs.unlinkSync(zipPath);
  }
  
  const cmd = `powershell -Command "Compress-Archive -Path '${tempZipDir}\\*' -DestinationPath '${zipPath}' -Force"`;
  execSync(cmd);
  console.log('Successfully created codebase archive!');
  
  // Clean up
  fs.rmSync(tempZipDir, { recursive: true, force: true });
  console.log('Temporary folder cleaned.');
} catch (err) {
  console.error('Error zipping codebase:', err.message);
  process.exit(1);
}
