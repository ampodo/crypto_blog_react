import React from 'react';
import Head from 'next/head';
import { PostCard, Categories, PostWidget, useRightClickMenu, Menu } from '../components';
import { getPosts } from '../services'
import { FeaturedPosts} from '../sections';

export default function Home({ posts }){
   
   const { x, y, showMenu } = useRightClickMenu();

   return (

    <div className="container mx-auto px-8 mb-8">
      <Head>
        <title>Crypto Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FeaturedPosts />
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className="lg:col-span-8 col-span-1">
         <Menu x={x} y={y} showMenu={showMenu} />
        {posts.map((post) => <PostCard post={post.node} key={post.title} />)}
      </div>
      <div className="lg:col-span-4 col-span-1">
            <div className="lg:sticky relative top-8">
                 <PostWidget />
                 <Categories />       
            </div>
       </div>
     </div> 
   </div>
  )
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

 return {
     props: { posts },
 };
  
}



