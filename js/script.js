// ========================================
// RAJALAKSHMI ASTRO GURU - JAVASCRIPT
// ========================================

// ========================================
// EMAILJS CONFIGURATION
// ========================================

// Initialize EmailJS with your public key
emailjs.init('625F7QNxzXzhrEC77');

const EMAILJS_SERVICE_ID = 'service_6hq77fu';
const EMAILJS_TEMPLATE_ID = 'template_cyo7tao';

// ========================================
// INITIALIZATION
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS (Animate On Scroll)
    AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: false,
        mirror: true,
        offset: 100
    });

    // Initialize other features
    initNavbar();
    initFormValidation();
    initCounterAnimation();
    initSmoothScroll();
    initScrollToTop();
    handleNavbarScroll();
    setupFormSubmission();
});

// ========================================
// NAVBAR FUNCTIONALITY
// ========================================

function initNavbar() {
    const navbar = document.querySelector('.navbar-custom');
    const navLinks = document.querySelectorAll('.nav-link');
    const navCollapse = document.querySelector('.navbar-collapse');

    // Close navbar on link click
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navCollapse.classList.contains('show')) {
                const bsCollapse = new bootstrap.Collapse(navCollapse);
                bsCollapse.hide();
            }
        });
    });
}

function handleNavbarScroll() {
    const navbar = document.querySelector('.navbar-custom');
    let lastScrollTop = 0;

    window.addEventListener('scroll', () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });
}

// ========================================
// SMOOTH SCROLLING
// ========================================

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
}

// ========================================
// SCROLL TO TOP BUTTON
// ========================================

function initScrollToTop() {
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    });
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// ========================================
// FORM VALIDATION
// ========================================

function initFormValidation() {
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            validateForm(this);
        });
    });
}

function validateForm(form) {
    const fullName = form.querySelector('#fullName').value.trim();
    const email = form.querySelector('#email').value.trim();
    const phone = form.querySelector('#phone').value.trim();
    const birthDate = form.querySelector('#birthDate').value;
    const consultationType = form.querySelector('#consultationType').value;
    const timeSlot = form.querySelector('#timeSlot').value;

    // Validation
    if (!fullName) {
        showError('Please enter your full name');
        return;
    }

    if (!isValidEmail(email)) {
        showError('Please enter a valid email address');
        return;
    }

    if (!isValidPhone(phone)) {
        showError('Please enter a valid 10-digit phone number');
        return;
    }

    if (!birthDate) {
        showError('Please select your date of birth');
        return;
    }

    if (!consultationType) {
        showError('Please select a consultation type');
        return;
    }

    if (!timeSlot) {
        showError('Please select a time slot');
        return;
    }

    // Form is valid - proceed to Razorpay payment
    submitBookingForm(form);
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPhone(phone) {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phone);
}

function showError(message) {
    // Create error toast
    const errorDiv = document.createElement('div');
    errorDiv.className = 'alert alert-danger position-fixed top-0 start-50 translate-middle-x mt-3';
    errorDiv.style.zIndex = '10000';
    errorDiv.innerHTML = `
        <i class="fas fa-exclamation-circle"></i> ${message}
    `;
    document.body.appendChild(errorDiv);

    setTimeout(() => {
        errorDiv.remove();
    }, 4000);
}

// ========================================
// FORM SUBMISSION
// ========================================

function setupFormSubmission() {
    // This function sets up form submission handlers
    // EmailJS is integrated in the Razorpay payment handler
}

// ========================================
// EMAILJS FUNCTIONS
// ========================================

