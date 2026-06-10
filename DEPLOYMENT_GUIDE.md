# Installation & Deployment Guide
# Rajalakshmi Astro Guru Website

## 📋 Table of Contents
1. Local Installation
2. Browser Testing
3. Deployment Options
4. Domain Setup
5. Email Configuration
6. Performance Optimization
7. SEO Setup
8. Maintenance

---

## 1️⃣ LOCAL INSTALLATION

### Step 1: Download/Copy Files
All files are already in your `Raji web` folder:
```
Raji web/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── images/
│   └── logo.png (add your logo here)
├── README.md
├── QUICKSTART.md
└── Other documentation files
```

### Step 2: Add Your Logo
1. Prepare your logo as `logo.png`
2. Size: 50x50px to 200x200px
3. Format: PNG with transparent background (recommended)
4. Place in `images` folder

### Step 3: Update Contact Information
Edit `index.html`:

**Find and Replace**:
```
+91 93610 98711 → Your Phone Number
rajalakshmiastro@gmail.com → Your Email
919361098711 → Your WhatsApp Number
https://wa.me/919361098711 → Your WhatsApp Link
```

### Step 4: Test Locally
1. Open `index.html` in your browser (double-click)
2. Or right-click → "Open with" → Browser
3. Website should load completely
4. Test all links and buttons

---

## 2️⃣ BROWSER TESTING

### Essential Tests:

#### Desktop Browsers
- [ ] Chrome (Windows/Mac)
- [ ] Firefox (Windows/Mac)
- [ ] Safari (Mac)
- [ ] Edge (Windows)

#### Mobile Testing
- [ ] iPhone (Safari)
- [ ] Android (Chrome)
- [ ] iPad (Safari)
- [ ] Android Tablet (Chrome)

#### Feature Testing
- [ ] Navigation menu works
- [ ] Mobile hamburger menu works
- [ ] All buttons clickable
- [ ] Form validates correctly
- [ ] Form submit shows success popup
- [ ] Animations play smoothly
- [ ] Images load properly
- [ ] Links scroll smoothly
- [ ] WhatsApp button works
- [ ] Scroll-to-top button works

### Using Browser DevTools:
1. Press `F12` to open Developer Tools
2. Click device toggle icon (top-left)
3. Test different device sizes
4. Check Console for errors
5. Check Network tab for loading

---

## 3️⃣ DEPLOYMENT OPTIONS

### Option A: NETLIFY (Recommended - Easiest)

#### Prerequisites:
- Free account at netlify.com
- Your website files ready

#### Steps:
1. Go to https://netlify.com
2. Click "Sign up" or "Deploy"
3. Choose "Deploy manually"
4. Drag and drop your `Raji web` folder
5. Wait for deployment (usually < 1 minute)
6. Your site gets a free URL like: `xxx.netlify.app`

#### Advantages:
- Free hosting
- Automatic HTTPS
- Global CDN
- Easy rollback
- Custom domain support

#### Custom Domain on Netlify:
1. Go to Site Settings → Domain Management
2. Click "Add custom domain"
3. Enter your domain (example.com)
4. Follow DNS setup instructions
5. Propagation takes 24-48 hours

---

### Option B: GITHUB PAGES (Free)

#### Prerequisites:
- GitHub account (github.com)
- Git installed on your computer

#### Steps:
1. Create GitHub account
2. Create new repository: `username.github.io`
3. Clone repository to your computer
4. Copy all website files into the repository
5. Commit and push to GitHub
6. Website is live at: `https://username.github.io`

#### Using GitHub Desktop:
1. Install GitHub Desktop
2. Create new repository
3. Add website files
4. Commit changes
5. Publish repository
6. Enable Pages in Settings

#### Custom Domain on GitHub:
1. Go to repository Settings → Pages
2. Add custom domain
3. Configure DNS records with your registrar
4. Propagation takes 24-48 hours

---

### Option C: TRADITIONAL WEB HOSTING

#### Hosting Providers:
- Bluehost (WordPress, cPanel)
- HostGator (Budget-friendly)
- GoDaddy (Domain + Hosting)
- 1&1 Ionos
- DreamHost

