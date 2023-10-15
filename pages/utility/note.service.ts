import { PrismaClient } from '@prisma/client'
import note, { Note } from '../../prisma/entities/note'

const prisma = new PrismaClient()

//get all notes
export async function getNotes(): Promise<Note[]> {
    try {
        const notes = await note.findMany()
        return notes
    } catch (error) {
        await prisma.$disconnect()
        return []
    } finally {
        await prisma.$disconnect()
        process.exit(1)
    }
}

// Create a new note
export async function createNote(id: number, data: Note) {

    const { title, content, published } = data

    const newNote = await note.create({
        data: {
            title: title,
            content: content,
            published: published,
            author: {
                connect: {
                    id: id
                }
            }
        }
    })
    return newNote
}

// Read a note by ID
export async function readNoteById(id: number) {
    const foundNote = await note.findUnique({
        where: {
            id,
        },
    })
    console.log(foundNote)
}

// Update a note by ID
export async function updateNoteById(id: any, data: any) {
    const updatedNote = await note.update({
        where: {
            id,
        },
        data: data,
    })
    console.log(`Updated note with ID: ${updatedNote.id}`)
}

// Delete a note by ID
export async function deleteNoteById(id: any) {
    const deletedNote = await note.delete({
        where: {
            id,
        },
    })
    console.log(`Deleted note with ID: ${deletedNote.id}`)
}

// // Usage examples
// createNote()
// readNoteById(1)
// updateNoteById(1)
// deleteNoteById(1)
