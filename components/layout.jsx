import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { Box } from '@mui/material';
import styles from './layout.module.scss';

const Layout = ({children}) => { 

    return (
        <Box className={styles.layout_main} style={{minHeight:1000}}>
            <Box className="d-flex m-4 p-4 justify-content-between">
                <h4>Welcome to My Portfolio...</h4>
                <MenuIcon fontSize="large" className="cursor-pointer"/>
            </Box>
            {children}
        </Box>
    );
}

export default Layout;