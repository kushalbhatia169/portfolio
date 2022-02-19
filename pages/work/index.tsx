import Image from 'next/image';
import React from 'react'
import Layout from '../../components/layout';
import styles from './work.module.scss';
import uhro_logo from '../../public/images/unicorn_logo.png';
import Link from 'next/link';
import { Pagination } from 'antd';

type clickPagination = (total: number) => unknown;

const work = () => {

    function showTotal(total: clickPagination) {
        return `Total ${total} items`;
    }

    return (
        <Layout page="">
            <div className={styles.work_main}>
                <div className={'d-flex flex-wrap ms-5 mt-3 ' + styles.work_main__office}>
                    <div className={styles.work_main__UHRO}>
                        <h2>Unicorn Hro</h2>
                        <p className='w-50 mt-2'>
                            A proprietary and fully integrated cloud-based solution,
                            UHRO automates and simplifies human capital management workflow processes,
                            from hiring, onboarding, and administration through separation.
                        </p>
                        <div className='d-flex flex-wrap mt-4'>
                            <div className={"d-flex justify-content-center align-items-center " + styles.work_main__image} >
                                <Image src={uhro_logo} alt="uhro_logo" />
                            </div>
                            <div className='w-25 ms-4'>
                                <p className={styles.work_main__product}>Employee Self Service</p>
                                <p className={styles.work_main__role}>
                                    Front-End Development <br></br>
                                    Back-End Development <br></br>
                                    Git Deployments <br></br>
                                </p>
                                <p className='mt-3'>
                                    Requirement gathering, React JS Developer (created UI of webpage as well), Created API’s in
                                    Node JS/Express JS, Work on POC related task, Synced All the repository data in server, troubleshooting,
                                    Help other developer/tester if they are facing any blocker.
                                </p>
                                <h3 className={"mt-4 mb-3 " + styles.work_main__wid}>What I did</h3>
                                <ul className="list-unstyled list-line mb-4">
                                    <li>Design in ‘Sass’</li>
                                    <li>React JS</li>
                                    <li>Redux</li>
                                    <li>Node JS</li>
                                    <li>API integration</li>
                                    <li>Github Deployments</li>
                                    <li>Code Synchronization</li>
                                </ul>
                                <br></br>
                                <Link href="https://stgemp2.unicornhro.com" passHref={true} >
                                    <a target="_blank" className={"mt-5 " + styles.work_main__link}>VISIT WEBSITE</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={'d-flex mt-4 mb-3 justify-content-center ' + styles.work_pagination}>
                <Pagination size="small" total={50} responsive={true} simple={true} />
            </div>
        </Layout>
    );
}

export default work;

