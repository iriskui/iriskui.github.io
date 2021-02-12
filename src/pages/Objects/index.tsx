import styles from './style.less';
import { Image } from 'antd';

import { DESCRIPTIONS, TITLE, images } from './consts';

const Objects = () => {
  const ratio = 0.85;

  return (
    <div className={styles.work}>
      <h1 className="title">{TITLE}</h1>
      {DESCRIPTIONS.map(item => (
        <p className="description">{item}</p>
      ))}
      <Image.PreviewGroup>
        {images.map(item => (
          <Image
            width={300 * ratio}
            height={400 * ratio}
            src={item.src}
            preview={{
              mask: item.text,
            }}
          />
        ))}
      </Image.PreviewGroup>
    </div>
  );
};

export default Objects;
