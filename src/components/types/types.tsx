import React from 'react';

export interface SweepstakeInterface {
  end_date: string;
  entries: number;
  focus: string;
  link: string;
  raised: number;
  start_date: string;
  status: string;
  statuses: Array<string>;
  title: string;
}

export interface InitialStateInterface {
  sweepstakesArray: SweepstakeInterface[] | [];
  filterStatus: string;
  countOfSweepstakes: number;
  countOfShowing: number;
  currentPage: number;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error?: string | null;
}

export interface ColumnHeadInterface {
  className: string,
  tableHeadTitle: Array<string>;
}

export interface ModalOverlay {
  children: React.ReactNode;
  className?: string;
}

export interface BackdropInterface {
  onClose: () => void;
}

export interface CartsRequest {
  status: string;
  page: number;
}

export interface ModalInterface extends Partial<BackdropInterface>, Partial<ModalOverlay>{}


