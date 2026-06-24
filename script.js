const currencyRates = {
    "USD $": { symbol: "$", rate: 1.00, formatRight: false },
    "EUR €": { symbol: "€", rate: 0.92, formatRight: true }, 
    "GBP £": { symbol: "£", rate: 0.79, formatRight: false },
    "CAD $": { symbol: "CA$", rate: 1.37, formatRight: false }
};

// one product
const marketplaceProducts = [
    { id: 1, title: "Automated Payment Gateway Router", author: "DevLabs Global", rating: 4.9, reviews: 42, price: "$89.00" },
    { id: 2, title: "Minimalist Admin Dashboard Kit", author: "Apex Studio", rating: 4.7, reviews: 128, price: "$49.00" },
    { id: 3, title: "The Independent Creator Blueprint", author: "Flekona Pubs", rating: 5.0, reviews: 19, price: "$19.00" },
    { id: 4, title: "Global Commerce Icon Framework", author: "Pixel Core Co.", rating: 4.6, reviews: 63, price: "$29.00" },
    { id: 5, title: "Real-time Analytics Web Hooks", author: "Node Labs", rating: 4.8, reviews: 31, price: "$79.00" },
    { id: 6, title: "Clean Retro Typography Layouts", author: "Studio Vector", rating: 4.9, reviews: 55, price: "$35.00" },
    { id: 7, title: "Clean Retro Typography Layouts", author: "Studio Vector", rating: 4.9, reviews: 55, price: "$35.00" },
    { id: 8, title: "Clean Retro Typography Layouts", author: "Studio Vector", rating: 4.9, reviews: 55, price: "$35.00" },
    { id: 9, title: "Clean Retro Typography Layouts", author: "Studio Vector", rating: 4.9, reviews: 55, price: "$35.00" },
    { id: 10, title: "Clean Retro Typography Layouts", author: "Studio Vector", rating: 4.9, reviews: 55, price: "$35.00" },
    { id: 11, title: "Clean Retro Typography Layouts", author: "Studio Vector", rating: 4.9, reviews: 55, price: "$35.00" },
    { id: 12, title: "Clean Retro Typography Layouts", author: "Studio Vector", rating: 4.9, reviews: 55, price: "$35.00" },
    { id: 13, title: "Clean Retro Typography Layouts", author: "Studio Vector", rating: 4.9, reviews: 55, price: "$35.00" },
    { id: 14, title: "Clean Retro Typography Layouts", author: "Studio Vector", rating: 4.9, reviews: 55, price: "$35.00" },
    { id: 15, title: "Clean Retro Typography Layouts", author: "Studio Vector", rating: 4.9, reviews: 55, price: "$35.00" },
    { id: 16, title: "Clean Retro Typography Layouts", author: "Studio Vector", rating: 4.9, reviews: 55, price: "$35.00" },
    { id: 17, title: "Clean Retro Typography Layouts", author: "Studio Vector", rating: 4.9, reviews: 55, price: "$35.00" },
    { id: 18, title: "Clean Retro Typography Layouts", author: "Studio Vector", rating: 4.9, reviews: 55, price: "$35.00" },
    { id: 19, title: "Clean Retro Typography Layouts", author: "Studio Vector", rating: 4.9, reviews: 55, price: "$35.00" },
    { id: 20, title: "Clean Retro Typography Layouts", author: "Studio Vector", rating: 4.9, reviews: 55, price: "$35.00" },
];

let currentSliderIndex = 0;

