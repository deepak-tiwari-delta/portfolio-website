const text = "Frontend Developer | React Developer | JavaScript Enthusiast";
const btn  = document.getElementById("themeBtn");
const hiddenElements = document.querySelectorAll(".hidden")
const projectBtn = document.getElementById("projectBtn");
const contactBtn = document.getElementById("contactBtn");
const form = document.getElementById("contactForm");
let index = 0;

// Home button section
projectBtn.addEventListener("click", function () {
    document.getElementById("projects").scrollIntoView({
        behavior: "smooth"
    });
});

contactBtn.addEventListener("click", function () {
    document.getElementById("contact").scrollIntoView({
        behavior: "smooth"
    });
});

 //Home typing section
function typeText(){
    if(index < text.length){
        document.getElementById("typing-text").textContent += text[index];
        index++;
        setTimeout(typeText, 100);
    }
}
typeText();

 // Dark mode section
btn.addEventListener("click", function(){
     
    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){
        btn.textContent = "Light Mode";

    }else{
        btn.textContent = "Dark Mode";
    }
})

 // scroll window section
 window.addEventListener("scroll", function () {

  hiddenElements.forEach(function (element) {

    const elementTop = element.getBoundingClientRect().top;

    if (elementTop < window.innerHeight - 100) {

      element.classList.add("show");

    }

  });

});
   // contact form submit
   form.addEventListener("submit", function(event){
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    
   // validation logic
   if(name.trim() === ""){
    alert("Please enter your name");
   }
   else if(email.trim() === ""){
    alert("Please enter your email");
   }
   else if(!email.includes("@")){
    alert("Please enter valid email");
   }
   else if (message.trim() === ""){
    alert("Please enter your message");
   }
   else{
    alert("Message sent successfully!");
    form.reset();
   }
   });
