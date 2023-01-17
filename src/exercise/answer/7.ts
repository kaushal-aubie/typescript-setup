import logatim, { LoggerLevels } from "logatim";

export class Logger {
  public static setLevel(level?: LoggerLevels): void {
    const logLevel = level ? LoggerLevels[level] : LoggerLevels.TRACE;
    logatim.setLevel(logLevel as number);
  }

  public static getLevel(): void {
    logatim.getLevel();
  }

  public static info(...msg: unknown[]): void {
    logatim.info(msg);
  }

  public static trace(...msg: unknown[]): void {
    logatim.trace(msg);
  }

  public static debug(...msg: unknown[]): void {
    logatim.debug(msg);
  }

  public static warn(...msg: unknown[]): void {
    logatim.warn(msg);
  }

  public static error(...msg: unknown[]): void {
    logatim.error(msg);
  }
}
