import { useState, useEffect } from 'react';
import './Profile.css'

function Profile() {
    const savedUser = JSON.parse(localStorage.getItem('user-data')) || [];
    const currentUser = JSON.parse(localStorage.getItem('username'));

    // Find the user in the array based on the username
    const currentUserInfo = savedUser.find(user => user.username === currentUser.loginUsername);
    const [userInfo, setUserInfo] = useState(currentUserInfo);
    //display a current purchase items (which are saved in user-data - purchasedItems)
    const [cartInfo, setCartInfo] = useState(currentUserInfo?.purchasedItems || []);

  return (
    <div className='profile-page'>
        <form className='profile-user'>
            <h2>Your Profile</h2>

            <div className='profile-user-container'>
                <ul>
                <li>Username:</li>
                <li>Email:</li>
                </ul>

                <ul>
                <li>{userInfo.username}</li>
                <li>{userInfo.email}</li>
                </ul>
            </div>
        </form>

        <hr width="80%"/>

        <div className='profile-order'>
            <h2>Your order</h2>
            <div className="cartlist">
                <div className="cartlist-main">
                    <p>Products</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Date of Purchase</p>
                </div>
                <hr />
            
                {cartInfo.map((product, index) => (
                <ul key={index} className="cartItem-format cartlist-main">
                <img src={product.image[0]} alt="" className="cartItem-product-icon"/>
                    <li>{product.name}</li>
                    <li>${product.price}</li>
                    <li>{product.quantity}</li>
                    <li>${product.price*product.quantity}</li>
                    <li>Recently</li>
                </ul>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Profile;
