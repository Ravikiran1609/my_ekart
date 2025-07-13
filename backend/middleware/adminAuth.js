import jwt from 'jsonwebtoken';

const adminAuth = (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1];
  if (!token) return res.status(401).json({ msg: 'No token, authorization denied' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded.admin) throw new Error();
    req.admin = decoded.id;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Invalid Token' });
  }
};

export default adminAuth;

