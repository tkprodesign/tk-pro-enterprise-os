/**
 * ============================================================
 * TK Pro Enterprise OS
 * Version: 0.1.0
 * File: Response.gs
 * ============================================================
 */

const Response = {

  success(data = {}, message = "Success", code = HTTP.OK) {
    return ContentService
      .createTextOutput(JSON.stringify({
        status: STATUS.SUCCESS,
        code,
        message,
        timestamp: new Date().toISOString(),
        version: CONFIG.VERSION,
        data
      }))
      .setMimeType(ContentService.MimeType.JSON);
  },

  error(message = "An error occurred", code = HTTP.INTERNAL_SERVER_ERROR, errors = null) {
    return ContentService
      .createTextOutput(JSON.stringify({
        status: STATUS.ERROR,
        code,
        message,
        timestamp: new Date().toISOString(),
        version: CONFIG.VERSION,
        errors
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }

};