const chai = require("chai"); // Require Chai
const chaiHttp = require("chai-http"); // Require chai-http plugin
const app = require("./server.js"); // Require your app
const mongoose = require("mongoose"); // Require Mongoose

// Apply chai-http plugin
chai.use(chaiHttp);
chai.should();

describe("FAQ API", () => {
  // Close MongoDB connection after all tests
  after(async () => {
    await mongoose.connection.close();
  });

  it("should fetch FAQs in default (English) language", (done) => {
    chai
      .request(app)
      .get("/api/faqs")
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("array");
        done();
      });
  });

  it("should fetch FAQs in Hindi", (done) => {
    chai
      .request(app)
      .get("/api/faqs?lang=hi")
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("array");
        done();
      });
  });

  it("should create a new FAQ", (done) => {
    const newFaq = {
      question: "What is Express.js?",
      answer: "Express.js is a web framework for Node.js.",
    };

    chai
      .request(app)
      .post("/api/faqs")
      .send(newFaq)
      .end((err, res) => {
        res.should.have.status(201);
        res.body.should.be.a("object");
        res.body.should.have.property("_id");
        res.body.should.have.property("question").eql(newFaq.question);
        res.body.should.have.property("answer").eql(newFaq.answer);
        done();
      });
  });
});
