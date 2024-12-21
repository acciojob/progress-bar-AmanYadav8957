//your JS code here. If required.
const circles = document.querySelectorAll('.circle');  
const nextButton = document.getElementById('next');  
const prevButton = document.getElementById('prev');  

let currentActive = 0;  

// Function to update the buttons' state  
function updateButtons() {  
    prevButton.disabled = currentActive === 0; // Disable prev button if at the first circle  
    nextButton.disabled = currentActive === circles.length - 1; // Disable next button if at the last circle  
}  

// Next button click event  
nextButton.addEventListener('click', () => {  
    if (currentActive < circles.length - 1) {  
        currentActive++;  
        circles[currentActive].classList.add('active');  
        updateButtons();  
    }  
});  

// Previous button click event  
prevButton.addEventListener('click', () => {  
    if (currentActive > 0) {  
        circles[currentActive].classList.remove('active');  
        currentActive--;  
        updateButtons();  
    }  
});  

// Initial button state update  
updateButtons();