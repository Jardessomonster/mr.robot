const RESET = '\x1b[0m';
const TEXT = '%s';
const resetAfterLog = (color: any) => `${color}${TEXT}${RESET}`;

export const COLORS = {
  DEFAULT: resetAfterLog('\x1b[0m'),
  GREEN: resetAfterLog('\x1b[32m'),
  RED: resetAfterLog('\x1b[31m')
};

const log = (msg: string) => {
  console.log(COLORS.DEFAULT, msg);
};

const success = (msg?: string) => {
  console.log(COLORS.GREEN, `✅ ${msg}`);
};

const error = (msg?: string) => {
  console.error(COLORS.RED, `🚨 ${msg}`);
};

export default {
  log,
  success,
  error,
}