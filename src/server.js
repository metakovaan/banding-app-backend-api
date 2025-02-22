require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const brandsRoutes = require("./routes/brands");

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use("/api/brands", brandsRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});