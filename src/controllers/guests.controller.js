import { pool } from "../db.js";

export const getGuests = async (req, res) => {
  try {
    const [rows] = await pool.query("select * from guests");
    res.json(rows);
  } catch (error) {
    return res.status(500).json({ message: "something goes wrong" });
  }
};

export const createGuests = async (req, res) => {
  try {
    const { name, email, phone, age, relationship, attending } = req.body;
    const [rows] = await pool.query(
      "INSERT INTO guests (name,email,phone,age,relationship,attending) VALUES (?,?,?,?,?,?)",
      [name, email, phone, age, relationship, attending]
    );
    res
      .status(201)
      .json({
        id: rows.insertId,
        name,
        email,
        phone,
        age,
        relationship,
        attending,
      });
  } catch (error) {
    console.log(error,error.message,'error');
    return res.status(500).json({ message: "something goes wrong" });
  }
};

export const updateGuests = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, phone, age, relationship, attending } = req.body;

    const [result] = await pool.query(
      "UPDATE guests set name = IFNULL(?,name), email = IFNULL(?,email), phone = IFNULL(?,phone), age = IFNULL(?,age), relationship = IFNULL(?,relationship), attending = IFNULL(?,attending) WHERE id = ?",
      [name, email, phone, age, relationship, attending, id]
    );
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Guest not found" });
    }

    const [rows] = await pool.query("SELECT * FROM guests WHERE id = ?", [id]);
    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({ message: "something goes wrong" });
  }
};

export const deleteGuests = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await pool.query("DELETE FROM guests WHERE id = ?", [id]);

    if (rows.affectedRows <= 0) {
      return res.status(404).json({ message: "Guest not found" });
    }
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};
