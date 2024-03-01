import jwt from 'jsonwebtoken';

const authenticate = (req, res, next) => {
  let { cookie } = req.headers;
  let tokenInHeader = cookie.split('=')[1];
  if (tokenInHeader === null) res.sendStatus(401);
  jwt.verify(tokenInHeader, process.env.SECRET_key, (err, user) => {
    if (err || !user) return res.sendStatus(403);
    req.user = user;
    next(); 
  });
};

export default authenticate;
