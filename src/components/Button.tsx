import styled, { css } from 'styled-components'

type ButtonProps = {
  children?: React.ReactNode
  round?: boolean
  size?: 'small' | 'medium' | 'large'
  variant?: 'primary' | 'secondary' | 'link'
  active?: boolean
}

const Button = styled.button<ButtonProps>`
  border: 1px solid var(--gray-light);
  background: var(--white);

  color: var(--brand-primary);
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 50px;
  margin-bottom: 0;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  transition-property: background-color, box-shadow, color;
  border-radius: 40px;
  border-style: solid;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  touch-action: manipulation;
  cursor: pointer;
  user-select: none;
  background-image: none;
  padding: 0 30px;
  outline: none;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  ${(props) =>
    props.size === 'medium' &&
    css`
      height: 40px;
      padding: 0 18px;
    `}

  ${(props) =>
    props.size === 'small' &&
    css`
      height: 30px;
      padding: 0 15px;
    `}
        
    ${(props) =>
    props.round &&
    css`
      max-width: 50px;
      width: 50px;
      padding: 0;
    `}
  
    ${(props) =>
    props.round &&
    props.size === 'medium' &&
    css`
      height: 40px;
      width: 40px;
      padding: 0;
    `}
  
    ${(props) =>
    props.round &&
    props.size === 'small' &&
    css`
      height: 30px;
      width: 30px;
      padding: 0;
    `}
        
    ${(props) =>
    props.variant === 'primary' &&
    css`
      background-color: var(--brand-primary);
      border-color: var(--brand-primary);
      color: var(--white);

      &:not(:disabled) {
        &:hover,
        &:active,
        &:focus-visible,
        &:focus-within {
          background-color: var(--brand-primary);
          border-color: var(--brand-primary);
        }

        &:focus:not(:active),
        &:focus-within:not(:active) {
          border-color: var(--white);
          box-shadow: 0 0 0 2px var(--brand-primary);
        }

        ${props.active === true &&
        css`
          background-color: var(--brand-primary);
          border-color: var(--brand-primary);
        `}
      }
    `}
    
    ${(props) =>
    props.variant === 'secondary' &&
    css`
      color: var(--black);
      border-color: var(--gray-light);
      background: var(--white);

      &:not(:disabled) {
        &:hover,
        &:active,
        &:focus-visible,
        &:focus-within {
          background-color: var(--gray-lightest);
          border-color: var(--gray-light);
        }

        &:focus-visible {
          border-color: var(--white);
          box-shadow: 0 0 0 2px var(--brand-primary);
        }

        ${props.active === true &&
        css`
          background-color: var(--gray-light);
          border-color: var(--gray-light);
        `}
      }
    `}

    ${(props) =>
    props.variant === 'link' &&
    css`
      background: none;
      border: none;
      color: var(--black);
      padding: 0;
      height: auto;

      &:not(:disabled) {
        &:hover,
        &:active,
        &:focus-visible,
        &:focus-within {
          color: var(--brand-primary);
        }

        ${props.active === true &&
        css`
          color: var(--brand-primary);
        `}
      }
    `}
`

export default Button
