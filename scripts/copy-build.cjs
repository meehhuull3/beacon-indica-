const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const src = path.join(__dirname, '../dist');
const dest = 'C:\\Users\\mukul\\Downloads\\beacon-indica-DEPLOY';
const zipPath = 'C:\\Users\\mukul\\Downloads\\beacon-indica-NETLIFY-READY.zip';

function copyDirSync(srcDir, destDir) {
  fs.mkdirSync(destDir, { recursive: true });
  const entries = fs.readdirSync(srcDir, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(srcDir, entry.name);
    const destPath = path.join(destDir, entry.name);
    if (entry.isDirectory()) {
      copyDirSync(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

try {
  console.log('Cleaning destination directory at:', dest);
  if (fs.existsSync(dest)) {
    fs.rmSync(dest, { recursive: true, force: true });
  }

  console.log('Copying built files to deployment folder...');
  copyDirSync(src, dest);
  console.log('Successfully copied all files to:', dest);

  console.log('Generating Netlify _redirects file dynamically...');
  fs.writeFileSync(path.join(dest, '_redirects'), '/*    /index.html   200\n');

  console.log('Compressing deployment folder into Netlify-ready ZIP file at:', zipPath);
  if (fs.existsSync(zipPath)) {
    fs.unlinkSync(zipPath);
  }
  
  // Use standard PowerShell command to compress the files directly inside the folder
  const cmd = `powershell -Command "Compress-Archive -Path '${dest}\\*' -DestinationPath '${zipPath}' -Force"`;
  execSync(cmd);
  console.log('Successfully created backup ZIP archive!');
  console.log('\n--- VERIFICATION ---');
  console.log('Folder contains:');
  fs.readdirSync(dest).forEach(file => {
    console.log(' -', file);
  });
} catch (err) {
  console.error('Error during copying/compressing files:', err.message);
  process.exit(1);
}
