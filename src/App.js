// App.js
import React, { useEffect, useState } from 'react';
import './App.css';
import Item from './item';
import Total from './total';

function App() {
  const [cart, setCart] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products?limit=10');
        const data = await response.json();
        setCart(data.map(item => ({ ...item, amount: 1 })));
      } catch (error) {
        console.error('Veri çekme hatası:', error);
        // Hata durumunda kullanıcıya uygun bir mesaj gösterilebilir.
      }
    };

    fetchData();
  }, []);

  const handleItemAction = (itemId, action) => {
    setCart(prevCart => {
      const updatedCart = [...prevCart];
      const index = updatedCart.findIndex(item => item.id === itemId);

      if (index !== -1) {
        const item = updatedCart[index];

        switch (action) {
          case '+':
            item.amount += 1;
            break;
          case '-':
            if (item.amount > 1) {
              item.amount -= 1;
            }
            break;
          case 'remove':
            updatedCart.splice(index, 1);
            break;
          default:
            break;
        }
      }

      return updatedCart;
    });
  };

  useEffect(() => {
    const calculateTotalAmount = () => {
      const total = cart.reduce((acc, item) => acc + item.price * item.amount, 0);
      setTotalAmount(total);
    };

    calculateTotalAmount();
  }, [cart]);

  return (
    <div className='main'>
      <div className='itemslist'>
        {cart.map(item => (
          <Item
            key={item.id}
            itemId={item.id}
            image={item.image}
            title={item.title}
            category={item.category}
            price={item.price}
            amount={item.amount}
            onAction={action => handleItemAction(item.id, action)}
          />
        ))}
      </div>
      <Total totalprice={totalAmount.toFixed(2)} />
    </div>
  );
}

export default App;
