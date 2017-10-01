import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import Moment from 'moment';
import { ListItem } from 'material-ui/List';
import Rocket from '../../assets/images/rocket-ico.svg';
import LaunchModal from '../../containers/LaunchModal';
import './styles.css';

const LaunchCard = ({ launchData, openModal }) => (
  <div className="launch-card-wrapper">
    <div className="launch-card">
      <Paper zDepth={2} onClick={openModal}>
        <ListItem
          primaryText={`${launchData.name}`}
          secondaryText={
            (launchData.tbddate === 1) 
              ? `${launchData.launchMonth} TBD`
              : `${Moment(launchData.windowEnd).utc().format('DD MMMM')}`
            }
          leftIcon={<img src={Rocket} alt="Blast off rocket" />}
        />
      </Paper>
      <LaunchModal />
    </div>
  </div>
);


export default LaunchCard;

LaunchCard.defaultProps = {
  launchData: null,
};

LaunchCard.propTypes = {
  openModal: PropTypes.func.isRequired,
  launchData: PropTypes.shape({
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
  }),
};
