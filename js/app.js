 const carouselSlide = document.querySelector('.carousel-slide');
 const carouselImages = document.querySelectorAll('.carousel-slide img');
 const dot = document.querySelectorAll('.dot');
 const preBtn = document.querySelector('#preBtn');
 const nextBtn = document.querySelector('#nextBtn');
 const select = document.querySelector('#select');
 const select1 = document.querySelector('#select1');
 const select2 = document.querySelector('#select2');

 

let index = 1;
 const size = carouselImages[0].clientWidth;

 carouselSlide.style.transform = 'translateX(' + (-size * index) + 'px)';


nextBtn.addEventListener('click',()=>{
    if(index >= carouselImages.length -1)return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    index++;
    carouselSlide.style.transform = 'translateX(' + (-size * index) + 'px)';

});
 preBtn.addEventListener('click',()=>{
     if (index <= 0) return;
     carouselSlide.style.transition = "transform 0.4s ease-in-out";
     index--;
     carouselSlide.style.transform = 'translateX(' + (-size * index) + 'px)';

 });

carouselSlide.addEventListener('transitionend',() =>{
   if(carouselImages[index].id === 'lastImg'){
    carouselSlide.style.transition = "none";
    index = carouselImages.length -2;
    carouselSlide.style.transform = 'translateX(' + (-size * index) + 'px)';

   }
});
carouselSlide.addEventListener('transitionend',() =>{
    if(carouselImages[index].id === 'firstImg'){
     carouselSlide.style.transition = "none";
     index = carouselImages.length -index;
     carouselSlide.style.transform = 'translateX(' + (-size * index) + 'px)';
    }
 });
 select2.addEventListener('click',()=>{
    if(index == carouselImages)return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    index = carouselImages.length ==0;
    carouselSlide.style.transform = 'translateX(' + (-size * index) + 'px)';

});
select.addEventListener('click',()=>{
    if (index == carouselImages) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    index = carouselImages.length =1;
    carouselSlide.style.transform = 'translateX(' + (-size * index) + 'px)';

});
 select1.addEventListener('click',()=>{
     if (index == carouselImages) return;
     carouselSlide.style.transition = "transform 0.4s ease-in-out";
     index = carouselImages.length =2;
     carouselSlide.style.transform = 'translateX(' + (-size * index) + 'px)';

 });