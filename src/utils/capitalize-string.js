module.exports = (string) => {
  const firstChar = string.charAt(0);
  const convertedFirstChar = firstChar.toUpperCase();
  const remainingString = string.slice(1);
  const capitalizedString = convertedFirstChar + remainingString;
  return capitalizedString;
};
