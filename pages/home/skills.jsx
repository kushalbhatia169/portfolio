import React from 'react';
import {Box} from '@mui/material';
import { FaReact, FaJs, FaNode, FaDatabase, FaGit, FaSass, FaJira, FaBitbucket } from "react-icons/fa";
import styles from './home.module.scss';

const Skills = (props) => {
    const { skillsData, here, context } = props;
    const {heading, about} = skillsData;
    
    return (
        <Box className={styles.skills_main}>
            <Box className="d-flex flex-column align-items-center flex-wrap">
                <style jsx>{`
                    h3 {
                        margin-top: 50px;
                    }
                `}</style>
                <h3>{heading}</h3>
            <p className="w-50">
                {about}
            </p>
            </Box>
            <Box className='d-flex flex-wrap justify-content-evenly'>
                <Box className="d-flex flex-column flex-wrap ms-5 w-25 mt-3">
                    <FaJs size={40}/>
                    <h5 className="mt-3">Java Script</h5>
                    <p>
                        JavaScript is a high-level, interpreted programming language. It is a language which is also characterized 
                        as dynamic, weakly typed, prototype-based, and multi-paradigm.
                    </p>
                    <ul className="list-unstyled list-line">
                        <li>Created Responsive web design Using Modern Css Libraries like Bootstrap, Scss. </li>
                        <li>Used modern react design libraries Material UI, Antd.</li>
                        <li>Used modern react concept like hooks, lazy loading, router hooks.</li>
                        <li>Used axios from api calling.</li>
                        <li>react router dom for routing</li>
                        <li>Used react-redux for state management.</li>
                    </ul>
                </Box>
                <Box className="d-flex flex-column flex-wrap ms-5 w-25 mt-3">
                    <FaReact size={40}/>
                    <h5 className="mt-3">React JS</h5>
                    <p>
                        I have more than 2 years experience in building web applications using React, Redux, Node.js, Express.js,
                        MongoDB, and Mongoose.
                    </p>
                    <ul className="list-unstyled list-line">
                        <li>Created Responsive web design Using Modern Css Libraries like Bootstrap, Scss. </li>
                        <li>Used modern react design libraries Material UI, Antd.</li>
                        <li>Used modern react concept like hooks, lazy loading, router hooks.</li>
                        <li>Used axios from api calling.</li>
                        <li>react router dom for routing</li>
                        <li>Used react-redux for state management.</li>
                    </ul>
                </Box>
                <Box className="d-flex flex-column flex-wrap ms-5 w-25 mt-3">
                    <FaNode size={40}/>
                    <h5 className="mt-3">Node JS</h5>
                    <p>
                        Node JS is a JavsScript runtime built on Chrome's V8 JavaScript engine. Node.js uses an 
                        event-driven, non-blocking I/O model that makes it lightweight and efficient. Node.js' 
                        package ecosystem, npm, is the largest ecosystem of open source libraries in the world.
                    </p>
                    <ul className="list-unstyled list-line">
                        <li>Created Responsive web design Using Modern Css Libraries like Bootstrap, Scss. </li>
                        <li>Used modern react design libraries Material UI, Antd.</li>
                        <li>Used modern react concept like hooks, lazy loading, router hooks.</li>
                        <li>Used axios from api calling.</li>
                        <li>react router dom for routing</li>
                        <li>Used react-redux for state management.</li>
                    </ul>
                </Box>
                <Box className="d-flex flex-column flex-wrap ms-5 w-25 mt-3">
                    <FaDatabase size={40}/>
                    <h5 className="mt-3">Mongo DataBase</h5>
                    <p>
                        MongoDB is a cross-platform document-oriented database program. Classified as a 
                        NoSQL database,
                    </p>
                    <ul className="list-unstyled list-line">
                        <li>Created Responsive web design Using Modern Css Libraries like Bootstrap, Scss. </li>
                        <li>Used modern react design libraries Material UI, Antd.</li>
                        <li>Used modern react concept like hooks, lazy loading, router hooks.</li>
                        <li>Used axios from api calling.</li>
                        <li>react router dom for routing</li>
                        <li>Used react-redux for state management.</li>
                    </ul>
                </Box>
                <Box className="d-flex flex-column flex-wrap ms-5 w-25 mt-3">
                    <Box className='d-flex flex-wrap'>
                        <FaGit size={40}/>
                        <h3>/</h3><FaBitbucket  size={40}/>
                    </Box>
                    <h5 className="mt-3">Git/BitBucket</h5>
                    <p>
                        
                    </p>
                    <ul className="list-unstyled list-line">
                        <li>Created Responsive web design Using Modern Css Libraries like Bootstrap, Scss. </li>
                        <li>Used modern react design libraries Material UI, Antd.</li>
                        <li>Used modern react concept like hooks, lazy loading, router hooks.</li>
                        <li>Used axios from api calling.</li>
                        <li>react router dom for routing</li>
                        <li>Used react-redux for state management.</li>
                    </ul>
                </Box>
                <Box className="d-flex flex-column flex-wrap ms-5 w-25 mt-3">
                    <FaSass size={40}/>
                    <h5 className="mt-3">Sass</h5>
                    <p>
                        Sass is a stylesheet language that is interpreted by a Sass compiler. 
                        It is a superset of CSS,
                    </p>
                    <ul className="list-unstyled list-line">
                        <li>Created Responsive web design Using Modern Css Libraries like Bootstrap, Scss. </li>
                        <li>Used modern react design libraries Material UI, Antd.</li>
                        <li>Used modern react concept like hooks, lazy loading, router hooks.</li>
                        <li>Used axios from api calling.</li>
                        <li>react router dom for routing</li>
                        <li>Used react-redux for state management.</li>
                    </ul>
                </Box>
            </Box>
        </Box>
    );
}

export default Skills;