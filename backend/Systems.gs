/**
 * ============================================================
 * TK Pro Enterprise OS
 * Version: 0.3.0
 * File: System.gs
 * ============================================================
 */

const System = {

  meta: {
    name: "System",
    version: "1.0.0",
    description: "Core Operating System Service",

    actions: [
      {
        name: "system.describe",
        description: "Returns information about the operating system and all registered services."
      }
    ]
  },

  describe() {

  return Response.object(
    STATUS.SUCCESS,
    {
      project: CONFIG.PROJECT_NAME,
      version: CONFIG.VERSION,
      services: ServiceRegistry.describe()
    },
    "System information retrieved."
  );

}

};