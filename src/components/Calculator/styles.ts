import styled from 'styled-components'

interface CalcProps {
  isDarkMode: boolean
}
export const FormContainer = styled.form`
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px;
  gap: 4rem;
  border-radius: 30px;
  background-color: ${(props) => props.theme.tertiary};
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 50px 20px;
  }
`
export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 3rem;
  position: relative;
`
export const InputDiv = styled.div`
  position: relative;
  label {
    position: absolute;
    padding: 0.5rem;
    left: 20px;
    top: -15px;
    height: 3.5rem;
    border-radius: 20px;
    background-color: yellow;
    background-color: ${(props) => props.theme.primary};
    color: white;
    min-width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
  }
`
export const ValorHora = styled.input`
  height: 5rem;
  border: 0;
  width: 100%;
  max-width: 543px;
  background: ${(props) => props.theme.secondary};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  text-align: right;
  padding: 50px 50px;
  font-family: 'Raleway', sans-serif;
  font-size: 3rem;
  font-weight: 600;
  color: white;
`
export const HorasDia = styled.input`
  height: 2.5rem;
  border: 0;
  background: ${(props) => props.theme.secondary};
  width: 100%;
  max-width: 543px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  text-align: right;
  padding: 50px 50px;
  font-family: 'Raleway', sans-serif;
  font-size: 3rem;
  font-weight: 600;
  color: white;
`
export const Dias = styled.input`
  height: 2.5rem;
  border: 0;
  background: ${(props) => props.theme.secondary};
  width: 100%;
  max-width: 543px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  text-align: right;
  padding: 50px 50px;
  font-family: 'Raleway', sans-serif;
  font-size: 3rem;
  font-weight: 600;
  color: white;
`

export const ResultContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const InputResult = styled.div`
  position: relative;
  label {
    position: absolute;
    padding: 0.5rem 1rem;
    top: -20px;
    left: 20px;
    height: 3.5rem;
    border-radius: 20px;
    background-color: yellow;
    background-color: ${(props) => props.theme.primary};
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
  }
`
export const Result = styled.input<CalcProps>`
  background: ${(props) => (props.isDarkMode ? '#8A8A8A' : '#EBF4F8')};
  width: 80%;
  height: 10rem;
  text-align: center;
  border: 0;
  padding: 50px 50px;
  font-family: 'Raleway', sans-serif;
  font-size: 3rem;
  font-weight: 600;
  color: ${(props) => (props.isDarkMode ? '#EBF4F8' : '#1D3557')};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  @media (max-width: 768px) {
    width: 100%;
  }
`
