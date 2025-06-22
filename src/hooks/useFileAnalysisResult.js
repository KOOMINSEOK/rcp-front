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
    if (!selectedFile || !folderPath) {
      setResultData(null);
      setErrorMessage("");
      return;
    }

    const fetch = async () => {
      try {
        const res = await getIdByFilename(selectedFile.name);
        if (!res?.id) {
          setErrorMessage("Please analyze the selected file first.");
          setResultData(null);
          return;
        }
        const detail = await getResultDetail(res.id);
        setResultData(detail);
        setErrorMessage("");
      } catch (e) {
        console.error(e);
        setErrorMessage("An error occurred while fetching the result.");
        setResultData(null);
      }
    };

    fetch();
  }, [selectedFile, folderPath]);
  return { resultData, errorMessage };
};
