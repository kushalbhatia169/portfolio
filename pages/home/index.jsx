import React, {useState} from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Box } from '@mui/material';
import Skills from './skills';
import Blogs from './blogs';
import Projects from './work';
import Contact from './contact';
import styles from './home.module.scss';
// import { Footer } from 'antd/lib/layout/layout';

const Home = (props)=> {
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
                <Img {...{height:300, width:350, classes:'ms-5', alt:"Skills" }}>
                    https://exaud.com/wp-content/uploads/2020/09/software-skills.png
                </Img>}
                {(isSelected === 'All' || isSelected === 'Work') &&
                    <Img {...{height:300, width:350, classes:'ms-5', alt:"Work" }}>
                    https://analyticsindiamag.com/wp-content/uploads/2020/01/top-10-DS-projects.png
                </Img>}
                {(isSelected === 'All' || isSelected === 'Blogs') && 
                <Img {...{height:300, width:350, classes:'ms-5', alt:"Blogs" }}>
                    https://www.bbvaapimarket.com/wp-content/uploads/2018/04/blogsapis.jpg
                </Img>}
                {(isSelected === 'All' || isSelected === 'Contact') && 
                <Img {...{height:300, width:350, classes:'ms-5', alt:"Contact" }}>
                    https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKuDi4mifr_3aJZVocr8b58au-uAO0cnWLEg&usqp=CAU
                </Img>}
            </Box>
            <Skills/>
            <Blogs/>
            <Projects/>
            <Contact/>
            {/* <Footer>
                <p>
                    © Copyright MyPortfolio. All Rights Reserved
                </p>
            </Footer> */}
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
    const stylesProps = {
        height,
        width
    };
    //[showDiv, setShowDiv] = useState(false);
    return <Box className="d-flex flex-wrap">
        <Box className= {`${styles.div_hover_class} d-flex justify-content-center 
        align-items-center position-absolute ms-5 ${alt===styles.Contact && 'mt-5'}`}>
            <h3 className="">{alt}</h3>
        </Box>
        <img src={children} alt={alt} className={classes} style={{...stylesProps}}/>
    </Box>
}
export default Home;