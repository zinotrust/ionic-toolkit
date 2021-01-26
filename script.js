// ADD ACTIVE CLASS TO LINK ON CLICK
const navUL = document.getElementById("nav-ul");
const navLi = navUL.getElementsByClassName("nav-li");

for (let i = 0; i < navLi.length; i++) {
      navLi[i].addEventListener("click", function() {
      const current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }

// SLIDE DIFFERENT CONTENT SECTIONS ON LINK CLICK
let links = document.querySelectorAll('.link');
const allContent = document.querySelectorAll('.content');
const about = document.querySelector("content-about");

if (window.innerWidth > 1) {
    for (i = 0; i < links.length; i++) {
      links[i].addEventListener('click', (e) => {
        e.preventDefault()
        
        const filter = e.target.dataset.filter;
        console.log(filter);
        
        allContent.forEach((content)=> {

            if (filter === 'content'){
                content.style.display = 'block'
            } else if (content.classList.contains(filter)) {
                content.style.display = 'block'
            } else {
                content.style.display = 'none'
            }
  
        });
    });

    } 

}

// Selecting the iframe element
var iFrame = document.getElementById("iframe");
    
// Adjusting the iframe height onload event
// iFrame.onload = 
function iFrameHeight(){
    iFrame.height = "";
            iFrame.height = iFrame.contentWindow.document.body.scrollHeight + "px";
}
iFrameHeight();

// const iframe = document.getElementsByTagName("iframe");
// const height = iframe.height;
// alert(height);