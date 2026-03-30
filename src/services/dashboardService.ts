import { fetchData } from './api-config';

export interface DashboardStats {
  appointments: number;
  newPatients: number;
  operations: number;
  transportCost: number;
  income: number;
  [key: string]: any;
}

export const dashboardService = {
  getStats: async (): Promise<DashboardStats> => {
    try {
      return await fetchData<DashboardStats>('/dashboard/stats');
    } catch (error) {
      console.error('Erreur lors de la récupération des statistiques:', error);
      throw error;
    }
  },

  getChartData: async (): Promise<any> => {
    try {
      return await fetchData<any>('/dashboard/chart-data');
    } catch (error) {
      console.error('Erreur lors de la récupération des données du graphique:', error);
      throw error;
    }
  },

  getRatingData: async (): Promise<any> => {
    try {
      return await fetchData<any>('/dashboard/rating-data');
    } catch (error) {
      console.error('Erreur lors de la récupération des données de notation:', error);
      throw error;
    }
  },
};