function sendConfirmationEmail(formData) {
    // Prepare email template parameters - must match your EmailJS template variables
    const templateParams = {
        to_email: formData.email,
        to_name: formData.fullName,
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        birthDate: formData.birthDate,
        consultationType: formatConsultationType(formData.consultationType),
        timeSlot: formData.timeSlot,
        amount: formData.amount,
        paymentId: formData.paymentId,
        message: formData.message || 'No additional message provided',
        date: new Date().toLocaleString()
    };

    // Send email using EmailJS
    emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams)
        .then(function(response) {
            console.log('✓ Confirmation email sent successfully!', response.status, response.text);
        })
        .catch(function(error) {
            console.error('✗ Failed to send confirmation email:', error);
            // Email failed, but don't disrupt user experience
            console.log('Note: Email notification could not be sent, but booking is confirmed.');
        });
}

function sendAdminNotification(formData) {
    // Optional: Send notification to admin
    const templateParams = {
        customer_name: formData.fullName,
        customer_phone: formData.phone,
        customer_email: formData.email,
        birth_date: formData.birthDate,
        consultation_type: formatConsultationType(formData.consultationType),
        time_slot: formData.timeSlot,
        amount: formData.amount,
        payment_id: formData.paymentId
    };

    // You can send admin notifications by creating another template
    // Uncomment the following when you create an admin notification template
    /*
    emailjs.send(EMAILJS_SERVICE_ID, 'admin_notification_template', templateParams)
        .then(function(response) {
            console.log('Admin notified of new booking:', response.status);
        })
        .catch(function(error) {
            console.error('Failed to notify admin:', error);
        });
    */
}

function submitBookingForm(form) {
    const formData = {
        fullName: form.querySelector('#fullName').value,
        email: form.querySelector('#email').value,
        phone: form.querySelector('#phone').value,
        birthDate: form.querySelector('#birthDate').value,
        consultationType: form.querySelector('#consultationType').value,
        timeSlot: form.querySelector('#timeSlot').value,
        amount: 500,
        message: form.querySelector('#message') ? form.querySelector('#message').value : ''
    };

    // ========================================
    // RAZORPAY PAYMENT INTEGRATION
    // ========================================
    const options = {
        key: 'rzp_live_T1udB1uYhyZcor', // 🔑 Replace with your Razorpay Key ID
        amount: formData.amount * 100, // Amount in paise (500 * 100 = 50000 paise = ₹500)
        currency: 'INR',
        name: 'Rajalakshmi Astro Guru',
        description: formatConsultationType(formData.consultationType) + ' Consultation',
        image: 'images/logo.png',
        prefill: {
            name: formData.fullName,
            email: formData.email,
            contact: formData.phone
        },
        theme: {
            color: '#d4af37'
        },
        handler: function(response) {
            // Payment SUCCESS - show booking confirmation
            formData.paymentId = response.razorpay_payment_id;
            
            // Send confirmation email via EmailJS
            sendConfirmationEmail(formData);
            
            showSuccessPopup(formData);
            form.reset();
        },
        modal: {
            ondismiss: function() {
                showError('Payment was cancelled. Please try again to confirm your booking.');
            }
        }
    };

    const rzp = new Razorpay(options);

    rzp.on('payment.failed', function(response) {
        showError('Payment failed: ' + response.error.description + '. Please try again.');
    });

    rzp.open();
}

function showSuccessPopup(formData) {
    // Create overlay
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    overlay.onclick = () => {
        overlay.remove();
        popup.remove();
    };

    // Create popup
    const popup = document.createElement('div');
    popup.className = 'success-popup';
    popup.innerHTML = `
        <div class="success-icon">
            <i class="fas fa-check-circle"></i>
        </div>
        <h3>Booking Confirmed!</h3>
        <p>Thank you for your booking, ${formData.fullName}!</p>
        <p style="font-size: 0.9rem; margin: 15px 0;">
            We'll contact you at <strong>${formData.phone}</strong> to confirm your appointment.
        </p>
        <div style="background: rgba(212, 175, 55, 0.1); border-left: 3px solid #d4af37; padding: 12px; border-radius: 5px; margin: 15px 0; text-align: left; font-size: 0.9rem;">
            <p style="margin: 5px 0; color: #b0b0b0;">
                <strong style="color: #d4af37;">Appointment Type:</strong> ${formatConsultationType(formData.consultationType)}
            </p>
            <p style="margin: 5px 0; color: #b0b0b0;">
                <strong style="color: #d4af37;">Amount:</strong> ₹${formData.amount}
            </p>
            <p style="margin: 5px 0; color: #b0b0b0;">
                <strong style="color: #d4af37;">Payment Method:</strong> ${formatPaymentMethod(formData.paymentMethod)}
            </p>
        </div>
        <button class="btn btn-gold btn-sm mt-3" onclick="this.closest('.success-popup').parentElement.previousElementSibling.remove(); this.closest('.success-popup').remove();">
            <i class="fas fa-check"></i> Done
        </button>
    `;

    document.body.appendChild(overlay);
    document.body.appendChild(popup);

    // Auto close after 6 seconds
    setTimeout(() => {
        if (document.body.contains(overlay)) {
            overlay.remove();
        }
        if (document.body.contains(popup)) {
            popup.remove();
        }
    }, 6000);
}

