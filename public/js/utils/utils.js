const bcrypt = require('bcryptjs')
const moment = require('moment')

const tools = {
    secretGenerate: async (value) => {
        secret = await secretGenerate(value)
        return secret
    },
    encryptValue: async (value) => {
        const encryptedValue = encryptValue(value)
        return encryptedValue
    }
}

async function encryptValue(value) {
    const encryptedValue = bcrypt.hashSync(value)
    return encryptedValue
}

async function secretGenerate(value) {
    const todayDate = moment().format('L')
    console.log('Valor informado: ', value)
    value = (value,todayDate)
    console.log('Valor + data', value)
    const secret = encryptValue(value)
    return secret
}

module.exports = tools