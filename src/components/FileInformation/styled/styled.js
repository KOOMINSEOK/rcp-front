import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: fit-content;

    margin-top: 20px;
`

export const InfoTitle = styled.div`
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 12px;
`;

export const InfoRow = styled.div`
  margin-bottom: 6px;

  /* 오직 왼쪽 제목 span만 타겟팅 */
  span:first-child {
    display: inline-block;
    min-width: 90px;
    color: #333;
    font-weight: 500;
  }
  b {
    font-weight: 400;
    color: #555;
  }
`;

export const LabelText = styled.span`
  font-weight: 500;
  font-size: 20px;
  color: ${({ label }) => {
    const lower = label?.toLowerCase().trim();
    if (lower === 'normal' || lower === 'impact') return '#4CAF50';
    if (lower === 'abnormal') return '#F44336';
    return '#555';
  }};
  margin-left: 10px;
`;

  
