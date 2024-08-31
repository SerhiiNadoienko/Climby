import { MobileHeader } from 'components/Headers/MobileHeader';
import { Outlet } from 'react-router-dom';
import styles from './AppScreenContainer.module.css';
import { MobileMenu } from 'components/Menu/MobileMenu';

const AppScreenContainer = () => {
  return (
    <div className={styles.container}>
      <MobileHeader />
      <div className={styles.content}>
        <Outlet />
      </div>
      <div className={styles.mobileMenu}>
        <MobileMenu />
      </div>
    </div>
  );
};

export default AppScreenContainer;
