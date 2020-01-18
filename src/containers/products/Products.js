import React, { Component } from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import * as products from '../../products.json'
import Product from '../../components/product/Product'
import ComparedItems from '../../components/product/ComparedItems'

class Products extends Component {
    state = {
        products: [],
        comparedItems: []
    }

    componentDidMount() {
        // console.log(products.default)
        this.setState({ products: products.default })
    }
    getComparedProducts = (productId) => {
        const { comparedItems, products } = this.state;
        const isItemExist = comparedItems.filter(item => item.id === productId)
        if (isItemExist.length) {
            const filteredItems = comparedItems.filter(item => item.id !== productId)
            this.setState({ comparedItems: filteredItems });
        } else {
            const currProduct = products.filter(item => item.id === productId)[0]
            this.setState({ comparedItems: [...comparedItems, currProduct] });
        }
    }
    render() {
        const { products, comparedItems } = this.state
        return (
            <Container maxWidth="lg">
                {/* <h1>Products</h1> */}
                <Typography variant="h4" gutterBottom component="h1">
                    Test
                </Typography>
                <Grid container spacing={3}>
                    {
                        products.map(product => {
                            return (
                                <Grid item key={product.id} xs={6} sm={3}>
                                    <Product
                                        product={product}
                                        getComparedProducts={this.getComparedProducts} />
                                </Grid>
                            )
                        })
                    }
                </Grid>
                {comparedItems.length >= 2 && <ComparedItems comparedItems={comparedItems} />}



            </Container >
        )
    }
}
export default Products