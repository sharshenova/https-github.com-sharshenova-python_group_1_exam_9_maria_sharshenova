import React, {Fragment, Component} from 'react'
import {connect} from "react-redux";
import {loadProducts} from "../../store/actions/products-list";
import {loadCategories} from "../../store/actions/categories-list";
import ProductCard from "../../components/ProductCard/ProductCard";

// из библиотеки react-select
import Select from 'react-select';

class ProductsList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            categories: [],
        };

    }

    componentDidMount() {

        this.props.loadCategories();
        this.props.loadProducts();

    }



    render() {


        return <Fragment>


            <div className='row'>
                {this.props.productsList.products.map(product => {
                    return <div className='col-xs-12 col-sm-6 col-lg-4' key={product.id}>
                        <ProductCard product={product}/>
                    </div>
                })}
            </div>
        </Fragment>
    }
}

const mapStateToProps = state => {
    return {
        productsList: state.productsList,
        categoriesList: state.categoriesList,
    }
};

const mapDispatchToProps = (dispatch) => ({
    loadProducts: () => dispatch(loadProducts()),
    loadCategories: () => dispatch(loadCategories())
});


export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);