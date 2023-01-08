import { useState } from 'react'
import { Label, Span, SwitchContainer } from './styles'
interface Props {
  toggleDarkMode: () => void
}
export const Switch = (props: Props) => {
  const handleChange = () => {
    props.toggleDarkMode()
    setIsDarkMode(!isDarkMode)
  }
  const [isDarkMode, setIsDarkMode] = useState(false)
  return (
    <SwitchContainer>
      <Label>
        <input
          type="checkbox"
          checked={isDarkMode}
          onChange={handleChange}
        />
        <Span isDarkMode={isDarkMode} />
      </Label>
    </SwitchContainer>
  )
}
