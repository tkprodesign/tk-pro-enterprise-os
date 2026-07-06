/**
 * ============================================================
 * TK Pro Enterprise OS
 * Version: 0.1.0
 * File: Auth.gs
 * ============================================================
 */

const Auth = {

  /**
   * Validates incoming requests.
   * Returns true for now.
   * API key validation will be enabled in v0.2.
   */
  validate(request = {}) {

    LoggerService.info("Authenticating request...");

    // Future:
    // const apiKey = request.apiKey;
    // Validation.required(apiKey, "API Key");
    // if (apiKey !== CONFIG.API_KEY) {
    //   throw new Error("Invalid API Key.");
    // }

    return true;
  }

};