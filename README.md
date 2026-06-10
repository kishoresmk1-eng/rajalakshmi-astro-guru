# Rajalakshmi Astro Guru - Premium Astrology Consultation Website

## Overview
A fully responsive, premium astrology consultation website built with HTML5, CSS3, JavaScript, and Bootstrap 5. The site features a luxury spiritual design with dark purple + black gradient backgrounds, gold accents, and smooth animations.

## Features

### 🎨 Design & Theme
- **Luxury Spiritual Aesthetic**: Dark purple + black gradient with gold glowing elements
- **Glassmorphism Cards**: Modern frosted glass effect on cards and containers
- **Responsive Design**: Fully mobile-responsive across all devices
- **Smooth Animations**: AOS (Animate On Scroll) library integration
- **Modern Typography**: Poppins + Cinzel fonts for elegant appearance
- **Floating Particles & Stars**: Animated background elements
- **Soft Glow Effects**: Premium lighting effects on text and buttons

### 📱 Website Sections

1. **Navbar** - Sticky transparent navigation with blur effect and smooth hover animations
2. **Hero Section** - Fullscreen hero with animated glowing background and parallax effects
3. **Why Choose Us** - 4 premium glass cards with icons highlighting unique selling points
4. **Astrology Approach** - Split layout showcasing the astrologer's methodology
5. **Services** - Grid layout of 5 premium service cards with booking buttons
6. **About Section** - Professional biography with stats counter and language toggle (English/Tamil)
7. **Testimonials** - Auto-scrolling carousel with 5 client reviews
8. **CTA Section** - Premium call-to-action with glowing background
9. **Booking Form** - Modern booking form with validation and success popup
10. **Footer** - Dark elegant footer with contact info and social links

### ✨ Premium Features
- Smooth scrolling animations
- Form validation with error messages
- Success popup on form submission
- Counter animation for statistics
- Testimonials carousel with navigation
- Floating WhatsApp button
- Scroll-to-top button
- Responsive hamburger menu
- Keyboard navigation support
- Performance optimizations (debounce, throttle)
- Accessibility improvements

## Installation & Setup

### Step 1: File Structure
```
Raji web/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
└── images/
    ├── logo.png (your logo file)
    ├── astrology-chart.png
    ├── about-rajalakshmi.jpg
    └── hero.png
```

### Step 2: Replace Image Placeholders
Place your images in the `images` folder:
- `logo.png` - Your business logo (recommended size: 50x50px to 200x200px)
- `astrology-chart.png` - Astrology chart image for the Approach section
- `about-rajalakshmi.jpg` - Professional photo of Rajalakshmi
- `hero.png` - Optional hero background image

### Step 3: Customize Contact Information
Edit the following in `index.html`:
- Phone number: `+91 93610 98711` (update with your actual number)
- Email: `rajalakshmiastro@gmail.com` (update with your email)
- WhatsApp link: `https://wa.me/919361098711` (update with your WhatsApp number)

### Step 4: Open in Browser
Simply open `index.html` in any modern web browser. No server setup required for basic functionality.

## External Dependencies

### CDN Links (Already Included)
- **Bootstrap 5**: For responsive grid and components
- **Font Awesome 6**: For icons
- **Google Fonts**: Poppins and Cinzel typography
- **AOS Library**: For scroll animations

All dependencies are loaded via CDN, so no npm installation is needed.

## Customization Guide

### Colors
Edit the CSS variables in `css/style.css`:
```css
:root {
    --primary-dark: #0f0419;
    --gold: #d4af37;
    --purple: #9d4edd;
    /* ... more colors */
}
```

### Adding More Services
Edit the Services section in `index.html` and duplicate the service card structure:
```html
<div class="col-md-6 col-lg-4 mb-4" data-aos="zoom-in" data-aos-delay="600">
    <div class="service-card glass-card">
        <!-- Your service details -->
    </div>
</div>
```

### Adding More Testimonials
Add new testimonial cards in the testimonials section:
```html
<div class="testimonial-card glass-card">
    <!-- Your testimonial details -->
</div>
```

