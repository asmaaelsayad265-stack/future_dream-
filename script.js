// Loading Screen
window.addEventListener('load', () => {
    const loading = document.getElementById('loading');
    setTimeout(() => {
        loading.style.opacity = '0';
        setTimeout(() => {
            loading.style.display = 'none';
        }, 500);
    }, 1000);
});

// Scroll Progress Bar
window.addEventListener('scroll', () => {
    const scrollProgress = document.getElementById('scrollProgress');
    const scrollTop = window.pageYOffset;
    const docHeight = document.body.offsetHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    scrollProgress.style.width = scrollPercent + '%';
});

// Header Scroll Effect
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Contact Function
function contactUs(productName) {
    const phoneNumber = '01044070490';
    const whatsappNumber = '01111349853';
    const address = 'سوهاج - شارع عالم التصوير بجوار مطعم الصديقان';

    const message = `مرحباً، أنا مهتم بشراء ${productName}. هل يمكنني الحصول على مزيد من المعلومات؟`;

    // Show contact modal
    showContactModal(productName, phoneNumber, whatsappNumber, address, message);
}

// Contact Modal
function showContactModal(productName, phone, whatsapp, address, message) {
    // Create modal overlay
    const modal = document.createElement('div');
    modal.className = 'contact-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3>استفسار عن ${productName}</h3>
                <span class="close-modal">&times;</span>
            </div>
            <div class="modal-body">
                <p>اختر طريقة التواصل:</p>
                <div class="contact-options">
                    <a href="tel:${phone}" class="contact-option phone">
                        <i class="fas fa-phone"></i>
                        <span>اتصل الآن</span>
                        <small>${phone}</small>
                    </a>
                    <a href="https://wa.me/${whatsapp.replace('0', '20')}?text=${encodeURIComponent(message)}" class="contact-option whatsapp" target="_blank">
                        <i class="fab fa-whatsapp"></i>
                        <span>واتساب</span>
                        <small>${whatsapp}</small>
                    </a>
                    <div class="contact-option address">
                        <i class="fas fa-map-marker-alt"></i>
                        <span>الموقع</span>
                        <small>${address}</small>
                    </div>
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    // Close modal functionality
    const closeBtn = modal.querySelector('.close-modal');
    closeBtn.addEventListener('click', () => {
        document.body.removeChild(modal);
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            document.body.removeChild(modal);
        }
    });

    // Animate modal entrance
    setTimeout(() => {
        modal.classList.add('show');
    }, 10);
}

// Intersection Observer for Fade-in Animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-visible');
        }
    });
}, observerOptions);

// Observe all product cards
document.querySelectorAll('.product-card').forEach(card => {
    observer.observe(card);
});

// Add CSS for modal and animations
const style = document.createElement('style');
style.textContent = `
    .contact-modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.7);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10000;
        opacity: 0;
        transition: opacity 0.3s ease;
    }

    .contact-modal.show {
        opacity: 1;
    }

    .modal-content {
        background: white;
        border-radius: 20px;
        padding: 0;
        max-width: 500px;
        width: 90%;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        transform: scale(0.7);
        transition: transform 0.3s ease;
    }

    .contact-modal.show .modal-content {
        transform: scale(1);
    }

    .modal-header {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        padding: 20px 30px;
        border-radius: 20px 20px 0 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .modal-header h3 {
        margin: 0;
        font-size: 1.5rem;
    }

    .close-modal {
        font-size: 2rem;
        cursor: pointer;
        transition: transform 0.2s ease;
    }

    .close-modal:hover {
        transform: scale(1.2);
    }

    .modal-body {
        padding: 30px;
    }

    .contact-options {
        display: grid;
        gap: 15px;
        margin-top: 20px;
    }

    .contact-option {
        display: flex;
        align-items: center;
        gap: 15px;
        padding: 20px;
        border-radius: 15px;
        text-decoration: none;
        color: #333;
        transition: all 0.3s ease;
        border: 2px solid #e9ecef;
    }

    .contact-option:hover {
        transform: translateY(-3px);
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    }

    .contact-option.phone {
        background: linear-gradient(135deg, #667eea, #764ba2);
        color: white;
    }

    .contact-option.whatsapp {
        background: linear-gradient(135deg, #25d366, #128c7e);
        color: white;
    }

    .contact-option.address {
        background: linear-gradient(135deg, #ff6b6b, #ee5a24);
        color: white;
        cursor: default;
    }

    .contact-option i {
        font-size: 1.5rem;
    }

    .contact-option span {
        font-weight: 600;
        flex: 1;
    }

    .contact-option small {
        opacity: 0.9;
        font-size: 0.9rem;
    }

    .fade-in {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.6s ease;
    }

    .fade-in-visible {
        opacity: 1;
        transform: translateY(0);
    }

    /* Mobile responsiveness */
    @media (max-width: 768px) {
        .modal-content {
            width: 95%;
            margin: 20px;
        }

        .modal-header {
            padding: 15px 20px;
        }

        .modal-body {
            padding: 20px;
        }

        .contact-option {
            padding: 15px;
        }
    }
`;
document.head.appendChild(style);

