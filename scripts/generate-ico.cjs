const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function generateIco() {
  const sourcePng = path.join(__dirname, '../public/favicon.png');
  
  if (!fs.existsSync(sourcePng)) {
    console.error('Source favicon.png not found at:', sourcePng);
    process.exit(1);
  }

  const sizes = [16, 32, 48];
  const pngBuffers = [];
  
  console.log('Resizing images to standard favicon resolutions (16x16, 32x32, 48x48)...');
  for (const size of sizes) {
    const buffer = await sharp(sourcePng)
      .resize(size, size)
      .png()
      .toBuffer();
    pngBuffers.push({ size, buffer });
  }
  
  console.log('Compiling into standard multi-resolution ICO binary structure...');
  // Header: 6 bytes
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // Reserved
  header.writeUInt16LE(1, 2); // Type: 1 = ICO
  header.writeUInt16LE(sizes.length, 4); // Number of images
  
  const directoryEntries = [];
  let currentOffset = 6 + 16 * sizes.length;
  
  for (const item of pngBuffers) {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(item.size, 0); // Width
    entry.writeUInt8(item.size, 1); // Height
    entry.writeUInt8(0, 2); // Colors (0 = no palette)
    entry.writeUInt8(0, 3); // Reserved
    entry.writeUInt16LE(1, 4); // Color planes
    entry.writeUInt16LE(32, 6); // Bits per pixel
    entry.writeUInt32LE(item.buffer.length, 8); // Size of image data
    entry.writeUInt32LE(currentOffset, 12); // Offset of image data
    
    directoryEntries.push(entry);
    currentOffset += item.buffer.length;
  }
  
  const finalBuffer = Buffer.concat([
    header,
    ...directoryEntries,
    ...pngBuffers.map(item => item.buffer)
  ]);
  
  const targetIco = path.join(__dirname, '../public/favicon.ico');
  fs.writeFileSync(targetIco, finalBuffer);
  console.log('Successfully generated multi-resolution public/favicon.ico at:', targetIco);
}

generateIco().catch(console.error);
