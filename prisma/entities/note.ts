import { PrismaClient, Note } from '@prisma/client';

const prisma = new PrismaClient();

export default prisma.note;

export type { Note };
