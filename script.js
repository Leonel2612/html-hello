


const Button1=document.getElementById("button1")
const Button2=document.getElementById("button2")
const iconGrid=document.getElementById("icon-grid")
const iconSquare=document.getElementById("icon-square")
const carousel= new bootstrap.Carousel(document.getElementById('instagram_post'))




document.addEventListener('DOMContentLoaded', () => {
    const grid_blue = document.getElementById('icon-grid');
    grid_blue.classList.add('blue');
     // ChangeOfImage
    // const random_images=document.querySelectorAll(".random_image")
    // random_images.forEach(image=>{
    //     Get_RandomImage(image);
    // });

    // function Get_RandomImage(image){
    // const random_number=Math.floor(Math.random()*100)+1;
    // image.src=`https://picsum.photos/400/200?random=${random_number}`
    // }
});


Button1.addEventListener("click",()=>{
    Button1.classList.add('active')
    Button2.classList.remove('active')
    iconGrid.classList.add("blue")
    iconSquare.classList.remove("blue")
    carousel.to(0)
    Pause_carusel()
});

Button2.addEventListener('click',()=>{
        Button2.classList.add('active')
        Button1.classList.remove('active')
        iconSquare.classList.add("blue")
        iconGrid.classList.remove('blue')
        carousel.to(1)
        Pause_carusel()
});



function Pause_carusel(){
    carousel.pause()
}

