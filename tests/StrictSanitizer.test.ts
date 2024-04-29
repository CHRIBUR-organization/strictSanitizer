import { StrictSanitizer } from '../src/StrictSanitizer';

const unsanitizedText = 'Hello, world!\nこんにちは、世界！';
const sanitizer1 = new StrictSanitizer('noLineBreakAndNoSpace');
test('noLineBreakAndNoSpace', () =>
  expect(sanitizer1.sanitize(unsanitizedText)).toBe(
    'Helloworldこんにちは、世界！'
  ));
const sanitizer2 = new StrictSanitizer('noLineBreak');
test('noLineBreak', () =>
  expect(sanitizer2.sanitize(unsanitizedText)).toBe(
    'Hello worldこんにちは、世界！'
  ));
const sanitizer3 = new StrictSanitizer();
test('default', () =>
  expect(sanitizer3.sanitize(unsanitizedText)).toBe(
    'Hello world\nこんにちは、世界！'
  ));
