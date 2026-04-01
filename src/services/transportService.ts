import { fetchData, postData, putData, deleteData } from './api-config';

export interface Transport {
  id?: number;
  transportType: 'VSL' | 'Ambulance' | 'Taxi';
  driver: string;
  vehicle?: string;
  phone?: string;
  status: 'Available' | 'Occupied' | 'Maintenance';
  [key: string]: any;
}

export const transportService = {
  getAllTransports: async (): Promise<Transport[]> => {
    try {
      return await fetchData<Transport[]>('/transports');
    } catch (error) {
      console.error('Erreur lors de la récupération des transports:', error);
      throw error;
    }
  },

  getTransportById: async (id: number): Promise<Transport> => {
    try {
      return await fetchData<Transport>(`/transports/${id}`);
    } catch (error) {
      console.error(`Erreur lors de la récupération du transport ${id}:`, error);
      throw error;
    }
  },

  createTransport: async (transportData: Transport): Promise<Transport> => {
    try {
      return await postData<Transport>('/transports', transportData);
    } catch (error) {
      console.error('Erreur lors de la création du transport:', error);
      throw error;
    }
  },

  updateTransport: async (id: number, transportData: Transport): Promise<Transport> => {
    try {
      return await putData<Transport>(`/transports/${id}`, transportData);
    } catch (error) {
      console.error(`Erreur lors de la mise à jour du transport ${id}:`, error);
      throw error;
    }
  },

  deleteTransport: async (id: number): Promise<void> => {
    try {
      await deleteData(`/transports/${id}`);
    } catch (error) {
      console.error(`Erreur lors de la suppression du transport ${id}:`, error);
      throw error;
    }
  },

  getTransportsByPatient: async (idpatient: number): Promise<Transport[]> => {
    try {
      return await fetchData<Transport[]>(`/transports/patient/${idpatient}`);
    } catch (error) {
      console.error(`Erreur lors de la récupération des transports du patient ${idpatient}:`, error);
      throw error;
    }
  },
};
