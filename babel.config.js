module.exports = function (api) {
  api.cache(true)

  return {
    // other config
    plugins: [
        // other plugins
        ['react-native-unistyles/plugin']
    ]
  }
}
