import { PaletteInterface, TypefacesInterface } from '../types/types';

export const correctFormatOfDate = (dt: string) => {
  const date = new Date(Number(dt));

  const formatDate = {
    day: date.getDate().toString().padStart(2, '0'),
    month: (date.getMonth() + 1).toString().padStart(2, '0'),
    year: date.getFullYear().toString(),
    hours: date.getHours().toString().padStart(2, '0'),
    minutes: date.getMinutes().toString().padStart(2, '0')
  };

  return `${formatDate.day}/${formatDate.month}/${formatDate.year}, ${formatDate.hours}:${formatDate.minutes} EST`;
};

export const getColorFromPaletteOrDefault = (
  palette: PaletteInterface | null,
  paletteColor: string,
  defaultColor: string
) => {
  return palette && paletteColor !== null ? paletteColor : defaultColor;
};

export const getTypefaceFromTypographiesOrDefault = (
  typefaces: TypefacesInterface | null,
  typefaceFont: string
) => {
  return typefaces !== null ? typefaceFont : 'inherit';
};