### Modifying Animations
Change AOS animation settings in `js/script.js`:
```javascript
AOS.init({
    duration: 1000,  // Animation duration
    easing: 'ease-in-out',
    once: false,     // Animation triggers on every scroll
    mirror: true,
    offset: 100      // Trigger animation when element is 100px from viewport
});
```

## Form Integration

### Email Submission (Optional)
To enable email functionality, integrate EmailJS or Firebase:

1. **EmailJS Integration**:
```javascript
EmailJS.init('YOUR_PUBLIC_KEY');

function sendEmail(formData) {
    EmailJS.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData)
        .then(response => {
            console.log('Email sent:', response);
        })
        .catch(error => {
            console.log('Failed to send email:', error);
        });
}
```

2. **Firebase Integration**:
Connect to Firebase to store form submissions in a database.

## Mobile Optimization
The website is fully responsive with custom breakpoints:
- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px

Test on various devices using browser DevTools or services like BrowserStack.

## Performance Tips
1. Optimize images (compress to ~100KB each)
2. Lazy load images using `data-src` attribute
3. Minify CSS and JavaScript for production
4. Enable gzip compression on server
5. Use a CDN for faster content delivery

## Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## SEO Optimization
The website includes:
- Semantic HTML5 structure
- Meta tags for description and keywords
- Open Graph tags (optional - add to `<head>`)
- Structured data ready for implementation
- Fast loading performance
- Mobile-friendly responsive design

## Troubleshooting

### Images Not Loading
- Ensure image files are in the `images` folder
- Check file names match the `src` attributes
- Verify file paths are correct (case-sensitive on Linux/Mac)

### Animations Not Working
- Ensure AOS library is loaded from CDN
- Check browser console for JavaScript errors
- Verify CSS transitions are enabled

### Form Not Submitting
- Check form validation is passing
- Ensure all required fields are filled
- Check browser console for JavaScript errors

### Navbar Not Working
- Verify Bootstrap JS is loaded
- Check hamburger menu functionality on mobile
- Ensure nav link IDs match section IDs

## Advanced Features (Optional)

### 1. Dark/Light Mode Toggle
Add a theme switcher:
```javascript
function toggleTheme() {
    document.body.classList.toggle('light-theme');
}
```

### 2. Multi-Language Support
Expand the existing Tamil/English toggle to more sections.

### 3. Appointment Calendar
Integrate a calendar widget like Calendly for booking.

### 4. Payment Integration
Add Razorpay or Stripe for payment processing.

### 5. Live Chat
Integrate Tawk.to or Crisp for customer support.

## Deployment

### Hosting Options
1. **Netlify** - Free hosting with drag-and-drop
2. **Vercel** - Optimized for web apps
3. **GitHub Pages** - Free hosting
4. **AWS S3** - Scalable hosting
5. **Bluehost/HostGator** - Traditional web hosting

### Steps to Deploy on Netlify
1. Commit your files to GitHub
2. Visit netlify.com and sign up
3. Click "New site from Git"
4. Select your repository
5. Deploy!

## Support & Maintenance
- Keep dependencies updated
- Monitor form submissions
- Test on new browser versions
- Backup database regularly
- Monitor website analytics

## Credits
- Built with Bootstrap 5
- Icons from Font Awesome
- Animations with AOS Library
- Fonts from Google Fonts

## License
This website template is provided as-is. You are free to use and modify it for your business.

---

**Website Design**: Premium Astrology Consultation Template
**Last Updated**: 2026
**Version**: 1.0

For questions or support, contact: rajalakshmiastro@gmail.com

---

## Quick Start Checklist
- [ ] Replace logo image
- [ ] Update contact information
- [ ] Add professional photos
- [ ] Customize color scheme (optional)
- [ ] Test on mobile devices
- [ ] Test form submission
- [ ] Setup email integration
- [ ] Deploy to web hosting
- [ ] Set up Google Analytics
- [ ] Submit sitemap to Google Search Console
