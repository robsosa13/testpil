import React, { Component } from 'react'
import { Table, Alert, Container } from 'react-bootstrap'
// import { Table, Card ,Form,Modal,Row,Col} from 'react-bootstrap';

class Index extends Component {
    constructor(...props) {
        super(...props);
        this.state = {
            product: [],
            productBackup:[],
            txtBuscar:''
        }
    }
    cargarDatos() {
        fetch('http://localhost:4201/api/products',
            {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then((response) => {
                return response.json()
            })
            .then((res) => {
                console.log('result', res)
                this.setState({
                    product: res.product,
                    productBackup:res.product
                })
            })
            .catch(function (error) {
                console.log('Hubo un problema con la petición:' + error.message);
            });

    }


    componentDidMount() {
        this.cargarDatos();


    }

    render() {
        {
            const { product } = this.state;

            // console.log('testing', product)
            return (
                <>
                    <Container>
                  
                        <h1>Lista de productos</h1>

                        <input class="form-control"
                          value={this.state.txtBuscar}
                           />
                        <br />
                        <br />
                        <br />
                        <br />
                        <Table className="table-responsive" striped bordered hover >
                            <thead>
                                <tr>
                                    <th>id</th>
                                    <th> product_name</th>
                                    <th> stock</th>
                                    <th>product_image</th>

                                    <th> Boleta </th>
                                </tr>
                            </thead>
                            <tbody>
                                {(product) ?
                                    product.map(item => (
                                        <tr key={item._id}>
                                            <td>{item.id}</td>
                                            <td>{item.product_name}</td>
                                            <td>{item.stock}</td>
                                            <td> <img src={item.product_image}/> </td>


                                    
                                            <td>
                                                <button className="btn btn-success">
                                                    Ver</button>
                                            </td>
                                        </tr>
                                    ))
                                    :
                                    <tr></tr>}
                            </tbody>
                        </Table>

                    </Container>
                </>
            )
        }

    }
}
export default Index