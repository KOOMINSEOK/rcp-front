import * as S from "./styled/styled";
import { useFileHistory } from "../../hooks/useFileHistory";
import { useSearch } from "../../hooks/useSearch";
import { deleteFileById } from "../../apis/historyApi.js";

function HistoryPage() {
  const { historyList, isLoading, error, refetch } = useFileHistory();
  const {
    inputText,
    setInputText,
    handleReset,
    handleSearch,
    searchMode,
    displayList,
  } = useSearch(historyList);

  const handleDelete = async (item) => {
    if (
      window.confirm(`Are you sure you want to delete this? (ID: ${item.id})`)
    ) {
      try {
        await deleteFileById(item.id);
        await refetch(); // ✅ 목록 갱신
      } catch (err) {
        alert("fail to delete: " + err.message);
      }
    }
  };

  if (isLoading) return <div>loading...</div>;
  if (error) return <div>error: {error.message}</div>;
  return (
    <S.MainContainer>
      <S.Title>Analysis history</S.Title>

      <S.FilterContainer>
        <S.SearchInput
          type="text"
          placeholder="input the filename"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <S.SearchButton onClick={handleSearch}>Search</S.SearchButton>
        {searchMode && (
          <S.SearchButton
            onClick={handleReset}
            style={{ backgroundColor: "#999" }}
          >
            Reset
          </S.SearchButton>
        )}
      </S.FilterContainer>

      <S.TableContainer>
        <S.Table>
          <S.TableHeader>
            <tr>
              <th>file_id</th>
              <th>file_name</th>
              <th>result_label</th>
              <th>confidence</th>
              <th>created_at</th>
              <th>delete</th>
            </tr>
          </S.TableHeader>
          <S.TableBody>
            {displayList.length === 0 ? (
              <tr>
                <td
                  colSpan={5}
                  style={{
                    textAlign: "center",
                    padding: "20px",
                    color: "#888",
                  }}
                >
                  No search results found.
                </td>
              </tr>
            ) : (
              displayList.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.original_name}</td>
                  <td>
                    <S.LabelTag label={item.result_label}>
                      {item.result_label}
                    </S.LabelTag>
                  </td>
                  <td>{(item.confidence * 100).toFixed(2)}%</td>
                  <td>{item.created_at}</td>
                  <td>
                    <S.SearchButton
                      style={{ backgroundColor: "#ef4949" }}
                      onClick={() => handleDelete(item)}
                    >
                      delete
                    </S.SearchButton>
                  </td>
                </tr>
              ))
            )}
          </S.TableBody>
        </S.Table>
      </S.TableContainer>
    </S.MainContainer>
  );
}

export default HistoryPage;
