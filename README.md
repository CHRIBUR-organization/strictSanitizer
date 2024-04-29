# @chribur\_/strict-sanitizer

A Node package of **STRICT** sanitizer for XSS. It removes all ASCII symbols from the inputted text. If you want, you can make it remove the line break codes or the whitespaces.

## Install

```Shell
$ npm i -D @chribur_/strict-sanitizer
```

## How to use

```TypeScript
const text = 'Hello world!\nこんにちは、世界！'

const strictSanitizer = new StrictSanitizer('noLineBreakAndNoSpace'); // The default parameter is ''.
const sanitizedText = strictSanitizer.sanitize(text); // 'Helloworldこんにちは、世界！'
```

The `StrictSanitizer` accepts only three parameters:

- `'noLineBreakAndNoSpace'`: This also removes the whitespaces and the line break codes.
- `'noLineBreak'`: This also removes the line break codes.
- `''` (the dafault parameter): This doesn't remove the whitespaces and the line break codes.

## License

[MIT License](https://github.com/CHRIBUR0309/strictSanitizer/blob/main/LICENSE)
