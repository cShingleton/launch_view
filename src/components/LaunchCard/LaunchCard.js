import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import Moment from 'moment';
import { ListItem } from 'material-ui/List';
import Rocket from '../../assets/images/rocket-ico.svg';
import './styles.css';

const LaunchCard = ({ launchData, modalOpen, toggleModal, fetchModalData }) => (
  <div className="launch-card-wrapper">
    <div className="launch-card">
      <Paper
        zDepth={2}
        onClick={() => {
          toggleModal(modalOpen);
          fetchModalData(launchData.launchID);
        }}
      >
        <ListItem
          primaryText={`${launchData.name}`}
          secondaryText={
            (launchData.tbddate === 1 || launchData.timeCheck === 0)
              ? `${launchData.launchMonth} TBD`
              : `${Moment(launchData.windowEnd).utc().format('DD MMMM')}`
            }
          leftIcon={<img src={Rocket} alt="Blast off rocket" />}
        />
      </Paper>
    </div>
  </div>
);

export default LaunchCard;

LaunchCard.defaultProps = {
  launchData: null,
};

LaunchCard.propTypes = {
  fetchModalData: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired,
  modalOpen: PropTypes.bool.isRequired,
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
