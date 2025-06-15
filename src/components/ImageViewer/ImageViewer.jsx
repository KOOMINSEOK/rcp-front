import * as S from './styled/styled'

function ImageViewer({src,alt = "image preview",width, height}){
    return (
    <S.ImageContainer $width={width} $height={height}>
      {src ? (
        <S.StyledImage src={src} alt={alt} />
      ) : (
        <S.Placeholder>No image selected</S.Placeholder>
      )}
    </S.ImageContainer>
  );
}

export default ImageViewer;