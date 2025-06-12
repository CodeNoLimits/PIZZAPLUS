import { createRoot } from "react-dom/client";
import { lazy, Suspense } from "react";
import "./index.css";

// Preload critical fonts with display=swap for better performance
const googleFonts = document.createElement('link');
googleFonts.rel = 'preload';
googleFonts.as = 'style';
googleFonts.href = 'https://fonts.googleapis.com/css2?family=Heebo:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap';
googleFonts.onload = () => {
  googleFonts.rel = 'stylesheet';
};
document.head.appendChild(googleFonts);

// Lazy load Font Awesome
const loadFontAwesome = () => {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
  document.head.appendChild(link);
};

// Load Font Awesome after initial render
setTimeout(loadFontAwesome, 100);

// Lazy load the main App component
const App = lazy(() => import("./App"));

// Create root and render with Suspense for lazy loading
createRoot(document.getElementById("root")!).render(
  <Suspense fallback={<div>Loading...</div>}>
    <App />
  </Suspense>
);
