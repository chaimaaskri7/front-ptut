import { fetchData, postData, putData, deleteData } from './api-config';

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
      return await fetchData<Evaluation[]>('/evaluations');
    } catch (error) {
      console.error('Erreur lors de la récupération des évaluations:', error);
      throw error;
    }
  },

  // Récupérer une évaluation par ID
  getEvaluationById: async (id: number): Promise<Evaluation> => {
    try {
      return await fetchData<Evaluation>(`/evaluations/${id}`);
    } catch (error) {
      console.error(`Erreur lors de la récupération de l'évaluation ${id}:`, error);
      throw error;
    }
  },

  // Créer une nouvelle évaluation
  createEvaluation: async (evaluationData: Evaluation): Promise<Evaluation> => {
    try {
      return await postData<Evaluation>('/evaluations', evaluationData);
    } catch (error) {
      console.error('Erreur lors de la création de l\'évaluation:', error);
      throw error;
    }
  },

  // Mettre à jour une évaluation
  updateEvaluation: async (id: number, evaluationData: Evaluation): Promise<Evaluation> => {
    try {
      return await putData<Evaluation>(`/evaluations/${id}`, evaluationData);
    } catch (error) {
      console.error(`Erreur lors de la mise à jour de l'évaluation ${id}:`, error);
      throw error;
    }
  },

  // Supprimer une évaluation
  deleteEvaluation: async (id: number): Promise<void> => {
    try {
      await deleteData(`/evaluations/${id}`);
    } catch (error) {
      console.error(`Erreur lors de la suppression de l'évaluation ${id}:`, error);
      throw error;
    }
  },
};
