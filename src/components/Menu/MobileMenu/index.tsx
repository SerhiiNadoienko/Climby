import styles from './MobileMenu.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { faComments } from '@fortawesome/free-solid-svg-icons';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { ROUTES } from 'constants/routes';
import { useNavigate } from 'react-router-dom';

const icons = [
  { icon: faHouse, path: ROUTES.HOME },
  { icon: faPlusSquare, path: ROUTES.GOAL_CREATION },
  { icon: faComments, path: ROUTES.CHANNELS },
];

export const MobileMenu = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      {icons.map(({ icon, path }, index) => (
        <FontAwesomeIcon
          key={index}
          icon={icon}
          className={styles.menuIcon}
          onClick={() => navigate(path)}
        />
      ))}
    </div>
  );
};
