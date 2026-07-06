/**
 * ============================================================
 * TK Pro Enterprise OS
 * Version: 0.1.0
 * File: Validation.gs
 * ============================================================
 */

const Validation = {

  required(value, field = "Field") {
    if (Helpers.isEmpty(value)) {
      throw new Error(`${field} is required.`);
    }
    return true;
  },

  isString(value, field = "Value") {
    if (typeof value !== "string") {
      throw new Error(`${field} must be a string.`);
    }
    return true;
  },

  isObject(value, field = "Value") {
    if (
      value === null ||
      typeof value !== "object" ||
      Array.isArray(value)
    ) {
      throw new Error(`${field} must be an object.`);
    }
    return true;
  },

  isArray(value, field = "Value") {
    if (!Array.isArray(value)) {
      throw new Error(`${field} must be an array.`);
    }
    return true;
  },

  maxLength(value, max, field = "Value") {
    if (String(value).length > max) {
      throw new Error(`${field} cannot exceed ${max} characters.`);
    }
    return true;
  },

  minLength(value, min, field = "Value") {
    if (String(value).length < min) {
      throw new Error(`${field} must be at least ${min} characters.`);
    }
    return true;
  }

};