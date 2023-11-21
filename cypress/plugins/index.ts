import fs from "fs-extra";
import path from "path";

const fetchConfigurationByFile = file => {
  const pathOfConfigurationFile = `config/cypress.${file}.json`;

  return (
    file && fs.readJson(path.join(__dirname, "../", pathOfConfigurationFile))
  );
};

module.exports = (on, config) => {
  const environment = config.env.configFile || "dev";
  const configurationForEnvironment = fetchConfigurationByFile(environment);

  return configurationForEnvironment || config;
};