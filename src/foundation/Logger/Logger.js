import Logger from 'js-logger';

const InitializeLogger = () => {
  Logger.useDefaults();
  if (process.env.RAILS_ENV === 'production') {
    Logger.setLevel(Logger.OFF);
  }
};

export default InitializeLogger;
