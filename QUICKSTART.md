# QUICK START GUIDE - Rajalakshmi Astro Guru Website

## 🚀 Get Started in 5 Minutes

### Step 1: Setup Your Project
Your website is now ready! The folder structure is:
```
Raji web/
├── index.html ...................... Main webpage
├── css/
│   └── style.css ................... All styling
├── js/
│   └── script.js ................... All functionality
├── images/ ......................... Image folder
│   └── logo.png .................... (ADD YOUR LOGO HERE)
└── README.md ....................... Full documentation
```

### Step 2: Add Your Logo
1. Save your logo as `logo.png` in the `images` folder
2. Recommended size: 50x50px to 200x200px
3. Format: PNG with transparent background

### Step 3: Update Contact Information
Edit `index.html` and replace these with your actual details:

**Find & Replace:**
- `+91 93610 98711` → Your phone number
- `rajalakshmiastro@gmail.com` → Your email
- `https://wa.me/919361098711` → Your WhatsApp link

### Step 4: Open in Browser
Double-click `index.html` to open your website locally.

## 📝 First-Time Configuration

### Essential Changes:

1. **Logo Image**
   - Location: `images/logo.png`
   - Size: Recommended 200x50px minimum
   - Action: Replace with your actual logo

2. **Contact Details**
   - Navbar: `+91 93610 98711` → Your Phone
   - Footer: `rajalakshmiastro@gmail.com` → Your Email
   - WhatsApp: `https://wa.me/919361098711` → Your Number

3. **About Section**
   - Edit professional biography
   - Add your professional achievements
   - Update "10+ years experience" and "2000+ clients" with your actual numbers

4. **Service Descriptions**
   - Customize service names and details
   - Adjust pricing (if displaying)
   - Update duration information

## 🎨 Optional Customization

### Change Gold Color
If you prefer a different accent color, edit in `css/style.css`:

Find the line:
```css
--gold: #d4af37;
```

Replace with your color:
```css
--gold: #your-color-code;
```

Popular alternatives:
- Silver: `#c0c0c0`
- Cyan: `#00d4ff`
- Rose Gold: `#b76e79`

### Add More Services
Duplicate this block in the Services section:

```html
<div class="col-md-6 col-lg-4 mb-4" data-aos="zoom-in" data-aos-delay="600">
    <div class="service-card glass-card">
        <div class="service-icon">
            <i class="fas fa-icon-name"></i>
        </div>
        <h5 class="service-title">Your Service Name</h5>
        <p class="service-description">Your service description here.</p>
        <div class="service-meta">
            <span class="duration"><i class="fas fa-hourglass-half"></i> Duration</span>
        </div>
        <button class="btn btn-gold btn-sm w-100">Book Session</button>
    </div>
</div>
```

### Add More Testimonials
Duplicate this block in the Testimonials section:

```html
<div class="testimonial-card glass-card">
    <div class="testimonial-header">
        <div class="testimonial-avatar">
            <i class="fas fa-user-circle"></i>
        </div>
        <div class="testimonial-info">
            <h6 class="testimonial-name">Client Name</h6>
            <p class="testimonial-city">City, State</p>
            <p class="testimonial-service">Service Type</p>
        </div>
    </div>
    <div class="testimonial-rating">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
    </div>
    <p class="testimonial-text">Client testimonial text...</p>
    <div class="testimonial-quote">
        <i class="fas fa-quote-left"></i>
    </div>
</div>
```

## 🖼️ Image Placeholders to Add

**Add these images to the `images` folder:**

1. **logo.png** - Your business logo
   - Displayed in navbar and footer
   - Recommended: 200x50px or square logo

2. **astrology-chart.png** - For Approach section
   - Any astrology chart or spiritual image
   - Recommended: 600x600px

3. **about-rajalakshmi.jpg** - Professional photo
   - Your professional headshot
   - Recommended: 600x800px

### Where to Get Images:
- **Free Stock Photos**: Unsplash, Pexels, Pixabay
- **Professional Photos**: Hire a photographer
- **Design Images**: Canva, Adobe Stock
- **Astrology Images**: Search "astrology chart" on free image sites

## 📱 Testing

### Test on Different Devices:
1. Desktop (1920px, 1440px, 1024px)
2. Tablet (768px, 834px)
3. Mobile (375px, 414px, 600px)

### Test Features:
- [ ] Navigation menu works
- [ ] Mobile hamburger menu works
- [ ] All buttons are clickable
- [ ] Form validation works
- [ ] Animations play smoothly
- [ ] WhatsApp button opens WhatsApp
- [ ] Scroll effects animate smoothly

## 🌐 Deploy to Web

### Option 1: Netlify (Recommended - Free)
1. Go to netlify.com
2. Drag and drop your `Raji web` folder
3. Your site is live in seconds!

### Option 2: GitHub Pages (Free)
1. Create GitHub account
2. Create new repository named `username.github.io`
3. Upload all files to the repository
4. Website lives at `https://username.github.io`

### Option 3: Traditional Web Hosting
1. Purchase hosting (Bluehost, HostGator, etc.)
2. Upload files via FTP
3. Point domain to hosting
4. Website is live!

## 📧 Form Submission Setup

By default, form shows a success popup. To actually receive emails:

### Using EmailJS (Easiest):
1. Go to emailjs.com
2. Sign up for free account
3. Get your Public Key
4. In `js/script.js`, uncomment the EmailJS section
5. Add your email details

### Using Google Form:
1. Create Google Form with same fields
2. Add form action to `index.html`
3. Form submits directly to Google Sheets

## 🔒 Security Tips

1. **Don't share API keys** - Keep EmailJS keys private
2. **Use HTTPS** - Always deploy with SSL certificate
3. **Validate forms** - Already included in code
4. **Regular backups** - Backup your code and database
5. **Update dependencies** - Keep libraries updated

## ⚡ Performance Tips

1. Compress images (use TinyPNG or ImageOptim)
2. Minify CSS and JS for production
3. Enable caching on web server
4. Use CDN for faster delivery
5. Optimize database queries if added

## 🆘 Troubleshooting

### Issue: Logo not showing
**Solution**: 
- Check file is named exactly `logo.png`
- Ensure it's in `images` folder
- Try PNG format instead of JPG

### Issue: Colors not updating
**Solution**:
- Clear browser cache (Ctrl+Shift+Delete)
- Hard refresh (Ctrl+F5)
- Check CSS syntax is correct

### Issue: Buttons not working
**Solution**:
- Check JavaScript console for errors (F12)
- Ensure Bootstrap is loaded from CDN
- Verify form IDs match HTML

### Issue: Form not submitting
**Solution**:
- Check all required fields are filled
- Verify email validation is passing
- Check browser console for errors

## 📞 Getting Help

1. Check README.md for detailed documentation
2. Review code comments in HTML/CSS/JS files
3. Test in different browsers
4. Clear cache and hard refresh
5. Contact your developer or hosting support

## ✅ Launch Checklist

Before going live:
- [ ] Replace logo image
- [ ] Update contact information
- [ ] Add professional photos
- [ ] Test all links work
- [ ] Test form submission
- [ ] Test on mobile devices
- [ ] Test on different browsers
- [ ] Setup analytics (optional)
- [ ] Setup domain name (optional)
- [ ] Deploy to hosting (optional)

## 🎉 You're All Set!

Your premium astrology website is ready to use. Customize it with your information, add your images, and share with clients!

---

**Need More Help?**
- Read the full README.md
- Check website comments in code
- Contact your web hosting support
- Hire a developer for advanced customization

**Happy Website Building! 🌟**
