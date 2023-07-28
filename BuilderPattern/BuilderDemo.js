const PDFCreator = require("pdfkit");
const fs = require("node:fs");

class Resume {
  constructor() {}

  firstName(firstName) {
    this.firstName = firstName;
    //~* we are returning this below for chaining of the methods
    return this;
  }

  lastName(lastName) {
    this.lastName = lastName;
    return this;
  }

  address(address) {
    this.address = address;
    return this;
  }

  email(email) {
    this.email = email;
    return this;
  }

  phone(phone) {
    this.phone = phone;
    return this;
  }

  education(edu) {
    this.education = [...edu];
    return this;
  }

  skills(skills) {
    this.skills = [...skills];
    return this;
  }

  experience(exp) {
    this.experience = [...exp];
    return this;
  }

  interests(interests) {
    this.interests = [...interests];
    return this;
  }

  buildPDF() {
    const pdf = new PDFCreator();
    pdf.pipe(fs.createWriteStream("sample.pdf"));

    const margin = pdf.page.margins.left;

    pdf.fontSize(25);
    pdf.text(this.firstName + " " + this.lastName);
    pdf.fontSize(10);
    const emailPhone = this.email + "/" + this.phone;
    pdf.text(
      emailPhone,
      pdf.page.width - margin - pdf.widthOfString(emailPhone) - 1,
      pdf.x
    );
    pdf.underline(margin, 20, pdf.page.width, pdf.y);

    pdf.fontSize(25);
    pdf.text(" ");
    pdf.text("Address", pdf.page.margins.left);
    pdf.fontSize(15);
    pdf.text(this.address);

    pdf.fontSize(25);
    pdf.text(" ");
    pdf.text("Work Experience", pdf.page.margins.left);
    pdf.fontSize(15);
    this.experience.forEach((exp) => pdf.text(exp));

    pdf.fontSize(25);
    pdf.text(" ");
    pdf.text("Education", pdf.page.margins.left);
    pdf.fontSize(15);
    this.education.forEach((edu) => pdf.text(edu));

    pdf.fontSize(25);
    pdf.text(" ");
    pdf.text("Skill");
    pdf.fontSize(15);
    this.skills.forEach((skill) => pdf.text(skill));

    pdf.fontSize(25);
    pdf.text(" ");
    pdf.text("Interests");
    pdf.fontSize(15);
    this.interests.forEach((int) => pdf.text(int));

    pdf.end();
  }
}

const dinesh = new Resume();
dinesh
  .firstName("Dinesh")
  .lastName("Danda")
  .address("CA,US")
  .email("dineshdsv@gmail.com")
  .phone("9999999999")
  .education(["Btech", "PG"])
  .skills("JS")
  .experience(["React", "Node"])
  .interests("Cricket");


dinesh.buildPDF()
// const brendan = new Resume(
//   "Brendan",
//   "Eich",
//   "CA, US",
//   "brendan@eich.com",
//   "1-800-BRENDAN",
//   ["SCU", "UCLA"],
//   ["JavaScript"],
//   ["Netscape", "Mozilla", "Brave"],
//   ["Music"]
// );
