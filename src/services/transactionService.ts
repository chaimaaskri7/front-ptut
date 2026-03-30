import { fetchData, postData, putData, deleteData } from './api-config';

export interface Transaction {
  id?: number;
  patientId: number;
  description: string;
  amount: number;
  status: 'completed' | 'pending' | 'cancelled';
  date: string;
  [key: string]: any;
}

export const transactionService = {
  getAllTransactions: async (): Promise<Transaction[]> => {
    try {
      return await fetchData<Transaction[]>('/transactions');
    } catch (error) {
      console.error('Erreur lors de la récupération des transactions:', error);
      throw error;
    }
  },

  getTransactionById: async (id: number): Promise<Transaction> => {
    try {
      return await fetchData<Transaction>(`/transactions/${id}`);
    } catch (error) {
      console.error(`Erreur lors de la récupération de la transaction ${id}:`, error);
      throw error;
    }
  },

  createTransaction: async (transactionData: Transaction): Promise<Transaction> => {
    try {
      return await postData<Transaction>('/transactions', transactionData);
    } catch (error) {
      console.error('Erreur lors de la création de la transaction:', error);
      throw error;
    }
  },

  updateTransaction: async (id: number, transactionData: Transaction): Promise<Transaction> => {
    try {
      return await putData<Transaction>(`/transactions/${id}`, transactionData);
    } catch (error) {
      console.error(`Erreur lors de la mise à jour de la transaction ${id}:`, error);
      throw error;
    }
  },

  deleteTransaction: async (id: number): Promise<void> => {
    try {
      await deleteData(`/transactions/${id}`);
    } catch (error) {
      console.error(`Erreur lors de la suppression de la transaction ${id}:`, error);
      throw error;
    }
  },
};
