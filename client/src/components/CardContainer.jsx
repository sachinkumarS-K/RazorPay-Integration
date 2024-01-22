import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from '../Card';

const CardContainer = ({ checkOutHandler }) => {
  const [data, setData] = useState(null);
const [item , setItem] = useState(null)
  async function getData() {
    const { data } = await axios.get("https://api.pujakaitem.com/api/products");
       console.log(data);
       const res = await axios.get("https://fakestoreapi.com/products");
       setData(data);
       console.log(res.data)
       setItem(res.data)
  }

  useEffect(() => {
       getData();
       
  }, []);
  return (
    <div className="flex gap-5 justify-center flex-wrap">
      {data &&
        data.map((card) => (
          <Card
            key={card.id}
            img={card.image}
            amount={Math.round(card.price / 100)}
            checkout={checkOutHandler}
          />
        ))}
      {item && item.map((card) => (
        <Card
          key={card.id}
          img={card.image}
          amount={Math.round(card.price *50)}
          checkout={checkOutHandler}
        />
      ))}
    </div>
  );
};

export default CardContainer
