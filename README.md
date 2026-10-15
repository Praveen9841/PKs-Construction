# PK's CONSTRUCTION – Building and Maintenance Web UI

A pixel-perfect, fully responsive, and interactive UI recreation of the reference website:  
🔗 **Reference Website**: [https://xtratheme.com/elementor/construction-2/](https://xtratheme.com/elementor/construction-2/)

---

## 📌 Deliverable Links
- **Live Demo**: [https://pks-construction-ui.vercel.app](https://pks-construction-ui.vercel.app) *(or deploy to your preferred URL)*
- **GitHub Repository**: [https://github.com/your-username/pks-construction-ui](https://github.com/your-username/pks-construction-ui)

---

## 📖 Project Overview
This project recreates the entire homepage of the **XTRA Construction-2** reference website down to every detail:
- **Exact Layout & Hierarchy**:
  - **Top Bar**: Contact phone `+1 (818) 23 45 678` and social media icons (Facebook, Twitter, LinkedIn, Instagram).
  - **Main Navigation Header**: Official **PK's CONSTRUCTION** brand logo, navigation links (`Home`, `About`, `Services`, `FAQ`, `Blog`, `Pages`, `Contact`), interactive search modal trigger, and `FREE CONSULTATION` CTA button.
  - **Hero Section**: High-impact background, `TRUSTED CONSTRUCTION` badge, headline *"Don't get framed by the competition, trust our solid reputation."*, slogan copy, and action buttons with video modal popup.
  - **Floating 3D Flip Cards**: 3 interactive 3D flip cards (`Building Engineering`, `Safety First`, `Road Construction`) with smooth 180° perspective flip revealing descriptions and "Read More" buttons.
  - **About Our Company**: Section watermark badge, heading *"Always dedicated and devoted"*, feature checklist with icons, gold frame photo arrangement, and CTA.
  - **Services Section**: Section badge, *"Our construction services"*, 3 service feature cards with hover transitions and yellow border accents, followed by the gold callout banner.
  - **How It Works (Process)**: 3-step numbered roadmap (`01 Agency / Bidding`, `02 Construction`, `03 Project Execution`) with framed construction imagery.
  - **Portfolio Showcase**: Interactive filter tabs (`All`, `Buildings`, `Roads`, `Restoration`, `Civil`) filtering 8 project cards with hover zoom and search overlay.
  - **Get A Fair Quote (Contact Section)**: Dual-column layout with dark info block (address, phone, email) and gold quotation form featuring client-side JavaScript validation.
  - **Testimonial Slider**: Client review carousel with custom avatars, gold shadow offsets, previous/next controls, and indicator dots.
  - **Partners Strip**: Client/partner logos showcase.
  - **Footer**: 4-column dark footer with company bio, quick links, service catalog, newsletter subscription form, 24/7 hotline callout, and copyright bar.

---

## 📁 Project Directory Structure

```text
construction-ui/
├── index.html                   # Main entry point with complete HTML5 semantic structure
├── vercel.json                  # Deployment configuration for Vercel
├── package.json                 # Optional npm scripts for development & serving
├── README.md                    # Comprehensive documentation and student guide
│
├── css/
│   ├── style.css                # Core design system tokens, typography, layouts & animations
│   └── responsive.css           # Breakpoints for desktop, laptop, tablet, and mobile (no horizontal scroll)
│
├── js/
│   └── main.js                  # Modular vanilla JavaScript handling all interactive components
│
└── assets/
    └── images/
        ├── logos/               # Company logos (logo-main.svg, logo-footer.svg, partner logos)
        ├── hero/                # High-resolution hero background image
        ├── about/               # About section photo
        ├── services/            # Service background images for flip cards
        ├── icons/               # High-contrast service and safety icons
        ├── process/             # Process section image
        ├── portfolio/           # 8 categorized project images
        └── testimonials/        # Client avatar photos
```

---

## 🎓 Step-by-Step Guidance (MCA / Developer Walkthrough)

### 1. Architectural Approach
The codebase is structured following modern frontend engineering principles without bloated external frameworks:
- **Separation of Concerns**: HTML handles the semantic structure, CSS handles visual presentation and responsiveness, and vanilla JavaScript handles all dynamic interactions.
- **CSS Custom Properties (Variables)**: Defined in `:root` inside `css/style.css` for consistent theme management:
  - `--primary-gold: #f4c03b;`
  - `--dark-navy: #243344;`
  - `--dark-navy-deep: #1b2633;`
  - `--font-primary: 'Roboto', sans-serif;`

### 2. Key Interactive Features Implemented
1. **3D CSS Card Flip**: Uses `perspective: 1200px` on the container, `transform-style: preserve-3d` on the inner card, and `rotateY(180deg)` on hover with `-webkit-backface-visibility: hidden`.
2. **Dynamic Portfolio Filter**: JavaScript listens for clicks on filter tabs (`All`, `Buildings`, `Roads`, `Restoration`, `Civil`), queries `data-category` attributes on each card, and applies smooth fade animations.
3. **Responsive Navigation Drawer**: On screens `<= 992px`, the desktop menu hides and a hamburger button slides out an accessible mobile drawer with backdrop overlay.
4. **Testimonial Carousel**: Pure JS slider that supports next/previous buttons, dot indicators, and swipe-ready navigation.
5. **Interactive Modals**:
   - **Search Modal**: Opens with autofocus on clicking the magnifying glass icon; closes on Escape key or overlay click.
   - **Video Modal**: Embeds an accessible iframe player that automatically pauses/stops when the modal is closed.
6. **Form Validation**: Validates name, email format (`/^[^\s@]+@[^\s@]+\.[^\s@]+$/`), and message fields with dynamic error styling and a submission toast confirmation.

---

## 💻 How to Run and Test Locally

### Option 1: Direct File Open (Zero Setup)
Simply open `index.html` in any web browser (Google Chrome, Microsoft Edge, Firefox, Safari):
- Double click `index.html` in File Explorer, or
- Right click `index.html` → **Open With** → **Google Chrome**.

### Option 2: Using VS Code Live Server
1. Open the folder `construction-ui` in VS Code.
2. If installed, click **"Go Live"** in the status bar or right-click `index.html` and select **"Open with Live Server"**.
3. The page will open at `http://127.0.0.1:5500/index.html`.

### Option 3: Using Node.js / NPX
```bash
# In the project directory:
npx serve .
# Or:
npm run dev
```

### Option 4: Using Python Built-in Server
```bash
python -m http.server 8080
```
Open [http://localhost:8080](http://localhost:8080) in your browser.

---

## 🌐 How to Deploy to Free Hosting

### Deploying to Vercel (Recommended)
1. Push this project to your GitHub repository.
2. Go to [https://vercel.com](https://vercel.com) and log in with GitHub.
3. Click **"New Project"**, select your repository, and click **"Deploy"**.
4. The site will be live immediately with free HTTPS!

### Deploying to GitHub Pages
1. Go to your repository on GitHub.
2. Go to **Settings** → **Pages**.
3. Under **Branch**, select `main` and root `/`, then click **Save**.
4. Your site will be published at `https://<your-username>.github.io/<repo-name>/`.

---

## 📋 Evaluation Checklist & Verification

| Requirement | Reference Requirement | Status |
| :--- | :--- | :--- |
| **Visual Design** | Colors (`#f4c03b`, `#243344`), Roboto fonts, watermarks | ✅ Verified |
| **Header & Topbar** | Logo, phone number, social icons, consultation button | ✅ Verified |
| **Company Branding** | "PK's CONSTRUCTION" logo and name | ✅ Verified |
| **Hero Section** | Accurate headline, badge, subtitle, dual CTAs | ✅ Verified |
| **3D Flip Cards** | Flip animation on hover, front & back content | ✅ Verified |
| **About Section** | Offset image frame, feature checklist, lead copy | ✅ Verified |
| **Services Section** | 3 service cards, custom icons, gold callout banner | ✅ Verified |
| **Process Steps** | 3-step numbered roadmap (01, 02, 03) with photo | ✅ Verified |
| **Portfolio Grid** | 8 project cards with category filtering | ✅ Verified |
| **Quote Contact Form** | Two-column layout, validation & feedback toast | ✅ Verified |
| **Testimonial Slider** | Slider with avatar, quote, next/prev and dots | ✅ Verified |
| **Partner Logos** | 5 partner brand logos showcase | ✅ Verified |
| **Footer & Sub-bar** | 4-column layout, newsletter, hotline, copyright | ✅ Verified |
| **Responsiveness** | Mobile drawer, responsive grid, zero horizontal overflow | ✅ Verified |
| **Code Quality** | Clean semantic HTML, modular CSS, vanilla JS | ✅ Verified |
