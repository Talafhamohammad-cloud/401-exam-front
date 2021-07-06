import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form,Button } from 'react-bootstrap'

class updateForm extends Component {
    render() {
        return (
            <>
            <Form onSubmit={e=>{this.props.updateco(e)}}>
  <Form.Group className="mb-3" controlId="formGroupEmail">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" value={this.props.name} onChange={this.props.nameHandler} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formGroupPassword">
    <Form.Label>image</Form.Label>
    <Form.Control type="text" value={this.props.img} onChange={this.props.imgHandler} />
  </Form.Group>
</Form>
<Button variant="primary" onClick={()=>this.props.addtofav(this.props.index)}>update</Button>
                
            </>
        )
    }
}

export default updateForm
