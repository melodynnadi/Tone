// Countdown Timer
const countdown = () => {
    const eventDate = new Date('July 15, 2024 00:00:00').getTime();
    const now = new Date().getTime();
    const difference = eventDate - now;
  
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
  
    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;
  
    if (difference < 0) {
      clearInterval(countdown);
      document.getElementById('timer').innerHTML = "Event has started!";
    }
};
  
setInterval(countdown, 1000);

const galleryContainer = document.querySelector('.gallery-container');
const galleryControlsContainer = document.querySelector('.gallery-controls');
const galleryControls = ['previous', 'next'];
const galleryItems = document.querySelectorAll('.gallery-item');

class Carousel {
    constructor(container, items, controls) {
      this.carouselContainer = container;
      this.carouselControls = controls;
      this.carouselArray = [...items];
      this.autoScrollInterval = null;
    }
  
    updateGallery() {
      this.carouselArray.forEach(el => {
        el.classList.remove('gallery-item-1');
        el.classList.remove('gallery-item-2');
        el.classList.remove('gallery-item-3');
        el.classList.remove('gallery-item-4');
        el.classList.remove('gallery-item-5');
      });
  
      this.carouselArray.slice(0, 5).forEach((el, i) => {
        el.classList.add(`gallery-item-${i+1}`);
      });
    }
  
    setCurrentState(direction) {
      if (direction === 'next' || direction.className === 'gallery-controls-next') {
        this.carouselArray.push(this.carouselArray.shift());
      } else {
        this.carouselArray.unshift(this.carouselArray.pop());
      }
      
      this.updateGallery();
    }
  
    setControls() {
      this.carouselControls.forEach(control => {
        galleryControlsContainer.appendChild(document.createElement('button')).className = `gallery-controls-${control}`;
        document.querySelector(`.gallery-controls-${control}`).innerText = control;
      });
    }
   
    useControls() {
      const triggers = [...galleryControlsContainer.childNodes];
  
      triggers.forEach(control => {
        control.addEventListener('click', e => {
          e.preventDefault();
          this.setCurrentState(control);
          this.resetAutoScroll();
        });
      });
    }
  
    startAutoScroll() {
      this.autoScrollInterval = setInterval(() => {
        this.setCurrentState('next');
      }, 5000);
    }
  
    stopAutoScroll() {
      clearInterval(this.autoScrollInterval);
    }
  
    resetAutoScroll() {
      this.stopAutoScroll();
      this.startAutoScroll();
    }
  }
  
  const exampleCarousel = new Carousel(galleryContainer, galleryItems, galleryControls);
  
  exampleCarousel.setControls();
  exampleCarousel.useControls();
  exampleCarousel.startAutoScroll();
  