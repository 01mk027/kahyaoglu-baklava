import React from 'react';
import midye from '../images/midye.png';
import dilim from '../images/dilim.jpg';
import kadayif from '../images/kadayif1.jpg';
import karesarma from '../images/karesarma.jpg';
import tepsikarisik from '../images/tepsikarisik.jpg';
import sanatciaysel from '../images/sanatciaysel.jpg';
import { Carousel, Jumbotron, Container } from 'react-bootstrap';
export const About = () => {
  return(<>
    <Carousel>
      <Carousel.Item>
        <img
          className="w-100"
          src={midye}
          alt="First slide"
          style={{height:550}}
        />
      </Carousel.Item>

      <Carousel.Item>
      <img
        className="w-100"
        src={dilim}
        alt=""
        style={{height:550}}
      />

      </Carousel.Item>
      <Carousel.Item>
      <img
        className="w-100"
        src={kadayif}
        alt=""
        style={{height:550}}
      />
      </Carousel.Item>

      <Carousel.Item>
      <img
        className="w-100"
        src={karesarma}
        alt=""
        style={{height:550}}
      />

      </Carousel.Item>

      <Carousel.Item>
      <img
        className="w-100"
        src={tepsikarisik}
        alt=""
        style={{height:550}}
      />
      </Carousel.Item>

      <Carousel.Item>
      <img
        className="w-100"
        src={sanatciaysel}
        alt=""
        style={{height:550}}
      />
      </Carousel.Item>
    </Carousel>
    <div className="jumbotron jumbotron-fluid bg-success">
    <div className="container-fluid">
    <h1 className="display-4 text-light justify-content-center">
     <i>SİZ HERŞEYİN EN İYİSİNE LAYIKSINIZ</i>
    </h1>
    <p className="lead text-light justify-content-center">
     Gaziantep'in en iyi fıstıklarını kullanarak yaptığımız baklavalarımızı, siz değerli müşterilerimizin memnuniyetini en üst düzeye çıkaracak şekilde imal ediyoruz.
     Müşteri memnuniyetini temel ilke edinen işletmemiz, gıda üretiminde hijyen odaklı çalışmayı kendisine ilke edinmiştir.
    </p>
    </div>
    </div>

    </>)
}
