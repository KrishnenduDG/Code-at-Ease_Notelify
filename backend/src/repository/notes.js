import { prisma } from "../utils/prisma.js";

class NoteRepository {
  static createNote = (heading, content, userId) =>
    prisma.note.create({ data: { content, heading, userId } });

  static findNote = (userId, noteId) =>
    prisma.note.findFirst({
      where: { note_id: noteId, userId },
      select: { heading: true, content: true },
    });

  static findAll = (userId) =>
    prisma.note.findMany({
      where: { userId },

      select: { note_id: true, heading: true, content: true },
    });

  static deleteNote = (userId, noteId) =>
    prisma.note.delete({ where: { userId, note_id: noteId } });

  static updateNotes = (noteId, userId, data) =>
    prisma.note.update({
      where: { note_id: noteId, userId },
      data,
    });
}

export default NoteRepository;