// two Product
const twomarketplaceProducts = [
    { id: 1, title: "Automated Payment Gateway Router", author: "DevLabs Global", rating: 4.9, reviews: 42, price: "$89.00" },
    { id: 2, title: "Minimalist Admin Dashboard Kit", author: "Apex Studio", rating: 4.7, reviews: 128, price: "$49.00" },
    { id: 3, title: "The Independent Creator Blueprint", author: "Flekona Pubs", rating: 5.0, reviews: 19, price: "$19.00" },
    { id: 4, title: "Global Commerce Icon Framework", author: "Pixel Core Co.", rating: 4.6, reviews: 63, price: "$29.00" },
    { id: 5, title: "Real-time Analytics Web Hooks", author: "Node Labs", rating: 4.8, reviews: 31, price: "$79.00" },
    { id: 6, title: "Clean Retro Typography Layouts", author: "Studio Vector", rating: 4.9, reviews: 55, price: "$35.00" },
    { id: 7, title: "Clean Retro Typography Layouts", author: "Studio Vector", rating: 4.9, reviews: 55, price: "$35.00" },
    { id: 8, title: "Clean Retro Typography Layouts", author: "Studio Vector", rating: 4.9, reviews: 55, price: "$35.00" },
    { id: 9, title: "Clean Retro Typography Layouts", author: "Studio Vector", rating: 4.9, reviews: 55, price: "$35.00" },
    { id: 10, title: "Clean Retro Typography Layouts", author: "Studio Vector", rating: 4.9, reviews: 55, price: "$35.00" },
    { id: 11, title: "Clean Retro Typography Layouts", author: "Studio Vector", rating: 4.9, reviews: 55, price: "$35.00" },
    { id: 12, title: "Clean Retro Typography Layouts", author: "Studio Vector", rating: 4.9, reviews: 55, price: "$35.00" },
    { id: 13, title: "Clean Retro Typography Layouts", author: "Studio Vector", rating: 4.9, reviews: 55, price: "$35.00" },
    { id: 14, title: "Clean Retro Typography Layouts", author: "Studio Vector", rating: 4.9, reviews: 55, price: "$35.00" },
    { id: 15, title: "Clean Retro Typography Layouts", author: "Studio Vector", rating: 4.9, reviews: 55, price: "$35.00" },
    { id: 16, title: "Clean Retro Typography Layouts", author: "Studio Vector", rating: 4.9, reviews: 55, price: "$35.00" },
    { id: 17, title: "Clean Retro Typography Layouts", author: "Studio Vector", rating: 4.9, reviews: 55, price: "$35.00" },
    { id: 18, title: "Clean Retro Typography Layouts", author: "Studio Vector", rating: 4.9, reviews: 55, price: "$35.00" },
    { id: 19, title: "Clean Retro Typography Layouts", author: "Studio Vector", rating: 4.9, reviews: 55, price: "$35.00" },
    { id: 20, title: "Clean Retro Typography Layouts", author: "Studio Vector", rating: 4.9, reviews: 55, price: "$35.00" },
];

let currenttwoSliderIndex = 0;

// three Product
const threemarketplaceProducts = [
    { id: 1, title: "Automated Payment Gateway Router", author: "DevLabs Global", rating: 4.9, reviews: 42, price: "$89.00" },
    { id: 2, title: "Minimalist Admin Dashboard Kit", author: "Apex Studio", rating: 4.7, reviews: 128, price: "$49.00" },
    { id: 3, title: "The Independent Creator Blueprint", author: "Flekona Pubs", rating: 5.0, reviews: 19, price: "$19.00" },
    { id: 4, title: "Global Commerce Icon Framework", author: "Pixel Core Co.", rating: 4.6, reviews: 63, price: "$29.00" },
    { id: 5, title: "Real-time Analytics Web Hooks", author: "Node Labs", rating: 4.8, reviews: 31, price: "$79.00" },
    { id: 6, title: "Clean Retro Typography Layouts", author: "Studio Vector", rating: 4.9, reviews: 55, price: "$35.00" },
    { id: 7, title: "Clean Retro Typography Layouts", author: "Studio Vector", rating: 4.9, reviews: 55, price: "$35.00" },
    { id: 8, title: "Clean Retro Typography Layouts", author: "Studio Vector", rating: 4.9, reviews: 55, price: "$35.00" },
    { id: 9, title: "Clean Retro Typography Layouts", author: "Studio Vector", rating: 4.9, reviews: 55, price: "$35.00" },
    { id: 10, title: "Clean Retro Typography Layouts", author: "Studio Vector", rating: 4.9, reviews: 55, price: "$35.00" },
    { id: 11, title: "Clean Retro Typography Layouts", author: "Studio Vector", rating: 4.9, reviews: 55, price: "$35.00" },
    { id: 12, title: "Clean Retro Typography Layouts", author: "Studio Vector", rating: 4.9, reviews: 55, price: "$35.00" },
    { id: 13, title: "Clean Retro Typography Layouts", author: "Studio Vector", rating: 4.9, reviews: 55, price: "$35.00" },
    { id: 14, title: "Clean Retro Typography Layouts", author: "Studio Vector", rating: 4.9, reviews: 55, price: "$35.00" },
    { id: 15, title: "Clean Retro Typography Layouts", author: "Studio Vector", rating: 4.9, reviews: 55, price: "$35.00" },
    { id: 16, title: "Clean Retro Typography Layouts", author: "Studio Vector", rating: 4.9, reviews: 55, price: "$35.00" },
    { id: 17, title: "Clean Retro Typography Layouts", author: "Studio Vector", rating: 4.9, reviews: 55, price: "$35.00" },
    { id: 18, title: "Clean Retro Typography Layouts", author: "Studio Vector", rating: 4.9, reviews: 55, price: "$35.00" },
    { id: 19, title: "Clean Retro Typography Layouts", author: "Studio Vector", rating: 4.9, reviews: 55, price: "$35.00" },
    { id: 20, title: "Clean Retro Typography Layouts", author: "Studio Vector", rating: 4.9, reviews: 55, price: "$35.00" },
];

