import * as LocalAuthentication from 'expo-local-authentication';
import { words } from '@utils/dictionary';
import { languages } from '@utils/dictionary';

export async function authenticateWithBiometrics(currentLanguage: languages) {
  try {
    const isAvailable = await LocalAuthentication.hasHardwareAsync();
    if (!isAvailable) {
      // console.log('Biometrics not available on this device.');
      return false;
    }

    const isEnrolled = await LocalAuthentication.isEnrolledAsync();
    if (!isEnrolled) {
      // console.log('No biometrics enrolled on this device.');
      return false;
    }

    const result = await LocalAuthentication.authenticateAsync({
      promptMessage: words.authenticateWithBiometrics[currentLanguage],
    });

    if (result.success) {
      // console.log('Authentication successful!');
      return true;
    } else {
      // console.log('Authentication failed or canceled.');
      return false;
    }
  } catch (error) {
    console.log('Error during biometric authentication:', error);
    return false;
  }
}