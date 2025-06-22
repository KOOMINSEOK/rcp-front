import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 30px;
  height: 700px;
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
  gap: 50px;
`;
export const PathBox = styled.div`
  width: 25%;
  height: inherit;
`;
export const MainBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 40%;
`;
export const ImgBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const DetailBox = styled.div`
  height: 200px;
  padding: 10px;
`;
export const GrapContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: inherit;
  width: 35%;
`;
export const GraphWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const GraphBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const MessageBox = styled.div`
  grid-column: span 2;
  padding: 20px;
  color: red;
  font-size: 18px;
  text-align: center;
`;
export const AlertBox = styled.div`
  width: 800px;
  padding: 30px;
  font-size: 20px;
  text-align: center;
`;
