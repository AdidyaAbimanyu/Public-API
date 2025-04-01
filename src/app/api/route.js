import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const universities = await prisma.university.findMany();
    return Response.json(universities);
  } catch (error) {
    return Response.json({ error: 'Error fetching universities' }, { status: 500 });
  }
}
