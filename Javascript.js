// Slide Image
// const project_img = document.querySelector(".project-img");
// img_container = document.querySelector(".img_container");
// let pImg = document.querySelector('.p-Img');
// images = document.querySelectorAll(".slide-img");
// buttons = document.querySelectorAll(".button");
// console.log(project_img, img_container, pImg, images, buttons);

// let imgIndex = 1;
// var interValid;
// // creating function to start automatic img slider
// const autoSlider = () => {
//   interValid = setInterval(() => slideImgs(++imgIndex), 2000);
// };
// // Calling auto slide
// autoSlider();
// //
// const slideImgs = () => {
//     pImg.style.transfarm = 'translate(-${imgIndex * 100})';
// };


//  Dark Mode

var theme_btn = document.getElementById("theme-btn");
let changeIcon = function (icon){
    icon.classList.toggle('uil-sun');
}
theme_btn.onclick = function () {
    document.body.classList.toggle("dark-theme");
}