import { useState, useEffect } from 'react';
import { Typography } from 'components/Typography';
import styles from './ProgressCircle.module.css';

interface ProgressCircleProps {
  progress: number;
}

export const ProgressCircle = ({ progress }: ProgressCircleProps) => {
  return (
    <div className={styles.circle}>
      <div className={styles.container}>
        <Typography text={`${progress}`} variant="font18-bold" />
      </div>
    </div>
  );
};
