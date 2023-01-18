import { MessageUpsertType, WAMessage } from '@adiwajshing/baileys'
import { MessageEvent } from '../../../Contracts/Events/MessageEvent'
import { HandlerArgs } from '../../../Contracts/IEventListener'
import { Pattern } from '../../../Contracts/Pattern'

export abstract class MessageUpsert extends MessageEvent implements Pattern {
  patterns: false | (string | RegExp) | (string | RegExp)[]=false
  type: MessageUpsertType | 'all' = 'all'
  abstract handler({}: HandlerArgs<{
    message: WAMessage
    type: MessageUpsertType
  }>): void | Promise<void>
}
