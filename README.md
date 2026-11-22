# Abishek Siriwardhana - Developer Portfolio

An authentic, ultra-sleek developer portfolio website built in the signature design aesthetic of **[tharushawakwella.github.io](https://tharushawakwella.github.io/)**, customized specifically for **Abishek Siriwardhana** (GitHub: [`dulanjanaabishek2003`](https://github.com/dulanjanaabishek2003)).

---

## 🎨 Design Features (Inspired by Tharusha Wakwella)

- **Color Palette & Theme:** Deep botanical forest dark mode (`#101613`), subtle panels (`#18211c`), signature chartreuse-mint accents (`#c2f5a4`), and soft ivory text (`#f3f5ed`).
- **Typography:** Space Grotesk + Inter with Georgia serif italics for emphasized titles.
- **Hero Section & Portrait Scene:** 
  - Availability pill with pulsing glow dot (`Open to internship opportunities`)
  - Two orbital cosmic rings with central radial glow
  - Floating tags: `{ } Full-stack development` and `✳ AI & Cloud architecture`
  - 3-degree tilted Polaroid-style portrait card with `AS` monogram avatar placeholder
- **Stack Strip:** Minimalist brand ticker (`IDEAS BUILT WITH React · Spring Boot · Java ...`)
- **Selected Work Grid:** Interactive filter buttons (`All work`, `Enterprise ERP`, `Full Stack`, `AI & Mobile`) with custom simulated project art cards.
- **Interactive Project Dialog Modal:** Rich popup modal showing full feature bullets, stack badges, source code link, and contact action.
- **About Section:** Split view with green signature, narrative copy, and styled graduation education card.
- **Toolkit (Skills):** 3-column breakdown with glyph icons (`</>`, `{ }`, `✳`).
- **Contact Section:** Clean direct email link, copy-to-clipboard action with visual feedback, and asterisk quote badge.
- **Ambient Enhancements:** Top scroll progress bar & smooth cursor glow.

---

## 📸 Profile Picture එක් කරන්නේ කෙසේද? (How to Add Your Photo)

ඔබට Profile Picture එකක් දැමීමට අවශ්‍ය වූ විට:
1. ඔබේ ඡායාරූපය `public/portrait.jpeg` ලෙස save කරන්න (හෝ `public/` folder එක තුළට copy කරන්න).
2. [src/components/Hero.tsx](file:///c:/Portfolio/src/components/Hero.tsx) ගොනුවේ `portrait-image` කොටසේ ඇති placeholder එක වෙනුවට `<img src="/portrait.jpeg" alt="Abishek Siriwardhana" className="w-full h-full object-cover" />` ලෙස යොදන්න.

---

## 🛠️ Run Locally

```bash
# 1. Run Development Server
npm run dev

# 2. Build for Production
npm run build
npm run start
```
Browser එකේ [http://localhost:3000](http://localhost:3000) වෙත පිවිසෙන්න.
