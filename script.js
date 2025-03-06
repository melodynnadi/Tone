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

let currentSlide = 0;
        const slides = document.querySelectorAll('.gallery-slides img');
        const totalSlides = slides.length;

        function showNextSlide() {
            slides[currentSlide].classList.remove("active");
            currentSlide = (currentSlide + 1) % totalSlides;
            slides[currentSlide].classList.add("active");
        }

        // Change slide every 3 seconds
        setInterval(showNextSlide, 3000);
  