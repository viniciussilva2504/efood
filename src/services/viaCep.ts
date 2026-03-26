const VIACEP_URL = 'https://viacep.com.br/ws'

export type ViaCepResponse = {
  cep: string
  logradouro: string
  complemento: string
  bairro: string
  localidade: string
  uf: string
  erro?: boolean
}

export const fetchAddressByCep = async (cep: string): Promise<ViaCepResponse | null> => {
  const cleanCep = cep.replace(/\D/g, '')

  if (cleanCep.length !== 8) return null

  try {
    const response = await fetch(`${VIACEP_URL}/${cleanCep}/json/`)
    const data: ViaCepResponse = await response.json()

    if (data.erro) return null
    return data
  } catch {
    return null
  }
}
