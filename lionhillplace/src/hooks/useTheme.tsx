import { useContext } from 'react'
import { ThemeContext, type ThemeContextProps } from '../context/ThemeContext'

export function useTheme(): ThemeContextProps {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider')
  }
  return context
}
