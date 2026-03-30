import apiClient from './api-config';

export interface Patient {
  id?: number;
  name: string;
  email: string;
  phone?: string;
  address?: string;
  [key: string]: any;
}

export const patientService = {
  // Récupérer tous les patients
  getAllPatients: async (): Promise<Patient[]> => {
    try {
      const response = await apiClient.get('/patients');
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la récupération des patients:', error);
      throw error;
    }
  },

  // Récupérer un patient par ID
  getPatientById: async (id: number): Promise<Patient> => {
    try {
      const response = await apiClient.get(`/patients/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Erreur lors de la récupération du patient ${id}:`, error);
      throw error;
    }
  },

  // Créer un nouveau patient
  createPatient: async (patientData: Patient): Promise<Patient> => {
    try {
      const response = await apiClient.post('/patients', patientData);
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la création du patient:', error);
      throw error;
    }
  },

  // Mettre à jour un patient
  updatePatient: async (id: number, patientData: Patient): Promise<Patient> => {
    try {
      const response = await apiClient.put(`/patients/${id}`, patientData);
      return response.data;
    } catch (error) {
      console.error(`Erreur lors de la mise à jour du patient ${id}:`, error);
      throw error;
    }
  },

  // Supprimer un patient
  deletePatient: async (id: number): Promise<void> => {
    try {
      await apiClient.delete(`/patients/${id}`);
    } catch (error) {
      console.error(`Erreur lors de la suppression du patient ${id}:`, error);
      throw error;
    }
  },
};
