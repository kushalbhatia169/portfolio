import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import styles from './layout.module.scss';

function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <div className={'d-flex flex-wrap justify-content-between w-100 p-4 ' + styles.layout__menu}>
        <div className="d-flex">
          <h3>Welcome</h3>
          <div className="ms-3 mt-3 col-3">
            <div className="snippet mt-1" data-title=".dot-typing">
              <div className="stage">
                <div className="dot-typing"></div>
              </div>
            </div>
          </div>
        </div>

        <MenuIcon fontSize="large" />
      </div>
      {children}
    </div>
  );
}

export default Layout;
