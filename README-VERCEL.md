# Reward Campaign Admin

Place this folder at `D:\asian-paints\admin`, then run:

```bat
cd /d D:\asian-paints\admin
npm install
copy .env.example .env.local
npm run dev:windows
```

Open `http://localhost:5174`.

Local `.env.local`:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000
```

In the admin Vercel project, add:

```env
NEXT_PUBLIC_API_URL=https://YOUR-BACKEND.vercel.app
```

Do not include a trailing slash. After deploying the admin, update the backend project variable `ADMIN_URL` with the admin's permanent Vercel URL and redeploy the backend.
