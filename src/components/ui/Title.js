import styled from 'styled-components'

const StyledTitle = styled.h1`
  margin: 0 0 0.75rem;
  color: #0b3d63;
  font-family: 'Segoe UI', Arial, sans-serif;
  font-size: clamp(1.5rem, 2.5vw, 2rem);
  text-align: left;
`

function Title({ children }) {
  return <StyledTitle>{children}</StyledTitle>
}

export default Title
