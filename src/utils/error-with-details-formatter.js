const capitalizeString = require('./capitalize-string');

module.exports = (err, details) => {
  const { name, status, message } = err;
  const formattedMessage = message.toLowerCase();
  const formattedDetails = capitalizeString(details);
  const error = {
    name,
    status,
    messsage: formattedMessage,
    details: formattedDetails,
  };
  return error;
};
