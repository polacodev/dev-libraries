import type { GradientColors } from '@/types/notifications';

export const GRADIENT_COLORS: GradientColors = {
  success: {
    firstColor: 'rgba(0,36,5,1)',
    secondColor: 'rgba(9,121,22,1)',
    thirdColor: 'rgba(0,255,12,1)',
  },
  error: {
    firstColor: 'rgba(36,0,0,1)',
    secondColor: 'rgba(121,9,9,1)',
    thirdColor: 'rgba(255,0,0,1)',
  },
} as const;
