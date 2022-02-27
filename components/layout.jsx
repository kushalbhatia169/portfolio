import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Box } from '@mui/material';
import { Footer } from 'antd/lib/layout/layout';
import {
  FaFacebook,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
} from 'react-icons/fa';

function Layout({ children, page }) {
  return (
    <Box style={{ minHeight: 1000 }}>
      <Box className="d-flex m-4 p-4 justify-content-between">
        <h4>{(page === 'first' && 'Welcome to My Portfolio...') || 'My Portfolio...'}</h4>
        <MenuIcon fontSize="large" className="cursor-pointer" />
      </Box>
      {children}
      <Footer className="p-5 d-flex justify-content-between flex-wrap">
        <Box className="ps-5">
          © Copyright MyPortfolio. All Rights Reserved
        </Box>
        <Box className="d-flex flex-wrap justify-content-evenly me-4">
          <a className="ms-2 me-2" href="https://www.facebook.com/kushalbhatia169" role="link">
            <FaFacebook size={30} className="cursor-pointer" />
          </a>
          <a className="ms-2 me-2" href="https://twitter.com/ku_bhatia">
            <FaTwitter size={30} className="cursor-pointer" />
          </a>
          <a className="ms-2 me-2" href="https://www.linkedin.com/in/kushal-bhatia-28061996/">
            <FaLinkedinIn size={30} className="cursor-pointer" />
          </a>
          <a className="ms-2 me-2" href="https://github.com/kushalbhatia169">
            <FaGithub size={30} className="cursor-pointer" />
          </a>
        </Box>
      </Footer>
    </Box>
  );
}

export default Layout;
