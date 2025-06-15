import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`
export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 16px;
    color: black;
`
export const ListContainer = styled.div`
    display: flex;
    flex-direction: column;

    height: fit-content;
    width: fit-content;
    padding: 4px 6px;

    background-color: white;

    max-height: 600px;
    overflow-y: auto;
`
export const FileWrapper = styled.div`
    padding: 6px 10px;
    margin: 2px 0;
    
    background-color: ${(props) => props.$selectedFile?.name === props.$file.name ? "#4a8b63" : "#222"};

    color: white;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
`