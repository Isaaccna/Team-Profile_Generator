// npm modules
const inquirer = require("inquirer");
const fs = require("fs");

const generateHTML = require("./src/generateHTML");
// team

const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const Employee = require("./lib/Employee");

const teamMembers = [];

const getManagerDetails = () => {
    return inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "Enter Team Manager's name:",
          validate: (name) => {
            if (!name) {
              return "Please enter Manager's name!";
            } else {
              return true;
            }
          },
        },
        {
          type: "input",
          name: "id",
          message: "Enter Team Manager's id:",
          validate: (id) => {
            if (isNaN(id) || !id) {
              return "Please enter a valid number";
            } else {
              return true;
            }
          },
        },
        {
          type: "input",
          name: "email",
          message: "Enter email:",
          validate: (email) => {
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
              return true;
            } else {
              console.log("Please enter a valid email");
              return false;
            }
          },
        },
        {
          type: "input",
          name: "officeNumber",
          message: "Enter Manager's Office Number:",
          validate: (officeNumber) => {
            if (isNaN(officeNumber) || !officeNumber) {
              return "Please enter a valid phone number";
            } else {
              return true;
            }
          },
        },
      ])
      .then((managerDetails) => {
        const manager = new Manager(
          managerDetails.id,
          managerDetails.name,
          managerDetails.email,
          managerDetails.officeNumber
        );
        teamMembers.push(manager);
      })
      .catch((err) => console.log(err));
  };
    