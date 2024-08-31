import { clsx } from 'clsx';
import styles from './LoaderModal.module.css';
import { Loader } from '../Loader';

type LoaderType = {
  hide: boolean;
  screenBlocker?: boolean;
  className?: string;
  withBackground?: boolean;
};

export const LoaderModal = ({
  hide = false,
  className,
  screenBlocker = false,
  withBackground = false,
}: LoaderType) => {
  if (hide) {
    return null;
  }

  return (
    <div
      className={clsx(
        styles.container,
        screenBlocker && styles.screenBlocker,
        withBackground && styles.screenWhite,
        className,
      )}
      data-testid="loader-modal-container">
      {!screenBlocker && <Loader />}
    </div>
  );
};
