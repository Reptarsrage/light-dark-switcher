export const bgImages = {}

for (let i = 0; i <= 45; i++) {
  // pad left with 0
  const paddedI = i.toString().padStart(2, '0');
  bgImages[`bg-${paddedI}`] = `./images/patterns/bg-${paddedI}.svg`;
}