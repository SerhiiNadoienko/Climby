import { ProgressCircle } from 'components/ProgressCircle';
import styles from './HomePage.module.css';
const HomePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.progressCircle}>
        <ProgressCircle progress={75} />
        <ProgressCircle progress={75} />
        <ProgressCircle progress={75} />
        <ProgressCircle progress={75} />
        <ProgressCircle progress={75} />
        <ProgressCircle progress={75} />
        <ProgressCircle progress={75} />
        <ProgressCircle progress={75} />
      </div>
    </div>
  );
};

export default HomePage;
