# Portfolio Riccardo Delrio

Un portfolio moderno e professionale sviluppato con React, Vite e Bootstrap per presentare i miei progetti e competenze come Full Stack Developer.

![Portfolio Preview](https://via.placeholder.com/800x400/667eea/white?text=Portfolio+Preview)

## 🚀 Caratteristiche

- **Design Moderno**: Interfaccia pixel-perfect con design responsivo
- **Performance Ottimizzate**: Sviluppato con Vite per tempi di caricamento ultrarapidi
- **CSS Avanzato**: Utilizzo di CSS nesting e custom properties per un design scalabile
- **Componenti Riutilizzabili**: Architettura modulare con componenti React
- **Animazioni Fluide**: Transizioni e micro-interazioni per migliorare l'UX
- **Mobile First**: Design completamente responsivo per tutti i dispositivi

## 🛠️ Tecnologie Utilizzate

- **Frontend**: React 19, Vite, Bootstrap 5
- **Styling**: CSS3 con nesting, Custom Properties, Font Awesome
- **Routing**: React Router DOM
- **Fonts**: Inter (Google Fonts)
- **Icons**: Font Awesome 6

## 📋 Sezioni del Portfolio

### 🏠 Homepage
- **Hero Section**: Presentazione con call-to-action
- **About**: Chi sono e le mie competenze
- **Projects**: Showcase dei progetti principali
- **Contact**: Informazioni di contatto e social links

### 📂 Progetti Featured

1. **Boolique E-commerce**
   - Full Stack e-commerce con React e Node.js
   - Autenticazione JWT, gestione prodotti, carrello
   - [GitHub](https://github.com/RiccardoDelrio/Boolique-Ecommerce)

2. **Backoffice Laravel**
   - Sistema di gestione amministrativa
   - Dashboard, CRUD, gestione utenti
   - [GitHub](https://github.com/RiccardoDelrio/backoffice-laravel)

3. **Steam React Clone**
   - Replica dell'interfaccia Steam
   - Design responsivo, componenti React
   - [GitHub](https://github.com/RiccardoDelrio/steam-react)

4. **Curriculum Digitale**
   - CV interattivo con design moderno
   - Animazioni fluide, UX ottimizzata
   - [GitHub](https://github.com/RiccardoDelrio/curriculum)

## 🚀 Come Iniziare

### Prerequisiti
- Node.js (versione 18+)
- npm o yarn

### Installazione

1. **Clona il repository**
   ```bash
   git clone https://github.com/RiccardoDelrio/project-portfolio-react.git
   cd project-portfolio-react
   ```

2. **Installa le dipendenze**
   ```bash
   npm install
   ```

3. **Avvia il server di sviluppo**
   ```bash
   npm run dev
   ```

4. **Apri il browser**
   ```
   http://localhost:5173
   ```

### Build per Produzione

```bash
npm run build
npm run preview
```

## 📁 Struttura del Progetto

```
src/
├── components/          # Componenti riutilizzabili
│   ├── Hero.jsx/.css   # Sezione hero
│   ├── About.jsx/.css  # Sezione about
│   ├── Projects.jsx/.css # Showcase progetti
│   ├── Contact.jsx/.css # Sezione contatti
│   ├── Navigation.jsx/.css # Menu navigazione
│   └── Footer.jsx/.css # Footer
├── Pages/              # Pagine principali
│   ├── Home.jsx        # Homepage
│   └── Details.jsx/.css # Dettagli progetto
├── App.jsx             # Componente principale
└── index.css          # Stili globali
```

## 🎨 Design System

### Colori
- **Primary**: #2563eb (Blue)
- **Secondary**: #64748b (Slate)
- **Accent**: #f59e0b (Amber)
- **Text**: #0f172a (Slate 900)

### Typography
- **Font Family**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700, 800, 900

### Spacing & Layout
- **Border Radius**: 0.375rem - 1rem
- **Shadows**: Layered shadow system
- **Breakpoints**: Mobile-first approach

## 📱 Responsive Design

- **Mobile**: < 576px
- **Tablet**: 576px - 768px
- **Desktop**: 768px - 1200px
- **Large**: > 1200px

## ⚡ Performance

- **Lazy Loading**: Immagini caricate on-demand
- **Code Splitting**: Componenti ottimizzati
- **CSS Optimizations**: Minimal CSS bundle
- **Font Display**: Swap per caricamento veloce

## 🔧 Configurazione

### Vite Config
- Hot Module Replacement (HMR)
- Fast refresh per React
- Build ottimizzato per produzione

### ESLint
- Regole per React e hooks
- Best practices enforcement

## 📧 Contatti

- **Email**: riccardo.delrio@email.com
- **LinkedIn**: [riccardo-delrio](https://linkedin.com/in/riccardo-delrio)
- **GitHub**: [RiccardoDelrio](https://github.com/RiccardoDelrio)

## 📄 Licenza

Questo progetto è sotto licenza MIT. Vedi il file [LICENSE](LICENSE) per dettagli.

## 🙏 Ringraziamenti

- **React Team** per l'eccellente framework
- **Vite** per l'incredibile velocità di sviluppo
- **Bootstrap** per il sistema di griglia
- **Font Awesome** per le icone
- **Google Fonts** per la tipografia

---

⭐ **Se ti piace questo progetto, lascia una stella su GitHub!**

Sviluppato con ❤️ da [Riccardo Delrio](https://github.com/RiccardoDelrio)+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
