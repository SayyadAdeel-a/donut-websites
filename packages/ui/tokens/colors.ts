export const brandColors = {
  hotPink: '#f54f95',
  red: '#f21d33',
  blue: '#3b89ff',
  yellow: '#eeae23',
  purple: '#686ad7',
  chocolate: '#6e2f10',
  mocha: '#945439',
  peach: '#ffb769',
  green: '#1ac500',
  slate: '#2a3440',
  charcoal: '#1b1b1b',
  cream: '#f5f6f4',
  vanilla: '#fff5ea',
  white: '#ffffff',
  black: '#000000',
} as const;

export type BrandColor = keyof typeof brandColors;
