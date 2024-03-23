module.exports = (str) => {
  const splittedStringArray = str.split(' ');

  const capitalizedArray = splittedStringArray.map((word) => {
    const firstChar = word.charAt(0);
    const convertedFirstChar = firstChar.toUpperCase();
    const remainingString = word.slice(1);
    const capitalizedString = convertedFirstChar + remainingString;
    return capitalizedString;
  });

  const formattedString = capitalizedArray.join(' ').replace(/\s+/g, ' ');
  return formattedString;
};
