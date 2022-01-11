const bin = require("../bin/www");
const { app, server } = require("../app");
const request = require("supertest");

describe("/logout controller", function () {
  describe("Ping /logout", function () {
    it("return a successful response", function () {
      request(app)
        .post("/auth/logout")
        .expect("Content-Type", "text/html")
        .expect(200);
    });
  });
});
