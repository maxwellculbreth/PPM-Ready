'use client'

import { useTransition } from 'react'
import { assignLead } from './actions'

type Agent = { id: string; name: string; role: string }

type Props = {
  leadId: string
  currentAgentId: string
  agents: Agent[]
}

export function AssignLeadForm({ leadId, currentAgentId, agents }: Props) {
  const [isPending, startTransition] = useTransition()

  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const agentId = e.target.value
    startTransition(() => {
      assignLead(leadId, agentId)
    })
  }

  return (
    <select
      defaultValue={currentAgentId}
      onChange={handleChange}
      disabled={isPending}
      style={{
        fontSize: '13px',
        padding: '4px 8px',
        borderRadius: '6px',
        border: '1px solid #d1d5db',
        background: isPending ? '#f9fafb' : 'white',
        color: '#374151',
        cursor: isPending ? 'wait' : 'pointer',
        minWidth: '140px',
      }}
    >
      <option value="">— Unassigned —</option>
      {agents.map((agent) => (
        <option key={agent.id} value={agent.id}>
          {agent.name}
        </option>
      ))}
    </select>
  )
}
