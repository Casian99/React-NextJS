import styled from 'styled-components'

const FooterSec = styled.div`
background: lightblue;
color: black;
height: 80px;
display:flex;
justify-content:center;
align-items: center;
`

const Footer = () => {
  return (
    <FooterSec>
      <p>WebSiteCG</p>
      <p>-All Rights Reserved-</p>
    </FooterSec>
  )
}

export default Footer
