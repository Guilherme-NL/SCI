const Dotenv = require("dotenv-webpack");

module.exports = {
  // Configurações do webpack
  plugins: [new Dotenv()],
  // Restante da configuração
};
