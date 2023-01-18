import { AnyMessageContent, WASocket, delay, proto } from '@adiwajshing/baileys'

export const getMessageCaption = (message: proto.IMessage) =>
  message.ephemeralMessage?.message?.extendedTextMessage?.text ||
  message.extendedTextMessage?.text ||
  ''

/**
 * Memvalidasi apakah pola atau subjek cocok.
 * Fungsi ini menggunakan ekspresi reguler atau pencocokan string standar untuk
 * memvalidasi pola atau subjek.
 *
 * @param pattern - Pola yang akan divalidasi. Bisa berupa ekspresi reguler atau
 * string standar.
 * @param subject - Subjek yang akan divalidasi.
 * @returns true jika pola atau subjek cocok, false jika tidak.
 */
export const validatePattern = (pattern: string | RegExp, subject: string) => {
  if (pattern instanceof RegExp) {
    return pattern.test(subject)
  } else {
    return pattern == subject
  }
}

export function randomInteger(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export const sendMessageWTyping = async (
  msg: AnyMessageContent,
  jid: string,
  sock: WASocket,
) => {
  await sock.presenceSubscribe(jid)
  await delay(randomInteger(200, 500))

  await sock.sendPresenceUpdate('composing', jid)
  await delay(randomInteger(1500, 3000))

  await sock.sendPresenceUpdate('paused', jid)

  await sock.sendMessage(jid, msg)
}
