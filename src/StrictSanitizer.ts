import { match } from 'ts-pattern';
import { type SanitizingMode } from './types/sanitizingMode';

export class StrictSanitizer {
  /**
   * A strict sanitizer for XSS.
   * This removes all ASCII symbols from the inputted text.
   * this can also remove the line break codes or the whitespaces if you want.
   *
   * @param {SanitizingMode} sanitizingMode [sanitizingMode='']
   */
  #sanitizingMode: SanitizingMode;
  #asciiRegularExpression: RegExp;
  #sanitizedRegularExpression: RegExp;
  #removeMatchedCharacter: (character: string) => string;
  constructor(sanitizingMode: SanitizingMode = '') {
    this.#sanitizingMode = sanitizingMode;
    this.#asciiRegularExpression = new RegExp(/[\x00-\x7F]/g);
    this.#sanitizedRegularExpression = match(this.#sanitizingMode)
      .with('noLineBreakAndNoSpace', () => new RegExp(/[^0-9a-zA-Z]/))
      .with('noLineBreak', () => new RegExp(/[^0-9a-zA-Z \t]/))
      .with('', () => new RegExp(/[^0-9a-zA-Z \t\r\n]/))
      .exhaustive();
    this.#removeMatchedCharacter = (character: string) =>
      character.match(this.#sanitizedRegularExpression) ? '' : character;
  }
  sanitize = (unsanitizedText: string): string =>
    /**
     * Sanitizes the inputted text.
     *
     * @param {string} unsanitizedText
     */
    unsanitizedText.replace(this.#asciiRegularExpression, (char) =>
      this.#removeMatchedCharacter(char)
    );
}
