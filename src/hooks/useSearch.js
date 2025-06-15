import {useState, useMemo} from "react"

export const useSearch = (dataList, fieldName = 'original_name')=>{
    const [inputText, setInputText] = useState("");
    const [searchTerm, setSearchTerm] = useState("")
    const [searchMode, setSearchMode] = useState(false);

    const handleSearch = () => {
        setSearchTerm(inputText);
        setSearchMode(true);
    };

    const handleReset = () => {
        setInputText("");
        setSearchTerm("");
        setSearchMode(false); // ✅ 검색 모드 비활성화 → 전체 리스트 다시 보여줌
    };

    const filteredList = useMemo(() => {
        if (!dataList) return [];
        return dataList.filter(item =>
            item[fieldName]?.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [dataList, searchTerm]);

    const displayList = searchMode ? filteredList : dataList;

    return {inputText, setInputText, handleSearch, handleReset, searchMode, displayList}
}