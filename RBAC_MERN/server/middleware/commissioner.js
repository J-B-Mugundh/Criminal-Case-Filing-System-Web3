function commissioner(req, res, next) {
  if (req.user.role !== 0) return res.status(403).send("Access denied.");
  next();
}

module.exports = commissioner;
