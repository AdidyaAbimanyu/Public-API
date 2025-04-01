import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(req, { params }) {
  const { id } = await params;

  try {
    const university = await prisma.university.findUnique({
      where: { id: Number(id) },
    });

    if (!university) {
      return Response.json({ error: 'University not found' }, { status: 404 });
    }

    return Response.json(university);
  } catch (error) {
    return Response.json({ error: 'Error fetching university' }, { status: 500 });
  }
}
