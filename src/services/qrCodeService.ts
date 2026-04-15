import { API_BASE_URL } from './api-config'

export interface QRCode {
  id: number
  code: string
  scanned: boolean
  generatedAt: string
  expiresAt: string
  scannedAt?: string
  etape?: {
    id: number
    statut: string
    idetape: number
  }
}

export const qrCodeService = {
  /**
   * Récupère le QR code actuel ou en génère un nouveau s'il est expiré
   */
  async getCurrentQRCode(etapeId: number): Promise<QRCode> {
    const response = await fetch(`${API_BASE_URL}/qr-codes/current/${etapeId}`)
    if (!response.ok) throw new Error('Échec de la récupération du code QR actuel')
    return response.json()
  },

  /**
   * Récupère tous les QR codes d'une étape
   */
  async getQRCodesByEtape(etapeId: number): Promise<QRCode[]> {
    const response = await fetch(`${API_BASE_URL}/qr-codes/etape/${etapeId}`)
    if (!response.ok) throw new Error('Échec de la récupération des codes QR')
    return response.json()
  },

  /**
   * Marque un QR code comme scanné
   */
  async scanQRCode(code: string): Promise<QRCode> {
    const response = await fetch(`${API_BASE_URL}/qr-codes/scan?code=${code}`, {
      method: 'POST'
    })
    if (!response.ok) throw new Error('Échec de la lecture du code QR')
    return response.json()
  },

  /**
   * Génère un nouveau QR code pour une étape
   */
  async generateQRCode(etapeId: number, expirationMinutes: number = 120): Promise<QRCode> {
    const response = await fetch(
      `${API_BASE_URL}/qr-codes/generate?etapeId=${etapeId}&expirationMinutes=${expirationMinutes}`,
      { method: 'POST' }
    )
    if (!response.ok) throw new Error('Échec de la génération du code QR')
    return response.json()
  },

  /**
   * Vérifie si un QR code est expiré
   */
  async isExpired(qrCodeId: number): Promise<boolean> {
    const response = await fetch(`${API_BASE_URL}/qr-codes/${qrCodeId}/expired`)
    if (!response.ok) throw new Error('Échec de la vérification d\'expiration du code QR')
    return response.json()
  },

  /**
   * Récupère un QR code par ID
   */
  async getQRCodeById(qrCodeId: number): Promise<QRCode> {
    const response = await fetch(`${API_BASE_URL}/qr-codes/${qrCodeId}`)
    if (!response.ok) throw new Error('Échec de la récupération du code QR par ID')
    return response.json()
  }
}
