import styled from 'styled-components'

type Variant = 'body' | 'cursive' | 'h1' | 'h2' | 'h3' | 'h4'

const variant = (variant?: Variant) => {
  switch (variant) {
    case 'cursive':
      return `
        font-family: 'Shadows Into Light', cursive;
      `
    case 'h1':
      return `
        font-size: 36px;
        color: var(--black);
      `
    case 'h2':
      return `
        font-size: 24px;
        color: var(--black);
      `
    case 'h3':
      return `
        font-size: 16px;
        color: var(--black);
        font-weight: 700;
      `
    case 'h4':
      return `
        font-size: 12px;
        letter-spacing: 1px;
        color: var(--gray);
        text-transform: uppercase;
      `
    case 'body':
    default:
      return `
        color: var(--black);
        font-size: 16px;
      `
  }
}

export type TypographyProps = {
  variant?: Variant
}

const BaseType = styled.div<TypographyProps>`
  font-family: Open-Sans, Helvetica, Sans-Serif;
  font-weight: 400;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.5;
  letter-spacing: 0.4px;
`

const Typography = styled(BaseType)`
  ${(props) => variant(props.variant)}
`

export default Typography
