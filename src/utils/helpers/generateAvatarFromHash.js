import tinycolor from 'tinycolor2';

export default hash => {
  const [r, g, b] = hash
    .substring(0, 3)
    .split('');
  return {
    color: tinycolor({r, g, b})
      .lighten(10)
      .saturate(10)
      .toHexString(),
    colorLighten: tinycolor({r, g, b})
      .lighten(30)
      .saturate(30)
      .toHexString()
  };
}
