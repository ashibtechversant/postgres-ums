const capitalizeString = require('./capitalize-string');

module.exports = (str) => {
  const splittedStringArray = str.split(' ');

  const capitalizedArray = splittedStringArray.map((word) => {
    const capitalizedString = capitalizeString(word);
    return capitalizedString;
  });

  const formattedString = capitalizedArray.join(' ').replace(/\s+/g, ' ');
  return formattedString;
};
