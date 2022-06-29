import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { useResultContext } from '../contexts/ResultContextProvider';
import Loading from './Loading';

const Results = () => {
  const { results: { results, image_results, entries: news }, isLoading, getResults, searchTerm } = useResultContext();
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
  }, [searchTerm, pathname, getResults]);

  if (isLoading) return (<Loading />);

  switch (pathname) {
    default:
    case '/search':
      return (
        <div className='flex flex-wrap justify-between space-y-6 sm:px-56'>
          {
            results?.map(({ link, title }, i) => (
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
            image_results?.map(({ image, link: { href, title } }, i) => (
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
    case '/news':
      return (
        <div className='flex flex-wrap justify-between space-y-6 sm:px-56 items-center'>
          {
            news?.map(({ links, id, source, title }) => (
              <div key={id} className='md:w-2/5 w-full'>
                <a href={links?.[0].href} target='_blank' rel='noreferrer' className='hover:underline'>
                  <p title={title} className='text-lg dark:text-blue-300 text-blue-700'>
                    {title}
                  </p>
                  <div className='flex gap-4'>
                    {source?.href}
                  </div>
                </a>
              </div>
            ))
          }
        </div>
      );
    case '/videos':
      console.log(results)
      return (
        <div className='flex flex-wrap'>
          {
            results.map((video, i) => (
              <div key={i} className='p-2'>
                <ReactPlayer url={video.additional_links?.[0].href} controls width='335px' height='200px' />
              </div>
            ))
          }
        </div>
      );
  };
};

export default Results;