exports.index = (req, res) => {
  let obj = {
    userName: req.userInfo.name
  };

  res.render("home", obj);
};
