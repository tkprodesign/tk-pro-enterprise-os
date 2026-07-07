/**
 * ============================================================
 * TK Pro Enterprise OS
 * Version: 0.3.0
 * File: ServiceRegistry.gs
 * ============================================================
 */

const ServiceRegistry = {

  services: {},

  initialized: false,

  initialize() {

    if (this.initialized) return;

    this.register(System);
    this.register(Drive);
    // this.register(Docs);
    // this.register(Sheets);
    // this.register(Gmail);
    // this.register(Calendar);
    // this.register(Forms);

    this.initialized = true;

    LoggerService.info("Service Registry Initialized", {
      services: this.list()
    });

  },

  register(service) {

    if (!service || !service.meta || !service.meta.name) {
      throw new Error("Invalid service registration.");
    }

    this.services[service.meta.name] = service;

  },

  get(name) {

    this.initialize();

    return this.services[name] || null;

  },

  list() {

    this.initialize();

    return Object.keys(this.services);

  },
  describe() {

    this.initialize();

    return Object.values(this.services).map(service => service.meta);

  }

};