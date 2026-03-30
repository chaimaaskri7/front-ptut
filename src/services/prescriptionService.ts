import { fetchData, postData, putData, deleteData } from './api-config';

export interface Prescription {
  id?: number;
  patientId: number;
  date: string;
  transportType: 'VSL' | 'Ambulance' | 'Taxi';
  status: 'Active' | 'Completed' | 'Cancelled';
  notes?: string;
  [key: string]: any;
}

export const prescriptionService = {
  getAllPrescriptions: async (): Promise<Prescription[]> => {
    try {
      return await fetchData<Prescription[]>('/prescriptions');
    } catch (error) {
      console.error('Erreur lors de la récupération des prescriptions:', error);
      throw error;
    }
  },

  getPrescriptionById: async (id: number): Promise<Prescription> => {
    try {
      return await fetchData<Prescription>(`/prescriptions/${id}`);
    } catch (error) {
      console.error(`Erreur lors de la récupération de la prescription ${id}:`, error);
      throw error;
    }
  },

  createPrescription: async (prescriptionData: Prescription): Promise<Prescription> => {
    try {
      return await postData<Prescription>('/prescriptions', prescriptionData);
    } catch (error) {
      console.error('Erreur lors de la création de la prescription:', error);
      throw error;
    }
  },

  updatePrescription: async (id: number, prescriptionData: Prescription): Promise<Prescription> => {
    try {
      return await putData<Prescription>(`/prescriptions/${id}`, prescriptionData);
    } catch (error) {
      console.error(`Erreur lors de la mise à jour de la prescription ${id}:`, error);
      throw error;
    }
  },

  deletePrescription: async (id: number): Promise<void> => {
    try {
      await deleteData(`/prescriptions/${id}`);
    } catch (error) {
      console.error(`Erreur lors de la suppression de la prescription ${id}:`, error);
      throw error;
    }
  },
};
