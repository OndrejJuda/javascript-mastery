import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { DetailsHeader, Error, Loader, RelatedSongs } from '../components';

import { useGetArtistDetailsQuery } from '../redux/services/shazamCore';

const ArtistDetails = () => {
  const { id: artistId } = useParams();
  const { activeSong, isPlaying } = useSelector(({ player }) => player);
  const { data, isFetching, error } = useGetArtistDetailsQuery(artistId);

  if (isFetching) {
    return (
      <Loader title='Loading artist details' />
    );
  }

  if (error) {
    return (
      <Error message={error} />
    );
  }

  return (
    <div className='flex flex-col'>
      <DetailsHeader
        artistId={artistId}
        artistData={data}
      />
      <RelatedSongs
        data={Object.values(data?.songs)}
        artistId={artistId}
        isPlaying={isPlaying}
        activeSong={activeSong}
      />
    </div>
  );
};

export default ArtistDetails;
