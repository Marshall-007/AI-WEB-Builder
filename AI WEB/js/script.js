// A click listener for the Images in Form 5  
document.querySelectorAll('.page-option').forEach(option => {
    option.addEventListener('click', () => {
        option.classList.toggle('selected');
        
    });
});
// Code for the Next and the Back button 

var Form1 = document.getElementById("Form1");
var Form2 = document.getElementById("Form2");
var Form3 = document.getElementById("Form3");
var Form4 = document.getElementById("Form4");
var Form5 = document.getElementById("Form5");


var Next1 = document.getElementById("Next1");
var Next2 = document.getElementById("Next2");
var Next3 = document.getElementById("Next3");
var Next4 = document.getElementById("Next4");

var Back1 = document.getElementById("Back1");
var Back2 = document.getElementById("Back2");
var Back3 = document.getElementById("Back3");
var Back4 = document.getElementById("Back4");

var progress = document.getElementById("progress")

// A click listener for the Next button in Form 1
Next1.onclick = function(){
    Form1.style.left = "-480px";
    Form2.style.left = "80px";
    progress.style.width = "184px";
}
    Back1.onclick = function(){
        Form1.style.left = "80px";
        Form2.style.left = "480px";
        progress.style.width = "92px";
}
// Next and Back for Form 2 and 3.
Next2.onclick = function(){
    Form2.style.left = "-480px";
    Form3.style.left = "80px";
    progress.style.width = "276px";
}

Back2.onclick = function(){
    Form2.style.left = "80px";
    Form3.style.left = "480px";
    progress.style.width = "184px";
}
//  Next and back button for Form 3 and 4. 
Next3.onclick = function(){
    Form3.style.left = "-480px";
    Form4.style.left = "80px";
    progress.style.width = "368px";
}

Back3.onclick = function(){
    Form3.style.left = "80px";
    Form4.style.left = "480px";
    progress.style.width = "276px";
}
//  Next and back button for Form 4 and 5. 
Next4.onclick = function(){
    Form4.style.left = "-480px";
    Form5.style.left = "80px";
    progress.style.width = "460px";
}

Back4.onclick = function(){
    Form4.style.left = "80px";
    Form5.style.left = "480px";
    progress.style.width = "368px";
    
}