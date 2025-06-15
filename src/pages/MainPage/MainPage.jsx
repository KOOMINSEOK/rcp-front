import * as S from "./styled/styled";
import FolderPicker from "../../components/PathSelector/FolderPicker";
import FileInformation from "../../components/FileInformation/FileInformation";
import ImageViewer from "../../components/ImageViewer/ImageViewer";
import { useFileAnalysis } from "../../hooks/useFileAnalysis";
import { useState } from "react";

function MainPage() {
  const {
    selectedFile,
    summaryData,
    orbitSrc,
    isLoading,
    handleFileSelect,
  } = useFileAnalysis();
  const [folderPath, setFolderPath] = useState("")
  
  return (
    <S.MainContainer>
      <S.Title>AI Analysis</S.Title>
      <S.ContentsContainer>
        <S.PathBox>
          <FolderPicker
            selectedFile={selectedFile}
            onFileSelect={handleFileSelect}
            onFolderSelect={setFolderPath}
          />
        </S.PathBox>

        {!folderPath && !isLoading && (
          <S.AlertBox>Please select a folder that contains a file to analyze.</S.AlertBox>
        )}

        {isLoading ? (
          <S.LoadingBox>Analyzing the file...</S.LoadingBox>
        ) : (
          <>
            <S.ImgBox>
              {selectedFile && <ImageViewer src={orbitSrc} alt="Analysis Result" />}
            </S.ImgBox>
            <S.DetailBox>
              <FileInformation resultData={summaryData} />
            </S.DetailBox>
          </>
        )}
      </S.ContentsContainer>
    </S.MainContainer>
  );
}

export default MainPage;
