import css from "./ImageCard.module.css";

const ImageCard = ({ img, alt }) => {
  return (
    <img
      className={css.gallery_img}
      src={img.thumb}
      alt={alt}
      width="292px"
      height="312px"
    />
  );
};

export default ImageCard;
