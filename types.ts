import { ReactNode } from 'react';

export interface SectionProps {
  id?: string;
  className?: string;
}

export interface RevealProps {
  children: ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
  direction?: 'up' | 'left' | 'right';
}

export interface ServiceItemProps {
  number: string;
  title: string;
  description: string;
}

export interface StatProps {
  value: string;
  label: string;
}