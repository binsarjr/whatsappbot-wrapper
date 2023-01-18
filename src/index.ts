import dotenv from 'dotenv'
import { WhatsappClient } from './Facades/WhatsappClient'
import { Halo } from './Handler/HaloHandler'
dotenv.config()
// import { HaloHandler } from './Handler/Halo'

const client = new WhatsappClient({
  name: 'testing',
})

const halo1 = new Halo()
halo1.participants = [process.env?.JID_DEV || '']
console.log(halo1.participants, 'asdasd', process.env)
const halo2 = new Halo()
halo2.participants = []

client.addHandler(halo1)
client.addHandler(halo2)
client.start()
