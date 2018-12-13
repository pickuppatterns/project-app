export default {
    test() {
    return fetch('/api')
        .then(result => response.json())
    }
};