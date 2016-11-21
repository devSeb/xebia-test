import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router'
import { bindActionCreators } from 'redux';

/** Reducer **/
import * as storeActions from '../../redux/actions/storeActions';

/** State **/
const mapStateToProps = (state) => ({
    store: state.storeReducer.store.data
});
/** Action **/
const mapDispatchToProps = (dispatch) => ({
    storeActions: bindActionCreators(storeActions, dispatch),
});


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
        return(
            <div className="products">
                {this.props.products.map( function (item, index) {
                    //console.log("item = ", item);

                    return(
                        <div key={index} className="col-md-4">
                            <div className="product">
                                <div className="img">
                                    <img className="img col-md-1" src={item.cover} />
                                </div>
                                <div className="info">
                                    <h5><b>{item.title}</b></h5>
                                    <span>Price : {item.price} </span>
                                    <br/>
                                    <button className="col-md-12 btn btn-default"
                                            onClick={self.onClickAddProduct.bind(self, item)}> Ajouter</button>
                                </div>
                            </div>
                        </div>
                    );
                })}


            </div>
        );
    }

}
export default  connect(mapStateToProps, mapDispatchToProps)(Products);
