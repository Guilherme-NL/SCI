import React from "react";
import styled from "styled-components";

export default function SuccessModal({ isOpen, onClose }) {
  if (!isOpen) {
    return null;
  }

  return (
    <StyledModal>
      <ModalContent>
        <CustonText>Mensagem enviada com sucesso!</CustonText>
        <br />
        <CustonText>Logo entraremos em contato!</CustonText>
        <CloseButton onClick={onClose}>x</CloseButton>
      </ModalContent>
    </StyledModal>
  );
}

const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  background-color: green;
  border-radius: 5px;
  padding: 20px;
  text-align: center;
  width: 300px;
  height: 200px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  background-color: #444;
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const CustonText = styled.div`
  color: #ffffff;
  font-weight: bold;
  font-size: 16px;
`;
