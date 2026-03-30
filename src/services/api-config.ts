// Configuration de l'URL de base du backend
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080';

// Fonction pour créer les headers avec le token JWT si disponible
const getHeaders = () => {
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
  };

  const token = localStorage.getItem('authToken');
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  return headers;
};

// Fonction générique pour les requêtes GET
export const fetchData = async <T>(endpoint: string): Promise<T> => {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'GET',
      headers: getHeaders(),
      credentials: 'include',
    });

    if (!response.ok) {
      throw new Error(`Erreur ${response.status}: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`Erreur GET ${endpoint}:`, error);
    throw error;
  }
};

// Fonction générique pour les requêtes POST
export const postData = async <T>(endpoint: string, data: any): Promise<T> => {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify(data),
      credentials: 'include',
    });

    if (!response.ok) {
      throw new Error(`Erreur ${response.status}: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`Erreur POST ${endpoint}:`, error);
    throw error;
  }
};

// Fonction générique pour les requêtes PUT
export const putData = async <T>(endpoint: string, data: any): Promise<T> => {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'PUT',
      headers: getHeaders(),
      body: JSON.stringify(data),
      credentials: 'include',
    });

    if (!response.ok) {
      throw new Error(`Erreur ${response.status}: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`Erreur PUT ${endpoint}:`, error);
    throw error;
  }
};

// Fonction générique pour les requêtes DELETE
export const deleteData = async (endpoint: string): Promise<void> => {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'DELETE',
      headers: getHeaders(),
      credentials: 'include',
    });

    if (!response.ok) {
      throw new Error(`Erreur ${response.status}: ${response.statusText}`);
    }
  } catch (error) {
    console.error(`Erreur DELETE ${endpoint}:`, error);
    throw error;
  }
};

export { API_BASE_URL };
