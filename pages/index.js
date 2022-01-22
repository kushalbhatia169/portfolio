import React from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../scss/Home.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { LoadingOutlined } from '@ant-design/icons';
// import Head from 'next/head';

export default function Home() {
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState(true);
  useEffect(() => {
    isLoading && router.push('/home');
    return () => {
      setIsLoading(false);
    }
  }, [isLoading]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css?family=https://fonts.googleapis.com/css?family=Inconsolata:400,500,600,700|Raleway:400,400i,500,500i,600,600i,700,700i" rel="stylesheet" />
      </Head>
      <div className="d-flex justify-content-center mt-5">
        <LoadingOutlined size={40}/>
      </div>
    </div>
  )
}
