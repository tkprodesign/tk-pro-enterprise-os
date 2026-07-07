/**
 * ============================================================
 * TK Pro Enterprise OS
 * Version: 0.1.0
 * File: Router.gs
 * ============================================================
 */

const Router = {

  route(request = {}) {

    Auth.validate(request);

    const action = request.action || "";

    LoggerService.info("Routing request", {
      action
    });

    switch (action) {

      case ACTIONS.SYSTEM_DESCRIBE:
      return System.describe();
      case ACTIONS.PING:
        return Response.success(
          {
            project: CONFIG.PROJECT_NAME,
            version: CONFIG.VERSION
          },
          "TK Pro Enterprise OS is online."
        );

      case ACTIONS.DRIVE_LIST:
        return Drive.list(request.data || {});

      default:
        return Response.error(
          `Unknown action: ${action}`,
          HTTP.BAD_REQUEST
        );

    }

  }

};