import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


const PostCard = ({ post }) => (
  <div className="bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8">
    <div className="relative overflow-hidden shadow-md pb-80 mb-6">
      <img src={post.featuredImage.url} alt="" className="object-center absolute h-80 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg xl:object-center 2xl:object-center"/>
    </div>

    <h1 className="transition duration-700 text-center mb-4 cursor-pointer hover:text-cyan-900 text-3xl font-semibold">
      <Link href={`/post/${post.slug}`}>{post.title}</Link>
    </h1>
    <div className="block lg:flex text-center items-center justify-center mb-8 w-full">
      <div className="flex items-center justify-center lg:mb-0 w-full lg:w-auto items-center">
        <img
          alt={post.author.name}
          height= "70px"
          width = "70px"
          className="align-middle"
          src={post.author.photo.url}
        />
      </div>
    </div>
    <p className="text-center text-lg text-gray-700 font-normal -mt-4 mb-8 px-4 lg:px-20">
      {post.excerpt}
    </p>
    <div className="text-center">
      <Link href={`/post/${post.slug}`}>
        <span className="transition duration-500 ease transform hover:-translate-y-1 inline-block bg-cyan-900 text-lg font-medium rounded-full text-white -mt-2 px-8 py-3 cursor-pointer">Continue Reading</span>
      </Link>
    </div>
  </div>
);

export default PostCard;
