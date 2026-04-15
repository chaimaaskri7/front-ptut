import { API_BASE_URL } from './api-config'

export interface FavoriteCarrier {
  idPatient: number
  idTransporteur: number
  typeTransport: string // VSL, AMBULANCE, TAXI
}

export interface TransporteurOption {
  idtransporteur: number
  nom: string
  prenom: string
  tel: string
  mail: string
}

export interface FavoriteCarrierWithDetails extends FavoriteCarrier {
  nomTransporteur?: string
  prenomTransporteur?: string
  telephoneTransporteur?: string
  emailTransporteur?: string
}

export const favoriteCarrierService = {
  /**
   * Récupère les transporteurs favoris du patient
   */
  async getFavoriteCarriers(patientId: number): Promise<FavoriteCarrier[]> {
    const response = await fetch(`${API_BASE_URL}/patient-favori/patient/${patientId}`)
    if (!response.ok) throw new Error('Échec de la récupération des transporteurs favoris')
    return response.json()
  },

  /**
   * Définit un transporteur comme favori pour un type de transport
   */
  async setFavoriteCarrier(
    patientId: number,
    transporteurId: number,
    typeTransport: string
  ): Promise<FavoriteCarrier> {
    const response = await fetch(
      `${API_BASE_URL}/patient-favori/set?patientId=${patientId}&transporteurId=${transporteurId}&typeTransport=${typeTransport}`,
      { method: 'POST' }
    )
    if (!response.ok) throw new Error('Échec de la définition du transporteur favori')
    return response.json()
  },

  /**
   * Récupère tous les transporteurs disponibles
   */
  async getAllTransporteurs(): Promise<TransporteurOption[]> {
    const response = await fetch(`${API_BASE_URL}/transporteurs`)
    if (!response.ok) throw new Error('Échec de la récupération des transporteurs')
    return response.json()
  },

  /**
   * Récupère les transporteurs par type de transport
   */
  async getTransporteursByType(typeTransport: string): Promise<TransporteurOption[]> {
    const response = await fetch(`${API_BASE_URL}/transporteurs/type/${typeTransport}`)
    if (!response.ok) throw new Error(`Échec de la récupération des transporteurs pour le type ${typeTransport}`)
    return response.json()
  },

  /**
   * Supprime un transporteur favori
   */
  async removeFavoriteCarrier(patientId: number, typeTransport: string): Promise<void> {
    const response = await fetch(
      `${API_BASE_URL}/patient-favori/remove?patientId=${patientId}&typeTransport=${typeTransport}`,
      { method: 'DELETE' }
    )
    if (!response.ok) throw new Error('Échec de la suppression du transporteur favori')
  }
}
