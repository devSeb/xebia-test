import React, { Component } from 'react';
import { Link } from 'react-router'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

/** Components **/
import NavBar from '../components/NavBar/NavBar';
import Products from '../components/Products/Products';

/** Service **/
import * as searchBooks from '../service/serviceBooks';

/** Reducer **/
import * as storeActions from '../redux/actions/storeActions';
import * as TestActions from '../redux/actions/TestActions';

/** State **/
const mapStateToProps = (state) => ({
    store: state.storeReducer.store.data
});
/** Action **/
const mapDispatchToProps = (dispatch) => ({
    storeActions: bindActionCreators(storeActions, dispatch),
    TestActions: bindActionCreators(TestActions, dispatch)
});


class App extends Component {

    static propTypes = {};

    constructor(props, context) {
        super(props, context);
        this.state = {
            products : [],
            productSelected: (props.store) ? props.store.length : 0
        }
    }

    componentDidMount() {
        require("./views.scss");

        /** Retrieve all characters
         *  result : Map
         */
        var self = this;
        searchBooks.search_books()
            .then(function ( data) {
                //console.log("view _ data ", data);
                if ( data !== null) {

                    /** Add result on the reducer  **/
                    self.setState({
                        products: data
                    });
                }
            });
    }


    onAddProduct(item) {
        this.props.storeActions.addStore(item);
        this.setState({
            productSelected: this.state.productSelected + 1
        })
    }

    render() {
        return (
            <div className="app">

                <header>
                    <NavBar />
                </header>

                <div className="container padding">
                    <section id="section-store-products" className="col-md-12">
                        <div className="col-md-12">
                            <div className="col-md-4 pull-center">
                                <Link to={"/store"} className="btn btn-default"> Store
                                    { (this.state.productSelected > 0) ?  " " + this.state.productSelected : "" }
                                </Link>
                            </div>
                        </div>
                    </section>

                    <section id="section-products" className="col-md-12">

                        <div className="col-md-12">
                            <h3 className="center"> Liste  Articles </h3>
                        </div>
                        <br />
                        <br />
                        <div className="col-md-12">
                            {this.state.products &&
                                <Products products={this.state.products} onAddProduct={this.onAddProduct.bind(this)} />
                            }
                        </div>

                    </section>


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
export default connect(mapStateToProps, mapDispatchToProps)(App);
