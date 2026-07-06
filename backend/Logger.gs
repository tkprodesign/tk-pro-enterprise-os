/**
 * ============================================================
 * TK Pro Enterprise OS
 * Version: 0.1.0
 * File: Logger.gs
 * ============================================================
 */

const LoggerService = {

  info(message, data = null) {
    if (!CONFIG.LOGGING) return;

    Logger.log(JSON.stringify({
      level: "INFO",
      timestamp: new Date().toISOString(),
      message,
      data
    }));
  },

  warning(message, data = null) {
    if (!CONFIG.LOGGING) return;

    Logger.log(JSON.stringify({
      level: "WARNING",
      timestamp: new Date().toISOString(),
      message,
      data
    }));
  },

  error(message, error = null) {
    if (!CONFIG.LOGGING) return;

    Logger.log(JSON.stringify({
      level: "ERROR",
      timestamp: new Date().toISOString(),
      message,
      error: error ? String(error) : null
    }));
  }

};