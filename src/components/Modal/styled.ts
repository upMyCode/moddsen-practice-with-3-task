import styled from 'styled-components';

const ModalWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
`;
const ModalContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
export { ModalContent, ModalWrapper };
