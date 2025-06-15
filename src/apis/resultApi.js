import axiosInstance from './axiosInstance';

// 1. 파일명 기반 ID 조회
export const getIdByFilename = async (originalName) => {
  try {
    const res = await axiosInstance.get(`/result/id-by-name`, {
      params: { name: originalName }
    });
    return res.data; // { id: number }
  } catch (error) {
    if (error.response?.status === 404) {
      return null; // 분석되지 않은 파일인 경우
    }
    console.error("getIdByFilename 실패", error);
    throw error; // 다른 에러는 상위에서 처리
  }
};

// 2. 상세 분석 결과 조회 (Result 페이지용)
export const getResultDetail = async (id) => {
  try {
    const res = await axiosInstance.get(`/result/${id}`);
    return res.data;
  } catch (error) {
    if (error.response?.status === 404) {
      return null; // 분석 결과 없음
    }
    console.error("getResultDetail 실패", error);
    throw error;
  }
};
