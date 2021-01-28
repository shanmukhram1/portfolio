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
                                    {"Since I heard the saying, “All study and no play makes Jack a dull boy”, I honestly have been a bit scared to study all day. So, participating in extra-curricular activities in my leisure time were a must, and to my surprise found out that I was quite good at them. Some of the notable mentions must be; I served Vellore Institute of Technology-Andhra Pradesh as the Captain of the Basketball Team for two consecutive years (2017-2019), I participated in both Cricket and Table Tennis for one year (2017-2018) as well"}
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
                                <CardText>{" I have participated in Marching and escorting the Vice-chancellor Dr. D Subhakar and the Vice president Dr. Shekar Vishwanathan on the 15th of August(2019) and the 26th of January(2020) on the occasion of Independence Day and Republic Day, respectively."}</CardText>
                            </CardBody>
                        </Card>
                    </FadeTransform>               
                 </div>
            </div>
        </div>
    );
}

export default Home;