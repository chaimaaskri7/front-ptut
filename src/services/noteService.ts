import apiClient from './api-config';

export interface Note {
  id?: number;
  patientId: number;
  title: string;
  content: string;
  date?: string;
  [key: string]: any;
}

export const noteService = {
  // Récupérer toutes les notes
  getAllNotes: async (): Promise<Note[]> => {
    try {
      const response = await apiClient.get('/notes');
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la récupération des notes:', error);
      throw error;
    }
  },

  // Récupérer une note par ID
  getNoteById: async (id: number): Promise<Note> => {
    try {
      const response = await apiClient.get(`/notes/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Erreur lors de la récupération de la note ${id}:`, error);
      throw error;
    }
  },

  // Créer une nouvelle note
  createNote: async (noteData: Note): Promise<Note> => {
    try {
      const response = await apiClient.post('/notes', noteData);
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la création de la note:', error);
      throw error;
    }
  },

  // Mettre à jour une note
  updateNote: async (id: number, noteData: Note): Promise<Note> => {
    try {
      const response = await apiClient.put(`/notes/${id}`, noteData);
      return response.data;
    } catch (error) {
      console.error(`Erreur lors de la mise à jour de la note ${id}:`, error);
      throw error;
    }
  },

  // Supprimer une note
  deleteNote: async (id: number): Promise<void> => {
    try {
      await apiClient.delete(`/notes/${id}`);
    } catch (error) {
      console.error(`Erreur lors de la suppression de la note ${id}:`, error);
      throw error;
    }
  },
};
