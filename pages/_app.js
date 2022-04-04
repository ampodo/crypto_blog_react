import React from 'react';
import { Layout,useRightClickMenu, Menu } from '../components';
import 'tailwindcss/tailwind.css';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {

  const { x, y, showMenu } = useRightClickMenu();


  return (
   <Layout>
    <Menu x={x} y={y} showMenu={showMenu}/>
   <Component
   {...pageProps} />
   </Layout>
  )
}

export default MyApp