function formatConsultationType(type) {
    const types = {
        'marriage': 'Marriage Guidance',
        'health': 'Health Astrology',
        'vaasthu': 'Vaasthu Consultation'
    };
    return types[type] || type;
}

function formatPaymentMethod(method) {
    const methods = {
        'upi': 'UPI (Google Pay, PhonePe, Paytm)',
        'creditcard': 'Credit Card',
        'debitcard': 'Debit Card',
        'netbanking': 'Net Banking'
    };
    return methods[method] || method;
}

function updatePrice() {
    // Get the selected consultation type
    const consultationType = document.querySelector('#consultationType').value;
    
    // Base price is ₹500 for all services
    // You can modify this to have different prices for different services
    const prices = {
        'marriage': 500,
        'health': 500,
        'vaasthu': 500
    };
    
    const price = prices[consultationType] || 500;
    
    // Update the pricing display
    const pricingDisplay = document.querySelector('.pricing-display h4');
    if (pricingDisplay) {
        pricingDisplay.textContent = '₹' + price;
    }
}

// Optional: Send data to server using Fetch API
function sendBookingData(formData) {
    fetch('/api/booking', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}

// ========================================
// COUNTER ANIMATION
// ========================================

function initCounterAnimation() {
    const counterElements = document.querySelectorAll('.counter');
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.animated) {
                entry.target.animated = true;
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    counterElements.forEach(element => {
        observer.observe(element);
    });
}

function animateCounter(element) {
    const target = parseInt(element.textContent);
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// ========================================
// TESTIMONIALS CAROUSEL
// ========================================

function scrollTestimonials(direction) {
    const wrapper = document.querySelector('.testimonials-wrapper');
    const scrollAmount = 400;

    if (direction === 1) {
        wrapper.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    } else {
        wrapper.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    }

    updateCarouselButtons();
}

function updateCarouselButtons() {
    const wrapper = document.querySelector('.testimonials-wrapper');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    if (wrapper.scrollLeft <= 0) {
        prevBtn.disabled = true;
        prevBtn.style.opacity = '0.5';
    } else {
        prevBtn.disabled = false;
        prevBtn.style.opacity = '1';
    }

    if (wrapper.scrollLeft >= wrapper.scrollWidth - wrapper.clientWidth - 10) {
        nextBtn.disabled = true;
        nextBtn.style.opacity = '0.5';
    } else {
        nextBtn.disabled = false;
        nextBtn.style.opacity = '1';
    }
}

// Initialize carousel buttons on load
document.addEventListener('DOMContentLoaded', () => {
    const wrapper = document.querySelector('.testimonials-wrapper');
    if (wrapper) {
        updateCarouselButtons();
        wrapper.addEventListener('scroll', updateCarouselButtons);
    }
});

// ========================================
// MOUSE GLOW EFFECT (Optional)
// ========================================

document.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;

    // Create subtle glow effect at cursor (optional)
    // You can add custom cursor glow here if needed
});

