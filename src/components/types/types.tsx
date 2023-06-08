import React from 'react';

export interface SweepstakeInterface {
  id: number;
  end_date: string;
  entries: number;
  focus: string;
  link: string;
  raised: string;
  start_date: string;
  status: string;
  statuses: Array<string>;
  title: string;
}

export interface ColumnHeadInterface {
  className: string;
  tableHeadTitle: Array<string>;
}

export interface ModalOverlay {
  children: React.ReactNode;
  className?: string;
}

export interface BackdropInterface {
  onClose: () => void;
}

export interface ModalInterface extends Partial<BackdropInterface>, Partial<ModalOverlay> {}

export interface PaletteInterface {
  id: string;
  name?: string;
  colorPrimary?: any;
  colorSecondary?: any;
  colorAccent?: any;
}

export interface TypefacesInterface {
  headerFont: string;
  subHeaderFont: string;
  bodyCopyFont: string;
}

export interface FileDataInterface extends File {
  id: string;
}
