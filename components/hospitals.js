const hamburger = document.querySelector('.open');
const close = document.querySelector('.close');

close.onclick = () => {
    document.querySelector('.nav-menu ul').classList.remove('active');
    close.style.display = 'none';
    hamburger.style.display = 'block';
}

hamburger.onclick = () => {
    document.querySelector('.nav-menu ul').classList.toggle('active');
    close.style.display = 'block';
    hamburger.style.display = 'none';
};

function setupLikeFunction(a, b) {
    var likes= document.getElementById(a);
    
    likes.addEventListener("click", function() {
        var likeIcon = document.getElementById(a);
        var likeCount = parseInt(document.getElementById(b).textContent); // Get the current count from the <p> element and convert it to integer
    // Toggle between classes
        if (likeIcon.classList.contains("fa-regular")) {
            likeIcon.classList.remove("fa-regular");
            likeIcon.classList.add("fa-solid");
            likeCount++; // Increase the count
            } else {
            likeIcon.classList.remove("fa-solid");
            likeIcon.classList.add("fa-regular");
            likeCount--; // Decrease the count
            }
document.getElementById(b).textContent = likeCount; // Update the text content of the <p> element with the new count
})};
setupLikeFunction("like","numlike")

function setupviewFunction(c,d){
var views = document.getElementById(c)

views.addEventListener("click", function() {
    var viewIcon = document.getElementById(c)
    var viewcount = parseInt(document.getElementById(d).textContent);// Get the current count from the <p> element and convert it to integer
    // Toggle between classes
    if (viewIcon.classList.contains("fa-regular")){
        viewIcon.classList.remove("fa-regular");
        viewIcon.classList.add("fa-solid");
        viewcount++;
    } else{
        viewIcon.classList.remove("fa-solid");
        viewIcon.classList.add("fa-regular");
        viewcount--;
    }
    document.getElementById(d).textContent = viewcount;


})};
setupviewFunction("view","numview")

