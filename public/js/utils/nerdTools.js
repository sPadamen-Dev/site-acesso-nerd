const bcrypt = require('bcryptjs')
const moment = require('moment')

const tools = {
    secretGenerate: async (value, encryptLevel) => {
        secret = await secretGenerate(value, encryptLevel)
        return secret
    },
    encryptValue: async (value , encryptLevel) => {
        const encryptedValue = encryptValue(value, encryptLevel)
        return encryptedValue
    }
}

async function encryptValue(value, encryptLevel) {
    const encryptedValue = bcrypt.hashSync(value, encryptLevel)
    return encryptedValue
}

async function secretGenerate(value, encryptLevel) {
    const todayDate = moment().format('L')
    value = value + todayDate
    const secret = await encryptValue(value, encryptLevel)
    return secret
}

module.exports = tools