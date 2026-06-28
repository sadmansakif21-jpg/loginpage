// ==========================
// THEME TOGGLE
// ==========================

const toggle = document.getElementById("toggle");
const body = document.body;
const modeText = document.querySelector(".mode-text");

toggle.addEventListener("click", () => {

    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
        modeText.innerText = "ECLIPSE MODE";
    } else {
        modeText.innerText = "SOLAR MODE";
    }

});


// ==========================
// LOGIN USERS
// পরে শুধু Username & Password পরিবর্তন করবে
// ==========================

const users = [

    // Admin
    {
        username: "sadman123",
        password: "sadman123"
    },

    // User 2
    {
        username: "user2",
        password: "pass2"
    },

    // User 3
    {
        username: "user3",
        password: "pass3"
    },

    // User 4
    {
        username: "user4",
        password: "pass4"
    },

    // User 5
    {
        username: "user5",
        password: "pass5"
    },

    // User 6
    {
        username: "user6",
        password: "pass6"
    },

    // User 7
    {
        username: "user7",
        password: "pass7"
    },

    // User 8
    {
        username: "user8",
        password: "pass8"
    },

    // User 9
    {
        username: "user9",
        password: "pass9"
    },

    // User 10
    {
        username: "user10",
        password: "pass10"
    }

];


// ==========================
// LOGIN SYSTEM
// ==========================

const form = document.querySelector("form");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const username = document.querySelector('input[type="text"]').value.trim();

    const password = document.querySelector('input[type="password"]').value;

    const user = users.find(account =>
        account.username === username &&
        account.password === password
    );

    if(user){

        // Login Success
        localStorage.setItem("loggedIn", "true");
        localStorage.setItem("username", user.username);

       
       sessionStorage.setItem("loggedIn", "true");
window.location.href = "https://sadmansakif21-jpg.github.io/UIU/";
        // এখানে পরে তোমার Blogspot URL বসাবে
        // Example:
        // window.location.href = "https://yourblog.blogspot.com/";

    }else{

        alert("Wrong Username or Password!");

    }

});
