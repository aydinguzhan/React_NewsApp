import React from 'react';
import {Carousel} from'react-bootstrap'

class HorizontalCard extends React.Component{
    constructor(props){
        super();

        this.state = {
            src : "https://foto.haberler.com/manset/2022/03/11/irlandali-vekilden-tarihi-konusma-avrupa-nin-iki_14789135_15_k.jpg",
            title:"DÜNYA",
            description:"İrlandalı vekilden Avrupa Parlamentosu'na ırkçılık dersi: Ukrayna ve Afganistan'a çifte standart uyguluyorsunuz"
        }
    }
    render(){
        return(
                <div style={{ background:"#eee"}} className="mt-4">
                    <Carousel className='HorizantalCard'>
                        <Carousel.Item interval={2000}>
                            <img
                                className="d-block w-100 "
                                src={this.props.src}
                                alt="First slide"
                                style={{height:"400px"}}
                            />
                            <Carousel.Caption>
                                <h3>{this.props.title}</h3>
                                <p>{this.props.description}.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={2000}>
                            <img
                                className="d-block w-100 "
                                src={this.props.src1}
                                alt="First slide"
                                style={{height:"400px"}}
                            />
                            <Carousel.Caption>
                                <h3>{this.props.title}</h3>
                                <p>{this.props.description1}.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={2000}>
                            <img
                                className="d-block w-100 "
                                src={this.props.src2}
                                alt="First slide"
                                style={{height:"400px"}}
                            />
                            <Carousel.Caption>
                                <h3>{this.props.title}</h3>
                                <p>{this.props.description2}.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                    <style>{`
                         .HorizantalCard{
                            box-shadow:-2px 2px 10px 5px gray;
                         }
                         
                    `}</style>
                </div>


        ) }
}


export default HorizontalCard;