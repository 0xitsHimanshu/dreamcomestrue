import React from 'react'
import { Link } from 'react-router-dom';

const BlogCard = ({ id, date, title, excerpt, imageUrl }) => (
    <div
        id={`post-${id}`} 
        className="mx-auto py-8 w-98 h-full transition-transform duration-500 ease-in-out hover:-translate-y-2 hover:drop-shadow-[0_10px_15px_rgba(0,0,0,0.25)] max-md:w-80 max-sm:w-80"
    >
        <div className="bg-white h-full shadow-md rounded-lg overflow-hidden border border-gray-400/50">
            <div className="relative">
                <img src={imageUrl} alt={title} className="object-cover w-full h-full max-md:h-full max-sm:h-full" />
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
            </div>
            <div className="p-4 max-sm:p-3 gap-4 flex flex-col justify-between">
             <div className="text-sm text-gray-600 mb-1 max-md:text-xs">{date}</div>
                <h1 className="text-2xl font-semibold mb-1 max-md:text-xl max-sm:text-lg line-clamp-2">
                    <a href="#" className="hover:text-blue-600">{title}</a>
                </h1>
                <p className="text-gray-700 mb-3 line-clamp-2 max-md:text-lg max-sm:text-sm">
                    {excerpt}
                </p>
                <Link to="#" className="text-gray-600 font-semibold text-lg hover:underline italic">
                    read more<span className="ml-1">→</span>
                </Link>
            </div>
        </div>
    </div>
);

const BlogSection = () => {

    const blogPosts = [
        {
          id: 4478,
          date: 'June 6, 2022',
          title: 'I am a Traveller',
          excerpt: 'It is getting dark again, the stars will hide them up. I don\'t want to sleep,...',
          imageUrl: 'https://www.escapetravelservices.com/wp-content/uploads/2022/06/escape-travel-services-ceo-960x636.jpg'
        },
        {
          id: 76,
          date: 'January 9, 2021',
          title: 'Best Treks for Winter Season in India Himalayas',
          excerpt: 'If you\'re a trekking enthusiast, you must have experienced the thrill and the adventurous...',
          imageUrl: 'https://www.escapetravelservices.com/wp-content/uploads/2016/12/treks-in-winter-960x636.jpg'
        },
        // Add more blog posts as needed
        {
            id: 77,
            date: 'January 9, 2021',
            title: 'Best Treks for Winter Season in India Himalayas',
            excerpt: 'If you\'re a trekking enthusiast, you must have experienced the thrill and the adventurous...',
            imageUrl: 'https://www.escapetravelservices.com/wp-content/uploads/2016/12/treks-in-winter-960x636.jpg'
          },
          {
            id: 78,
            date: 'January 9, 2021',
            title: 'Best Treks for Winter Season in India Himalayas',
            excerpt: 'If you\'re a trekking enthusiast, you must have experienced the thrill and the adventurous...',
            imageUrl: 'https://www.escapetravelservices.com/wp-content/uploads/2016/12/treks-in-winter-960x636.jpg'
          },
          {
            id: 79,
            date: 'January 9, 2021',
            title: 'Best Treks for Winter Season in India Himalayas',
            excerpt: 'If you\'re a trekking enthusiast, you must have experienced the thrill and the adventurous...',
            imageUrl: 'https://www.escapetravelservices.com/wp-content/uploads/2016/12/treks-in-winter-960x636.jpg'
          },
      ];

  return (
    <div className='w-full h-full my-12 px-auto'>
        <div className='px-auto grid grid-cols-1 items-center justify-center md:grid-cols-2 lg:grid-cols-3 gap-2 max-sm:gap-2 overflow-hidden'>
            {
                blogPosts.map((post) => (
                    <BlogCard key={post.id} {...post} />
                ))
            }
        </div>
    </div>
  )
}

export default BlogSection