import { Typography } from 'components/Typography';
import styles from './ProgressCircle.module.css';

interface ProgressCircleProps {
  progress: number;
  title?: string;
}

export const ProgressCircle = ({ progress, title }: ProgressCircleProps) => {
  const progressValue = `${progress}%`;

  return (
    <div className="flex colCenter">
      <div className={styles.circle} style={{ '--progress': progressValue } as React.CSSProperties}>
        <div className={styles.container}>
          <Typography text={`${progress}`} variant="font18-bold" />
        </div>
      </div>
      {title && (
        <div className={styles.title}>
          <Typography text={title} />
        </div>
      )}
    </div>
  );
};
