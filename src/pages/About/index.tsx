import styles from './style.less';
import {
  AWARDS,
  SOLO_EXHIBITIONS,
  GROUP_EXHIBITIONS,
  description,
  name,
} from './const';

const AboutPage = () => {
  return (
    <div className={styles.about}>
      <h1 className="name">{name}</h1>
      <p className="description">{description}</p>
      <h2>AWARDS</h2>
      <ul style={{ marginBottom: 40 }}>
        {AWARDS.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <h2>SOLO EXHIBITIONS</h2>
      <ul style={{ marginBottom: 40 }}>
        {SOLO_EXHIBITIONS.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <h2>GROUP EXHIBITIONS</h2>
      {Object.keys(GROUP_EXHIBITIONS)
        .sort((a, b) => +b - +a)
        .map(year => {
          return (
            <>
              <h3>{year}</h3>
              <ul>
                {GROUP_EXHIBITIONS[year].map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </>
          );
        })}
    </div>
  );
};

export default AboutPage;
