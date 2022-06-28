import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { useResultContext } from '../contexts/ResultContextProvider';
import Loading from './Loading';

const Results = () => {
  const { results, isLoading, getResults, searchTerm } = useResultContext();
  const { pathname } = useLocation();

  useEffect(() => {
    if (searchTerm) {
      if (pathname === '/videos') {
        getResults(`/search/q=${searchTerm} videos`);
      }
      else {
        getResults(`${pathname}/q=${searchTerm}&num=40`);
      }
    }
  }, [searchTerm, pathname]);

  if (isLoading) return (<Loading />);

  switch (pathname) {
    default:
    case '/search':
      return (
        <div className='flex flex-wrap justify-between space-y-6 sm:px-56'>
          {
            results?.results?.map(({ link, title }, i) => (
              <div key={i} className='md:w-2/5 w-full'>
                <a href={link} target='_blank' rel='noreferrer'>
                  <p className='text-sm' title={link}>
                    {link.length > 30 ? `${link.substring(0, 30)}...` : link}
                  </p>
                  <p title={title} className='text-lg hover:underline dark:text-blue-300 text-blue-700'>
                    {title}
                  </p>
                </a>
              </div>
            ))
          }
        </div>
      );
    case '/image':
      return (
        <div className='flex flex-wrap justify-center items-center'>
          {
            results?.image_results?.map(({ image, link: { href, title } }, i) => (
              <a key={i} target='_blank' rel='noreferrer' href={href} className='sm:p-3 p-5'>
                <img src={image?.src} alt={title} loading='lazy' />
                <p className='w-36 break-words text-sm mt-2'>
                  {title}
                </p>
              </a>
            ))
          }
        </div>
      );
    case '/videos':
      return;
    case '/news':
      return;
  };
};

export default Results;