export const format = (number) => {
  switch (true) {
    case number >= 1_000_000_000:
      return (number / 1_000_000_000).toFixed(1).replace(/\.0$/, '') + 'B';
    case number >= 1_000_000:
      return (number / 1_000_000).toFixed(1).replace(/\.0$/, '') + 'M';
    case number >= 1_000:
      return (number / 1_000).toFixed(1).replace(/\.0$/, '') + 'K';
    default:
      return number;
  }
}