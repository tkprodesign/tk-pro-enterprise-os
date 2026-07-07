/**
 * ============================================================
 * TK Pro Enterprise OS
 * Version: 0.1.0
 * File: Constants.gs
 * ============================================================
 */

const HTTP = Object.freeze({
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  INTERNAL_SERVER_ERROR: 500
});

const STATUS = Object.freeze({
  SUCCESS: "success",
  ERROR: "error",
  WARNING: "warning"
});

const ACTIONS = Object.freeze({

  // System
  PING: "ping",
SYSTEM_DESCRIBE: "system.describe",

  // Drive
  DRIVE_LIST: "drive.list",
  DRIVE_SEARCH: "drive.search",
  DRIVE_READ: "drive.read",
  DRIVE_CREATE_FOLDER: "drive.createFolder",
  DRIVE_RENAME: "drive.rename",
  DRIVE_MOVE: "drive.move",
  DRIVE_DELETE: "drive.delete"

});