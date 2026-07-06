/**
 * ============================================================
 * TK Pro Enterprise OS
 * Version: 0.1.0
 * File: Helpers.gs
 * ============================================================
 */

const Helpers = {

  now() {
    return new Date().toISOString();
  },

  generateId() {
    return Utilities.getUuid();
  },

  parseJson(text) {
    try {
      return JSON.parse(text);
    } catch (e) {
      return null;
    }
  },

  stringify(data) {
    return JSON.stringify(data, null, 2);
  },

  isEmpty(value) {
    return (
      value === null ||
      value === undefined ||
      value === "" ||
      (Array.isArray(value) && value.length === 0) ||
      (typeof value === "object" &&
        !Array.isArray(value) &&
        Object.keys(value).length === 0)
    );
  }

};