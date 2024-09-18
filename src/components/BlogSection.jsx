import React from 'react'
import blogImg from "../assets/bg-Image1.png"; 

const BlogCard = ({ id, date, title, excerpt, imageUrl }) => (
    <div id={`post-${id}`} className="mb-8 w-64 ">
      <div className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-500">
        <div className="relative">
          <img src={imageUrl} alt={title} className="object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        </div>
        <div className="p-6">
          <div className="text-sm text-gray-600 mb-2">{date}</div>
          <h2 className="text-xl font-semibold mb-2">
            <a href="#" className="hover:text-blue-600">{title}</a>
          </h2>
          <p className="text-gray-700 mb-4 line-clamp-1">{excerpt}</p>
          <a href="#" className="text-blue-600 hover:underline">Read More<span className="ml-1">→</span></a>
        </div>
      </div>
    </div>
);

const BlogSection = () => {
    const id = '1';
    const date = '2021-10-10';
    const title = 'Blog Title';
    const excerpt = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet purus vel nunc ultrices ultricies. Aliquam erat volutpat. Nullam nec purus nec nunc ultrices ultricies. Nulla facilisi. Quisque vitae ultricies nunc. Nullam nec purus nec nunc ultrices ultricies. Nulla facilisi. Quisque vitae ultricies nunc.';
  return (
    <div className='w-full h-full my-12'>
        <div className='mx-12'>
            <BlogCard id={id} date={date} title={title} excerpt={excerpt} imageUrl={blogImg}/>
        </div>
        <div>

        </div>
    </div>
  )
}

export default BlogSection