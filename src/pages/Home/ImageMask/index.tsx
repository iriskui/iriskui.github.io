import { FC } from 'react';
import { useHistory } from 'react-router-dom';

interface Props {
  src: any;
  title: string;
  width: number;
  height: number;
  marginRight?: number;
  path: string;
}

const ImageMask: FC<Props> = props => {
  const { src, title, width, height, marginRight, path } = props;

  const history = useHistory();

  const handleClick = () => {
    history.push(path);
  };

  return (
    <div
      className="image-wrapper"
      style={{ height, width, marginRight }}
      onClick={handleClick}
    >
      <div className="image-mask">{title}</div>
      <img src={src} alt={title} className="image" style={{ height, width }} />
    </div>
  );
};

export default ImageMask;
