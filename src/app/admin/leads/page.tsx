// NOTE: This page is currently unprotected.
// Auth middleware will be added in the next step.
// Do not expose this URL publicly until then.

import { prisma } from '@/lib/prisma'
import { LeadStatus } from '@prisma/client'
import { AssignLeadForm } from './assign-lead-form'

const STATUS_LABELS: Record<LeadStatus, string> = {
  NEW: 'New',
  ASSIGNED: 'Assigned',
  CONTACTED: 'Contacted',
  RESERVED: 'Reserved',
  COMPLETED: 'Completed',
  CLOSED: 'Closed',
}

const STATUS_COLORS: Record<LeadStatus, string> = {
  NEW: '#f59e0b',
  ASSIGNED: '#3b82f6',
  CONTACTED: '#8b5cf6',
  RESERVED: '#10b981',
  COMPLETED: '#6b7280',
  CLOSED: '#374151',
}

export default async function AdminLeadsPage() {
  const [leads, agents] = await Promise.all([
    prisma.lead.findMany({
      orderBy: { createdAt: 'desc' },
      include: { agent: { select: { id: true, name: true } } },
    }),
    prisma.user.findMany({
      where: { active: true },
      orderBy: { name: 'asc' },
      select: { id: true, name: true, role: true },
    }),
  ])

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', padding: '32px', maxWidth: '1100px', margin: '0 auto' }}>
      <div style={{ marginBottom: '24px' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 700, margin: 0 }}>Leads</h1>
        <p style={{ color: '#6b7280', margin: '4px 0 0', fontSize: '14px' }}>
          {leads.length} total · {leads.filter(l => l.status === 'NEW').length} new
        </p>
      </div>

      {leads.length === 0 ? (
        <p style={{ color: '#9ca3af', padding: '48px 0', textAlign: 'center' }}>
          No leads yet. Submit the intake form on the main site to create the first one.
        </p>
      ) : (
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid #e5e7eb', textAlign: 'left' }}>
              <th style={{ padding: '10px 12px', fontWeight: 600, color: '#374151' }}>Name</th>
              <th style={{ padding: '10px 12px', fontWeight: 600, color: '#374151' }}>Phone</th>
              <th style={{ padding: '10px 12px', fontWeight: 600, color: '#374151' }}>Email</th>
              <th style={{ padding: '10px 12px', fontWeight: 600, color: '#374151' }}>Move Date</th>
              <th style={{ padding: '10px 12px', fontWeight: 600, color: '#374151' }}>Route</th>
              <th style={{ padding: '10px 12px', fontWeight: 600, color: '#374151' }}>Status</th>
              <th style={{ padding: '10px 12px', fontWeight: 600, color: '#374151' }}>Agent</th>
              <th style={{ padding: '10px 12px', fontWeight: 600, color: '#374151' }}>Submitted</th>
            </tr>
          </thead>
          <tbody>
            {leads.map((lead) => (
              <tr key={lead.id} style={{ borderBottom: '1px solid #f3f4f6' }}>
                <td style={{ padding: '12px', fontWeight: 500 }}>{lead.name}</td>
                <td style={{ padding: '12px' }}>
                  <a href={`tel:${lead.phone}`} style={{ color: '#2563eb', textDecoration: 'none' }}>
                    {lead.phone}
                  </a>
                </td>
                <td style={{ padding: '12px', color: '#6b7280' }}>{lead.email}</td>
                <td style={{ padding: '12px', color: '#6b7280' }}>{lead.moveDate ?? '—'}</td>
                <td style={{ padding: '12px', color: '#6b7280', maxWidth: '200px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {lead.route ?? '—'}
                </td>
                <td style={{ padding: '12px' }}>
                  <span style={{
                    display: 'inline-block',
                    padding: '2px 10px',
                    borderRadius: '999px',
                    fontSize: '12px',
                    fontWeight: 600,
                    background: STATUS_COLORS[lead.status] + '20',
                    color: STATUS_COLORS[lead.status],
                  }}>
                    {STATUS_LABELS[lead.status]}
                  </span>
                </td>
                <td style={{ padding: '12px' }}>
                  <AssignLeadForm
                    leadId={lead.id}
                    currentAgentId={lead.agentId ?? ''}
                    agents={agents}
                  />
                </td>
                <td style={{ padding: '12px', color: '#9ca3af', fontSize: '12px', whiteSpace: 'nowrap' }}>
                  {new Date(lead.createdAt).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    hour: 'numeric',
                    minute: '2-digit',
                  })}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}
