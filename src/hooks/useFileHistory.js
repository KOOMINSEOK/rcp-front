import { useEffect, useState } from "react";
import { getAllHistory } from "../apis/historyApi";

export const useFileHistory = () => {
  const [historyList, setHistoryList] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const res = await getAllHistory();
      // id 기준 오름차순 정렬
      const sorted = res.sort((a, b) => a.id - b.id);
      setHistoryList(sorted);
    } catch (e) {
      setError(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { historyList, isLoading, error, refetch: fetchData };
};
