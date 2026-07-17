import styled from 'styled-components'

export const FooterDiv = styled.footer<{ visible: boolean }>`
  position: fixed;
  left: 50%;
  bottom: 24px;

  transform: ${({ visible }) =>
    visible
      ? 'translateX(-50%) translateY(0)'
      : 'translateX(-50%) translateY(20px)'};

  opacity: ${({ visible }) => (visible ? 1 : 0)};
  visibility: ${({ visible }) => (visible ? 'visible' : 'hidden')};

  transition: all 0.35s ease;

  z-index: 999;
`
