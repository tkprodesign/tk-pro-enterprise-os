/**
 * ============================================================
 * TK Pro Enterprise OS
 * Version: 0.1.0
 * File: Main.gs
 * ============================================================
 */

/**
 * Handles GET requests.
 */
function doGet(e) {
  try {

    const request = {
      action: (e && e.parameter && e.parameter.action) || ACTIONS.PING,
      data: e && e.parameter ? e.parameter : {}
    };

    return Router.route(request);

  } catch (error) {

    LoggerService.error("GET Error", error);

    return Response.error(
      error.message,
      HTTP.INTERNAL_SERVER_ERROR
    );

  }
}

/**
 * Handles POST requests.
 */
function doPost(e) {
  Logger.log("POST HIT");

  return ContentService
    .createTextOutput(
      JSON.stringify({
        status: "success",
        message: "POST reached"
      })
    )
    .setMimeType(ContentService.MimeType.JSON);
}