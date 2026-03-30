# CareWay - Frontend & Backend Integration

## 🚀 Démarrage Rapide

### 1. Backend (Spring Boot)
```bash
cd c:\Users\user\Downloads\BackendCareWay
cmd /c "mvnw spring-boot:run"
```
**URL:** http://localhost:8080

### 2. Frontend (Vue 3 + Vite)
```bash
cd c:\Users\user\Downloads\front-ptut
npm run dev
```
**URL:** http://localhost:5173 (ou 5174 si occupé)

---

## ✅ État d'Intégration

### Backend (Branche: `chayma`)
- ✅ CORS configuré pour tous les endpoints (`/**`)
- ✅ Endpoints actifs:
  - GET `/patients` - Récupère tous les patients
  - GET `/prescriptions` - Récupère toutes les prescriptions
  - GET `/transports` - Récupère tous les transports
  - GET `/transactions` - Récupère toutes les transactions
  - GET `/notifications` - Récupère toutes les notifications
  - GET `/evaluations` - Récupère toutes les évaluations
  - GET `/notes` - Récupère toutes les notes

### Frontend (Branche: `main`)
- ✅ Services (utilise Fetch API natif):
  - `patientService`
  - `prescriptionService`
  - `transportService`
  - `transactionService`
  - `notificationService`
  - `evaluationService`
  - `noteService`

- ✅ Composants Connectés:
  - `PatientsList.vue` - Liste des patients (tableau dynamique)
  - `PrescriptionsList.vue` - Liste des prescriptions (tableau dynamique)
  - `Dashboard.vue` - Statistiques (calculate à partir des vraies données)
  - `MyTransports.vue` - Mes transports (affiche les transports du backend)
  - `Notifications.vue` - Notifications (affiche les notifications du backend)
  - `Transactions.vue` - Transactions (tableau avec filtres)

- 🔧 Page de Test:
  - Accès via: http://localhost:5174/test
  - Affiche toutes les données brutes du backend avec JSON debug

---

## 📊 Pages Disponibles

| Route | Composant | Status |
|-------|-----------|--------|
| `/dashboard` | Dashboard.vue | ✅ Connecté |
| `/patients` | PatientsList.vue | ✅ Connecté |
| `/prescriptions` | PrescriptionsList.vue | ✅ Connecté |
| `/patient/transports` | MyTransports.vue | ✅ Connecté |
| `/patient/notifications` | Notifications.vue | ✅ Connecté |
| `/patient/transactions` | Transactions.vue | ✅ Connecté |
| `/test` | TestDataDisplay.vue | ✅ Debug page |

---

## 🔧 Architecture

### Structure des Données

#### Patient (du Backend)
```json
{
  "idpatient": 1,
  "prenom": "Jean",
  "nom": "Dupont",
  "datenaiss": "1985-03-14T23:00:00.000Z",
  "genre": "M",
  "mail": "jean.dupont@gmail.com",
  "tel": "0612345678",
  "adresse": "12 rue de la Paix, Paris",
  "pays": "France",
  "nss": "185037512345678"
}
```

#### Prescription (du Backend)
```json
{
  "idprescription": 1,
  "motifmedical": "Consultation cardiologue",
  "typetransport": "Ambulance",
  "dateprescription": "2025-03-30T00:00:00.000Z",
  "dategeneration": "2025-03-25T00:00:00.000Z",
  "medecin": "Dr Martin",
  "idpatient": 1
}
```

#### Transport (du Backend)
```json
{
  "idtransport": 1,
  "datetransport": "2025-03-30T09:00:00.000Z",
  "lieudepart": "Domicile",
  "lieuarrive": "Hôpital Central",
  "typetransport": "Ambulance"
}
```

---

## 🔗 Git Repos

- **Backend:** https://github.com/Joris-be/BackendCareWay.git (branche: `chayma`)
- **Frontend:** Local (~front-ptut, branche: `main`)

---

## 📝 Commandes Utiles

### Backend
```bash
# Compiler
cd BackendCareWay && mvnw clean compile

# Lancer en dev
mvnw spring-boot:run

# Package JAR
mvnw clean package -DskipTests
```

### Frontend
```bash
# Installer dépendances
npm install

# Dev server
npm run dev

# Build prod
npm run build

# Preview prod build
npm run preview
```

---

## ⚠️ Notes Importantes

1. **CORS:** Configuré sur le backend pour accepter les requêtes depuis `http://localhost:5173`
2. **Base URL API:** `http://localhost:8080` (PAS de `/api` prefix nécessaire)
3. **Base de données:** H2 in-memory (les données sont réinitialisées à chaque redémarrage)
4. **Authentification:** À implémenter (actuellement pas de JWT check)

---

## ✨ Fonctionnalités Prêtes

- ✅ Affichage des patients en tableau dynamique
- ✅ Affichage des prescriptions avec statut coloré
- ✅ Affichage des transports avec détails
- ✅ Affichage des notifications
- ✅ Affichage des transactions avec statistiques
- ✅ Dashboard avec stats calculées

## 🚧 À Faire

- [ ] Implémentation CRUD complet (créer, modifier, supprimer)
- [ ] Authentification JWT
- [ ] Upload de documents
- [ ] Génération de QR codes
- [ ] Notifications en temps réel (WebSocket)
- [ ] Export PDF/Excel

---

**Date:** 30 Mars 2026  
**Équipe:** CareWay Development Team
