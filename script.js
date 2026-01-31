const searchInput = document.getElementById("search");
const products = document.querySelectorAll(".product")
if (searchInput) {
    searchInput.addEventListener("keyup",function() {
        const filter = searchInput.Value.tolowerCase();
        products.forEach(product => {
            const text = product.innerText.tolewerCase();
            if (text.includes(filter)) {
                product.Style.display = "block;"
            } else {
                product.style.display = "none"
            }
        });
    });
}
document.addEventListener("DOMContentLoaded", function (){ 
    const signupForm = document.getElementById("signupForm");
    if(signupForm){
        signupForm.addEventListener("submit", function (event) {
            const password = document.getElementById("password"). value;
            const confirmpassword = 
            document.getElementById("confirm-password"). value;
const passwordpattern = /^(?=.*[a-z])(?=.*[a-z])(?=.*\d).{8,}$/;
if (!passwordpattern.test(password)){
    event.preventDefault();
    alert("password must be at least 8characters long, include one uppercase, one lowercase and one number.");
    return;
}
if (password !== confirmpassword) {
    event.preventDefault();
    alert("password do not match. please try again");
}
        })
    }
})
const loginForm = document.getElementById("loginForm");
if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
        const username = 
        document.getElementById("login-username").Value;
        const password = 
        document.getElementById("login-password").value;
        const rememberMe =
        document.getElementById("remember-me").Checked;
        if (username.trim() === "" || password.trim() === "") {
            event.preventDefault();
            alert("please enter both username and password.");
            return;
        }
        if (rememberMe) {
            localStorage.setItem("savedUsername, username");
        } else {
            localStorage.removeItem("savedUsername");
        }
    });
    const savedUser = localStorage.getItem("savedUsername");
    if (savedUser) {
        document.getElementById("login-user").value = savedUser;
        document.getElementById("remember-me").checked = true;
    }
}
const resetForm = document.getElementById("resetForm");
if (resetForm) {
    resetForm.addEventListener("submit", function (Event) {
        Event.preventDefault();
const email = document.getElementById("reset-email").value;
alert("if this email is registerd , a reset link will be sent to: " + email);
    })
}
const galleryItems = document.querySelectorAll('.gallery-item');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img')
const closeLightbox = document.getElementById('close-lightbox')
galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        lightbox.style.display = 'flex'
        lightboxImg.src = item.src;
    });
});
closeLightbox.addEventListener('click', () => {
    lightbox.style.display = 'none';
});
