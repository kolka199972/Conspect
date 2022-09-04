export default {
  isRequired: (value) => Boolean(value.trim()),
  isEmail: (value) => /^\S+@\S+\.\S+$/g.test(value),
  isUrl: (value) => /^https?:\/\/\S+$/g.test(value),
  min: (value, length) => value.length >= length,
  isCapitalSymbol: (value) => /[A-Z]+/g.test(value),
  isContainDigit: (value) => /d+/g.test(value),
  isFIO: (value) =>
    /^([А-ЯA-Z]|[А-ЯA-Z][\x27а-яa-z]{1,}|[А-ЯA-Z][\x27а-яa-z]{1,}-([А-ЯA-Z][\x27а-яa-z]{1,}|(оглы)|(кызы)))\040[А-ЯA-Z][\x27а-яa-z]{1,}(\040[А-ЯA-Z][\x27а-яa-z]{1,})?$/g.test(
      value
    ),
  isContainValue: (array, value) => array.includes(value)
}
