import styled from 'styled-components'

type ButtonProps = {
  children?: React.ReactNode
  round?: boolean
}

const Button = styled.button<ButtonProps>`
  ${(props) => props.round && 'border-radius: 100%;'}
`

export default Button
