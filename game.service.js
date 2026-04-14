const { PrismaClient, GameStatus, ParticipantRole } = require('@prisma/client');

const prisma = new PrismaClient();

/**
 * מצרפת משתמש למשחק קיים
 * @param {number} userId - מזהה המשתמש
 * @param {number} gameId - מזהה המשחק
 * @throws {Error} - במקרה שהמשחק לא נמצא, התחיל, או שהמשתמש כבר רשום
 */
async function joinGame(userId, gameId) {
  //  אימות קיום המשחק וסטטוס  
  const game = await prisma.game.findUnique({
    where: { id: gameId },
    select: { status: true } 
  });

  if (!game) {
    throw new Error("Game not found.");
  }

  if (game.status !== GameStatus.WAITING) {
    throw new Error("Cannot join a game that has already started or finished."); 
  }

  //  בדיקה שהמשתמש לא רשום כבר  
  const existingParticipant = await prisma.gameParticipant.findUnique({
    where: {
      userId_gameId: { userId, gameId }
    }
  });

  if (existingParticipant) {
    throw new Error("User is already registered for this game."); 
  }

  //  רישום המשתמש בתור שחקן 
  return await prisma.gameParticipant.create({
    data: {
      userId,
      gameId,
      role: ParticipantRole.PLAYER
    }
  });
}

module.exports = { joinGame };