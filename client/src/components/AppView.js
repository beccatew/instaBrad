import React from 'react';
import { connect } from 'react-redux';
import { Divider, Header, Image, Container, Table, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import AppForm from './AppForm';

class AppView extends React.Component {
  state = { showForm: false }

  toggleForm = () => {
    this.setState( state => {
      return { showForm: !state.showForm }
    })
  }

  render() {
    const { showForm } = this.state;
    const { app = {} } = this.props;
    return (
      <Container>
        <Link to="/apps">View All Apps</Link>
        <Button onClick={this.toggleForm}>
          { showForm ? 'Cancel' : 'Edit' }
        </Button>
        { showForm ?
            <AppForm {...app} closeForm={this.toggleForm} />
            :
            <div>
              <Header as="h3" textAlign="center">{app.name}</Header>
              <Image src={app.image} />
              <Table definition>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell />
                    <Table.HeaderCell />
                  </Table.Row>
                </Table.Header>

                <Table.Body>
                  <Table.Row>
                    <Table.Cell>Description</Table.Cell>
                    <Table.Cell>{app.description}</Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </div>
          }
      </Container>
    )
  }
}

const mapStateToProps = (state, props) => {
  return { app: state.apps.find( a => a.id === parseInt(props.match.params.id )) }
}

export default connect(mapStateToProps)(AppView);
