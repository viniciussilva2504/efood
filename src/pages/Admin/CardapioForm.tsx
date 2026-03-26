import React, { useState } from 'react'
import type { CardapioItem } from '../../services/supabaseData'

type CardapioFormProps = {
  onSave: (data: CardapioItem) => void
  initialData?: Partial<CardapioItem>
  onCancel?: () => void
}

export default function CardapioForm({ onSave, initialData, onCancel }: CardapioFormProps): React.ReactElement {
  const [form, setForm] = useState<Partial<CardapioItem>>({
    nome: '',
    descricao: '',
    preco: 0,
    porcao: '',
    foto: '',
    ...initialData
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm((prev) => ({
      ...prev,
      [name]: name === 'preco' ? Number(value) : value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Ensure all required fields for CardapioItem
    onSave({
      id: form.id ?? Date.now(),
      nome: form.nome ?? '',
      descricao: form.descricao ?? '',
      preco: form.preco ?? 0,
      porcao: form.porcao ?? '',
      foto: form.foto ?? '',
      quantidade: form.quantidade
    })
  }

  return (
    <form onSubmit={handleSubmit} style={{ margin: '16px 0', background: '#f8f8f8', padding: 12, borderRadius: 8 }}>
      <h4>{initialData ? 'Editar Item' : 'Novo Item'}</h4>
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        <input name="nome" value={form.nome} onChange={handleChange} placeholder="Nome" required style={{ flex: 1 }} />
        <input name="preco" value={form.preco} onChange={handleChange} placeholder="Preço" type="number" min="0" step="0.01" style={{ width: 100 }} />
        <input name="porcao" value={form.porcao} onChange={handleChange} placeholder="Porção" style={{ flex: 1 }} />
        <input name="foto" value={form.foto} onChange={handleChange} placeholder="URL da Foto" style={{ flex: 2 }} />
      </div>
      <textarea name="descricao" value={form.descricao} onChange={handleChange} placeholder="Descrição" rows={2} style={{ width: '100%', marginTop: 8 }} />
      <div style={{ marginTop: 8 }}>
        <button type="submit">Salvar</button>
        {onCancel && <button type="button" onClick={onCancel} style={{ marginLeft: 8 }}>Cancelar</button>}
      </div>
    </form>
  )
}
