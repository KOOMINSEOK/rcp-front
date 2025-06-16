import * as S from "./styled/styled.js";
import { useState } from "react";
import FolderPicker from "../../components/PathSelector/FolderPicker.jsx";
import FileInformation from "../../components/FileInformation/FileInformation.jsx";
import ImageViewer from "../../components/ImageViewer/ImageViewer.jsx";
import { SERVER_URL } from "../../../config.js";
import { useFileAnalysisResult } from "../../hooks/useFileAnalysisResult.js";

function ResultPage() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [folderPath, setFolderPath] = useState("");
  const { resultData, errorMessage } = useFileAnalysisResult(
    selectedFile,
    folderPath
  );

  const graphConfigs = [
    { title: "1X - Time", band: "1X", type: "time" },
    { title: "1X - FFT", band: "1X", type: "fft" },
    { title: "2X - Time", band: "2X", type: "time" },
    { title: "2X - FFT", band: "2X", type: "fft" },
  ];

  const resultComponent = ({ title, src }) => (
    <S.GraphBox>
      <ImageViewer src={src} width="350px" height={"140px"} />
      <span>{title}</span>
    </S.GraphBox>
  );

  return (
    <S.MainContainer>
      <S.Title>Analyzed Result</S.Title>
      <S.ContentsContainer>
        <S.PathBox>
          <FolderPicker
            selectedFile={selectedFile}
            onFileSelect={setSelectedFile}
            onFolderSelect={setFolderPath}
          />
        </S.PathBox>
        {!folderPath ? (
          <S.AlertBox>
            Please select a folder that contains a file to analyze.
          </S.AlertBox>
        ) : errorMessage ? (
          <S.MessageBox>{errorMessage}</S.MessageBox>
        ) : selectedFile && resultData ? (
          <>
            <S.MainBox>
              <S.ImgBox>
                <ImageViewer
                  src={`${SERVER_URL}${resultData.orbitPath}`}
                  alt="분석 결과"
                  width="400px"
                  height="400px"
                />
              </S.ImgBox>
              <S.DetailBox>
                <FileInformation resultData={resultData} />
              </S.DetailBox>
            </S.MainBox>

            <S.GrapContainer>
              <S.GraphWrapper>
                {graphConfigs.map(({ title, band, type }) => {
                  const path = resultData.plots?.[band]?.[type];
                  return path
                    ? resultComponent({
                        title,
                        src: `${SERVER_URL}${path}`,
                      })
                    : null;
                })}
              </S.GraphWrapper>
            </S.GrapContainer>
          </>
        ) : null}
      </S.ContentsContainer>
    </S.MainContainer>
  );
}

export default ResultPage;
