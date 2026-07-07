export default {
  async fetch(request, env) {

    // --------------------------------------------------
    // API Key Authentication
    // --------------------------------------------------

    const apiKey = request.headers.get("X-API-Key");

    if (!apiKey || apiKey !== env.TKPRO_API_KEY) {
      return Response.json(
        {
          status: "error",
          code: 401,
          message: "Unauthorized"
        },
        {
          status: 401
        }
      );
    }

    // --------------------------------------------------
    // Apps Script Backend
    // --------------------------------------------------

    const APPS_SCRIPT_URL =
      "https://script.google.com/macros/s/AKfycbyzDJvQCYxH6y5CjChjcG3sA7l9SxCzAf23doEQgkQsiZHztWj-OtlGfdPCV5dMLy2x/exec";

    try {

      const response = await fetch(APPS_SCRIPT_URL, {
        method: request.method,
        headers: {
          "Content-Type": "application/json"
        },
        body:
          request.method === "GET"
            ? undefined
            : await request.text(),
        redirect: "follow"
      });

      const text = await response.text();

      return new Response(text, {
        status: response.status,
        headers: {
          "Content-Type": "application/json"
        }
      });

    } catch (error) {

      return Response.json(
        {
          status: "error",
          code: 500,
          message: error.message
        },
        {
          status: 500
        }
      );

    }

  }
};