let currentthreeSliderIndex = 0;

// one product
function renderCarouselInventory() {
    const track = document.getElementById('product-slider-track');
    if (!track) return;

    track.innerHTML = marketplaceProducts.map(product => `
        <div class="carousel-product-card">
            <div class="card-media-wrapper">
                <span>${product.category} Blueprint Preview</span>
            </div>
            <div class="card-body-content">
                <h3>${product.title}</h3>
                <span class="card-author-label">By ${product.author}</span>
                
                <div class="rating-stars-row">
                    <span>★ ${product.rating.toFixed(1)}</span>
                    <span class="review-count">(${product.reviews} reviews)</span>
                </div>

                <div class="card-footer-action-row">
                    <span class="card-price-value">${product.price}</span>
                    <button class="card-buy-btn" onclick="alert('Asset added to checkout index context')">Buy Now</button>
                </div>
            </div>
        </div>
    `).join('');
    
    updateSliderNavigationState();
}

// two product
function rendertwoCarouselInventory() {
    const track = document.getElementById('two-slider-track');
    if (!track) return;

    track.innerHTML = twomarketplaceProducts.map(product => `
        <div class="carousel-product-card">
            <div class="card-media-wrapper">
                <span>${product.category} Blueprint Preview</span>
            </div>
            <div class="card-body-content">
                <h3>${product.title}</h3>
                <span class="card-author-label">By ${product.author}</span>
                
                <div class="rating-stars-row">
                    <span>★ ${product.rating.toFixed(1)}</span>
                    <span class="review-count">(${product.reviews} reviews)</span>
                </div>

                <div class="card-footer-action-row">
                    <span class="card-price-value">${product.price}</span>
                    <button class="card-buy-btn" onclick="alert('Asset added to checkout index context')">Buy Now</button>
                </div>
            </div>
        </div>
    `).join('');
    
    updateSliderNavigationState();
}

// three product
function renderthreeCarouselInventory() {
    const track = document.getElementById('three-slider-track');
    if (!track) return;

    track.innerHTML = threemarketplaceProducts.map(product => `
        <div class="carousel-product-card">
            <div class="card-media-wrapper">
                <span>${product.category} Blueprint Preview</span>
            </div>
            <div class="card-body-content">
                <h3>${product.title}</h3>
                <span class="card-author-label">By ${product.author}</span>
                
                <div class="rating-stars-row">
                    <span>★ ${product.rating.toFixed(1)}</span>
                    <span class="review-count">(${product.reviews} reviews)</span>
                </div>

                <div class="card-footer-action-row">
                    <span class="card-price-value">${product.price}</span>
                    <button class="card-buy-btn" onclick="alert('Asset added to checkout index context')">Buy Now</button>
                </div>
            </div>
        </div>
    `).join('');
    
    updateSliderNavigationState();
}

