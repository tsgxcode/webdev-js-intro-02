"use strict";

// Declaring constant variables to store references to the elements
// that will be updated by your code.
const yearElement = document.getElementById("year");
const resolutionElement = document.getElementById("resolution");
const willMeetResolutionElement = document.getElementById("will-meet-resolution");
const submissionBtn = document.getElementById("submission-btn");

// Declare your variables here.
let userYear = "";
let userResolution = "";
let userWillMeetResolution = "";

function updateYear() {
    const currentYear = new Date().getFullYear();
    userYear = currentYear;
    yearElement.textContent = `Year: ${userYear}`;
}

function updateResolution() {
    const resolutionInput = prompt("What is your New Year's resolution?");
    if (resolutionInput) {
        userResolution = resolutionInput;
        resolutionElement.textContent = `Resolution: ${userResolution}`;
    }
}

function updateWillMeetResolution() {
    const willMeet = confirm("Do you think you will meet your resolution?");
    userWillMeetResolution = willMeet ? "Yes" : "No";
    willMeetResolutionElement.textContent = `Will Meet Resolution: ${userWillMeetResolution}`;
}

function render() {
    updateYear();
    updateResolution();
    updateWillMeetResolution();
}

submissionBtn.addEventListener("click", function () {
    render();
});

