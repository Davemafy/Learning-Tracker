import { useContext } from "react"
import { ThemeContext } from "../contexts/ThemeContext"

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (context === null)
  {
    throw new Error("useTheme must be used within a RecordProvider")
  }
  return context
}