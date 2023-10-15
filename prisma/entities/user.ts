import { PrismaClient, User } from '@prisma/client';

export const prisma = new PrismaClient();

export default prisma.user;

export type { User };
