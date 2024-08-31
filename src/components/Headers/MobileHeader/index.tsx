import styles from './MobileHeader.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { ICON_COLORS } from 'types/styleTypes';

export const MobileHeader = () => {
  return (
    <div className={styles.container}>
      <FontAwesomeIcon icon={faEllipsis} color={ICON_COLORS.LightGrey} size="xl" />
      <FontAwesomeIcon icon={faBell} color={ICON_COLORS.LightGrey} size="xl" />
    </div>
  );
};
