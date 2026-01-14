import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Theme } from '../types';

interface ThemeContextType {
  theme: Theme;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const defaultTheme: Theme = {
  colors: {
    primaryBlue: '#1a5f7a',
    secondaryTeal: '#159895',
    accentTeal: '#57c5b6',
    lightTeal: '#a2ff86',
    darkBlue: '#002b5b',
    metalGray: '#4a5568',
    lightGray: '#f8f9fa',
    white: '#ffffff'
  },
  shadows: {
    small: '0 2px 4px rgba(0, 0, 0, 0.1)',
    medium: '0 4px 12px rgba(0, 0, 0, 0.1)',
    large: '0 8px 24px rgba(0, 0, 0, 0.1)'
  },
  transitions: {
    default: 'all 0.3s ease',
    fast: 'all 0.15s ease',
    slow: 'all 0.5s ease'
  }
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark-mode');
  };

  const theme = {
    ...defaultTheme,
    ...(isDarkMode && {
      colors: {
        ...defaultTheme.colors,
        darkBlue: '#0a1929',
        lightGray: '#121212',
        white: '#f5f5f5'
      }
    })
  };

  return (
    <ThemeContext.Provider value={{ theme, isDarkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
