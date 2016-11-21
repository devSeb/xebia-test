import React, { Component } from 'react';
import { Link } from 'react-router'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

/** Components **/
import NavBar from '../components/NavBar/NavBar';
import Products from '../components/Products/Products';

/** Service **/
import * as serviceOffers from '../service/serviceOffers';

/** Utils **/
import * as utilsStore from '../Utils/Utils';
import * as utilsOffer from '../Utils/UtilsOffers';

/** Reducer **/
import * as storeActions from '../redux/actions/storeActions';

/** State **/
const mapStateToProps = (state) => ({
    store: state.storeReducer.store.data
});
/** Action **/
const mapDispatchToProps = (dispatch) => ({
    storeActions: bindActionCreators(storeActions, dispatch)
});


class StoreProducts extends Component {

    static propTypes = {};

    constructor() {
        super();
        this.state = {
            offers: null
        };

        /** Launch utils function quickly  with mock **/
        //utils.test_uniqueArray_store();

    }

    retrieveIsbnProducts(products) {
        let obj = [];
        //console.log("products = ", products);
        if ( products ) {
            for ( let product of products ) {
                obj.push(product.isbn);
            }
        } else {
            obj = {};
        }

        return obj;
    }

    componentDidMount() {
        require("./views.scss");
        var self = this;
        /** Build object of isbn for the best offer **/
        let isbn = this.retrieveIsbnProducts(this.props.store);

        if ( isbn.length > 0 ) {
            serviceOffers.search_offers(isbn)
                .then(function ( data) {
                    //console.log("view _ data ", data);
                    if ( data !== null) {

                        /** Add result on the reducer  **/
                        self.setState({
                            offers: data
                        });
                    }
                });
        }
    }

    componentWillReceiveProps(  nextProps ) {
        //console.log("nextProps =", nextProps);
    }

    validationBuy() {
        this.props.storeActions.valideStore();
        alert("Thanks");
    }

    cancel() {
        this.props.storeActions.valideStore();
    }


    render() {
        let arrFinal = [];
        let priceTot = 0;
        if ( this.props.store.length > 0  && this.state.offers) {
            arrFinal = utilsStore.uniqueArray_Store(this.props.store);
            priceTot = utilsOffer.defineOffers(this.props.store, this.state.offers);
        }


        return (
            <div className="store">

                <header>
                    <NavBar />
                </header>

                <div className="container padding">
                    <Link to={"/"} className="btn btn-default"> SHOP  </Link>
                    <h3> Product Selected </h3>
                    {/**  condition if I have a list a product, i'm displaying the list with the best offer **/}
                    {arrFinal && arrFinal.length > 0 &&

                        <section id="store" className="col-md-12">

                            <article id="price-tot" className="col-md-3">
                                <div>
                                    <h3> Price </h3>
                                    { "total = " + priceTot + "Euros" }
                                    <br />
                                    <br />
                                    <Link to={"/"} className="btn btn-default" onClick={this.validationBuy.bind(this)}> Buy </Link>
                                    <button className="btn btn-default" onClick={this.cancel.bind(this)}> cancel </button>
                                </div>
                            </article>

                            <article id="products" className="col-md-9">
                                <h3> Store </h3>
                                {arrFinal && arrFinal.map(function (item, index){
                                  return (
                                      <div key={index} className="margin-top-20">

                                          <img src={item.cover} width="80" height="100" />
                                          <span className="margin-left-80">{"product : " + item.title}</span>
                                          <span className="margin-left-30" > { "qte = " + item.qte }</span>

                                      </div>
                                    );
                                })}
                            </article>


                        </section>
                    }
                    {arrFinal && arrFinal.length == 0 &&
                        <section id="store" className="col-md-12">
                            <span> No product(s) selected </span>
                        </section>
                    }

                </div>

                <footer>
                    <nav className="navbar navbar-default navbar-fixed-bottom">
                        <div className="container">
                            <div className="navbar-header">
                            <span className="navbar-text">
                                2016, <a href="#">Xebia-Test</a>
                            </span>
                            </div>
                        </div>
                    </nav>
                </footer>

            </div>
        );
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(StoreProducts);
