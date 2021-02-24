const HOSTS = {
    WORDS: "http://localhost:5000",
    USERS: "http://localhost:8000",
}
const DESTINATIONS = {
    WORDS: "words",
    KNOWN_WORDS: "known-words",
}
const hostMapping = Object.freeze({
    [DESTINATIONS.WORDS]: HOSTS.WORDS,
    [DESTINATIONS.KNOWN_WORDS]: HOSTS.USERS,
})

module.exports = {
    HOSTS,
    DESTINATIONS,
    hostMapping,
}