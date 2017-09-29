import React from 'react';
import PropTypes from 'prop-types';
import Masonry from 'react-masonry-component';
import LaunchCard from '../LaunchCard';
import './styles.css';

const LaunchTiles = ({ launch }) => (
  <div className="launch-month-launches">
    <Masonry>
      {launch.map(launchEvent =>
        (<LaunchCard
          launchData={launchEvent}
          key={launchEvent.launchID}
        />),
      )}
    </Masonry>
  </div>
);

export default LaunchTiles;

LaunchTiles.defaultProps = {
  launch: null,
};

LaunchTiles.propTypes = {
  launch: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string,
    launchID: PropTypes.number,
    name: PropTypes.string,
    tbddate: PropTypes.number,
    windowStart: PropTypes.string,
    windowEnd: PropTypes.string,
    launchMonth: PropTypes.string,
    __v: PropTypes.number,
    missions: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
    rocket: PropTypes.shape({
      name: PropTypes.string,
      wikiURL: PropTypes.string,
      imageURL: PropTypes.string,
      agencies: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
    }),
    location: PropTypes.shape({
      name: PropTypes.string,
      pad: PropTypes.shape({
        name: PropTypes.string,
        agencies: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
      }),
    }),
    favourite: PropTypes.bool,
  })),
};