#### Setup Steps:
1. Purchase hosting plan (usually $2-5/month)
2. Get FTP credentials from host
3. Download FTP client (FileZilla, WinSCP)
4. Connect to server via FTP
5. Upload all files to `public_html` folder
6. Website is live!

#### FileZilla Setup:
1. File → Site Manager
2. Host: ftp.yourdomain.com
3. Username: your-ftp-username
4. Password: your-ftp-password
5. Protocol: FTP
6. Drag files to upload

---

### Option D: AWS S3 + CloudFront (Advanced)

Best for high-traffic sites and large budgets.

#### Setup:
1. Create AWS account
2. Create S3 bucket
3. Enable static website hosting
4. Upload website files
5. Create CloudFront distribution
6. Setup Route 53 for domain
7. Request SSL certificate

Cost: $1-5/month depending on traffic.

---

## 4️⃣ DOMAIN SETUP

### Registering a Domain:
1. Go to domain registrar:
   - Godaddy.com
   - Namecheap.com
   - Domain.com
   - Porkbun.com

2. Search for available domain:
   - rajalakshmiastro.com
   - astrologywithrajalakshmi.com
   - rajalakshmiguide.com

3. Select domain and complete purchase
4. Keep credentials safe

### Pointing Domain to Hosting:

#### For Netlify:
1. Get Netlify nameservers from your site
2. Go to domain registrar settings
3. Point domain to Netlify nameservers
4. Wait 24-48 hours for propagation
5. Test with your new domain

#### For Traditional Hosting:
1. Get A record IP from hosting provider
2. Go to domain registrar DNS settings
3. Create A record pointing to IP
4. Add CNAME records if needed
5. Wait for propagation

#### DNS Record Example:
```
Type: A
Host: @
Points to: 123.456.789.012
TTL: 3600
```

---

## 5️⃣ EMAIL CONFIGURATION

### Setup Contact Form Email (Optional)

#### Using EmailJS:
1. Go to emailjs.com
2. Sign up for free account
3. Create email service
4. Create email template
5. Get your IDs

Example Template:
```
From: {{from_name}} ({{from_email}})
Phone: {{phone}}
Service: {{service_type}}
Message: {{message}}
```

#### Integrating with Website:
In `js/script.js`, uncomment and update:
```javascript
EmailJS.init('YOUR_PUBLIC_KEY');

function sendEmail(formData) {
    EmailJS.send('SERVICE_ID', 'TEMPLATE_ID', formData)
        .then(response => console.log('Email sent!'))
        .catch(error => console.log('Error:', error));
}
```

#### Using Google Form:
1. Create Google Form with same fields
2. Get form action URL
3. Update form in HTML to POST to Google
4. Responses appear in Google Sheets

---

### Email Integration with Backend:
If you have a backend server:

```javascript
// Send form data to your server
fetch('/api/send-email', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData)
})
.then(response => response.json())
.then(data => console.log('Success:', data))
.catch(error => console.log('Error:', error));
```

---

## 6️⃣ PERFORMANCE OPTIMIZATION

### Image Optimization:
1. Compress images using:
   - TinyPNG.com
   - ImageOptim.com
   - Compressor.io
2. Convert to WebP format for faster loading
3. Use appropriate image sizes

### Code Optimization:
1. Minify CSS:
   - cssminifier.com
   - Add minified version to `style.min.css`

2. Minify JavaScript:
   - jsminifier.com
   - Add minified version to `script.min.js`

3. Update HTML to use minified files

### Caching:
The `.htaccess` file already includes caching rules.
For other servers, add appropriate caching headers.

### Speed Testing:
Test your site performance:
- PageSpeed Insights (Google)
- GTmetrix.com
- WebPageTest.org

Target scores:
- Lighthouse: 90+
- Pagespeed: 80+
- Load time: < 2 seconds

---

## 7️⃣ SEO SETUP

### Sitemap Configuration:
Edit `sitemap.xml`:
```xml
<loc>https://yourdomain.com/</loc>
```
Replace `yourdomain.com` with your actual domain.

### Robots.txt Update:
Edit `robots.txt`:
```
Sitemap: https://yourdomain.com/sitemap.xml
```

### Google Search Console:
1. Go to search.google.com/search-console
2. Add your website
3. Verify ownership (add to HTML head)
4. Submit sitemap
5. Monitor search performance

