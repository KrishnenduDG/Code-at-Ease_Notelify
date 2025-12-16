class NotesController {
  static handleCreateNote = (req, res) => {
    res.status(200).json({ status: true, msg: "Notes Creation (C) Route" });
  };

  static handleGetNote = (req, res) => {
    res.status(200).json({ status: true, msg: "Notes Reading (R) Route" });
  };

  static handleUpdateNote = (req, res) => {
    res.status(200).json({ status: true, msg: "Notes Updating (U) Route" });
  };

  static handleDeleteNote = (req, res) => {
    res.status(200).json({ status: true, msg: "Notes Deletion (D) Route" });
  };
}

export default NotesController;
