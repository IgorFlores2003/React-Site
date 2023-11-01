import casa from './image/casa.jpeg';
import mo from './image/Mo.jpeg';
import moe from './image/MoeEu.jpeg';
import "./HomeStyle.css"
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

export default function Carrosel() {
    return (
      <div>
        <h4>Oia Nois Ai:</h4>
        <Carousel>
          <Carousel.Item>
            <img
                src= {require=(casa)}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src= {require=(mo)}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
                src= {require=(moe)}
            />
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }