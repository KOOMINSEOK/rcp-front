import axiosInstance from './axiosInstance';

// 1. 업로드 (BIN 파일만 전송)
export const uploadFile = async (file) => {
  const formData = new FormData();
  formData.append("bin", file); // 백엔드에서 bin으로 받을 경우

  try {
    const response = await axiosInstance.post("/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    
    return response.data; // 반드시 리턴해야 함!
  } catch (error) {
    if (error.response?.status !== 409) {
      console.error("업로드 실패:", error);
    }
    throw error;
  }
};

// 2. 분석 요청
export const analyzeFile = async (id) => {
  const res = await axiosInstance.post(`/analyze/ml/${id}`);
  return res.data; // "분석 완료" 같은 메시지 예상
};

// 3. 분석 결과 요약 조회 (Analyze 페이지용)
export const getSummaryById = async (id) => {
  const res = await axiosInstance.get(`/result/summary/${id}`);
  return res.data;
};

export const generatePlots = async (id) => {
  const res = await axiosInstance.post(`/analyze/${id}`);
  return res.data;
};