// Add click event listeners to CTA button
document.querySelector('.cta-button').addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector('#products');
    if (target) {
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
});

// Add loading animation to product cards
document.querySelectorAll('.product-card').forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
});

// Search and Filter Functionality
class SearchManager {
    constructor() {
        this.searchInput = document.createElement('input');
        this.searchInput.type = 'text';
        this.searchInput.placeholder = 'البحث عن منتج...';
        this.searchInput.className = 'search-input';
        this.filterSelect = document.createElement('select');
        this.filterSelect.className = 'filter-select';
        this.filterSelect.innerHTML = `
            <option value="all">جميع المنتجات</option>
            <option value="phones">الهواتف</option>
            <option value="accessories">الإكسسوارات</option>
        `;
        this.init();
    }

    init() {
        this.createSearchBar();
        this.setupEventListeners();
    }

    createSearchBar() {
        const productsSection = document.querySelector('#products .container');
        const searchBar = document.createElement('div');
        searchBar.className = 'search-bar';
        searchBar.innerHTML = `
            <div class="search-controls">
                <div class="search-input-wrapper">
                    <i class="fas fa-search"></i>
                    ${this.searchInput.outerHTML}
                </div>
                ${this.filterSelect.outerHTML}
            </div>
        `;
        productsSection.insertBefore(searchBar, productsSection.querySelector('.product-grid'));
        this.searchInput = searchBar.querySelector('.search-input');
        this.filterSelect = searchBar.querySelector('.filter-select');
    }

    setupEventListeners() {
        this.searchInput.addEventListener('input', () => this.filterProducts());
        this.filterSelect.addEventListener('change', () => this.filterProducts());
    }

    filterProducts() {
        const searchTerm = this.searchInput.value.toLowerCase();
        const filterValue = this.filterSelect.value;
        const productCards = document.querySelectorAll('#products .product-card');

        productCards.forEach(card => {
            const productName = card.querySelector('.product-name').textContent.toLowerCase();
            const productSpecs = card.querySelector('.product-specs').textContent.toLowerCase();
            const isPhone = !card.closest('#accessories');
            const isAccessory = card.closest('#accessories');

            let showCard = true;

            // Search filter
            if (searchTerm && !productName.includes(searchTerm) && !productSpecs.includes(searchTerm)) {
                showCard = false;
            }

            // Category filter
            if (filterValue === 'phones' && !isPhone) {
                showCard = false;
            } else if (filterValue === 'accessories' && !isAccessory) {
                showCard = false;
            }

            card.style.display = showCard ? 'block' : 'none';
        });
    }
}

// Initialize Search Manager
const searchManager = new SearchManager();

// Product Management System
class ProductManager {
    constructor() {
        this.products = [];
        this.productForm = document.getElementById('productForm');
        this.productGrid = document.querySelector('.product-grid');
        this.init();
    }

    async init() {
        await this.loadProducts();
        this.setupFormSubmission();
        this.renderProducts();
    }

    async loadProducts() {
        try {
            const response = await fetch('/api/products');
            if (response.ok) {
                this.products = await response.json();
            } else {
                console.error('Failed to load products');
                this.products = [];
            }
        } catch (error) {
            console.error('Error loading products:', error);
            this.products = [];
        }
    }

