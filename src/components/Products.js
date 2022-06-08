import React from "react";
import styled from "styled-components";
import product1 from "../assets/dish1.png";
import product2 from "../assets/dish2.png";
import product3 from "../assets/dish6.png";
import product4 from "../assets/dish4.png";
import { imageZoomEffect, TitleStyles } from "./ReusableStyles";

export default function Products() {
  const data = [
    {
      image: product1,
      name: "Chocolate Ice Cream",
      price: "$4/pcs",
    },
    {
      image: product2,
      name: "Cherry Ice Cream",
      price: "$5/pcs",
    },
    {
      image: product3,
      name: "Boozy Piña Colada Ice Cream",
      price: "$4.5/pcs",
    },

    {
      image: product4,
      name: "Tin Roof Ice Cream",
      price: "$3.5/pcs",
    },
  ];
  return (
    <Section id="products">
      <div className="title">
        <h1>
          <span>Favourite</span> All the time!
        </h1>
      </div>
      <div className="products">
        {data.map((product) => {
          return (
            <div className="product">
              <div className="image">
                <img src={product.image} alt="" />
              </div>
              <h2>{product.name}</h2>
              <h3>{product.price}</h3>
              <p>Check out our ice cream dishes selection for the very best in unique 
                or custom, handmade pieces.</p>
              <button>Buy Now</button>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

const Section = styled.section`
  ${TitleStyles};
  .products {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 3rem;
    margin-top: 3rem;
    .product {
      display: flex;
      flex-direction: column;
      gap: 0.6rem;
      justify-content: center;
      align-items: center;
      h3 {
        color: #fc4958;
      }
      p {
        text-align: center;
        font-size: 1.1rem;
        line-height: 2rem;
        letter-spacing: 0.1rem;
      }
      ${imageZoomEffect};
      .image {
        max-height: 20rem;
        overflow: hidden;
        border-radius: 1rem;
        img {
          height: 20rem;
          width: 15rem;
          object-fit: cover;
        }
      }
      button {
        border: none;
        padding: 1rem 4rem;
        font-size: 1.4rem;
        color: white;
        border-radius: 4rem;
        transition: 0.5s ease-in-out;
        cursor: pointer;
        background: linear-gradient(to right, #fc4958, #e85d04);
        text-transform: uppercase;
        &:hover {
          background: linear-gradient(to right, #e85d04, #fc4958);
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 720px) {
    .products {
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
  }
  @media screen and (min-width: 720px) and (max-width: 1080px) {
    .products {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;