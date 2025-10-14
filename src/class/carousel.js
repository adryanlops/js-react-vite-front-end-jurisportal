class Carousel {
    constructor() {
      this.wrapper = document.querySelector(".carousel-wrapper");
      this.items = Array.from(document.querySelectorAll(".carousel-item"));
      this.dotsContainer = document.querySelector(".carousel-dots");
      this.currentIndex = 0;
      this.intervalId = null;
  
      this.init();
    }
  
    init() {
      this.createDots();
      this.updateCarousel();
  
      document.querySelector(".carousel-prev")?.addEventListener("click", () => this.prev());
      document.querySelector(".carousel-next")?.addEventListener("click", () => this.next());
  
      this.enableSwipe();
      this.startAutoPlay();
  
      this.wrapper.addEventListener("mouseenter", () => this.stopAutoPlay());
      this.wrapper.addEventListener("mouseleave", () => this.startAutoPlay());
    }
  
    createDots() {
      this.dotsContainer.innerHTML = "";
      this.items.forEach((_, i) => {
        const dot = document.createElement("button");
        dot.addEventListener("click", () => this.goTo(i));
        this.dotsContainer.appendChild(dot);
      });
    }
  
    updateCarousel() {
      this.wrapper.style.transform = `translateX(-${this.currentIndex * 100}%)`;
  
      this.items.forEach((item, i) => {
        item.classList.toggle("active", i === this.currentIndex);
      });
  
      Array.from(this.dotsContainer.children).forEach((dot, i) => {
        dot.classList.toggle("active", i === this.currentIndex);
      });
    }
  
    prev() {
      this.currentIndex = (this.currentIndex - 1 + this.items.length) % this.items.length;
      this.updateCarousel();
    }
  
    next() {
      this.currentIndex = (this.currentIndex + 1) % this.items.length;
      this.updateCarousel();
    }
  
    goTo(index) {
      this.currentIndex = index;
      this.updateCarousel();
    }
  
    enableSwipe() {
      let startX = 0;
  
      this.wrapper.addEventListener("touchstart", (e) => {
        if (e.touches[0]) {
          startX = e.touches[0].clientX;
        }
      });
  
      this.wrapper.addEventListener("touchend", (e) => {
        const endX = e.changedTouches[0]?.clientX;
        if (endX !== undefined && startX - endX > 50) this.next();
        if (endX !== undefined && endX - startX > 50) this.prev();
      });
    }
  
    startAutoPlay() {
      if (this.intervalId) return;
      this.intervalId = window.setInterval(() => this.next(), 4000);
    }
  
    stopAutoPlay() {
      if (this.intervalId) {
        clearInterval(this.intervalId);
        this.intervalId = null;
      }
    }
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    new Carousel();
  });
  
  export default Carousel;
  