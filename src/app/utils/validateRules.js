export default {
  isRequired: (value) => Boolean(value.trim()),
  isEmail: (value) => /^\S+@\S+\.\S+$/g.test(value),
  isUrl: (value) => /^https?:\/\/\S+$/g.test(value),
  min: (value, length) => value.length >= length,
  isCapitalSymbol: (value) => /[A-Z]+/g.test(value),
  isContainDigit: (value) => /d+/g.test(value)
}
