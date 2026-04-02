const API_BASE_URL = 'http://localhost:8081'

export interface Prescription {
  idprescription: number
  motifmedical: string
  typetransport: string
  dateprescription: string
  dategeneration: string
  idpatient: number
}

export const documentsService = {
  /**
   * Récupère toutes les prescriptions du patient
   */
  async getPrescriptions(patientId: number): Promise<Prescription[]> {
    const response = await fetch(`${API_BASE_URL}/prescriptions/patient/${patientId}`)
    if (!response.ok) throw new Error('Failed to fetch prescriptions')
    return response.json()
  },

  /**
   * Télécharge le PDF d'une prescription
   */
  async downloadPrescriptionPDF(prescriptionId: number, fileName: string): Promise<void> {
    try {
      const response = await fetch(`${API_BASE_URL}/prescriptions/${prescriptionId}/pdf`)
      
      if (!response.ok) {
        throw new Error('Failed to download PDF')
      }

      // Créer un blob et le télécharger
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = `${fileName}.pdf`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      window.URL.revokeObjectURL(url)
    } catch (err) {
      console.error('Error downloading PDF:', err)
      throw err
    }
  }
}
