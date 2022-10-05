import { useSelector } from 'react-redux';
import { useGetTopChartsQuery } from '../redux/services/shazamCore';

import { Error, Loader, SongCard } from '../components';

const TopCharts = () => {
  const { activeSong, isPlaying } = useSelector(({ player }) => player);
  const { data, isFetching, error } = useGetTopChartsQuery();

  if (isFetching) {
    return (
      <Loader title='Loading top charts' />
    );
  }

  if (error) {
    return (
      <Error message={error.data?.message} />
    );
  }

  return (
    <div className='flex flex-col'>
      <h2 className='font-bold text-3xl text-white text-left mt-4 mb-10'>
        Discover Top Charts
      </h2>
      <div className='flex flex-wrap sm:justify-start justify-center gap-8'>
        {
          data?.map((song, i) => (
            <SongCard
              ket={song.key}
              song={song}
              isPlaying={isPlaying}
              activeSong={activeSong}
              data={data}
              i={i}
            />
          ))
        }
      </div>
    </div>
  );
};

export default TopCharts;
