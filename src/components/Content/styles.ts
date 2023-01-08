import styled from 'styled-components'

export const TitleContainer = styled.div`
  width: 100%;
  padding: 5rem 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 800;
  line-height: 3rem;
  color: ${(props) => props.theme.text};
  span {
    color: ${(props) => props.theme.green};
  }
`
