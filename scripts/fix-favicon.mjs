import sharp from 'sharp';
import { readFileSync, writeFileSync } from 'fs';

const img = sharp('public/favicon.png');
const { data, info } = await img.raw().toBuffer({ resolveWithObject: true });

const pixels = new Uint8ClampedArray(data);
for (let i = 0; i < pixels.length; i += 4) {
  const r = pixels[i], g = pixels[i+1], b = pixels[i+2];
  // Make dark background pixels transparent
  if (r < 50 && g < 50 && b < 50) pixels[i+3] = 0;
  // Make dark teal background transparent too
  if (r < 30 && g < 60 && b < 60) pixels[i+3] = 0;
}

await sharp(Buffer.from(pixels), {
  raw: { width: info.width, height: info.height, channels: 4 }
})
.resize(512, 512, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
.png()
.toFile('public/favicon.png');

console.log('Done');
