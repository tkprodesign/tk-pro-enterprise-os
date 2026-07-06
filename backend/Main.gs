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
  try {

    const body = e && e.postData && e.postData.contents
      ? Helpers.parseJson(e.postData.contents)
      : {};

    if (!body) {
      return Response.error(
        "Invalid JSON body.",
        HTTP.BAD_REQUEST
      );
    }

    return Router.route(body);

  } catch (error) {

    LoggerService.error("POST Error", error);

    return Response.error(
      error.message,
      HTTP.INTERNAL_SERVER_ERROR
    );

  }
}