// one product
function getVisibleCardsCount() {
    const width = window.innerWidth;
    if (width > 1200) return 4;
    if (width > 900) return 3;
    if (width > 600) return 2;
    return 1;
}

// one product
function moveSlider(direction) {
    const totalItems = marketplaceProducts.length;
    const visibleCards = getVisibleCardsCount();
    const maxIndex = totalItems - visibleCards;

    currentSliderIndex += direction;

    // Bounds safety clamping bounds checks
    if (currentSliderIndex < 0) currentSliderIndex = 0;
    if (currentSliderIndex > maxIndex) currentSliderIndex = maxIndex;

    const track = document.getElementById('product-slider-track');
    const cardElement = document.querySelector('.carousel-product-card');
    
    if (track && cardElement) {
        // Grab real computed layout width metrics dynamically
        const cardWidth = cardElement.getBoundingClientRect().width;
        // Extract layout base grid gaps (30px defined in stylesheet)
        const gapOffset = 30;
        
        // Calculate the translation shift
        const transformShiftAmount = currentSliderIndex * (cardWidth + gapOffset);
        track.style.transform = `translateX(-${transformShiftAmount}px)`;
    }

    updateSliderNavigationState();
}

// one product
function updateSliderNavigationState() {
    const totalItems = marketplaceProducts.length;
    const visibleCards = getVisibleCardsCount();
    const maxIndex = totalItems - visibleCards;

    const prevBtn = document.getElementById('btn-prev');
    const nextBtn = document.getElementById('btn-next');

    if (prevBtn && nextBtn) {
        prevBtn.disabled = currentSliderIndex === 0;
        nextBtn.disabled = currentSliderIndex >= maxIndex;
    }
}

// two product
function twomoveSlider(direction) {
    const totalItems = twomarketplaceProducts.length;
    const visibleCards = getVisibleCardsCount();
    const maxIndex = totalItems - visibleCards;

    currenttwoSliderIndex += direction;

    // Bounds safety clamping bounds checks
    if (currenttwoSliderIndex < 0) currenttwoSliderIndex = 0;
    if (currenttwoSliderIndex > maxIndex) currenttwoSliderIndex = maxIndex;

    const track = document.getElementById('two-slider-track');
    const cardElement = document.querySelector('.carousel-product-card');
    
    if (track && cardElement) {
        // Grab real computed layout width metrics dynamically
        const cardWidth = cardElement.getBoundingClientRect().width;
        // Extract layout base grid gaps (30px defined in stylesheet)
        const gapOffset = 30;
        
        // Calculate the translation shift
        const transformShiftAmount = currenttwoSliderIndex * (cardWidth + gapOffset);
        track.style.transform = `translateX(-${transformShiftAmount}px)`;
    }

    updatetwoSliderNavigationState();
}

// two product
function updatetwoSliderNavigationState() {
    const totalItems = twomarketplaceProducts.length;
    const visibleCards = getVisibleCardsCount();
    const maxIndex = totalItems - visibleCards;

    const prevBtn = document.getElementById('btn-two-prev');
    const nextBtn = document.getElementById('btn-two-next');

    if (prevBtn && nextBtn) {
        prevBtn.disabled = currenttwoSliderIndex === 0;
        nextBtn.disabled = currenttwoSliderIndex >= maxIndex;
    }
}

// three product
function moveSlider(direction) {
    const totalItems = threemarketplaceProducts.length;
    const visibleCards = getVisibleCardsCount();
    const maxIndex = totalItems - visibleCards;

    currentthreeSliderIndex += direction;

    // Bounds safety clamping bounds checks
    if (currentthreeSliderIndex < 0) currentthreeSliderIndex = 0;
    if (currentthreeSliderIndex > maxIndex) currentthreeSliderIndex = maxIndex;

    const track = document.getElementById('three-slider-track');
    const cardElement = document.querySelector('.carousel-product-card');
    
    if (track && cardElement) {
        // Grab real computed layout width metrics dynamically
        const cardWidth = cardElement.getBoundingClientRect().width;
        // Extract layout base grid gaps (30px defined in stylesheet)
        const gapOffset = 30;
        
        // Calculate the translation shift
        const transformShiftAmount = currentthreeSliderIndex * (cardWidth + gapOffset);
        track.style.transform = `translateX(-${transformShiftAmount}px)`;
    }

    updateSliderNavigationState();
}

