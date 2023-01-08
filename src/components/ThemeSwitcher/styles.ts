import styled from 'styled-components'

interface SpanProps {
  isDarkMode: boolean
}

export const SwitchContainer = styled.div`
  position: absolute;
  right: 0;
`
export const Label = styled.label`
  display: inline-block;
  width: 60px;
  height: 34px;
  background: #ddd;
  border-radius: 20px;
  position: relative;
  input {
    appearance: none;
  }
`

export const Span = styled.span<SpanProps>`
  position: absolute;
  top: 2px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: ${(props) => (props.isDarkMode ? '#6c5ce7' : '#939393')};
  box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.05), inset 0 0 2px 0 rgba(0, 0, 0, 0.05);
  left: 2px;
  transition: left 0.2s;

  /* Quando o input estiver checked, deslocar o span para a direita */
  input:checked + & {
    left: calc(100% - 32px);
  }
`
