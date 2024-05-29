const footerDate = document.querySelector(".footer-date")
dt = new Date()
footerDate.textContent = dt.getFullYear()


// scroll to top
const scrollToTop = document.querySelector(".scroll-to-top")

document.onscroll = ()=>{
    position = window.scrollY;
    if (position > 50){
        scrollToTop.style.display = "block"
        scrollToTop.onclick = ()=>{
            window.scrollTo(0, 0);
        }
    }else{
        scrollToTop.style.display = "none"
    }
}

