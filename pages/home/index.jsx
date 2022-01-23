import React, {useState} from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Box } from '@mui/material';
import Skills from './skills';
import Slider from './slider';
import styles from './home.module.scss';
import { Footer } from 'antd/lib/layout/layout';
import { FaFacebook, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
import  skills from '../../public/images/skills.png';
import  work from '../../public/images/work.png';
import blogs from '../../public/images/blogs.jpg';
import contact from '../../public/images/contacts.png';
import Image from 'next/image';

const Home = ()=> {
    const [isSelected, setIsSelected] = useState('All');
    const setSelectedClass = (selected) => {
        switch (selected) {
            case 'All':
                setIsSelected('All')
            break;
            case 'Skills':
                setIsSelected('Skills')
            break;

            case 'Work':
                setIsSelected('Work')
            break;
    
            case 'Blogs':
                setIsSelected('Blogs')
            break;
            case 'Contact':
                setIsSelected('Contact')
            break;
            default:
                setIsSelected('All')
                break;
        }
    }
    return (
        <Box className={styles.dashboard_main} style={{minHeight:1000}}>
            <Box className="d-flex m-4 p-4 justify-content-between">
                <h4 className={styles.dashboard_main__welcome_div}>Welcome to My Portfolio...</h4>
                <MenuIcon fontSize="large" className="cursor-pointer"/>
            </Box>
            <Box className="d-flex m-4 p-4 justify-content-between ms-5">
                <Box className="d-flex flex-column">
                    <h2> Hey, I'm Kushal Bhatia </h2>
                    <span>Software Engineer and Freelancer</span>
                </Box>
                <Box className="mt-3 d-flex me-5">
                    <HeadingContent {...{isSelected, setSelectedClass}}>All</HeadingContent>
                    <HeadingContent  {...{isSelected, setSelectedClass}}>Skills</HeadingContent>
                    <HeadingContent  {...{isSelected, setSelectedClass}}>Work</HeadingContent>
                    <HeadingContent  {...{isSelected, setSelectedClass}}>Blogs</HeadingContent>
                    <HeadingContent  {...{isSelected, setSelectedClass}}>Contact</HeadingContent>
                </Box>
            </Box>
            <Box className="d-flex flex-wrap ms-3">
                {(isSelected === 'All' || isSelected === 'Skills') && 
                <Img {...{height:300, width:410, classes:'ms-5', alt:"Skills" }}>
                   {skills}
                </Img>}
                {(isSelected === 'All' || isSelected === 'Work') &&
                    <Img {...{height:300, width:410, classes:'ms-5', alt:"Work" }}>
                    {work}
                </Img>}
                {(isSelected === 'All' || isSelected === 'Blogs') && 
                <Img {...{height:300, width:410, classes:'ms-5', alt:"Blogs" }}>
                    {blogs}
                </Img>}
                {(isSelected === 'All' || isSelected === 'Contact') && 
                <Img {...{height:300, width:410, classes:'ms-5', alt:"Contact" }}>
                    {contact}
                </Img>}
            </Box>
            <Skills/>
            <Slider/>
            <Footer className='p-5 d-flex justify-content-between flex-wrap'>
                <Box className="ps-5">
                    © Copyright MyPortfolio. All Rights Reserved
                </Box>
                <Box className='d-flex flex-wrap justify-content-evenly me-4'>
                    <a className="ms-2 me-2" href="https://www.facebook.com/kushalbhatia169"><FaFacebook size={30} className='cursor-pointer'/></a>
                    <a className="ms-2 me-2" href='https://twitter.com/ku_bhatia'><FaTwitter size={30} className='cursor-pointer'/></a>
                    <a className="ms-2 me-2" href='https://www.linkedin.com/in/kushal-bhatia-28061996/'><FaLinkedinIn size={30} className='cursor-pointer'/></a>
                    <a className="ms-2 me-2" href='https://github.com/kushalbhatia169'><FaGithub size={30} className='cursor-pointer'/></a>
                </Box>
            </Footer>
        </Box>
    );
}

const HeadingContent = ({isSelected, children, setSelectedClass}) => {
    return  (
        <Box className={`m-3 ${(isSelected===children && styles.border_Down) || 'cursor-pointer'} `}  
                onClick={()=>{setSelectedClass(children)}}>
            {children}
        </Box>
    )
}

const Img = ({height, width, children, classes, alt }) => {
    //[showDiv, setShowDiv] = useState(false);
    return <Box className="d-flex flex-wrap">
        <Box className= {`${styles.div_hover_class} d-flex justify-content-center 
        align-items-center position-absolute ms-5 ${alt===styles.Contact && 'mt-5'}`}>
            <h3 className="">{alt}</h3>
        </Box>
        <Image src={children} alt={alt} className={classes} height={height} width={width}/>
    </Box>
}
export default Home;