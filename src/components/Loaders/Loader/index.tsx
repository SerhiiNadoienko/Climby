import { clsx } from 'clsx';
import styles from './Loader.module.css';

type Loader = {
  visible?: boolean;
  className?: string;
};

export const Loader = ({ visible = true, className }: Loader) => {
  if (!visible) {
    return null;
  }
  return <span className={clsx(styles.loader, className)}></span>;
};
