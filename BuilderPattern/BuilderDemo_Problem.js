const PDFCreator = require("pdfkit");
const fs = require("node:fs");

class Resume {
  constructor(
    firstName,
    lastName,
    address,
    email,
    phone,
    education,
    skills,
    experience,
    interests) {

    const pdf = new PDFCreator();
    pdf.pipe(fs.createWriteStream("sample.pdf"));

    const margin = pdf.page.margins.left;

    pdf.fontSize(25);
    pdf.text(firstName + " " + lastName);
    pdf.fontSize(10);
    const emailPhone = email + "/" + phone;
    pdf.text(emailPhone, pdf.page.width - margin - pdf.widthOfString(emailPhone)-1, pdf.x);
    pdf.underline(margin, 20, pdf.page.width, pdf.y);

    pdf.fontSize(25);
    pdf.text(" ");
    pdf.text("Address", pdf.page.margins.left);
    pdf.fontSize(15);
    pdf.text(address);

    pdf.fontSize(25);
    pdf.text(" ");
    pdf.text("Work Experience", pdf.page.margins.left);
    pdf.fontSize(15);
    experience.forEach(exp => pdf.text(exp));

    pdf.fontSize(25);
    pdf.text(" ");
    pdf.text("Education", pdf.page.margins.left);
    pdf.fontSize(15);
    education.forEach(edu => pdf.text(edu));


    pdf.fontSize(25);
    pdf.text(" ");
    pdf.text("Skill");
    pdf.fontSize(15);
    skills.forEach(skill => pdf.text(skill));

    pdf.fontSize(25);
    pdf.text(" ");
    pdf.text("Interests");
    pdf.fontSize(15);
    interests.forEach(int => pdf.text(int));


    pdf.end();
  }
}

const brendan = new Resume(
  "Brendan",
  "Eich",
  "CA, US",
  "brendan@eich.com",
  "1-800-BRENDAN",
  ["SCU", "UCLA"],
  ["JavaScript"],
  ["Netscape", "Mozilla", "Brave"],
  ["Music"]
);