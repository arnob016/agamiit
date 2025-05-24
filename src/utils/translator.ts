
// Import the translate function directly from the package
import translate from 'translate-js';

/**
 * Translate text from English to Bengali
 * @param text The text to translate
 * @returns The translated text
 */
export const translateToBengali = (text: string): string => {
  try {
    return translate(text, { from: 'en', to: 'bn' });
  } catch (error) {
    console.error('Translation error:', error);
    return text; // Return original text if translation fails
  }
};

/**
 * Translate text from Bengali to English
 * @param text The text to translate
 * @returns The translated text
 */
export const translateToEnglish = (text: string): string => {
  try {
    return translate(text, { from: 'bn', to: 'en' });
  } catch (error) {
    console.error('Translation error:', error);
    return text; // Return original text if translation fails
  }
};

/**
 * Dynamically translate text based on target language
 * @param text The text to translate
 * @param targetLang The target language code ('en' or 'bn')
 * @returns The translated text
 */
export const translateText = (text: string, targetLang: 'en' | 'bn'): string => {
  try {
    if (targetLang === 'bn') {
      return translateToBengali(text);
    } else {
      return translateToEnglish(text);
    }
  } catch (error) {
    console.error('Translation error:', error);
    return text; // Return original text if translation fails
  }
};
