function submitForm() {
    const name = document.getElementById("name").value;
    const mascot = document.getElementById("mascot").value;
    const image = document.getElementById("image").value;
    const imageCaption = document.getElementById("imageCaption").value;
    const personalBackground = document.getElementById("personalBackground").value;
    const professionalBackground = document.getElementById("professionalBackground").value;
    const academicBackground = document.getElementById("academicBackground").value;
    const webDevelopmentBackground = document.getElementById("webDevelopmentBackground").value;
    const computerPlatform = document.getElementById("computerPlatform").value;
    const courses = Array.from(document.getElementsByClassName("course"))
                     .map(course => course.value);
    const funnyThing = document.getElementById("funnyThing").value;
    const anythingElse = document.getElementById("anythingElse").value;

    const resultContainer = document.getElementById("formResult");
    resultContainer.innerHTML = `
        <h2>Introduction</h2>
        <figure>
            <img src="${image}" class="intro" alt="${imageCaption}">
            <figcaption>${imageCaption}</figcaption>
        </figure>
        <ul>
            <li><b>Personal Background: </b>${personalBackground}</li>
            <li><b>Professional Background: </b>${professionalBackground}</li>
            <li><b>Academic Background: </b>${academicBackground}</li>
            <li><b>Background in Subject: </b>${webDevelopmentBackground}</li>
            <li><b>Primary Computer Platform: </b>${computerPlatform}</li>
            <li><b>Interest: </b>${anythingElse}</li>
            <li><b>Courses I'm Taking & Why: </b>
                <ul>
                    ${courses.map(course => `<li><b>${course}</b></li>`).join("")}
                </ul>
            </li>
            <li><b>Funny/Interesting Item about Yourself: </b>${funnyThing}</li>
        </ul>
    `;
}

function resetForm() {
    document.getElementById("introForm").reset();
    document.getElementById("formResult").innerHTML = "";
}

function addCourseTextBox() {
    const coursesContainer = document.getElementById("coursesContainer");
    const newCourseInput = document.createElement("input");
    newCourseInput.type = "text";
    newCourseInput.className = "course";
    newCourseInput.required = true;

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function () {
        coursesContainer.removeChild(newCourseInput);
        coursesContainer.removeChild(deleteButton);
    };

    coursesContainer.appendChild(newCourseInput);
    coursesContainer.appendChild(deleteButton);
}
