import axiosInstance from './axiosInstance';

// 3. 전체 분석 이력 조회 (History 페이지용)
export const getAllHistory = async () => {
  const res = await axiosInstance.get(`/result/history`);
  return res.data; // [{ id, original_name, created_at, result_label, confidence }, ...]
};
// file삭제
export const deleteFileById = async (id) => {
  return await axiosInstance.delete(`/upload/${id}`);  // 실제 경로에 따라 조정
};