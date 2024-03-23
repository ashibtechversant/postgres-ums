module.exports = (message, data, status = true) => {
  const formattedMessage = message.toLowerCase();
  return {
    status,
    message: formattedMessage,
    data,
  };
};
