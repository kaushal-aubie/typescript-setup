import logatim from "logatim";

export const LoggerLevels = {
  TRACE: 0,
  DEBUG: 1,
  INFO: 2,
  WARN: 3,
  ERROR: 4,
};

export class Logger {
  static setLevel(level) {
    const logLevel = level ? LoggerLevels[level] : LoggerLevels.TRACE;
    logatim.setLevel(logLevel);
  }

  static getLevel() {
    logatim.getLevel();
  }

  static info(...msg) {
    logatim.info(msg);
  }

  static trace(...msg) {
    logatim.trace(msg);
  }

  static debug(...msg) {
    logatim.debug(msg);
  }

  static warn(...msg) {
    logatim.warn(msg);
  }

  static error(...msg) {
    logatim.error(msg);
  }
}
