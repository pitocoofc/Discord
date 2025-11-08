// bot.js
import { Client, GatewayIntentBits } from "discord.js";

// Cria o cliente do bot com permissões básicas
const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]
});

// Mostra no console quando o bot estiver online
client.on("ready", () => {
  console.log(`🤖 Bot logado como ${client.user.tag}`);
});

// Responde mensagens específicas
client.on("messageCreate", (msg) => {
  if (msg.author.bot) return;

  if (msg.content === "!ping") msg.reply("🏓 Pong!");
  if (msg.content === "!info") msg.reply("👻 Criado por Ghost!");
  if (msg.content === "!ajuda") msg.reply("Comandos disponíveis: !ping, !info, !ajuda");
});

// Faz login usando o token (puxado das variáveis do Render)
client.login(process.env.MTQzNTAyNTI4ODg2NDk4OTIzNQ.GJZXJz.cOEl0784y0tx9M2UAiHF8T847Kt2XHhmdCJND0);
