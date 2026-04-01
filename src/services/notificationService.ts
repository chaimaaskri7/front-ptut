import { fetchData, postData, putData, deleteData } from './api-config';

export interface Notification {
  id?: number;
  patientId?: number;
  title: string;
  message: string;
  type: 'info' | 'warning' | 'error' | 'success';
  read: boolean;
  date: string;
  [key: string]: any;
}

export const notificationService = {
  getAllNotifications: async (): Promise<Notification[]> => {
    try {
      return await fetchData<Notification[]>('/notifications');
    } catch (error) {
      console.error('Erreur lors de la récupération des notifications:', error);
      throw error;
    }
  },

  getNotificationById: async (id: number): Promise<Notification> => {
    try {
      return await fetchData<Notification>(`/notifications/${id}`);
    } catch (error) {
      console.error(`Erreur lors de la récupération de la notification ${id}:`, error);
      throw error;
    }
  },

  createNotification: async (notificationData: Notification): Promise<Notification> => {
    try {
      return await postData<Notification>('/notifications', notificationData);
    } catch (error) {
      console.error('Erreur lors de la création de la notification:', error);
      throw error;
    }
  },

  updateNotification: async (id: number, notificationData: Notification): Promise<Notification> => {
    try {
      return await putData<Notification>(`/notifications/${id}`, notificationData);
    } catch (error) {
      console.error(`Erreur lors de la mise à jour de la notification ${id}:`, error);
      throw error;
    }
  },

  markAsRead: async (id: number): Promise<Notification> => {
    try {
      return await putData<Notification>(`/notifications/${id}/read`, {});
    } catch (error) {
      console.error(`Erreur lors du marquage de la notification ${id} comme lue:`, error);
      throw error;
    }
  },

  deleteNotification: async (id: number): Promise<void> => {
    try {
      await deleteData(`/notifications/${id}`);
    } catch (error) {
      console.error(`Erreur lors de la suppression de la notification ${id}:`, error);
      throw error;
    }
  },

  getNotificationsByPatient: async (patientId: number): Promise<Notification[]> => {
    try {
      return await fetchData<Notification[]>(`/notifications/patient/${patientId}`);
    } catch (error) {
      console.error(`Erreur lors de la récupération des notifications du patient ${patientId}:`, error);
      throw error;
    }
  },
};