    setupFormSubmission() {
        if (this.productForm) {
            this.productForm.addEventListener('submit', async (e) => {
                e.preventDefault();
                await this.addProduct();
            });
        }
    }

    async addProduct() {
        const formData = new FormData(this.productForm);
        const productData = {
            name: formData.get('productName'),
            specs: formData.get('productSpecs'),
            price: parseFloat(formData.get('productPrice')),
            image: formData.get('productImage')
        };

        try {
            const response = await fetch('/api/products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(productData)
            });

            if (response.ok) {
                const newProduct = await response.json();
                this.products.push(newProduct);
                this.renderProducts();
                this.productForm.reset();
                this.showNotification('تم إضافة المنتج بنجاح!', 'success');
            } else {
                this.showNotification('فشل في إضافة المنتج', 'error');
            }
        } catch (error) {
            console.error('Error adding product:', error);
            this.showNotification('خطأ في الاتصال بالخادم', 'error');
        }
    }

    renderProducts() {
        // Clear existing dynamic products
        const existingDynamic = document.querySelectorAll('.product-card.dynamic');
        existingDynamic.forEach(card => card.remove());

        // Add new products
        this.products.forEach((product, index) => {
            const productCard = this.createProductCard(product, index);
            this.productGrid.appendChild(productCard);
        });

        // Re-observe new cards for animations
        document.querySelectorAll('.product-card.dynamic').forEach(card => {
            observer.observe(card);
        });
    }

    createProductCard(product, index) {
        const card = document.createElement('div');
        card.className = 'product-card fade-in dynamic';
        card.style.animationDelay = `${(document.querySelectorAll('.product-card').length + index) * 0.1}s`;

        card.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="صورة ${product.name}" onerror="this.src='https://via.placeholder.com/300x200?text=${encodeURIComponent(product.name)}'" />
            </div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-specs">${product.specs.replace(/\n/g, '<br />')}</p>
                <div class="product-price">${product.price} جنيه</div>
                <button class="buy-button" onclick="contactUs('${product.name}')">
                    <i class="fas fa-shopping-cart"></i> اطلب الآن
                </button>
                <button class="delete-button" onclick="productManager.deleteProduct(${product.id})">
                    <i class="fas fa-trash"></i> حذف
                </button>
            </div>
        `;

        return card;
    }

    async deleteProduct(id) {
        if (confirm('هل أنت متأكد من حذف هذا المنتج؟')) {
            try {
                const response = await fetch(`/api/products/${id}`, {
                    method: 'DELETE'
                });

                if (response.ok) {
                    this.products = this.products.filter(product => product.id !== id);
                    this.renderProducts();
                    this.showNotification('تم حذف المنتج بنجاح!', 'success');
                } else {
                    this.showNotification('فشل في حذف المنتج', 'error');
                }
            } catch (error) {
                console.error('Error deleting product:', error);
                this.showNotification('خطأ في الاتصال بالخادم', 'error');
            }
        }
    }

    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;

        document.body.appendChild(notification);

        setTimeout(() => {
            notification.classList.add('show');
        }, 100);

        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }
}

// Initialize Product Manager
const productManager = new ProductManager();

// Navigation hamburger toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
}

// Theme toggle (light/dark mode)
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        // Toggle icon
        if (body.classList.contains('dark-mode')) {
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        } else {
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        }
    });
}

// Add notification styles
const notificationStyle = document.createElement('style');
notificationStyle.textContent = `
    .notification {
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--primary-gradient);
        color: white;
        padding: 15px 25px;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        z-index: 10001;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        font-weight: 600;
    }

    .notification.show {
        transform: translateX(0);
    }

    .notification.success {
        background: var(--success-gradient);
    }

    .delete-button {
        width: 100%;
        padding: 10px;
        background: linear-gradient(135deg, #e74c3c, #c0392b);
        color: white;
        border: none;
        border-radius: 10px;
        font-weight: bold;
        cursor: pointer;
        transition: all 0.3s ease;
        margin-top: 10px;
        font-size: 0.9rem;
    }

    .delete-button:hover {
        background: linear-gradient(135deg, #c0392b, #a93226);
        transform: translateY(-2px);
    }
`;
document.head.appendChild(notificationStyle);
