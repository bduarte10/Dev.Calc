import styled from 'styled-components'

export const TitleContainer = styled.div`
  width: 100%;
  padding: 5rem 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    text-align: center;
    padding: 3rem 30px;
  }
`

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 800;
  line-height: 2rem;
  color: ${(props) => props.theme.text};
  margin-bottom: 1rem;
  span {
    color: ${(props) => props.theme.green};
  }
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`
export const SubTitle = styled.p`
  font-size: 1.5rem;
  color: ${(props) => props.theme.subtext};
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`