### Bing Webmaster Tools:
1. Go to bing.com/webmasters
2. Add website
3. Verify ownership
4. Submit sitemap

### Meta Tags:
Already included in `index.html`:
```html
<meta name="description" content="...">
<meta name="keywords" content="...">
<meta name="author" content="...">
```

### Open Graph Tags (Optional):
Add to `<head>` for social sharing:
```html
<meta property="og:title" content="Page Title">
<meta property="og:description" content="Page Description">
<meta property="og:image" content="image-url">
<meta property="og:url" content="https://yourdomain.com">
```

---

## 8️⃣ MAINTENANCE

### Regular Tasks:

#### Weekly:
- [ ] Check website loads correctly
- [ ] Test form submission
- [ ] Monitor website traffic (if Analytics setup)
- [ ] Check for console errors (F12)

#### Monthly:
- [ ] Update testimonials
- [ ] Review contact form submissions
- [ ] Check Google Search Console
- [ ] Monitor page speed
- [ ] Backup website files

#### Quarterly:
- [ ] Update service descriptions
- [ ] Review and update pricing
- [ ] Check external links
- [ ] Update about section if needed
- [ ] Review analytics data

#### Annually:
- [ ] Update copyright year (2026 → 2027)
- [ ] Review overall design
- [ ] Update business information
- [ ] Renew domain registration
- [ ] Renew hosting if needed

### Backup Strategy:
1. Keep local backup of all files
2. Use hosting provider's backup
3. Use cloud storage (Google Drive, Dropbox)
4. Backup monthly or after changes

### Security:
1. Keep software updated
2. Use strong passwords
3. Enable HTTPS (automatic on Netlify)
4. Monitor for suspicious activity
5. Regular security scans

---

## 🆘 TROUBLESHOOTING DEPLOYMENT

### Problem: Page shows "Not Found"
**Solution**:
- Check file names are correct (case-sensitive)
- Verify all files uploaded
- Check file paths in HTML
- Clear browser cache

### Problem: Images not loading
**Solution**:
- Check images folder exists
- Verify image file names match
- Check file paths are correct
- Optimize image sizes

### Problem: Styles not applied
**Solution**:
- Clear browser cache (Ctrl+Shift+Delete)
- Hard refresh (Ctrl+F5)
- Check CSS file uploaded
- Verify CSS path in HTML

### Problem: Form not working
**Solution**:
- Check JavaScript file loaded
- Verify form IDs match
- Check browser console for errors
- Test form validation

### Problem: Slow loading
**Solution**:
- Compress images
- Enable caching
- Use CDN (already included)
- Minify CSS/JS
- Reduce animations

---

## 📊 ANALYTICS SETUP

### Google Analytics:
1. Create Google Analytics account
2. Get measurement ID
3. Add to HTML head:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXX');
</script>
```
4. Monitor traffic and user behavior

---

## ✅ DEPLOYMENT CHECKLIST

Before going live:
- [ ] All images added
- [ ] Contact info updated
- [ ] Form tested
- [ ] Links tested
- [ ] Mobile responsive tested
- [ ] Browser compatibility tested
- [ ] Page load speed optimized
- [ ] Analytics setup (optional)
- [ ] SSL/HTTPS enabled
- [ ] Domain configured
- [ ] Email setup (optional)
- [ ] Social media links updated
- [ ] Sitemap submitted
- [ ] Backup created

---

## 🎉 GOING LIVE CHECKLIST

1. **Domain Ready**: ✓
2. **Hosting Setup**: ✓
3. **Files Deployed**: ✓
4. **SSL Certificate**: ✓ (Auto on Netlify)
5. **DNS Configured**: ✓
6. **Email Alerts**: ✓
7. **Analytics**: ✓ (Optional)
8. **Monitoring**: ✓
9. **Backup**: ✓
10. **Launch Page**: ✓

---

## 📞 SUPPORT CONTACTS

- **Netlify Support**: support.netlify.com
- **GitHub Support**: github.com/support
- **Domain Registrar**: Check registrar site
- **Hosting Provider**: Check provider documentation

---

**Congratulations! Your website is now live! 🎉**

For questions or advanced setup, contact a web developer.
