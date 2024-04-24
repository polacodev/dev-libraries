export type NotificationType = 'success' | 'error';

export type GradientColors = Record<
  NotificationType,
  Record<
    'firstColor' | 'secondColor' | 'thirdColor',
    `rgba(${number},${number},${number},${number})`
  >
>;
