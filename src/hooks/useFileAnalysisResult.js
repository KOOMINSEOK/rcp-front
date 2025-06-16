import { useState, useEffect } from "react";
import { getIdByFilename, getResultDetail } from "../apis/resultApi.js";

export const useFileAnalysisResult = (selectedFile, folderPath) => {
  const [resultData, setResultData] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    // folderPath 변경 시 결과 초기화
    setResultData(null);
    setErrorMessage("");
  }, [folderPath]);

  useEffect(() => {
    if (!selectedFile) {
      setResultData(null);
      setErrorMessage("");
      return;
    }

    const fetch = async () => {
      try {
        const res = await getIdByFilename(selectedFile.name);
        if (!res?.id) {
          setErrorMessage("Please analyze the selected file first.");
          return;
        }

        const detail = await getResultDetail(res.id);
        setResultData(detail);
      } catch (e) {
        console.error(e);
        setErrorMessage("An error occurred while fetching the result.");
      }
    };

    fetch();
  }, [selectedFile]);

  return { resultData, errorMessage };
};
