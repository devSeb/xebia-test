import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router'
import { bindActionCreators } from 'redux';

/**  Component **/
import Image from '../Image/Image';

/** Reducer **/
//import * as storeActions from '../../redux/actions/storeActions';

/** State **/
/*
const mapStateToProps = (state) => ({
    //store: state.storeReducer.store.data
});
*/
/** Action **/
/*
const mapDispatchToProps = (dispatch) => ({
    //storeActions: bindActionCreators(storeActions, dispatch)
});
*/

class Products extends Component {

    static propTypes = {
        products: PropTypes.array,
        onAddProduct: PropTypes.func
    };

    constructor() {
        super();
    }

    componentDidMount () {
        require('./products.scss');
    }

    onClickAddProduct(item){
        this.props.onAddProduct(item);
    }

    render() {
        let self = this;
        //console.log("element", this.props.element.text);
        //console.log("this.props", this.props);

        /**
         *
         * <div className="product">
         <div className="img">
         <Image classList={"img col-md-1"} source={item.cover} width={null} height={null} />
         </div>
         <div className="info">
         <h5><b>{item.title}</b></h5>
         <span>Price : {item.price + "Euros"} </span>
         </div>
         <div className="button-add-store">
         <button className="btn btn-default btn-block"
         onClick={self.onClickAddProduct.bind(self, item)}>
         Ajouter
         </button>
         </div>
         </div>
         */
        return(
            <div className="products">
                {this.props.products.map( function (item, index) {
                    //console.log("item = ", item);

                    return (
                        <div key={index} className="list-product col-md-4">
                            <div className="product">
                                <div className="img">
                                     <Image classList={"img col-md-1"}
                                               source={item.cover}
                                               width={null} height={null} />

                                </div>

                                <div className="button-add-store">

                                    <button className="btn btn-default btn-block"
                                            onClick={self.onClickAddProduct.bind(self, item)}>
                                        Ajouter
                                    </button>

                                </div>

                                <div className="info">
                                    <h5><b>{item.title}</b></h5>
                                    <span>Price : {item.price + "Euros"} </span>

                                </div>

                            </div>
                        </div>
                    );
                })}


            </div>
        );
    }
}
export default Products;
