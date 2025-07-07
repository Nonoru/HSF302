document.addEventListener('DOMContentLoaded', function() {
    // Initialize tooltips
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
    
    // Add cart notification modal to the body if it doesn't exist
    if (!document.getElementById('cartNotificationModal')) {
        fetch('/fragments/layout.html')
            .then(response => response.text())
            .then(html => {
                const parser = new DOMParser();
                const doc = parser.parseFromString(html, 'text/html');
                const cartModal = doc.getElementById('cartNotificationModal');
                if (cartModal) {
                    document.body.appendChild(cartModal.cloneNode(true));
                    setupCartNotification();
                }
            })
            .catch(error => {
                console.error('Error loading cart notification:', error);
            });
    } else {
        setupCartNotification();
    }
    
    function setupCartNotification() {
        // Cart notification modal elements
        const cartModal = document.getElementById('cartNotificationModal');
        const closeBtn = document.getElementById('closeCartNotification');
        const continueBtn = document.getElementById('continueShopping');
        const viewCartBtn = document.getElementById('viewCart');
        
        // Close modal events
        if (closeBtn) {
            closeBtn.addEventListener('click', function() {
                cartModal.style.display = 'none';
            });
        }
        
        if (continueBtn) {
            continueBtn.addEventListener('click', function() {
                cartModal.style.display = 'none';
            });
        }
        
        if (viewCartBtn) {
            viewCartBtn.addEventListener('click', function() {
                window.location.href = '/cart';
            });
        }
        
        // Close when clicking outside the modal
        window.addEventListener('click', function(event) {
            if (event.target === cartModal) {
                cartModal.style.display = 'none';
            }
        });
    }
    
    // Add to cart functionality
    const addToCartButtons = document.querySelectorAll('.btn-success');
    let cartItemCount = 0;
    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Get the game info from the parent card
            const gameCard = this.closest('.game-card') || this.closest('.game-purchase-card');
            let gameTitle = '';
            let gamePrice = '';
            let gameImage = '';
            
            if (gameCard) {
                if (gameCard.classList.contains('game-card')) {
                    gameTitle = gameCard.querySelector('h3, h4').textContent;
                    gamePrice = gameCard.querySelector('.game-price').textContent;
                    const thumbnailImg = gameCard.querySelector('.video-thumbnail');
                    if (thumbnailImg) {
                        gameImage = thumbnailImg.src;
                    }
                } else {
                    gameTitle = gameCard.querySelector('h3').textContent;
                    gamePrice = gameCard.querySelector('.game-price').textContent;
                    const img = gameCard.querySelector('img');
                    if (img) {
                        gameImage = img.src;
                    }
                }
            }
            
            // Change button text temporarily
            const originalText = this.innerHTML;
            this.innerHTML = '<i class="fas fa-check me-2"></i> Added!';
            
            setTimeout(() => {
                this.innerHTML = originalText;
            }, 2000);
            
            // Update cart count
            cartItemCount++;
            
            // Show cart notification
            showCartNotification(gameTitle, gamePrice, gameImage, cartItemCount);
        });
    });
    
    // Function to show cart notification
    function showCartNotification(title, price, image, count) {
        const cartModal = document.getElementById('cartNotificationModal');
        if (!cartModal) return;
        
        // Update modal content
        document.getElementById('cartItemName').textContent = title;
        document.getElementById('cartItemImage').src = image;
        document.getElementById('cartItemPrice').textContent = price;
        
        // Calculate original price (for demo purposes)
        const priceValue = parseFloat(price.replace('$', ''));
        const originalPrice = (priceValue * 2).toFixed(2);
        document.getElementById('cartItemOriginalPrice').textContent = '$' + originalPrice;
        
        // Update cart count
        const cartCountElem = document.getElementById('cartItemCount');
        if (cartCountElem) {
            cartCountElem.textContent = count;
        }
        
        // Display the modal
        cartModal.style.display = 'flex';
    }
    
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