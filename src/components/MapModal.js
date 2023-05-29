import React from "react";
import styled from "styled-components";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export default function MapModal({ isOpen, onClose }) {
  if (!isOpen) {
    return null;
  }

  const address =
    "AV GENERAL OLÍMPIO MOURÃO FILHO, Nº 80 - Itapoã - Belo Horizonte - Minas Gerais - 31.710-690";
  const position = [-19.82925, -43.96032];

  return (
    <StyledModal>
      <ModalContent>
        <MapContainer center={position} zoom={15} style={{ height: "400px" }}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={position}>
            <Popup>{address}</Popup>
          </Marker>
        </MapContainer>
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
  background-color: #ffffff;
  border-radius: 5px;
  padding: 35px;
  text-align: center;
  width: 900px;
  height: auto;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  @media (max-width: 450px) {
    width: 100%;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  background-color: #3b4369;
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
