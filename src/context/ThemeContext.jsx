import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState(() => {
    return localStorage.getItem('portfolio-theme') || 'system';
  });

  // Compute the actually applied theme ('light' | 'dark')
  const [resolvedTheme, setResolvedTheme] = useState('dark');

  useEffect(() => {
    const applyTheme = (t) => {
      const root = document.documentElement;
      root.classList.remove('dark', 'light');
      if (t === 'dark') {
        root.classList.add('dark');
        setResolvedTheme('dark');
      } else if (t === 'light') {
        root.classList.add('light');
        setResolvedTheme('light');
      } else {
        // system
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        root.classList.add(prefersDark ? 'dark' : 'light');
        setResolvedTheme(prefersDark ? 'dark' : 'light');
      }
    };

    applyTheme(theme);

    // Watch system preference changes when in 'system' mode
    if (theme === 'system') {
      const mq = window.matchMedia('(prefers-color-scheme: dark)');
      const handler = (e) => {
        document.documentElement.classList.remove('dark', 'light');
        document.documentElement.classList.add(e.matches ? 'dark' : 'light');
        setResolvedTheme(e.matches ? 'dark' : 'light');
      };
      mq.addEventListener('change', handler);
      return () => mq.removeEventListener('change', handler);
    }
  }, [theme]);

  const setTheme = (newTheme) => {
    setThemeState(newTheme);
    localStorage.setItem('portfolio-theme', newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, resolvedTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used inside ThemeProvider');
  return ctx;
}
