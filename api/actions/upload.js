export default function upload(file) {
  if(req.body.password !== process.env.PASS)
    return Promise.reject('Password is invalid');
  const user = {
  };
  req.session.user = user;
  return Promise.resolve(user);
}
