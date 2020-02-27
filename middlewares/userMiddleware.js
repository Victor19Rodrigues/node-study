exports.userMiddleware = (req, res, next) => {
  let info = { name: "Victor", id: "123" };

  req.userInfo = info;

  next();
};
