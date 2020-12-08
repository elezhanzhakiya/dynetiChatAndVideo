const CONFIG = {
    PORT: process.env.PORT || 3000,
    CHAT_NAMESPACE: '/vidoe-cgart',
    ORIGINS: process.env.ORIGINS || '*:*',
    KEY: 'unique'
}

module.exports = CONFIG;