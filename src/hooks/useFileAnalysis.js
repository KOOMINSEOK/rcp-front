// hooks/useFileAnalysis.js
import { useState } from "react";
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
  const [error, setError] = useState(null);

  const handleFileSelect = async (file) => {
    if (!file) return;

    setSelectedFile(file);
    setIsLoading(true);
    setError(null);

    try {
      let id;

      try {
        const uploadRes = await uploadFile(file);
        id = uploadRes.uploadId;
        console.log("\ud83d\udce4 Upload complete - ID:", id);
      } catch (uploadError) {
        if (uploadError.response?.status === 409) {
          const res = await getIdByFilename(file.name);
          id = res.id;
          console.warn("\u26a0\ufe0f File already exists - ID:", id);
        } else {
          throw new Error("Failed to upload file.");
        }
      }

      if (!id) throw new Error("Could not retrieve file ID.");

      await generatePlots(id);
      await analyzeFile(id);

      const summary = await getSummaryById(id);
      if (!summary) throw new Error("Failed to fetch analysis summary.");

      setSummaryData(summary);
      setOrbitSrc(`${SERVER_URL}${summary.orbitPath}`);
    } catch (err) {
      console.error("\u274c File analysis failed:", err);
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    selectedFile,
    setSelectedFile,
    summaryData,
    orbitSrc,
    isLoading,
    error,
    handleFileSelect,
  };
};
