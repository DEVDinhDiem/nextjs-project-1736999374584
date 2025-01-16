// Ch?c n?ng t?nh t?ng a + b
export async function get(req, res) {
  try {
    const { a, b } = req.query;
    if (!a || !b) {
      return res.status(400).json({ error: 'Missing parameters' });
    }

    const sum = parseInt(a) + parseInt(b);
    res.status(200).json({ sum });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}