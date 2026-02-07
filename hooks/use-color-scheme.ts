import { useColorScheme as useNativeColorScheme } from 'react-native';

// Hook to use the device's color scheme
export function useColorScheme() {
  return useNativeColorScheme();
}
