'use server'

import { revalidatePath } from 'next/cache'
import { prisma } from '@/lib/prisma'

export async function assignLead(leadId: string, agentId: string) {
  if (!leadId) throw new Error('leadId is required')

  // Update the current agent on the lead
  await prisma.lead.update({
    where: { id: leadId },
    data: {
      agentId: agentId || null,
      // Auto-promote status from NEW to ASSIGNED when an agent is set
      status: agentId ? 'ASSIGNED' : 'NEW',
    },
  })

  // Write an assignment history record (only when actually assigning)
  if (agentId) {
    await prisma.assignment.create({
      data: { leadId, agentId },
    })
  }

  revalidatePath('/admin/leads')
}
