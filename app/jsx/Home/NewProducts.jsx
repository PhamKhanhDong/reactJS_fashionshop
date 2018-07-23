import Product from "../API/Product";

function number_to_currency(number, options) {
  try {
    var options   = options || {};
    var precision = options["precision"] || 2;
    var unit      = options["unit"] || "$";
    var separator = precision > 0 ? options["separator"] || "." : "";
    var delimiter = options["delimiter"] || ",";

    var parts = parseFloat(number).toFixed(precision).split('.');
    return unit + number_with_delimiter(parts[0], delimiter) + separator + parts[1].toString();
  } catch(e) {
    return number;
  }
}

function number_with_delimiter(number, delimiter, separator) {
  try {
    var delimiter = delimiter || ",";
    var separator = separator || ".";

    var parts = number.toString().split('.');
    parts[0] = parts[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1" + delimiter);
    return parts.join(separator);
  } catch(e) {
    return number
  }
}


export default class NewProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {products: []};
    this.getNewProduct = this.getNewProduct.bind(this);
  }

  getNewProduct(status, data) {
    this.setState({products: data});
  }


  componentDidMount() {
    Product.getNewProduct(this.getNewProduct);
  }

  render() {
    return(
      <div className="container">
        <div id="content" className="space-top-none">
          <div className="main-content">
            <div className="row">
              <div className="col-sm-12">
                <h4>New product</h4>
                <div className="row">
                  {this.state.products.map(function(product, index){
                    return(
                      <div key={index} className={`col-sm-3 remove_${product.id}`}>
                        <div className="single-item">
                          <div className="single-item-header">
                            <img src="/assets/no_image.png" />
                          </div>
                          <div className="single-item-body">
                            <p className="single-item-title">{product.name}</p>
                            <p className="single-item-price">
                              <span className="flash-del">
                                {parseInt(product.discount)>0 ? number_to_currency(product.old_price) : null}
                              </span>
                              <span className="flash-sale">{number_to_currency(product.price)}</span>
                            </p>
                          </div>
                          <div className="single-item-caption">
                            <a data-method="post" data-remote="true" className="add-to-cart pull-left" href={`add_to_cart/${product.id}`} >
                              <i className="fa fa-shopping-cart"></i>
                            </a>
                            <a href={`products/${product.id}`} className="beta-btn primary">Detail</a>
                            <div className="clearfix"></div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

