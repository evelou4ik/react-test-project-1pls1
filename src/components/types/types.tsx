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
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  filterStatus: string;
  error?: string | null;
}

export interface StoreInterface {
  sweepstakes: InitialStateInterface;
}

export interface BackdropInterface {
  onClose: () => void;
}

export interface ModalOverlay {
  children: React.ReactNode;
}

export interface ModalInterface extends Partial<BackdropInterface>, Partial<ModalOverlay>{}
