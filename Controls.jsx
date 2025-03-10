// import React, { useState } from 'react';

// const Controls = () => {
//     const [name, setName] = useState('Guest');

//     const handNameChange = (event) => {
//         setName(event.target.value);
//     }

//     const [number, setNumber] = useState(0);

//     const handNumberChange = (event) => {
//         setNumber(event.target.value);
//     }

//     return (
//         <div>
//             <input 
//                 onChange={handNameChange}
//                 type="text" 
//                 placeholder="Enter your name" 
//             />     
//             <p>Name: {name}</p>  

//             <input 
//                 onChange={handNumberChange}
//                 type="number" 
//                 placeholder="Enter your number" 
//             />     
//             <p>Price: {number*20000}</p>  
//         </div>
//     );
// };

// export default Controls;

import React, { useState } from 'react';
import './Controls.css'; // Import file CSS

const Controls = () => {
    const [name, setName] = useState('Guest');
    const [quantity, setQuantity] = useState(0);
    const [product, setProduct] = useState('Banana');

    // Danh sách sản phẩm và giá
    const products = {
        Banana: 20000,
        Orange: 25000,
        Watermelon: 50000,
        Pineapple: 40000
    };

    // Xử lý nhập tên
    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    // Xử lý nhập số lượng
    const handleQuantityChange = (event) => {
        setQuantity(Number(event.target.value));
    };

    // Xử lý chọn sản phẩm
    const handleProductChange = (event) => {
        setProduct(event.target.value);
    };

    // Tính tổng tiền
    const totalPrice = quantity * products[product];

    return (
        <div className="controls-container">
            <h2>Product Order</h2>
            {/* Nhập tên người mua */}
            <input 
                onChange={handleNameChange}
                type="text" 
                placeholder="Enter your name" 
            />     
            <p>Name: <span>{name}</span></p>  

            {/* Chọn sản phẩm */}
            <select onChange={handleProductChange} value={product}>
                {Object.keys(products).map((item) => (
                    <option key={item} value={item}>
                        {item} - {products[item].toLocaleString()} VND
                    </option>
                ))}
            </select>

            {/* Nhập số lượng */}
            <input 
                onChange={handleQuantityChange}
                type="number" 
                placeholder="Enter quantity" 
                min="0"
            />     
            <p>Quantity: <span>{quantity}</span></p>  

            {/* Hiển thị tổng giá */}
            <p>Total Price: <span>{totalPrice.toLocaleString()} VND</span></p>
        </div>
    );
};

export default Controls;
