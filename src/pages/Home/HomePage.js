import * as React from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/react-alice-carousel"
import Carrosel from './carrosel';
import './HomeStyle.css';

function HomePage(){
    return(
        <div class="Fundo"><nav class="menu">

      <ul>
        <li><a href="http://localhost:3000/">Home</a></li>
        <li><a href="http://localhost:3000/TimeLine">Linha do Tempo</a></li>
        <li><a href="http://localhost:3000/Filminho">Supresa Final</a></li>
      </ul>
    </nav>
    <div class="bac">
        <h1 >Presente Especial da Mozin</h1>
        <p>Este ano, você decidiu fazer algo diferente para o aniversário de vocês. Em vez de seguir a tradição de escrever uma carta, comprar chocolates e dar abraços e beijos, você pensou: “Eu sou o cara do programa, por que não faço um site para ela?” Então, é isso que você está fazendo: um site simples, mas cheio de amor, que é o que você sente por ela, sua biju linda.</p>

        <p>Esta é apenas a fachada do site. Não tem muita coisa, apenas uma explicação. Você precisa ver em ordem: primeiro, clique na “Linha do Tempo” e só depois na “Surpresa Final”.</p>

        <p>Espero que ela goste. Foi muito feliz fazer este site. Eu te amo.</p>
 </div>
      <div class="bacx"><Carrosel/></div>
    </div>
  

    )}

export default HomePage;