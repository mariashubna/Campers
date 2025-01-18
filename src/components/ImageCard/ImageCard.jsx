import css from "./ImageCard.module.css";

const ImageCard = ({ img, alt, onClick }) => {
  return (
    <img
      className={css.gallery_img}
      src={img.thumb}
      alt={alt}
      width="292px"
      height="312px"
      onClick={() => onClick(img)}
    />
  );
};

export default ImageCard;
