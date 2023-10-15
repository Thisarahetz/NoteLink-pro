import { NextApiRequest, NextApiResponse } from 'next';
import { createNote, deleteNoteById, getNotes, readNoteById, updateNoteById } from '../../utility/note.service';


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    switch (req.method) {
        case 'GET':
            const notes = await getNotes();
            res.status(200).json(notes);
            break;
        case 'POST':
            const { title, content } = req.body;
            const result = await createNote(title, content);
            res.status(201).json({
                message: 'Note created successfully',
                note: result,
            });
            break;
        case 'PUT':
            const { id, newTitle, newContent } = req.body;
            await updateNoteById(
                { _id: id },
                { $set: { title: newTitle, content: newContent } }
            );
            res.status(200).json({ message: 'Note updated successfully' });
            break;
        case 'DELETE':
            const { id: noteId } = req.body;
            await deleteNoteById({ _id: noteId });
            res.status(200).json({ message: 'Note deleted successfully' });
            break;
        default:
            res.status(405).json({ message: 'Method not allowed' });
            break;
    }
}