// ========================================
// PARALLAX EFFECT FOR HERO SECTION
// ========================================

function initParallax() {
    const heroSection = document.querySelector('.hero-section');
    if (!heroSection) return;

    window.addEventListener('scroll', () => {
        const scrollPosition = window.pageYOffset;
        const parallaxElements = heroSection.querySelectorAll('.floating-particles, .stars');

        parallaxElements.forEach(element => {
            element.style.transform = `translateY(${scrollPosition * 0.5}px)`;
        });
    });
}

initParallax();

// ========================================
// LOADING ANIMATION
// ========================================

function showLoadingAnimation() {
    const loader = document.createElement('div');
    loader.className = 'loader';
    loader.innerHTML = `
        <div style="border: 3px solid rgba(212, 175, 55, 0.2); border-radius: 50%; border-top: 3px solid var(--gold); width: 40px; height: 40px; animation: spin 1s linear infinite;"></div>
    `;
    document.body.appendChild(loader);
}

// ========================================
// IMAGE LAZY LOADING
// ========================================

function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// ========================================
// MOBILE MENU CLOSE ON LINK CLICK
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navbarCollapse.classList.contains('show')) {
                new bootstrap.Collapse(navbarCollapse).hide();
            }
        });
    });
});

// ========================================
// FORM INPUT EFFECTS
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    const inputs = document.querySelectorAll('.form-control-gold, .form-select-gold');

    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.style.boxShadow = '0 0 20px rgba(212, 175, 55, 0.3)';
        });

        input.addEventListener('blur', function() {
            this.style.boxShadow = '';
        });
    });
});

// ========================================
// RESPONSIVE ADJUSTMENTS
// ========================================

function handleResponsiveDesign() {
    const windowWidth = window.innerWidth;

    if (windowWidth < 768) {
        // Mobile adjustments
        const buttons = document.querySelectorAll('.hero-buttons .btn');
        buttons.forEach(btn => {
            btn.classList.add('btn-sm');
        });
    }
}

window.addEventListener('resize', handleResponsiveDesign);
handleResponsiveDesign();

// ========================================
// SCROLL SPY (For active nav links)
// ========================================

function initScrollSpy() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

initScrollSpy();

// ========================================
// ACCESSIBILITY IMPROVEMENTS
// ========================================

// Add keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const popup = document.querySelector('.success-popup');
        const overlay = document.querySelector('.overlay');
        if (popup) popup.remove();
        if (overlay) overlay.remove();
    }
});

// ========================================
// PERFORMANCE OPTIMIZATION
// ========================================

// Debounce function for resize events
function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Apply throttling to scroll events
window.addEventListener('scroll', throttle(() => {
    // Scroll-based animations
}, 16));

// ========================================
// DYNAMIC FORM DATE VALIDATION
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    const birthDateInput = document.getElementById('birthDate');
    if (birthDateInput) {
        const today = new Date();
        const maxDate = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());
        birthDateInput.setAttribute('max', maxDate.toISOString().split('T')[0]);
        birthDateInput.setAttribute('min', '1900-01-01');
    }
});

// ========================================
// NOTIFICATION SYSTEM
// ========================================

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `alert alert-${type} position-fixed top-0 start-50 translate-middle-x mt-3`;
    notification.style.zIndex = '10000';
    notification.style.maxWidth = '500px';
    notification.innerHTML = message;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// ========================================
// WHATSAPP INTEGRATION
// ========================================

function sendWhatsAppMessage(phoneNumber, message) {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
}

// ========================================
// CONSULTATION TYPE ICONS
// ========================================

const consultationIcons = {
    'marriage': 'fas fa-heart',
    'health': 'fas fa-heartbeat',
    'vaasthu': 'fas fa-home',
    'tarot': 'fas fa-cards',
    'vedic': 'fas fa-moon-stars'
};

// ========================================
// INITIALIZATION COMPLETE
// ========================================

console.log('Rajalakshmi Astro Guru - Website initialized successfully!');
