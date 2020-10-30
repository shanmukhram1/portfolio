import React from 'react';
import {Card,CardBody,CardImg,CardText} from 'reactstrap';
import {FadeTransform} from 'react-animation-components';


function Home(props){
    return(
        <div className="container">
            <div className="row align-items-start">
                <div className="col-12 col-md-6 m-1">
                    <FadeTransform in
                        tranformProps={{
                            exitTransform:'scale(0.5) translateY(-50%)'
                        }}>
                        <Card>
                            <CardImg src={'assets/images/sports.jpg'} alt={"sports"}/>
                            <CardBody>
                                <CardText>
                                    {"While academics have usually occupied centre stage in my life, and work has mostly felt like play to me, I have participated in and, I am happy to say, even excelled at traditional forms of playing as well. I have been an avid basketball player and served as my University’s basketball team captain for two consecutive years (2017-2019). I have also participated in both the Cricket and Table Tennis teams (2017-2018)."}
                                </CardText>
                            </CardBody>
                        </Card>
                    </FadeTransform>
                </div>
                <div className="col-12 col-md -6m-1">
                     <FadeTransform in
                        tranformProps={{
                            exitTransform:'scale(0.5) translateY(-50%)'
                        }}>
                        <Card>
                            <CardImg src={'assets/images/marchpast.jpg'} alt={"march-past"}/>
                            <CardBody>
                                <CardText>{" I participated in slow Marching and escorting the Vice-chancellor of our institution on the 26th of January and 15th of august on the occasion of Republic Day and Independence day respectively."}</CardText>
                            </CardBody>
                        </Card>
                    </FadeTransform>               
                 </div>
            </div>
        </div>
    );
}

export default Home;