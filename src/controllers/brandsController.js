const brands = require("../data/brands.json");

exports.getBrands = (req, res) => {
  let { sort, filter } = req.query;
  let result = [...brands];

  if (filter) {
    result = result.filter((brand) =>
      brand.name.toLowerCase().includes(filter.toLowerCase())
    );
  }

  if (sort === "asc") {
    result.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sort === "desc") {
    result.sort((a, b) => b.name.localeCompare(a.name));
  }

  res.json(result);
};