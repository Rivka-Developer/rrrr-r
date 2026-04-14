FROM node:18

# הגדרת תיקיית עבודה
WORKDIR /usr/src/app

# מעקף SSL לצורך הורדת חבילות בסביבה מסוננת
ENV NODE_TLS_REJECT_UNAUTHORIZED=0

# העתקת קבצי הגדרות והתקנה
COPY package*.json ./
RUN npm install

# העתקת תיקיית פריזמה ויצירת הקליינט
COPY prisma ./prisma/
RUN npx prisma generate

# העתקת שאר קבצי הפרויקט
COPY . .

# הרצת מיגרציות והפעלת הקובץ הראשי
CMD npx prisma migrate deploy && node main.js