import React, { useRef, useState } from "react";
import CustomButton from "../Button/CustomButton";
import * as S from "./styled/styled";

function FolderPicker({ selectedFile, onFileSelect, onFolderSelect }) {
  const inputRef = useRef(null);
  const [fileList, setFileList] = useState([]);
  const [folderPath, setFolderPath] = useState("");

  const handleClick = () => {
    inputRef.current.click();
  };

  const handleChange = (e) => {
    const allFiles = Array.from(e.target.files);
    const binFiles = allFiles.filter((file) =>
      file.name.toLowerCase().endsWith(".bin")
    );

    const selectedFolder = binFiles[0]?.webkitRelativePath?.split("/")[0] || "";

    setFileList(binFiles);
    setFolderPath(selectedFolder);
    onFolderSelect?.(selectedFolder); 
  };

  const handleFileSelect = (file) => {
    onFileSelect(file);
  };

  return (
    <S.Container>
      <CustomButton onClick={handleClick}>Select Folder</CustomButton>
      <input
        ref={inputRef}
        type="file"
        webkitdirectory="true"
        directory=""
        multiple
        onChange={handleChange}
        style={{ display: "none" }}
      />

      {folderPath && (
        <S.MainContainer>
          <div>📁 {folderPath}</div>
          <S.ListContainer>
            {fileList.map((file, idx) => (
              <S.FileWrapper
                key={idx}
                onClick={() => handleFileSelect(file)}
                $selectedFile={selectedFile}
                $file={file}
              >
                {file.name}
              </S.FileWrapper>
            ))}
          </S.ListContainer>
        </S.MainContainer>
      )}
    </S.Container>
  );
}

export default FolderPicker;
