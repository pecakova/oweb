document.addEventListener("DOMContentLoaded", function () {
const loginForm = document.querySelector(".login-form");
const signupForm = document.querySelector(".signup-form");

let users = []; 

loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const username = document.querySelector(".login-form input[type='text']").value;
        const password = document.querySelector(".login-form input[type='password']").value;

        const userExists = users.find(user => user.username === username && user.password === password);

        if (userExists) {
            updateHeader(username);
        } else {
            alert("Invalid username or password. Please try again.");
        }
});

signupForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const signupUsername = document.querySelector(".signup-form input[type='text']").value;
        const email = document.querySelector(".signup-form input[type='email']").value;
        const signupPassword = document.querySelector(".signup-form input[type='password']").value;

        if (signupUsername && email && signupPassword){
            users.push({ username: signupUsername, email, password: signupPassword });

            clearSignupForm();
        } else {
            alert("Please fill in all the required fields for sign up.");
        }
});

function clearSignupForm() {     
        document.querySelector(".signup-form input[type='text']").value = "";
        document.querySelector(".signup-form input[type='email']").value = "";
        document.querySelector(".signup-form input[type='password']").value = "";
}

function updateHeader(username) {
        
        const loginIcon = document.querySelector(".icons i");

        loginIcon.innerHTML = `<a href="#">Welcome, ${username}</a>`;
    }
});
