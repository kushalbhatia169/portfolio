import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import styles from './layout.module.scss';

function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <div className={'d-flex flex-wrap justify-content-between w-100 p-3 ' + styles.layout__menu}>
        <div className="d-flex">
          <h5 className="ms-2">Welcome</h5>
          <div className="ms-3 mt-2 col-3">
            <div className="snippet mt-1" data-title=".dot-typing">
              <div className="stage">
                <div className="dot-typing"></div>
              </div>
            </div>
          </div>
        </div>

        <MenuIcon fontSize="medium" className="me-2" />
      </div>
      {children}
    </div>
  );
}

export default Layout;
