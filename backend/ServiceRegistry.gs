/**
 * ============================================================
 * TK Pro Enterprise OS
 * Version: 0.3.0
 * File: ServiceRegistry.gs
 * ============================================================
 */

const ServiceRegistry = {

  services: {},

  register(service) {

    if (!service || !service.meta || !service.meta.name) {
      throw new Error("Invalid service registration.");
    }

    this.services[service.meta.name] = service;

    LoggerService.info("Service Registered", {
      service: service.meta.name
    });

  },

  get(name) {
    return this.services[name] || null;
  },

  list() {
    return Object.keys(this.services);
  }

};