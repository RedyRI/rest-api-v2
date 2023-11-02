const pool = require("../config/db");

const getUsers = async (req, res) => {
  const data = await pool.query("SELECT * FROM user");
  res.send(data[0]);
};

const getUser = (req, res) => {
  const { id } = req.params;
  res.send(`user ${id} info`);
};

const createUser = async (req, res) => {
  const { name, password, age, rol } = req.body;
  const data = await pool.query(
    "INSERT INTO user(name, password, age, rol) VALUES(?,?,?,?)",
    [name, password, age, rol]
  );
  res.send(data);
};

const updateUser = (req, res) => {
  const { id } = req.params;
  res.send(`user ${id} updated`);
};

const deleteUser = (req, res) => {
  const { id } = req.params;
  res.send(`user ${id} deleted`);
};

module.exports = {
  getUser,
  getUsers,
  createUser,
  updateUser,
  deleteUser,
};
