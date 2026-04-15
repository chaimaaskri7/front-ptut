import { fetchData, postData, putData, deleteData } from './api-config';

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
      return await fetchData<Patient[]>('/patients');
    } catch (error) {
      console.error('Erreur lors de la récupération des patients:', error);
      throw error;
    }
  },

  // Récupérer un patient par ID
  obtenirPatientParId: async (id: number): Promise<Patient> => {
    try {
      return await fetchData<Patient>(`/patients/${id}`);
    } catch (error) {
      console.error(`Erreur lors de la récupération du patient ${id}:`, error);
      throw error;
    }
  },

  // Créer un nouveau patient
  creerPatient: async (patientData: Patient): Promise<Patient> => {
    try {
      return await postData<Patient>('/patients', patientData);
    } catch (error) {
      console.error('Erreur lors de la création du patient:', error);
      throw error;
    }
  },

  // Mettre à jour un patient
  mettreAJourPatient: async (id: number, patientData: Patient): Promise<Patient> => {
    try {
      return await putData<Patient>(`/patients/${id}`, patientData);
    } catch (error) {
      console.error(`Erreur lors de la mise à jour du patient ${id}:`, error);
      throw error;
    }
  },

  // Supprimer un patient
  supprimerPatient: async (id: number): Promise<void> => {
    try {
      await deleteData(`/patients/${id}`);
    } catch (error) {
      console.error(`Erreur lors de la suppression du patient ${id}:`, error);
      throw error;
    }
  },
};
