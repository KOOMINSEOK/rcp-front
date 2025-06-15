import styled from "styled-components";

// 전체 페이지 컨테이너
export const MainContainer = styled.div`
  height: 100vh;
  padding-left: 30px;
`;

// 타이틀 영역
export const Title = styled.h3`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #333;
`;

// 필터 박스
export const FilterContainer = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

export const SearchInput = styled.input`
  padding: 6px 12px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 6px;
  width: 400px;
`;

// 검색 버튼
export const SearchButton = styled.button`
  padding: 8px 20px;
  font-size: 14px;
  font-weight: bold;
  background-color: #444;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background-color: #222;
  }
`;

// 테이블 박스
export const TableContainer = styled.div`
  background-color: white;
  border: 1px solid #ccc;
  overflow: auto;
  max-height: 600px;
`;

// 테이블
export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
`;

// 테이블 헤더
export const TableHeader = styled.thead`
  background-color: #f0f0f0;
  font-weight: bold;

  th {
    padding: 10px;
    border: 1px solid #ccc;
  }
`;

// 테이블 본문
export const TableBody = styled.tbody`
  td {
    padding: 8px;
    border: 1px solid #ddd;
    text-align: center;
  }

  tr:hover {
    background-color: #f5f5f5;
  }
`;

export const LabelTag = styled.span`
  font-weight: bold;
  color: ${({ label }) => {
    const lower = label?.toLowerCase();
    if (lower === 'normal' || lower === 'impact') return '#4CAF50'; // 초록
    if (lower === 'abnormal') return '#F44336'; // 빨강
    return '#555'; // 기본 회색
  }};
`;