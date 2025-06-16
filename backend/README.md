# Bank Backend API

## Deployment Instructions

### 1. Environment Variables
Set up the following environment variables in Vercel:

- `DATABASE_URL`: Your PostgreSQL database connection string
- `JWT_SECRET`: A secure random string for JWT signing
- `ADMIN_EMAIL`: Admin email for notifications
- `ADMIN_EMAIL_PASSWORD`: App password for email service

### 2. Database Setup
1. Create a PostgreSQL database (recommended: Neon, Supabase, or Railway)
2. Run migrations: `npx prisma db push`
3. Seed the database: `npx prisma db seed`

### 3. Deploy to Vercel
1. Connect your GitHub repository to Vercel
2. Set the root directory to `backend`
3. Add environment variables in Vercel dashboard
4. Deploy

### 4. API Endpoints
All endpoints are prefixed with `/api/`:

- `/api/auth/*` - Authentication routes
- `/api/transfer/*` - Money transfer routes
- `/api/atm/*` - ATM withdrawal routes
- `/api/admin/*` - Admin management routes
- `/api/fraud/*` - Fraud detection routes
- `/api/emergency-credit/*` - Emergency credit routes

### 5. Frontend Configuration
Update your frontend API calls to use the deployed backend URL:
```typescript
const API_URL = 'https://your-backend.vercel.app/api';
```