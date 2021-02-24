const { DESTINATIONS } = require('./hosts')

const baseConfigBuilder = (incomingRequest, host, baseUrl = undefined) => {
    const base = baseUrl || host
    const config = {
        method: incomingRequest.method.toLowerCase(),
        url: base + incomingRequest.url,
    }
    const contentType = incomingRequest.header('Content-Type')
    if (contentType && contentType.includes('json')) {
        config["data"] = incomingRequest.body
    }
    return config
}

const configBuilders = {
    [DESTINATIONS.KNOWN_WORDS]: (incomingRequest, host) => {
        // todo middleware should auth and add user id to incoming request
        const userID = 1
        return baseConfigBuilder(incomingRequest, host, host + `/${userID}/words`)
    }
}

module.exports = (incomingRequest, destination, resolvedHost) => {
    const configBuilder = configBuilders[destination] || baseConfigBuilder
    return configBuilder(incomingRequest, resolvedHost)
}