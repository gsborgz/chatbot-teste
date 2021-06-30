import TelegramBot from "node-telegram-bot-api";

const token = '1880537184:AAFOniUQyOl7RLMMKhBi-rAABHsV1qrXj4E';
const bot = new TelegramBot(token, { polling: true });

bot.on('message', message => {

	const chatId = message.chat.id;
	const userName = message.from ? message.from.first_name : 'Bunda Mole';
	const messageText = (message.text)?.toLowerCase();

	if (messageText?.includes('olá')) {

		bot.sendMessage(chatId, `Seja bem vindo ${userName}!`);
	}
	else if (messageText?.includes('ajuda')) {

		bot.sendMessage(chatId, 'Vish filhão, se vira.');
	}
	else {

		bot.sendMessage(chatId, 'Vaza');
	}

	return true;
});
