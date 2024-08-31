import { MobileHeader } from 'components/Headers/MobileHeader';
import { Outlet } from 'react-router-dom';
import styles from './AppScreenContainer.module.css';

const AppScreenContainer = () => {
  return (
    <div className={styles.container}>
      <MobileHeader />
      <Outlet />
    </div>
  );
};

export default AppScreenContainer;
