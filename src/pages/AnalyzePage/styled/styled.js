import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 30px;
`;
export const Title = styled.h3`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #333;
`;
export const PathDisplayContainer = styled.div`
  height: 70px;
`;
export const ContentsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 80px;
`;
export const PathBox = styled.div`
  width: 25%;
  height: 600px;
`;
export const ImgBox = styled.div`
  width: 500px;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const DetailBox = styled.div`
  width: 25%;
  height: 600px;
  display: flex;
  flex-direction: column;
  padding-top: 200px;
`;
export const LoadingBox = styled.div`
  grid-column: span 2;
  padding: 30px;
  font-size: 20px;
  text-align: center;
`;

export const AlertBox = styled.div`
  width: 800px;
  padding: 30px;
  font-size: 20px;
  text-align: center;
`;
