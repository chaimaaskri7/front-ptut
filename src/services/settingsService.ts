import { API_BASE_URL } from './api-config'

export interface ChangePasswordRequest {
  currentPassword: string
  newPassword: string
  confirmPassword: string
}

export const settingsService = {
  /**
   * Récupère les information du patient
   */
  async getPatientInfo(patientId: number) {
    const response = await fetch(`${API_BASE_URL}/patients/${patientId}`)
    if (!response.ok) throw new Error('Échec de la récupération des infos du patient')
    return response.json()
  },

  /**
   * Change le mot de passe du patient
   */
  async changePassword(patientId: number, currentPassword: string, newPassword: string): Promise<string> {
    const response = await fetch(`${API_BASE_URL}/patients/${patientId}/change-password`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        patientId,
        currentPassword,
        newPassword,
        confirmPassword: newPassword,
      }),
    })

    const text = await response.text()

    if (!response.ok) {
      throw new Error(text || 'Échec du changement de mot de passe')
    }

    return text
  }
}
