import { useState, useEffect } from "react";
import {
  uploadFile,
  analyzeFile,
  getSummaryById,
  generatePlots,
} from "../apis/analyzeApi.js";
import { getIdByFilename } from "../apis/resultApi.js";
import { SERVER_URL } from "../../config.js";

export const useFileAnalysis = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [summaryData, setSummaryData] = useState(null);
  const [orbitSrc, setOrbitSrc] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [folderPath, setFolderPath] = useState(""); // ✅ folderPath 추가

  // ✅ folderPath 변경 시 초기화
  useEffect(() => {
    setSelectedFile(null);
    setSummaryData(null);
    setOrbitSrc(null);
  }, [folderPath]);

  const handleFileSelect = async (file) => {
    if (!file) return;

    setSelectedFile(file);
    setIsLoading(true);

    try {
      let id;

      try {
        const uploadRes = await uploadFile(file);
        id = uploadRes.uploadId;
        console.log("📤 업로드 완료:", id);
      } catch (uploadError) {
        if (uploadError.response?.status === 409) {
          const res = await getIdByFilename(file.name);
          id = res.id;
          console.warn("이미 업로드된 파일, ID:", id);
        } else {
          throw uploadError;
        }
      }

      await generatePlots(id);
      await analyzeFile(id);
      const summary = await getSummaryById(id);

      setSummaryData(summary);
      setOrbitSrc(`${SERVER_URL}${summary.orbitPath}`);
    } catch (e) {
      console.error("분석 실패:", e);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    folderPath,
    setFolderPath,
    selectedFile,
    setSelectedFile,
    summaryData,
    orbitSrc,
    isLoading,
    handleFileSelect,
  };
};
