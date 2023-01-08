import styled from 'styled-components'
import { Switch } from '../ThemeSwitcher'

export const HeaderContainer = styled.div`
  width: 100%;
  height: 4rem;
  padding: 0 40px;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.primary};
  @media (max-width: 768px) {
    padding: 0rem 30px;
  }
`
export const Nav = styled.nav`
  position: relative;
  max-width: 1200px;
  width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    justify-content: flex-start;
  }
`
export const Logo = styled.span`
  color: white;
  font-size: 35px;
  font-weight: 800;
  .dot {
    color: green;
  }
`