// one product
function updateSliderNavigationState() {
    const totalItems = threemarketplaceProducts.length;
    const visibleCards = getVisibleCardsCount();
    const maxIndex = totalItems - visibleCards;

    const prevBtn = document.getElementById('btn-three-prev');
    const nextBtn = document.getElementById('btn-three-next');

    if (prevBtn && nextBtn) {
        prevBtn.disabled = currentthreeSliderIndex === 0;
        nextBtn.disabled = currentthreeSliderIndex >= maxIndex;
    }
}


// for all product just add
document.addEventListener('DOMContentLoaded', () => {
    renderCarouselInventory(); //one
    rendertwoCarouselInventory(); //two
    renderthreeCarouselInventory(); //three
    
    window.addEventListener('resize', () => {
        // Reset positioning on frame resize to avoid display errors
        currentSliderIndex = 0;
        const track = document.getElementById('product-slider-track');
        if (track) track.style.transform = 'translateX(0px)';
        updateSliderNavigationState();
    });
});



let currentCurrency = "USD $";

function renderProductsGrid() {
    const gridContainer = document.getElementById('productsGrid');
    if (!gridContainer) return; 
    
    const currConfig = currencyRates[currentCurrency];
    gridContainer.innerHTML = ""; 
    
    productsList.forEach(product => {
        const finalPrice = (product.basePriceUSD * currConfig.rate).toFixed(2);
        const formattedPrice = currConfig.formatRight ? `${finalPrice} ${currConfig.symbol}` : `${currConfig.symbol}${finalPrice}`;

        gridContainer.innerHTML += `
            <div class="product-card">
                <div class="p-image-wrapper">
                    <img src="${product.image}" alt="${product.name}" class="p-img">
                </div>
                <h3 class="p-title">${product.name}</h3>
                <p class="p-price">${formattedPrice}</p>
                <button class="p-add-btn" onclick="addToCart()">Add to Cart</button>
            </div>
        `;
    });
}

let cartCount = 0;
function addToCart() {
    cartCount++;
    const badge = document.getElementById('cart-count');
    if(badge) {
        badge.innerText = cartCount;
        badge.classList.add('badge-bump');
        setTimeout(() => badge.classList.remove('badge-bump'), 200);
    }
}

const modal = document.getElementById('localeModal');
const openBtn = document.getElementById('openLocaleModal');
const closeBtn = document.getElementById('closeLocaleModal');
const saveBtn = document.getElementById('saveLocaleSettings');
const localeText = document.getElementById('currentLocaleText');
const currSelect = document.getElementById('currSelect');

if(openBtn && closeBtn && saveBtn) {
    openBtn.addEventListener('click', () => modal.classList.add('active'));
    closeBtn.addEventListener('click', () => modal.classList.remove('active'));

    saveBtn.addEventListener('click', () => {
        currentCurrency = currSelect.value;
        localeText.textContent = `Currency: ${currentCurrency}`;
        
        renderProductsGrid();
        modal.classList.remove('active');
    });
}

document.addEventListener("DOMContentLoaded", () => {
    renderProductsGrid();
    startAutoSlide();
});

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const nextBtn = document.getElementById('next-slide');
const prevBtn = document.getElementById('prev-slide');
let slideInterval;

function showSlide(index) {
    if(slides.length === 0) return;
    slides[currentSlide].classList.remove('active');
    
    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }
    
    slides[currentSlide].classList.add('active');
}

function startAutoSlide() {
    clearInterval(slideInterval);
    slideInterval = setInterval(() => {
        showSlide(currentSlide + 1);
    }, 5000);
}

if(nextBtn && prevBtn) {
    nextBtn.addEventListener('click', () => {
        showSlide(currentSlide + 1);
        startAutoSlide();
    });

    prevBtn.addEventListener('click', () => {
        showSlide(currentSlide - 1);
        startAutoSlide();
    });
}

