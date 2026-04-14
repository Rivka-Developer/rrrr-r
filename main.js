const { PrismaClient, GameStatus } = require('@prisma/client');
const { joinGame } = require('./game.service');

const prisma = new PrismaClient();

async function main() {
  try {
    // התחברות למסד הנתונים 
    console.log("--- Initializing Game System ---");
    await prisma.$connect();
    console.log("Connected to PostgreSQL.");

    // יצירת נתוני דמי  
    console.log("Seeding dummy data...");

    // שימוש ב-upsert במקום create מונע קריסה אם המייל כבר קיים במערכת
    const user = await prisma.user.upsert({
      where: { email: "rivka@example.com" },
      update: {}, // אם קיים, אל תשנה כלום
      create: {
        name: "Rivka Developer",
        email: "rivka@example.com",
      },
    });

    const game = await prisma.game.create({
      data: {
        status: GameStatus.WAITING, 
      },
    });

    console.log(`Dummy Data Ready: User (ID: ${user.id}), Game (ID: ${game.id})`);

    //  הצטרפות למשחק 
    console.log("Attempting to join game...");
    await joinGame(user.id, game.id);

    console.log("Success: User joined game");

  } catch (error) {
    
    console.error(`Operation failed: ${error.message}`);
  } finally {
    // ניתוק בטוח מה-DB 
    await prisma.$disconnect();
    console.log("Disconnected from database.");
  }
}

main();