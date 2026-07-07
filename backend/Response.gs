/**
 * ============================================================
 * TK Pro Enterprise OS
 * Version: 0.3.0
 * File: Response.gs
 * ============================================================
 */

const Response = {

  object(status, data = {}, message = "Success", code = HTTP.OK, errors = null) {

    return {
      status,
      code,
      message,
      timestamp: new Date().toISOString(),
      version: CONFIG.VERSION,
      data,
      errors
    };

  },

  success(data = {}, message = "Success", code = HTTP.OK) {

    return ContentService
      .createTextOutput(
        JSON.stringify(
          this.object(
            STATUS.SUCCESS,
            data,
            message,
            code
          )
        )
      )
      .setMimeType(ContentService.MimeType.JSON);

  },

  error(message = "An error occurred", code = HTTP.INTERNAL_SERVER_ERROR, errors = null) {

    return ContentService
      .createTextOutput(
        JSON.stringify(
          this.object(
            STATUS.ERROR,
            {},
            message,
            code,
            errors
          )
        )
      )
      .setMimeType(ContentService.MimeType.JSON);

  }

};