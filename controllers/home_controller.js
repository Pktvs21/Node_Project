module.exports.home = function (req, res) {
  console.log(req.cookies);
  res.cookie("data_id", 10);
  res.cookie("data_name", "verb")
  return res.render("home", {
    title: "Home",
  });
};
