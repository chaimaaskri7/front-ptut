import apiClient from './api-config';

export interface Evaluation {
  id?: number;
  patientId: number;
  date: string;
  notes?: string;
  score?: number;
  [key: string]: any;
}

export const evaluationService = {
  // Récupérer toutes les évaluations
  getAllEvaluations: async (): Promise<Evaluation[]> => {
    try {
      const response = await apiClient.get('/evaluations');
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la récupération des évaluations:', error);
      throw error;
    }
  },

  // Récupérer une évaluation par ID
  getEvaluationById: async (id: number): Promise<Evaluation> => {
    try {
      const response = await apiClient.get(`/evaluations/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Erreur lors de la récupération de l'évaluation ${id}:`, error);
      throw error;
    }
  },

  // Créer une nouvelle évaluation
  createEvaluation: async (evaluationData: Evaluation): Promise<Evaluation> => {
    try {
      const response = await apiClient.post('/evaluations', evaluationData);
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la création de l\'évaluation:', error);
      throw error;
    }
  },

  // Mettre à jour une évaluation
  updateEvaluation: async (id: number, evaluationData: Evaluation): Promise<Evaluation> => {
    try {
      const response = await apiClient.put(`/evaluations/${id}`, evaluationData);
      return response.data;
    } catch (error) {
      console.error(`Erreur lors de la mise à jour de l'évaluation ${id}:`, error);
      throw error;
    }
  },

  // Supprimer une évaluation
  deleteEvaluation: async (id: number): Promise<void> => {
    try {
      await apiClient.delete(`/evaluations/${id}`);
    } catch (error) {
      console.error(`Erreur lors de la suppression de l'évaluation ${id}:`, error);
      throw error;
    }
  },
};
