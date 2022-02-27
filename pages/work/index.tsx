import Image from 'next/image';
import React from 'react'
import Layout from '../../components/layout';
import styles from './work.module.scss';
// import uhro_logo from '../../public/images/unicorn_logo.png';
import Link from 'next/link';
import { Pagination } from 'antd';
import { getWorkData } from '../../lib/work/work';
import { showImage } from '../../lib/work/show_image';
import ReactHtmlParser from 'react-html-parser';

export const getStaticProps = async () => {
    const workData = await getWorkData();
    return {
        props: {
            workData: workData[0],
        }
    }
};

interface contentProps {
    project_name: string,
    project_desc: string,
    product: string
    image: string,
    role: string,
    work_done: string,
    responsibility: string,
    link: string,
}
interface workProps {
    workData: {
        content: contentProps[],
    }
}

const work: React.FC<workProps> = (props) => {
    const [currentPage, setCurrentPage] = React.useState(0);
    const [content] = React.useState(props?.workData?.content);
    const [totalPage] = React.useState(content?.length);
    const changeProject = (e: number): void => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        setCurrentPage(Number(e) - 1);
    }

    return (
        <Layout page="">
            <div className={styles.work_main}>
                {content && <div className={'d-flex flex-wrap ms-5 mt-3 ' + styles.work_main__office}>
                    <div className={styles.work_main__UHRO}>
                        <h2>{content[currentPage]?.project_name}</h2>
                        <p className='w-50 mt-2'>
                            {content[currentPage]?.project_desc}
                        </p>
                        <div className='d-flex flex-wrap mt-4'>
                            <div className={"d-flex justify-content-center align-items-center " + styles.work_main__image} >
                                <Image src={showImage(content[currentPage]?.image)} alt="uhro_logo" />
                            </div>
                            <div className='w-25 ms-4'>
                                <p className={styles.work_main__product}>
                                    {content[currentPage]?.product}
                                </p>
                                <p className={styles.work_main__role}>
                                    {ReactHtmlParser(content[currentPage]?.role)}
                                </p>
                                <p className='mt-3'>
                                    {content[currentPage]?.work_done}
                                </p>
                                <h3 className={"mt-4 mb-3 " + styles.work_main__wid}>What I did</h3>
                                <ul className="list-unstyled list-line mb-4">
                                    {ReactHtmlParser(content[currentPage]?.responsibility)}
                                </ul>
                                <br></br>
                                {content[currentPage]?.link !== 'N/A' && <Link href={content[currentPage]?.link} passHref={true}>
                                    <a target="_blank" className={"mt-5 " + styles.work_main__link}>
                                        VISIT WEBSITE
                                    </a>
                                </Link>}
                            </div>
                        </div>
                    </div>
                </div>}
            </div>
            <div className={'d-flex mt-4 mb-3 justify-content-center ' + styles.work_pagination}>
                <Pagination size="small" total={4} responsive={true} simple={true}
                    defaultPageSize={1} onChange={changeProject} />
            </div>
        </Layout>
    );
}

export default work;

