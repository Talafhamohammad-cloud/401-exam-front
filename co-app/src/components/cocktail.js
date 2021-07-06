import React, { Component } from 'react'
import { Card,Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

class cocktail extends Component {

    render() {
        return (
            <>
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={this.props.cocktail.Img} />
  <Card.Body>
    <Card.Title>{this.props.cocktail.name}</Card.Title>
    <Button variant="primary" onClick={()=>this.props.addtofav(this.props.cocktail)}>Add To Fav</Button>
  </Card.Body>
</Card>
                
            </>
        )
    }
}

export default cocktail
