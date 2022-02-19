import React from 'react'
import Layout from '../../components/layout';
import { Box } from '@mui/material';
import ReactHtmlParser from 'react-html-parser';
import styles from './skills.module.scss';
import { getSkillsData } from '../../lib/skills/skills';
import { showIcon } from '../../lib/skills/show_icon';

export async function getStaticProps() {
    const skillsData = await getSkillsData();
    return {
        props: {
            skillsData: skillsData[0],
        }
    }
};

interface contentProps {
    content: {
        label: String,
        heading: String,
        listData: String,
    }[]
};

interface SkillsProps extends contentProps {
    heading: String,
    about: String,
    // content: contentProps[],
    // content: Array<contentProps>,
};

interface Props {
    skillsData: SkillsProps
}

const Skills: React.FC<Props> = (props) => {

    const { skillsData } = props;
    const { heading, about, content } = skillsData || {};

    return (
        <Layout>
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
                    {content.map(item => {
                        const { label, heading, listData } = item || {};
                        return <Box className="d-flex flex-column flex-wrap ms-5 w-25 mt-3">
                            {label && showIcon(label)}
                            {label && <h5 className="mt-3">{label}</h5>}
                            {heading && <p>
                                {heading}
                            </p>}
                            {listData && <ul className="list-unstyled list-line">
                                {ReactHtmlParser(listData)}
                            </ul>}
                        </Box>
                    })}
                </Box>
            </Box>
        </Layout>
    );
}

export default Skills;
