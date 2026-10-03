console.log("IT Training Center - JavaScript loader");

const centerName = "IT Training Center";

const slogan = "Learn Technology - Build Your Future";

document.getElementById("welcome-title").innerHTML =
    "welcome to" + centerName;

document.getElementById("welcome-message").innerText =
    slogan;

//câu 1

const courseNames = [
    "HTML & CSS",
    "JavaScript",
    "ASP.NET MVC",
    "Database"
];

const courseTitleElement =
    document.querySelectorforAll(".course-name");

courseTitleElements.forEach(function (element, index) {
    element.innerHTML = courseName[index];
});

console.log(
    "Number of course cards:",
    courseTitleElement.length
);

//câu 2

const quickCourse = [
    "HTML & CSS",
    "JavaScript",
    "ASP.NET MVC",
    "Database"
];

function showQuickCourses() {
    let output = "";

    for (const course of quickCourses) {
        output += "<li>" + course + "</li>";
    }

    document.getElementById(
        "quick-course-list"
    ).innerHTML = output;
}

showQuickCourses();

// bài 3
const jsCourse = {
    name: "JavaScript",

    duration: "6 Weeks",

    tuition: "$150"
};

function showCourseDetail() {
    let output = "";

    for (const key in jsCourse) {
        output +=
            "<p><strong>" +
            key +
            ":</strong>" +
            jsCourse[key] +
            "</p>";
    }

    document.getElementById(
        "course-detail"
    ).innerHTML = output;
}

// bài 4
function getTuition(course) {
    let tuition = 0;

    switch (course) {
        case "HTML & CSS":

            tuition = 100;

            break;

        case "JavaScript":

            tuition = 100;

            break;

        case "ASP.NET MVC":

            tuition = 200;

            break;

        case "Database":

            tuition = 150;

            break;

        default:
            tuition = 0;

            break;
    }

    return tuition;
}


function registerCourse() {


    const form = document.getElementById("registration-form");

    if (!form.checkValidity()) {

        form.reportValidity();

        document.getElementById("registration-result").innerHTML =
            "<p>Please check your information again.</p>";

        return;
    }

 
    const fullName =
        document.getElementById("fullName").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const phone =
        document.getElementById("phone").value.trim();

    const course =
        document.getElementById("course").value;


    const learningModeElement =
        document.querySelector(
            'input[name="learningMode"]:checked'
        );

 
    if (
        fullName === "" ||
        email === "" ||
        phone === "" ||
        course === ""
    ) {
        document.getElementById("registration-result").innerHTML =
            "<p>Please fill in all required information.</p>";

        return;
    }

    
    if (!/^[0-9]{10}$/.test(phone)) {
        document.getElementById("registration-result").innerHTML =
            "<p>Phone number must contain exactly 10 digits.</p>";

        return;
    }

  
    if (learningModeElement === null) {
        document.getElementById("registration-result").innerHTML =
            "<p>Please select a Learning Mode.</p>";

        return;
    }

    const learningMode = learningModeElement.value;

   
    const tuition = getTuition(course);

    
    document.getElementById("registration-result").innerHTML =
        "<h3>Registration Successful!</h3>" +
        "<p><strong>Student:</strong> " + fullName + "</p>" +
        "<p><strong>Email:</strong> " + email + "</p>" +
        "<p><strong>Phone:</strong> " + phone + "</p>" +
        "<p><strong>Course:</strong> " + course + "</p>" +
        "<p><strong>Learning Mode:</strong> " + learningMode + "</p>" +
        "<p><strong>Tuition:</strong> $" + tuition + "</p>";
}


//bài 5
const reviewNames = [
    "Nguyen Minh Tam",

    "Tran Van An",

    "Le Thi Hoa"
];

const reviewElements =
    document.getElementsByClassName(
        "review-name"
    );

for (
    let i = 0;
    i < reviewElements.length;
    i++
) {
    reviewElements[i].innerHTML =
        reviewNames[i];
}

// bài 6
const footerData = [
    "Email: ittraining@gmail.com",

    "Phone: 012345679",

    "Address: Ho Chi Minh City, Vietnam",

    "Copyright @ 2026 IT Training Center"
];

const footer =
    document.getElementById("footer-info");

const footerItems =
    footer.getElementsByTagName("p");

for (
    let i = 0;
    i < footerItems.length;
    i++
) {
    footerItems[i].innerHTML =
        footerData[i];
}

//bài 7
function showInnerHTML() {
    const content =
        document.getElementById(
            "demo-content"
        );

    document.getElementById(
        "content-result"
    ).textContent =
        content.innerHTML;
}

// Inner Text

function showInnerText() {
    const content =
        document.getElementById(
            "demo-content"
        );

    document.getElementById(
        "content-result"
    ).textContent =
        content.innerText;
}

//textContent
function showTextContent() {
    const content =
        document.getElementById(
            "demo-content"
        );

    document.getElementById(
        "content-result"
    ).textContent =
        content.textContent;
}