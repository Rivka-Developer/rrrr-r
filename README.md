# Game Management System - Backend Task

מערכת לניהול משחקים מבוססת Node.js ו-Prisma ORM.

## 🛠 טכנולוגיות
- **Runtime**: Node.js 18.
- **ORM**: Prisma.
- **DB**: PostgreSQL 15.
- **Infrastructure**: Docker & Docker Compose.

## 🚀 הרצה מהירה
יש להריץ את הפקודה הבאה מהתיקייה הראשית:
```bash
docker-compose up --build
הפקודה מקימה את מסד הנתונים, מעדכנת את הסכימה ומריצה את האפליקציה.

📋 עיקרי המערכת
Schema: מודל נתונים הכולל משתמשים, משחקים וטבלת קישור למשתתפים.

Logic: פונקציית joinGame הכוללת ולידציות על סטטוס המשחק וכפל רישום.

Automated Seeding: יצירת נתוני בדיקה ראשוניים (User & Game) עם ההפעלה.

הערה: הוגדרו מעקפי SSL ב-Dockerfile ובהרצה לצורך תאימות בסביבות מסוננות.
