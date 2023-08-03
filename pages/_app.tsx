import React from "react";
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { FC } from 'react';
import { Provider } from 'react-redux';

import Header from '@/features/Header/Header';
import { useIsPc } from '@/hooks/useIsPc';
import { store } from '@/store';
import '@/styles/globals.css';

import Footer from "../features/Footer/Footer"

const App: FC<AppProps> = ({ Component, pageProps }) => {
  const isPc = useIsPc();
  return (
    <>
     
      <Head>
    
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style>
          {isPc
            ? `
            #__next {
              width: 96%;
              height: 96%;
            }
            body{
              display: flex;
              justify-content: center;
              align-items: center;
            }
          `
            : `
            #__next {
              width: 100%;
              height: 100%;
            }
            `}
        </style>
      </Head>
      <Provider store={store}> 
         <Header />
        <Component {...pageProps} />
      </Provider>
    </>
  )
}

export default App;