# CareWay - Installation et Test

## Architecture Front-Back

Le projet est complètement lié :
- **Frontend** : Vue 3 + TypeScript avec Fetch API
- **Backend** : Spring Boot avec controllers, services, DTOs

## Installation Backend

1. Ouvrir `BackendCareWay` dans VSCode
2. S'assurer d'avoir Java 17+ et Maven

```bash
cd c:\Users\user\Downloads\BackendCareWay
./mvnw spring-boot:run
```

Le backend tournera sur : `http://localhost:8080`

## Installation Frontend

1. Ouvrir `front-ptut` dans VSCode
2. Installer les dépendances

```bash
cd c:\Users\user\Downloads\front-ptut
npm install
npm run dev
```

Le frontend tournera sur : `http://localhost:5173`

## Configuration

Le frontend cherchera l'API sur : `http://localhost:8080/api`

Fichier `.env` du frontend :
```
VITE_API_URL=http://localhost:8080/api
```

## Endpoints disponibles

### Patients
- GET /api/patients
- GET /api/patients/{id}
- POST /api/patients
- PUT /api/patients/{id}
- DELETE /api/patients/{id}

### Prescriptions
- GET /api/prescriptions
- GET /api/prescriptions/{id}
- POST /api/prescriptions
- PUT /api/prescriptions/{id}
- DELETE /api/prescriptions/{id}

### Transports
- GET /api/transports
- GET /api/transports/{id}
- POST /api/transports
- PUT /api/transports/{id}
- DELETE /api/transports/{id}

### Transactions
- GET /api/transactions
- GET /api/transactions/{id}
- POST /api/transactions
- PUT /api/transactions/{id}
- DELETE /api/transactions/{id}

### Notifications
- GET /api/notifications
- GET /api/notifications/{id}
- POST /api/notifications
- PUT /api/notifications/{id}
- PUT /api/notifications/{id}/read
- DELETE /api/notifications/{id}

### Evaluations
- GET /api/evaluations
- GET /api/evaluations/{id}
- POST /api/evaluations
- PUT /api/evaluations/{id}
- DELETE /api/evaluations/{id}

### Notes
- GET /api/notes
- GET /api/notes/{id}
- POST /api/notes
- PUT /api/notes/{id}
- DELETE /api/notes/{id}

### Dashboard
- GET /api/dashboard/stats

## Branche de travail

Backend : branche `chayma`

```bash
cd BackendCareWay
git checkout chayma
git pull
```

## Composants liés au backend

- PatientsList.vue - Récupère les patients du backend
- PrescriptionsList.vue - Récupère les prescriptions
- Dashboard.vue - Récupère les stats
- Transactions.vue - Récupère les transactions

## Code hyper simple

Tous les services utilisent Fetch API (natif) :

```typescript
const data = await fetchData('/patients');
```

Les services sont dans `src/services/` :
- api-config.ts
- patientService.ts
- prescriptionService.ts
- transportService.ts
- transactionService.ts
- notificationService.ts
- evaluationService.ts
- noteService.ts
- dashboardService.ts

## CORS

CORS est configuré dans `CorsConfig.java` pour les domaines :
- http://localhost:3000
- http://localhost:5173
- http://127.0.0.1:5173
