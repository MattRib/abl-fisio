/**
 * Haptic Feedback Utilities
 * Fornece feedback tátil em dispositivos móveis que suportam Vibration API
 */

type HapticPattern = 'light' | 'medium' | 'heavy' | 'success' | 'warning' | 'error';

const hapticPatterns: Record<HapticPattern, number | number[]> = {
  light: 10,
  medium: 20,
  heavy: 30,
  success: [10, 50, 10],
  warning: [20, 100, 20],
  error: [30, 100, 30, 100, 30],
};

/**
 * Executa feedback háptico se disponível
 * @param pattern - Padrão de vibração
 */
export function triggerHaptic(pattern: HapticPattern = 'light'): void {
  // Verifica se está em mobile e se a API está disponível
  if (typeof window === 'undefined') return;

  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  if (!isMobile || !('vibrate' in navigator)) return;

  try {
    const vibrationPattern = hapticPatterns[pattern];
    navigator.vibrate(vibrationPattern);
  } catch (error) {
    // Silently fail - haptic não é crítico
    console.debug('Haptic feedback not supported:', error);
  }
}

/**
 * Hook React para haptic feedback
 */
export function useHaptic() {
  return {
    light: () => triggerHaptic('light'),
    medium: () => triggerHaptic('medium'),
    heavy: () => triggerHaptic('heavy'),
    success: () => triggerHaptic('success'),
    warning: () => triggerHaptic('warning'),
    error: () => triggerHaptic('error'),
  };
}
