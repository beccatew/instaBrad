import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import Apps from './Apps';
import AppView from './AppView';
import { getApps } from '../actions/apps';
import { Loader, Segment, Dimmer } from 'semantic-ui-react';

class FetchApps extends React.Component {
  state = { loaded: false }

  componentDidMount() {
    this.props.dispatch(getApps(this.setLoaded))
  }

  setLoaded = () => {
    this.setState({ loaded: true });
  }

  render() {
    const { loaded } = this.state;
    if (loaded) {
      return (
        <div>
          <Route exact path="/apps" component={Apps} />
          <Route exact path="/apps/:id" component={AppView} />
        </div>
      )
    } else {
      return (
        <Segment>
          <Dimmer active>
            <Loader />
          </Dimmer>
        </Segment>
      )
    }
  }
}

export default connect()(FetchApps);
