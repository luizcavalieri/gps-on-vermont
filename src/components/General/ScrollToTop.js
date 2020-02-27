import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

function ScrollToTop({ history }) {
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    }
  }, [history]);

  return (null);
}

export default withRouter(ScrollToTop);

//https://stackoverflow.com/questions/36904185/react-router-scroll-to-top-on-every-transition
/* useScrollTop.ts */
// import { useHistory } from 'react-router-dom';
// import { useEffect } from 'react';
/*
 * Registers a history listener on mount which
 * scrolls to the top of the page on route change
 */
// export const useScrollTop = () => {
//     const history = useHistory();
//     useEffect(() => {
//         const unlisten = history.listen(() => {
//             window.scrollTo(0, 0);
//         });
//         return unlisten;
//     }, [history]);
// };