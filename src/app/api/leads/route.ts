import { NextRequest } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(request: NextRequest) {
  let body: unknown

  try {
    body = await request.json()
  } catch {
    return Response.json({ error: 'Invalid JSON.' }, { status: 400 })
  }

  const { name, phone, email, moveDate, route } = body as Record<string, string>

  // Validate required fields
  const missing: string[] = []
  if (!name?.trim()) missing.push('name')
  if (!phone?.trim()) missing.push('phone')
  if (!email?.trim()) missing.push('email')

  if (missing.length > 0) {
    return Response.json(
      { error: `Missing required fields: ${missing.join(', ')}` },
      { status: 400 }
    )
  }

  // Basic email format check
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ error: 'Invalid email address.' }, { status: 400 })
  }

  try {
    const lead = await prisma.lead.create({
      data: {
        name: name.trim(),
        phone: phone.trim(),
        email: email.trim(),
        moveDate: moveDate?.trim() || null,
        route: route?.trim() || null,
        // status defaults to NEW via schema
      },
    })

    return Response.json({ success: true, id: lead.id }, { status: 201 })
  } catch (err) {
    console.error('[POST /api/leads]', err)
    return Response.json(
      { error: 'Failed to save lead. Try again.' },
      { status: 500 }
    )
  }
}
