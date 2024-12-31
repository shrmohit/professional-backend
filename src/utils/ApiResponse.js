class ApiResponse {
  constructor(statusCode, data, messsage = "success") {
    this.statusCode = statusCode;
    this.data = data;
    this.messsage = "message";
    this.success = statusCode < 400;
  }
}

export { ApiResponse };
// statusCode
// Informational responses (100 – 199)
// Successful responses (200 – 299)
// Redirection messages (300 – 399)
// Client error responses (400 – 499)
// Server error responses (500 – 599)
