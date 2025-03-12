import { pool } from "../db.js";

export const getGuests = async (req, res) => {
  try {
    const [rows] = await pool.query("select * from guests");
    res.json(rows);
  } catch (error) {
    return res.status(500).json({ message: "something goes wrong" });
  }
};
