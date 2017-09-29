import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchUpcomingLaunches } from '../../redux/modules/actions/launchActions';
import Upcoming from './Upcoming';
import Loader from '../../components/Loader';

class UpcomingContainer extends Component {

  componentDidMount() {
    this.props.dispatch(fetchUpcomingLaunches());
  }

  render() {
    const { upcomingLaunches, loading } = this.props.launches;
    if (loading || !upcomingLaunches) return <Loader />;
    return (<Upcoming upcomingLaunches={upcomingLaunches} />);
  }
}

const mapStateToProps = state => ({
  launches: state.launches,
});

export default connect(mapStateToProps)(UpcomingContainer);

UpcomingContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  launches: PropTypes.shape({
    loading: PropTypes.bool,
    upcomingLaunches: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.arrayOf(PropTypes.shape({
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
    })))),
  }).isRequired,
};
