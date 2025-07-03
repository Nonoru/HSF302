document.addEventListener('DOMContentLoaded', function() {
    // Initialize tooltips
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
    
    // Add to cart functionality
    const addToCartButtons = document.querySelectorAll('.btn-success');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Get the game info from the parent card
            const gameCard = this.closest('.game-card') || this.closest('.game-purchase-card');
            let gameTitle = '';
            let gamePrice = '';
            
            if (gameCard) {
                if (gameCard.classList.contains('game-card')) {
                    gameTitle = gameCard.querySelector('h3, h4').textContent;
                    gamePrice = gameCard.querySelector('.game-price').textContent;
                } else {
                    gameTitle = gameCard.querySelector('h3').textContent;
                    gamePrice = gameCard.querySelector('.game-price').textContent;
                }
            }
            
            // Simple notification (in a real app, this would update a cart)
            alert(`Added ${gameTitle} (${gamePrice}) to cart!`);
            
            // Change button text temporarily
            const originalText = this.innerHTML;
            this.innerHTML = '<i class="fas fa-check me-2"></i> Added!';
            
            setTimeout(() => {
                this.innerHTML = originalText;
            }, 2000);
        });
    });
    
    // Filter functionality for store page
    const applyFilterButton = document.querySelector('.sidebar-filters .btn-primary');
    if (applyFilterButton) {
        applyFilterButton.addEventListener('click', function() {
            // In a real app, this would filter the games
            alert('Filters applied! (This is a demo)');
        });
    }
    
    // Wishlist functionality
    const wishlistButton = document.querySelector('.btn-outline-primary');
    if (wishlistButton && wishlistButton.textContent.includes('Wishlist')) {
        wishlistButton.addEventListener('click', function() {
            // Simple notification
            alert('Added to wishlist!');
            
            // Toggle button appearance
            this.classList.toggle('btn-outline-primary');
            this.classList.toggle('btn-primary');
            
            if (this.innerHTML.includes('Add to Wishlist')) {
                this.innerHTML = '<i class="fas fa-heart me-2"></i> In Wishlist';
            } else {
                this.innerHTML = '<i class="fas fa-heart me-2"></i> Add to Wishlist';
            }
        });
    }
    
    // Search functionality
    const searchForm = document.querySelector('form.d-flex');
    if (searchForm) {
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const searchInput = this.querySelector('input[type="search"]');
            alert(`Searching for: ${searchInput.value} (This is a demo)`);
        });
    }
    
    // Carousel auto-play if present
    const gameCarousel = document.getElementById('gameCarousel');
    if (gameCarousel) {
        const carousel = new bootstrap.Carousel(gameCarousel, {
            interval: 5000
        });
    }
}); 