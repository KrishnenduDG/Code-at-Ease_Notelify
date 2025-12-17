import NotesRepository from "../repository/notes.js";

class NotesController {
  static handleCreateNote = async (req, res) => {
    const { heading, content } = req.body;

    // Create the Note
    const newNote = await NotesRepository.createNote(
      heading,
      content,
      res.locals.uid
    );

    res.status(201).json({
      status: true,
      msg: "Note created successfully",
      id: newNote.note_id,
    });
  };

  static handleGetNote = async (req, res) => {
    const { id } = req.query;

    if (id) {
      const targetNote = await NotesRepository.findNote(res.locals.uid, id);

      if (!targetNote) {
        res.status(404).json({ status: false, msg: "Note not found" });
        return;
      }

      res
        .status(200)
        .json({ status: true, msg: "Note fetched", data: targetNote });
    } else {
      const allNotes = await NotesRepository.findAll(res.locals.uid);

      res
        .status(200)
        .json({ status: true, msg: "All notes fetched", data: allNotes });
    }
  };

  static handleUpdateNote = async (req, res) => {
    const { noteId, content, heading } = req.body;

    const data = {};

    if (content) data.content = content;

    if (heading) data.heading = heading;

    try {
      const updatedNote = await NotesRepository.updateNotes(
        noteId,
        res.locals.uid,
        data
      );
      res.status(200).json({ status: true, msg: "Note updated" });
    } catch (error) {
      res.status(404).json({ status: false, msg: "Note not found" });
    }
  };

  static handleDeleteNote = async (req, res) => {
    const { noteId } = req.body;

    try {
      await NotesRepository.deleteNote(res.locals.uid, noteId);
      res.status(200).json({ status: true, msg: "Note deleted" });
    } catch (error) {
      res.status(404).json({ status: false, msg: "Note not found" });
    }
  };
}

export default NotesController;
