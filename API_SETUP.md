# Configuration Frontend - Backend Integration

## 📋 Résumé

Ce guide explique comment utiliser les services API pour communiquer avec le backend Spring Boot.

## 🚀 Configuration

### 1. URL de base du backend

**Fichier `.env`** :
```
VITE_API_URL=http://localhost:8080/api
```

Le fichier `.env.example` contient la template.

### 2. Installation des dépendances

Axios a déjà été installé :
```bash
npm install axios
```

## 📁 Structure des services

```
src/services/
├── api-config.ts         # Configuration Axios
├── patientService.ts     # Service pour les Patients
├── evaluationService.ts  # Service pour les Évaluations
├── noteService.ts        # Service pour les Notes
```

## 🔌 Usage des services

### Exemple : Récupérer les patients

```typescript
import { patientService } from '@/services/patientService';

// Dans le composant
const patients = ref([]);
const loading = ref(false);
const error = ref(null);

const fetchPatients = async () => {
  loading.value = true;
  try {
    const data = await patientService.getAllPatients();
    patients.value = data;
  } catch (err) {
    error.value = 'Erreur lors de la récupération';
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  fetchPatients();
});
```

## 🔗 Endpoints disponibles

### Patients
- `GET /patients` - Récupérer tous les patients
- `GET /patients/{id}` - Récupérer un patient
- `POST /patients` - Créer un patient
- `PUT /patients/{id}` - Mettre à jour un patient
- `DELETE /patients/{id}` - Supprimer un patient

### Évaluations
- `GET /evaluations` - Récupérer toutes les évaluations
- `GET /evaluations/{id}` - Récupérer une évaluation
- `POST /evaluations` - Créer une évaluation
- `PUT /evaluations/{id}` - Mettre à jour une évaluation
- `DELETE /evaluations/{id}` - Supprimer une évaluation

### Notes
- `GET /notes` - Récupérer toutes les notes
- `GET /notes/{id}` - Récupérer une note
- `POST /notes` - Créer une note
- `PUT /notes/{id}` - Mettre à jour une note
- `DELETE /notes/{id}` - Supprimer une note

## 📝 Fonctions disponibles dans chaque service

Chaque service a les mêmes méthodes :

```typescript
// Patients
patientService.getAllPatients()       // Récupérer tous
patientService.getPatientById(id)     // Récupérer un
patientService.createPatient(data)    // Créer
patientService.updatePatient(id, data) // Mettre à jour
patientService.deletePatient(id)      // Supprimer

// Même structure pour Evaluations et Notes
```

## 🔐 Authentification (JWT)

Le fichier `api-config.ts` ajoute automatiquement le token JWT du localStorage :

```typescript
// Le token est automatiquement ajouté si présent
const token = localStorage.getItem('authToken');
if (token) {
  config.headers.Authorization = `Bearer ${token}`;
}
```

## 🛠️ Lancer le backend

```bash
cd c:\Users\user\Downloads\BackendCareWay
./mvnw spring-boot:run
```

Le backend tournera sur `http://localhost:8080`

## 📌 Branche de travail

La branche `chayma` dans le backend (https://github.com/Joris-be/BackendCareWay.git) doit être utilisée pour les modifications du backend.

## ✅ Composants déjà mis à jour

- ✅ PatientsList.vue - Utilise l'API pour récupérer les patients

## 📌 TODO - Composants à mettre à jour

Liste des composants qui utiliseraient les endpoints du backend :

- [ ] PrescriptionsList.vue - GET /prescriptions (à créer)
- [ ] Dashboard.vue - GET /dashboard (à créer)
- [ ] transactions/Transactions.vue - GET /transactions (à créer)
- [ ] patient/QRCode.vue - POST pour générer QR
- [ ] patient/Notifications.vue - GET /notifications (à créer)

## 🐛 Dépannage

### "CORS error"
- Vérifier que le backend est sur `http://localhost:8080`
- Ajouter une configuration CORS au backend si nécessaire

### "Cannot find module '@/services'"
- Vérifier que les fichiers services sont dans `src/services/`
- Vérifier l'import path

### "API URL non définie"
- Créer un fichier `.env` avec `VITE_API_URL=http://localhost:8080/api`
