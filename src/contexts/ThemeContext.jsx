import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

const themes = {
  indian: {
    name: 'Indian Vibrance',
    colors: {
      primary: '#D4AF37',
      secondary: '#8B0000',
      accent: '#FF6B35',
      background: '#FFF8DC',
      text: '#2C1810'
    },
    fonts: {
      script: 'Dancing Script',
      serif: 'Playfair Display',
      sans: 'Inter'
    },
    patterns: {
      mandala: true,
      paisley: true,
      lotus: true
    }
  },
  asian: {
    name: 'East Asian Minimal',
    colors: {
      primary: '#DC143C',
      secondary: '#FFD700',
      accent: '#000000',
      background: '#FFFEF7',
      text: '#2C2C2C'
    },
    fonts: {
      script: 'Noto Sans SC',
      serif: 'Noto Serif SC',
      sans: 'Inter'
    },
    patterns: {
      bamboo: true,
      cherry: true,
      dragon: true
    }
  },
  african: {
    name: 'African Elegance',
    colors: {
      primary: '#FF8C00',
      secondary: '#8B4513',
      accent: '#228B22',
      background: '#FFF8DC',
      text: '#2F4F4F'
    },
    fonts: {
      script: 'Dancing Script',
      serif: 'Playfair Display',
      sans: 'Inter'
    },
    patterns: {
      kente: true,
      tribal: true,
      baobab: true
    }
  },
  island: {
    name: 'Island Sunset',
    colors: {
      primary: '#FF7F50',
      secondary: '#20B2AA',
      accent: '#FFD700',
      background: '#F0F8FF',
      text: '#2F4F4F'
    },
    fonts: {
      script: 'Dancing Script',
      serif: 'Playfair Display',
      sans: 'Inter'
    },
    patterns: {
      hibiscus: true,
      waves: true,
      palm: true
    }
  }
};

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState('indian');

  const theme = themes[currentTheme];

  const changeTheme = (themeName) => {
    setCurrentTheme(themeName);
  };

  return (
    <ThemeContext.Provider value={{ theme, currentTheme, changeTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};