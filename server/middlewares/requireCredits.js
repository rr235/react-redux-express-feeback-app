module.exports = (req, res, next) => {
  if (req.user.credits < 1) {
    return res.status(403).send({ error: 'Not enough credits!' });
    // could actually use 402 (Payement Required) but its not really widely implemented (reserved for future w3c doc).
  }

  next();
};
