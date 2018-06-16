const re = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export default emails => {
  const invalidEmails = emails
    .replace(/^,|,$/g, '') // remove trailing commas
    .split(',')
    .map(email => email.trim())
    .filter(email => !re.test(email));

  if (invalidEmails.length) {
    return `These emails are invalid: ${invalidEmails}`;
  }
};