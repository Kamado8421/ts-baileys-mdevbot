# Bot de WhatsApp com TypeScript

Utizando API Baileys[](https://)

### Instalar dependências:

````bash
npm install
````

## Atenção

Antes de executar o projeto, configure o seu bot em `src/data/config.ts`

```typescript
import path from 'path';

// variáveis de configuração
export const PREFIX = "/"; // o bot só reponderá comandos com esse prefixo
export const BOT_NAME = "MDEV'BOT"; // edite o nome do seu bot
export const ICON_BOT_NAME = "©"; // emoji ou carácter especial que será exibido antes do nome do bot
export const WONER_NAME = "M'Dev Systems"; // seu nome de dono

// OBS: essa informação só pode ter 12 dígitos numéricos sem espaço: 55 + DDD + NÚMERO SEM O 9 inicial
export const PHONE_NUMBER_OWNER = "550012345678"; // sem esse campo o bot não saberá que é o dono que está mandando msg

// ativadores
export const NOTIFY_BOT_ONLINE = true; // avisa ao dono quando o bot for inicado.
export const GENERATE_QRCODE_TERMINAL = true; // gera o qrcode de conexão no terminal

export const TEMP_FOLDER_PATH = path.resolve(__dirname, '..', '..', 'assets', 'temp');
export const IMAGES_FOLDER_PATH = path.resolve(__dirname, '..', '..', 'assets', 'images');

// anti condições
export const ANTI_GROUP_ON = false; // se for grupo, o bot não responde
export const ANTI_PV_ON = false; // se for privado, o bot não responde


```



Compilar & Executar

```bash
npm run build 
```
```bash
npm start
```

Executar somente o nodejs

````bash
node dist/index.js
````

## Diretórios

Certifique-se de que o diretório`assets/` possui as psatas `assets/temp`, `assets/images` e `assets/qrcode`. Caso não haja, crie-os

## Baixe no Termux o ffmpeg
```bash
pkg install ffmpeg -y
```
Obs: caso esteja no windows, verifique na web como baixar e instalar o ffmpeg 


