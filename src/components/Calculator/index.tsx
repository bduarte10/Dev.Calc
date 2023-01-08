import { useState } from 'react'
import {
  Dias,
  FormContainer,
  HorasDia,
  InputDiv,
  InputResult,
  InputsContainer,
  Result,
  ResultContainer,
  ValorHora,
} from './styles'

interface CalcProps {
  isDarkMode: boolean
}
export const Calculator = (props: CalcProps) => {
  const [valorHora, setValorHora] = useState(0)
  const [valorHoraDia, setValorHoraDia] = useState(0)
  const [valorDia, setValorDia] = useState(0)

  const handleValorHoraChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = parseInt(event.target.value)
    value >= 0 ? setValorHora(value) : setValorHora(0)
  }

  const handleHoraDiaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value)
    value >= 0 ? setValorHoraDia(value) : setValorHoraDia(0)
  }
  const handleDiaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value)
    value >= 0 ? setValorDia(value) : setValorDia(0)
  }
  const resultValue = valorHora * valorHoraDia * valorDia
  const FormatedResult = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(resultValue)
  return (
    <FormContainer>
      <InputsContainer>
        <InputDiv>
          <label htmlFor="valorHora">Seu valor/hora</label>
          <ValorHora
            id="valorHora"
            type="text"
            value={valorHora}
            onChange={handleValorHoraChange}
          />
        </InputDiv>
        <InputDiv>
          <label htmlFor="horaDia">Horas por dia</label>
          <HorasDia
            id="horaDia"
            type="text"
            value={valorHoraDia}
            onChange={handleHoraDiaChange}
          />
        </InputDiv>
        <InputDiv>
          <label htmlFor="dias">Dias</label>
          <Dias
            id="dias"
            type="text"
            value={valorDia}
            onChange={handleDiaChange}
          />
        </InputDiv>
      </InputsContainer>

      <ResultContainer>
        <InputResult>
          <label htmlFor="result">Valor total do projeto</label>
          <Result
            id="result"
            readOnly
            value={FormatedResult}
            isDarkMode={props.isDarkMode}
          />
        </InputResult>
      </ResultContainer>
    </FormContainer>
  )
}
