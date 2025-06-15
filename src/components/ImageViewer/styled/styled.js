import styled from "styled-components";

export const ImageContainer = styled.div`
  width: ${(props) => props.$width || "500px"};
  height: ${(props) => props.$height || "500px"};
  background-color: #111;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px dashed #444;
  border-radius: 8px;
  overflow: hidden;
`;

export const StyledImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

export const Placeholder = styled.div`
  color: #888;
  font-size: 14px;
`;
