# Talk OCD Website

A youth-led mental health awareness website focused on Obsessive-Compulsive Disorder (OCD), created as part of the HOSA Mental Health Promotion program at Bishop P. F. Reding Catholic Secondary School.

## About the Website

**Tagline:** *Raising awareness. Breaking stigma. Starting conversations.*

This single-page website educates visitors about OCD, challenges misconceptions, and provides resources for those seeking help.

## Project Structure

```
HOSA Website/
├── index.html          # Main HTML file with all content
├── styles.css          # CSS styling (based on logo colors)
├── script.js           # JavaScript for interactivity
├── Images/
│   └── Profile Picture.png   # Talk OCD logo
├── Outline.rtf         # Original content outline
└── README.md           # This file
```

## Color Scheme

The website uses colors from the Talk OCD logo:
- **Primary (Dark Teal):** `#1E4D5C` - Headers, navigation, important text
- **Secondary (Medium Blue):** `#5BA4C5` - Buttons, links, accents
- **Light Background:** `#C5E5E8` - Section backgrounds
- **White:** `#FFFFFF` - Content areas
- **Accent Light:** `#E8F4F7` - Subtle backgrounds

## Features

- **Single-page design** with smooth scrolling navigation
- **Responsive layout** that works on desktop, tablet, and mobile
- **7 main sections:**
  1. Homepage with hero banner
  2. About Us
  3. What Is OCD?
  4. The Reality of Living With OCD
  5. Ending the Stigma
  6. Resources & Support
  7. Contact Us
- **Mobile-friendly navigation** with hamburger menu
- **Scroll animations** for engaging user experience
- **Accessible design** with clear typography and color contrast

## How to Edit the Website

### Editing Content

1. **Open `index.html`** in any text editor (VS Code, Sublime Text, Notepad++, etc.)
2. **Find the section** you want to edit by searching for the section ID:
   - Homepage: Search for `id="home"`
   - About Us: Search for `id="about"`
   - What Is OCD: Search for `id="what-is-ocd"`
   - Living With OCD: Search for `id="living-with-ocd"`
   - Ending Stigma: Search for `id="ending-stigma"`
   - Resources: Search for `id="resources"`
   - Contact: Search for `id="contact"`
3. **Edit the text** between HTML tags
4. **Save the file** and refresh your browser to see changes

### Adding a Team Photo

1. Save your team photo in the `Images/` folder (e.g., `team-photo.jpg`)
2. Open `index.html` and find this line:
   ```html
   <div class="team-photo-placeholder">
       <p><em>(Insert Team Photo)</em></p>
   </div>
   ```
3. Replace it with:
   ```html
   <div class="team-photo">
       <img src="Images/team-photo.jpg" alt="Our Team" style="width: 100%; border-radius: 10px;">
   </div>
   ```

### Changing Colors

1. Open `styles.css`
2. Find the `:root` section at the top (lines 10-18)
3. Modify the color values:
   ```css
   :root {
       --primary-color: #1E4D5C;      /* Change this */
       --secondary-color: #5BA4C5;    /* Change this */
       --light-bg: #C5E5E8;           /* Change this */
   }
   ```

### Adding New Resources

1. Open `index.html`
2. Find the Resources section (`id="resources"`)
3. Add a new resource card by copying this template:
   ```html
   <div class="resource-card">
       <h4>Resource Name</h4>
       <p class="resource-contact">Contact: <strong>Phone Number</strong></p>
       <p>Description of the resource and what it offers.</p>
   </div>
   ```

## How to View the Website

### Option 1: Open Locally (Simplest)

1. **Double-click `index.html`** in your file explorer
2. The website will open in your default web browser
3. You can navigate through all sections

### Option 2: Use a Local Server (Recommended for Testing)

1. If you have Python installed:
   ```bash
   # Navigate to the website folder
   cd "/Users/emmaamos/Desktop/HOSA Website"

   # Python 3
   python3 -m http.server 8000

   # Python 2
   python -m SimpleHTTPServer 8000
   ```
2. Open your browser and go to: `http://localhost:8000`

3. If you have VS Code with Live Server extension:
   - Right-click on `index.html`
   - Select "Open with Live Server"

## How to Deploy the Website

### Option 1: GitHub Pages (Free & Easy)

1. **Create a GitHub account** at https://github.com
2. **Create a new repository** called "talk-ocd-website"
3. **Upload your files:**
   - index.html
   - styles.css
   - script.js
   - Images/ folder
4. **Enable GitHub Pages:**
   - Go to repository Settings → Pages
   - Source: Deploy from branch
   - Branch: main → /root
   - Click Save
5. Your website will be live at: `https://yourusername.github.io/talk-ocd-website`

### Option 2: Netlify (Free & Easy)

1. Go to https://www.netlify.com
2. Create a free account
3. **Drag and drop** your entire "HOSA Website" folder onto Netlify
4. Your site will be published with a free URL
5. You can customize the domain name in settings

### Option 3: Other Free Hosting Services

- **Vercel:** https://vercel.com
- **Surge:** https://surge.sh
- **Render:** https://render.com

## Browser Compatibility

This website works on:
- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Accessibility Features

- Semantic HTML structure
- Proper heading hierarchy (h1, h2, h3)
- Alt text for images
- Color contrast meets WCAG standards
- Keyboard navigation support
- Responsive design for all screen sizes

## Future Enhancements

Consider adding:
- [ ] OCD cycle graphic/infographic
- [ ] Testimonials or stories (with permission)
- [ ] Educational videos or animations
- [ ] Newsletter signup
- [ ] Multi-language support
- [ ] Search functionality for resources
- [ ] Contact form

## Support & Questions

For questions about editing or deploying this website:
- Email: [Your contact email]
- Instagram: @talk_ocd

## Credits

- **Website Design:** Talk OCD Team
- **Content:** Based on HOSA Mental Health Promotion Program outline
- **Logo:** Talk OCD
- **School:** Bishop P. F. Reding Catholic Secondary School

---

**Note:** This website is for educational purposes only and is not a substitute for professional medical or psychological care.

&copy; 2024 Talk OCD - HOSA Mental Health Promotion Initiative
