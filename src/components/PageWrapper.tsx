import React from 'react'
import Head from 'next/head'
import Script from 'next/script'
import styles from '../styles/Common.module.scss'
type PropsType={
    title:string
    desc?:string
    children:JSX.Element | JSX.Element[]
    js?:string
    css?:string
}
export default function PageWrapper(props:PropsType) {
    const{title,desc='',children,js='',css=''} =props
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={desc} />
       <style>{css}</style>
      </Head>
      <main className={styles.container}>
            {children}
      </main>
      <Script key='page-js'>{js}</Script>
    </>
  )
}
