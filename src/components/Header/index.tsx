import { Switch } from '../ThemeSwitcher'
import { HeaderContainer, Logo, Nav } from './style'
interface Props {
  toggleDarkMode: () => void
}

const Header = (props: Props) => {
  return (
    <HeaderContainer>
      <Nav>
        <Logo>
          Dev<span className="dot">.</span>Calc
        </Logo>
        <Switch toggleDarkMode={props.toggleDarkMode} />
      </Nav>
    </HeaderContainer>
  )
}

export default Header
