class AuthController {
  static handleSignup = (req, res) => {
    res.json({ status: true, msg: "Signup Route" });
  };

  static handleLogin = (req, res) => {
    res.status(200).json({ status: true, msg: "Login Route" });
  };
}

export default AuthController;
