import { fetchData, postData, putData, deleteData } from './api-config';

export interface Transaction {
  idremboursement?: number;
  patientId: number;
  description: string;
  montant: number;
  statutremboursement: 'Rembourse' | 'EN_ATTENTE' | 'Rejetée';
  dateremboursement: string;
  tauxprisencharge?: number;
  [key: string]: any;
}

export const transactionService = {
  getAllTransactions: async (): Promise<Transaction[]> => {
    try {
      return await fetchData<Transaction[]>('/remboursements');
    } catch (error) {
      console.error('Erreur lors de la récupération des remboursements:', error);
      throw error;
    }
  },

  getTransactionById: async (id: number): Promise<Transaction> => {
    try {
      return await fetchData<Transaction>(`/remboursements/${id}`);
    } catch (error) {
      console.error(`Erreur lors de la récupération du remboursement ${id}:`, error);
      throw error;
    }
  },

  createTransaction: async (transactionData: Transaction): Promise<Transaction> => {
    try {
      return await postData<Transaction>('/remboursements', transactionData);
    } catch (error) {
      console.error('Erreur lors de la création du remboursement:', error);
      throw error;
    }
  },

  updateTransaction: async (id: number, transactionData: Transaction): Promise<Transaction> => {
    try {
      return await putData<Transaction>(`/remboursements/${id}`, transactionData);
    } catch (error) {
      console.error(`Erreur lors de la mise à jour du remboursement ${id}:`, error);
      throw error;
    }
  },

  deleteTransaction: async (id: number): Promise<void> => {
    try {
      await deleteData(`/remboursements/${id}`);
    } catch (error) {
      console.error(`Erreur lors de la suppression du remboursement ${id}:`, error);
      throw error;
    }
  },

  getTransactionsByPatient: async (patientId: number): Promise<Transaction[]> => {
    try {
      return await fetchData<Transaction[]>(`/remboursements/patient/${patientId}`);
    } catch (error) {
      console.error(`Erreur lors de la récupération des remboursements du patient ${patientId}:`, error);
      throw error;
    }
  },
};
