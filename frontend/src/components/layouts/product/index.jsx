import React from 'react'
import { Link } from 'react-router-dom';
import ReactStars from 'react-rating-stars-component';

const Product = ({ product }) => {

    const options = {
        edit: false,
        color: "rgba(20,20,20,0.1)",
        activeColor: "tomato",
        size: window.innerWidth < 600 ? 20 : 25,
        value: product.ratings,
        isHalf: true
    };

    return (
        <div>
            <Link className='product-card' to={`/product/${product._id}`}>

                <img className='img-fluid' src={product.images[0].url} alt={product.name} />

                <h4> {product.name} </h4>

                <h5> {`$${product.price}`} </h5>

                <div>

                    <ReactStars {...options} />

                    <span> ({product.numOfReviews} Reviews) </span>

                </div>

            </Link>
        </div>
    )
}

export default Product;