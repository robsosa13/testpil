var Producto = require('../models/product');
var fs = require('fs');
var path = require('path');

function register_product(req, res) {
        var data = req.body;
        var product = new Producto();
        product.id = data.id;
        product.product_name= data.product_name;
        product.stock= data.stock;
        product.product_image = product.product_image;
        product.save((err, product_save) => {
            if (err) {
                res.status(500).send({ message: 'Error en el servidor' });
            } else {
                if (product_save) {
                    res.status(200).send({ product: product_save });
                } else {
                    res.status(403).send({ message: 'No se registro el producto' });
                }
            }
        });
}
function list_product(req, res) {
    var product_name = req.params['product_name'];

    Producto.find({ product_name: new RegExp(product_name, 'i') }).exec((err, productos_listado) => {
        if (err) {
            res.status(500).send({ message: 'Error en el servidor' });
        } else {
            if (productos_listado) {
                res.status(200).send({ product: productos_listado });
            } else {
                res.status(403).send({ message: 'No hay ningun registro con ese nombre' });
            }
        }
    });
}



function update_stock(req, res) {
    let id = req.params['id'];
    let data = req.body;

    Producto.findById(id, (err, producto_data) => {
        if (producto_data) {
            Producto.findByIdAndUpdate(id, { stock: parseInt(producto_data.stock) - parseInt(data.stock) }, (err, product_edit) => {
                if (product_edit) {
                    res.status(200).send({ producto: product_edit });
                }
            })
        } else {
            res.status(500).send(err);
        }
    })
}



module.exports = {
    register_product,
    list_product,
    
    update_stock,
    

}