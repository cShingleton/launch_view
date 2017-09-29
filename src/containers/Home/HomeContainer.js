import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchNextLaunch } from '../../redux/modules/actions/launchActions';
import Loader from '../../components/Loader';
import Home from './Home';

class HomeContainer extends Component {

  componentDidMount() {
    this.props.dispatch(fetchNextLaunch());
  }

  render() {
    const { nextLaunch, loading } = this.props.launches;
    if (loading || Object.keys(nextLaunch).length === 0) return <Loader />;
    return (<Home nextLaunch={nextLaunch} />);
  }
}

const mapStateToProps = state => ({
  launches: state.launches,
});

export default connect(mapStateToProps)(HomeContainer);

HomeContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  launches: PropTypes.shape({
    loading: PropTypes.bool,
    nextLaunch: PropTypes.shape({
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
  }).isRequired,
};
