import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import {baseUrl} from '../shared/baseUrl';
import {Fade,Stagger} from 'react-animation-components';

function RenderList({leaders,isLoading,errMess}){
    if(isLoading){
        return(
            <Loading/>
        )
    }
    else if(errMess){
        return(
            <h4>{errMess}</h4>
    );
    }
    else{
    const leader=leaders.map((leader) => {
            return(
                <Fade in>
                    <Media tag="li" key={leader.id}>
                        <Media left top href="#"  className="ml-3">
                            <Media object src={baseUrl+leader.image} alt={leader.name}/>
                        </Media>
                        <Media body className="ml-5">
                            <Media heading>
                                {leader.name}
                            </Media>
                            <p>{leader.designation}</p>
                            <p>{leader.description}</p>
                        </Media>
                    </Media>
                </Fade>
            );
        }
    );
    return(
        <Stagger in>
            <Media list>
                {leader}
            </Media>
        </Stagger>
    );
}
}

function About(props) {
    return(
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>About Us</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>About Us</h3>
                    <hr />
                </div>                
            </div>
            <div className="row row-content">
                <div className="col-12">
                    <Card>
                        <CardBody className="bg-faded">
                            <blockquote className="blockquote">
                                <p className="mb-0">You better cut the pizza in four pieces because
                                    I'm not hungry enough to eat six.</p>
                                <footer className="blockquote-footer">Yogi Berra,
                                <cite title="Source Title">The Wit and Wisdom of Yogi Berra,
                                    P. Pepe, Diversion Books, 2014</cite>
                                </footer>
                            </blockquote>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12">
                    <h2>Corporate Leadership</h2>
                </div>
                <div className="col-12">
                    <RenderList leaders={props.leaders} isLoading={props.promosLoading} errMess={props.promosErrMess}/>
                </div>
            </div>
        </div>
    );
}

export default About;    