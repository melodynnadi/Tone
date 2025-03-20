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


const filterContainer = document.querySelector(".gallery-filter"),
galleryItems = document.querySelectorAll(".gallery-item");

filterContainer.addEventListener("click", (event) =>{
  if(event.target.classList.contains("filter-item")){
      // deactivate existing active 'filter-item'
      filterContainer.querySelector(".active").classList.remove("active");
      // activate new 'filter-item'
      event.target.classList.add("active");
      const filterValue = event.target.getAttribute("data-filter");
      galleryItems.forEach((item) =>{
      if(item.classList.contains(filterValue) || filterValue === 'all'){
        item.classList.remove("hide");
          item.classList.add("show");
      }
      else{
        item.classList.remove("show");
        item.classList.add("hide");
      }
      });
  }
});


function moveSlide(direction) {
  const eventGrid = document.querySelector('.event-grid');
  const cardWidth = eventGrid.querySelector('.event-card').offsetWidth;
  const gap = 20; // Gap between cards
  const scrollAmount = (cardWidth + gap) * 1; // Scroll by 4 cards at a time

  eventGrid.scrollBy({
    left: direction * scrollAmount,
    behavior: 'smooth'
  });
}

  