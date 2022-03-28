/**
 * @prettier
 *
 */

export const HttpStatusCode = {
  100: "Continue",
  101: "SWITCHING_PROTOCOL",
  102: "PROCESSING",

  200: "Ok",
  201: "Created",
  202: "Accepted",
  203: "Non Authoritative Information",
  204: "No Content",
  205: "Reset Content",
  206: "Partial Content",
  207: "Multi Status",
  208: "Already Reported",

  300: "Multiple Choices",
  301: "Moved Permanently",
  302: "Found",
  303: "See Other",
  304: "Not Modified",
  305: "Use Proxy",
  306: "Switch Proxy",
  307: "Temporary Redirect",
  308: "Permanent Redirect",

  400: "Bad Request",
  401: "Unauthorized",
  403: "Forbidden",
  404: "Not Found",
  405: "Method Not Allowed",
  406: "Not Acceptable",
  407: "Proxy Authentication Required",
  408: "Request Timeout",
  409: "Conflict",
  410: "Gone",
  411: "Length Required",
  412: "Precondition Failed",
  413: "Payload Error",
  414: "URI Too Long",
  415: "Unsupported Media Type",
  416: "Range Not Satisfied",
  417: "Expectation Failed",
};

export const errorHandler = (httpStatusCode, err) => {
  console.log(err);
  window.history.pushState(null, null, "../pages/error.html");
};
