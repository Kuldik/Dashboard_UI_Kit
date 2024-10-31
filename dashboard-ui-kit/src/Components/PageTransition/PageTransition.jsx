import { useTransition, animated } from 'react-spring';
import { useLocation } from 'react-router-dom';
import styles from './PageTransition.module.css';

const PageTransition = ({ children, ...props }) => {
  const location = useLocation();
  const transitions = useTransition(children ?? [], {
    key: location.pathname,
    from: { opacity: 0, transform: 'translate3d(100%, 0, 0)' },
    enter: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
    leave: { opacity: 0, transform: 'translate3d(-100%, 0, 0)' },
    config: { duration: 500 },
  });

  return transitions(
    (styles, item) => item && (
      <animated.div className={styles.animation} style={{ ...styles, overflowX: 'hidden', maxWidth: '100%', width: '100%' }}>
        {item}
      </animated.div>
    ),
  );
};
export default PageTransition;