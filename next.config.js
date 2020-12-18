const withPwa = require('next-pwa')

module.exports = withPwa({
    pwa:{
        dest:'public',
        register:true
    }
})