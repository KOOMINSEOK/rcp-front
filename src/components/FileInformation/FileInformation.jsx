import * as S from "./styled/styled";
function FileInformation({ resultData  }) {
  return (
    <>
      {resultData  && (
        <S.Container>
          <S.InfoTitle>Information</S.InfoTitle>
          <S.InfoRow>
            <span>File Name:</span> <b>{resultData.original_name}</b>
          </S.InfoRow>
          <S.InfoRow>
            <span>Date:</span>
            <b>{new Date(resultData.created_at).toLocaleString()}</b>
          </S.InfoRow>
          <S.InfoRow>
            <span>Analyze Result:</span> 
            <S.LabelText label={resultData.result_label}>
              {resultData.result_label}
            </S.LabelText>
          </S.InfoRow>
          <S.InfoRow>
            <span>Confidence:</span> <b>{resultData.confidence}%</b>
          </S.InfoRow>
        </S.Container>
      )}
    </>
  );
}

export default FileInformation;
