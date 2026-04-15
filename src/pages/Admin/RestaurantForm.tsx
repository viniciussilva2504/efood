
import React, { useState } from 'react'

export interface RestaurantFormData {
  titulo: string
  tipo: string
  capa: string
  descricao: string
  foto: string
  destacado: boolean
  avaliacao: number
}

type RestaurantFormProps = {
  onSave: (data: RestaurantFormData) => void
  initialData?: RestaurantFormData
  onCancel?: () => void
}

export default function RestaurantForm({ onSave, initialData, onCancel }: RestaurantFormProps): React.JSX.Element {
  const [form, setForm] = useState<RestaurantFormData>(
    initialData || {
      titulo: '',
      tipo: '',
      capa: '',
      descricao: '',
      foto: '',
      destacado: false,
      avaliacao: 0
    }
  )

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked
      setForm((prev) => ({
        ...prev,
        [name]: checked
      }))
    } else {
      setForm((prev) => ({
        ...prev,
        [name]: value
      }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSave(form)
  }

  return (
    <form onSubmit={handleSubmit} style={{ margin: '24px 0', background: '#f8f8f8', padding: 16, borderRadius: 8 }}>
      <h3>{initialData ? 'Edit Restaurant' : 'New Restaurant'}</h3>
      <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
        <input name="titulo" value={form.titulo} onChange={handleChange} placeholder="Name" required style={{ flex: 1 }} />
        <input name="tipo" value={form.tipo} onChange={handleChange} placeholder="Type" required style={{ flex: 1 }} />
        <input name="capa" value={form.capa} onChange={handleChange} placeholder="Cover URL" required style={{ flex: 2 }} />
        <input name="foto" value={form.foto} onChange={handleChange} placeholder="Photo URL" required style={{ flex: 2 }} />
        <input name="avaliacao" value={form.avaliacao} onChange={handleChange} placeholder="Rating" type="number" min="0" max="5" step="0.1" style={{ width: 80 }} />
        <label style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          <input type="checkbox" name="destacado" checked={form.destacado} onChange={handleChange} /> Featured
        </label>
      </div>
      <textarea name="descricao" value={form.descricao} onChange={handleChange} placeholder="Description" rows={2} style={{ width: '100%', marginTop: 8 }} />
      <div style={{ marginTop: 12 }}>
        <button type="submit">Save</button>
        {onCancel && <button type="button" onClick={onCancel} style={{ marginLeft: 8 }}>Cancel</button>}
      </div>
    </form>
  )
}
