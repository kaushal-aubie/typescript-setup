declare module 'logatim' {
  export enum LoggerLevels {
    TRACE = 0,
    DEBUG = 1,
    INFO = 2,
    WARN = 3,
    ERROR = 4,
  }
  const getLevel: () => void;
  const setLevel: (level: LoggerLevels) => void;
  const info: (msg: unknown[]) => void;
  const trace: (msg: unknown[]) => void;
  const debug: (msg: unknown[]) => void;
  const warn: (msg: unknown[]) => void;
  const error: (msg: unknown[]) => void;
}
