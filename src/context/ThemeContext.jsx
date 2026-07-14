import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState(() => {
    return localStorage.getItem('portfolio-theme') || 'light';
  });

  const [resolvedTheme, setResolvedTheme] = useState('light');

  useEffect(() => {
    const applyTheme = (t) => {
      const root = document.documentElement;
      root.classList.remove('dark', 'light', 'cyber-cosmic', 'deep-indigo');
      
      if (t === 'cyber-cosmic') {
        root.classList.add('dark', 'cyber-cosmic');
        setResolvedTheme('dark');
      } else if (t === 'deep-indigo') {
        root.classList.add('dark', 'deep-indigo');
        setResolvedTheme('dark');
      } else if (t === 'light') {
        root.classList.add('light');
        setResolvedTheme('light');
      } else {
        // Fallback for system / legacy dark setting
        root.classList.add('dark', 'cyber-cosmic');
        setResolvedTheme('dark');
      }
    };

    applyTheme(theme);
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
