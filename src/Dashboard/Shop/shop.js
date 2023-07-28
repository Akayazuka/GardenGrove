import './shop.css';
import tomato from './images/tile-tomato.png'
import carrot from './images/tile-carrot.png'
import potato from './images/tile-potato.png'
import broccoli from './images/tile-broccoli.png'
import cauliflower from './images/tile-cauliflower.png'
import salad from './images/tile-salad.png'
import chilli from './images/tile-chilli.png'
import onion from './images/tile-onion.png'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

function Shop() {
  const [products, setProducts] = useState([])
  useEffect(() => {
    axios.get('http://localhost:4000/getproducts')
      .then(products => setProducts(products.data))
      .catch(err => console.log(err))
  }, [])
  return (
    <div class="shopsec3">
      <div class="sec3-text">
        <p>Fresh Picks: Just For You!
        </p>
      </div>

      <div class="grid-container">
        {
          products.map(product => {
            var originalPrice = parseInt(product.oprice);
            var discountPrice = parseInt(product.dprice);
            var savings = ((originalPrice - discountPrice)/originalPrice)*100;
            return <div class="grid-item">
              <div class="sc-c5eaa547-0">
                <div class="fresnel-container fresnel-lessThan-lg ">
                  <div class="sc-e0e305e2-0">
                    <div class="sc-847ff752-0">
                      <span
                        style={{
                          boxSizing: 'border-box',
                          display: 'inline-block',
                          overflow: 'hidden',
                          width: '159px',
                          height: '159px',
                          background: 'none',
                          backgroundColor: '#faf3ef',
                          opacity: 1,
                          border: '0px',
                          margin: '0px',
                          padding: '0px',
                          position: 'relative',
                        }}><img
                          alt="" aria-label="" data-testid="productCard_image" src={product.url} decoding="async"
                          data-nimg="fixed" class="sc-847ff752-1 iPJfJT"
                          style={{
                            backgroundColor: '#faf3ef',
                            position: 'absolute',
                            inset: '0px',
                            boxSizing: 'border-box',
                            padding: '0px',
                            border: 'none',
                            margin: 'auto',
                            display: 'block',
                            width: '0px',
                            height: '0px',
                            minWidth: '100%',
                            maxWidth: '100%',
                            minHeight: '100%',
                            maxHeight: '100%',
                            objectFit: 'contain',
                            objectPosition: 'center center',
                          }} />
                      </span>
                    </div>
                  </div>
                </div>
                <div class="sc-c5eaa547-1">Save {(Math.floor(savings))}%</div>
                <div class="sc-c5eaa547-2">₹{product.dprice}</div>
                <div class="sc-c5eaa547-3">₹{product.oprice} MRP</div>
                <div class="sc-c5eaa547-4">{product.title}</div>
                <div class="btn-add-cart"><button class="add-cart">Add To Cart</button></div>
              </div>
            </div>
          })
        }
      </div>
      <div class="div-but25">
        <button class="button-25" role="button" onclick="window.location.href='cart/cart.html';">Proceed To Cart</button>
      </div>
    </div>
  );
}

export default Shop;
