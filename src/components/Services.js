import React from "react";
import styled from "styled-components";
import Services1 from "../assets/ice3.png";
import Services2 from "../assets/ice3.png";
import Services3 from "../assets/ice3.png";
import { TitleStyles } from "./ReusableStyles";
export default function Services() {
  return (
    <Section id="services">
      <div className="title">
        <h1 className="yellow">What we do?</h1>
        <p>
        An ice cream shop is a business that primarily sells ice cream, but may also specialize in other frozen treats such as milkshakes, gelato, frozen yogurt, and sorbet.
        </p>
      </div>
      <div className="services">
        <div className="service">
          <img src={Services2} alt="" />
          <p>
            Whip up new flavors Every ice cream lover has their go-to,
             classic comfort flavour. Chocolate and vanilla are some of these favourites, but you need to get bold if 
            you want to stand out from the rest of the market.
          </p>
          <button>Read More</button>
        </div>
        <div className="service yellow">
          <img src={Services1} alt="" />
          <p>
          Sponsor parties and community events
          As a new small business, it might not seem like 
          you’re in the position to hand out freebies when you 
          need to be selling a
          lot of inventory to recoup your capital investment.</p>
          <button>Read More</button>
        </div>
        <div className="service">
          <img src={Services3} alt="" />
          <p>
          Sponsor parties and community events
          As a new small business, it might not seem like 
          you’re in the position to hand out freebies when you 
          need to be selling a
          lot of inventory to recoup your capital investment.
          </p>
          <button>Read More</button>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  margin: 2rem 4rem;
  ${TitleStyles};
  .services {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10vw;
    margin-top: 4rem;
    .service {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1.5vw;
      padding: 0 3vw;
      img {
        height: 2.8rem;
      }
      p {
        text-align: center;
        line-height: 2rem;
        font-size: 1.1rem;
        letter-spacing: 0.1rem;
      }
      button {
        padding: 0.6rem 3rem;
        letter-spacing: 0.2rem;
        border-radius: 2rem;
        font-size: 1.1rem;
        border: none;
        color: white;
        background-color: #fc4958;
        transition: 0.3s ease-in-out;
        &:hover {
          background-color: #f9c74f;
        }
      }
    }
    .yellow {
      button {
        background-color: #f9c74f;
        &:hover {
          background-color: #fc4958;
        }
      }
    }
  }
  @media screen and (min-width: 260px) and (max-width: 1080px) {
    margin: 2rem;
    .services {
      grid-template-columns: 1fr;
    }
  }
`;