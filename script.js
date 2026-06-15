// =========================================================================
// 1. CURRENCY EXCHANGE RATES CONFIGURATION
// =========================================================================
const currencyRates = {
    "USD $": { symbol: "$", rate: 1.00, formatRight: false },
    "EUR €": { symbol: "€", rate: 0.92, formatRight: true }, 
    "GBP £": { symbol: "£", rate: 0.79, formatRight: false },
    "CAD $": { symbol: "CA$", rate: 1.37, formatRight: false }
};

// =========================================================================
// 2. DYNAMIC PRODUCT ARRAY DATA (ENGLISH BASE)
// =========================================================================
const productsList = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=600&auto=format&fit=crop",
        basePriceUSD: 29.99,
        name: "Minimalist Wireless Earbuds"
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?q=80&w=600&auto=format&fit=crop",
        basePriceUSD: 89.00,
        name: "Smart Fitness Chronograph"
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1616353110314-70bca557cd7d?q=80&w=600&auto=format&fit=crop",
        basePriceUSD: 45.50,
        name: "Ergonomic Bamboo Laptop Stand"
    }
];

// Global Active States
let currentCurrency = "USD $";

// =========================================================================
// 3. PRODUCT RENDERING ENGINE
// =========================================================================
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

// Simple interactive cart counter
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

// =========================================================================
// 4. REGIONAL MODAL LOGIC EVENTS (CURRENCY ONLY)
// =========================================================================
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

// Run layout on page load
document.addEventListener("DOMContentLoaded", () => {
    renderProductsGrid();
    startAutoSlide();
});

// =========================================================================
// 5. HERO CAROUSEL LOGIC
// =========================================================================
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