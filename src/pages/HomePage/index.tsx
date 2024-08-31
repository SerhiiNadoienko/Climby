import { ProgressCircle } from 'components/ProgressCircle';
import styles from './HomePage.module.css';
import { GOALS } from 'constants/mocks';
const HomePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.progressCircle}>
        {GOALS.map(({ id, title, progress }) => (
          <ProgressCircle key={id} progress={progress} title={title} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
