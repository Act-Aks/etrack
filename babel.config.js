const config = (api) => {
  api.cache(true)

  return {
    plugins: [
        ['react-native-unistyles/plugin']
    ]
  }
}

export default config;
