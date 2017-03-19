import React, { Component } from 'react';
import logo from './logo.svg';
import Germany from './Germany.png';
import './App.css';

import { Button, Card, Icon, Image, Header, Modal, Segment, Menu } from 'semantic-ui-react';

class App extends Component {

    state = { open: false,  activeItem: 'Overview' }

  show = (dimmer) => () => this.setState({ dimmer, open: true })
  close = () => this.setState({ open: false })

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  

  render() {

    const { open, dimmer } = this.state

    const { activeItem } = this.state

    return (
      <div className="App">

<Card.Group>
    <Card>

    <Image height='200' width='300' src='http://www.explorebyyourself.com/images/cms/data/inka_trail1.jpg' />
    <Card.Content>
      <Card.Header>
        Inca Trail
      </Card.Header>
      <Card.Meta>
        <span className='date'>
          Peru
        </span>
      </Card.Meta>
    </Card.Content>
    <Card.Content extra>
    <Button onClick={this.show('blurring')}>Blurring</Button>
        <Modal dimmer={dimmer} open={open} onClose={this.close} closeIcon='close'>

    <Image src='http://www.explorebyyourself.com/images/cms/data/inka_trail1.jpg' fluid />


    <Header  className="image-header" as='h2' ><span>Inca Trail</span></Header>
    <Modal.Content>
      <Icon name='road' size='large' /> 43 km

              <Menu attached='top' tabular>
          <Menu.Item name='Overview' active={activeItem === 'Overview'} onClick={this.handleItemClick} />
          <Menu.Item name='Logistics' active={activeItem === 'Logistics'} onClick={this.handleItemClick} />
          <Menu.Item name='Other Details' active={activeItem === 'Other Details'} onClick={this.handleItemClick} />
        </Menu>

        <Segment>
<Header as='h4'>Overview</Header>  
The classic Inca Trail is 82 km long from Cusco to Manchu Picchu, usually takes 4 days to complete.
Cusco is the usual starting point for organized hikes. Agencies offer tours, equipment, and porters (people to carry equipment). You must book with authorized tour operator, as self trekking is not permitted.
The Peru government has a quota system of 500 people allowed on trail per day, which means only 200 trekkers are allowed.

Best months for Machu Picchu are April – October. High season is June – August. Rainy season in Cusco is December – March. Closed in February for maintenance.
Permits for the entire year becomes available in January (http://www.machupicchu.gob.pe/ ), and popular dates get sold out on the same day.
</Segment>
    <Segment>
    Pellentesque habitant morbi tristique senectus.
  </Segment>
    </Modal.Content>
    <Modal.Actions>
      <Button color='red'>
        <Icon name='remove' /> No
      </Button>
      <Button color='green'>
        <Icon name='checkmark' /> Yes
      </Button>
    </Modal.Actions>
  </Modal>  
    </Card.Content>
  </Card>

      <Card>

    <Image height='200' width='300' src='http://www.nationalgeographic.com/content/dam/adventure/photos/000/798/79898.jpg' />
    <Card.Content>
      <Card.Header>
        Bessenggen
      </Card.Header>
      <Card.Meta>
        <span className='date'>
          Norway
        </span>
      </Card.Meta>
    </Card.Content>
    <Card.Content extra>
      <Button content='Click Here' />
    </Card.Content>
  </Card>
  </Card.Group>
      </div>
    );
  }
}

export default App;