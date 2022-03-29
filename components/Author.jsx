import React from 'react';


const Author = ( { author} ) => {
  return (
    <div className="rounded-lg items-center mt-20 mb-8 p-10 bg-cyan-500 bg-opacity-40">
          <div className="flex items-center justify-center lg:mb-0 w-full lg:w-auto items-center">
        <img
          alt={author.name}
          height="80px"
          width="80px"
          className="align-middle"
          src={author.photo.url}
      />
    </div>
    <h2 className="text-white text-center mt-4 mb-4 text-xl font-bold">{author.name}</h2>
    <p className="text-white text-center text-lg font-bold">{author.bio}</p>
    </div>
  );

 }

export default Author;
