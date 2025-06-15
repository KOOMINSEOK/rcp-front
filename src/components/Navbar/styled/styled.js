import styled from "styled-components";

export const NavbarContainer = styled.div`
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  background-color: #1e102d;
  padding: 16px 24px;
  color: white;
  gap: 24px;
`;

export const NavbarTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

export const NavbarTabs = styled.div`
  display: flex;
  gap: 24px;

  a {
    color: #ccc;
    text-decoration: none;
    font-size: 14px;
    padding-bottom: 2px;
    border-bottom: 2px solid transparent;
    transition: all 0.2s ease;
  }

  a.active {
    color: white;
    font-weight: bold;
    border-bottom: 2px solid white; /* 선택된 항목 하단 강조선 */
  }

  a:hover {
    color: white;
  }
`;
