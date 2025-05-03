class Gallery {
    constructor(container) {
        this.container = container;
        this.gallery = container.querySelector('.gallery');
        this.currentIndex = 0;
        
        // Sample images array - replace with your images
        this.images = [
            'img1.jpg',
            'img2.jpg',
            'img3.jpg'
        ];
        
        this.init();
        this.bindEvents();
    }
    
    init() {
        // Create and append images
        this.images.forEach(src => {
            const img = document.createElement('img');
            img.src = src;
            this.gallery.appendChild(img);
        });
    }
    
    bindEvents() {
        const prev = this.container.querySelector('.prev');
        const next = this.container.querySelector('.next');
        
        prev.addEventListener('click', () => this.slide('prev'));
        next.addEventListener('click', () => this.slide('next'));
    }
    
    slide(direction) {
        if (direction === 'next') {
            this.currentIndex = (this.currentIndex + 1) % this.images.length;
        } else {
            this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
        }
        
        const offset = -this.currentIndex * 100;
        this.gallery.style.transform = `translateX(${offset}%)`;
    }
}

// Initialize the gallery
const galleryContainer = document.querySelector('.gallery-container');
new Gallery(galleryContainer);
