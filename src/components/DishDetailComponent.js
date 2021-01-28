import React from 'react';
import { Card,CardBody,CardText,CardImg,CardTitle,BreadcrumbItem,Breadcrumb} from 'reactstrap';
import {Link} from 'react-router-dom';
import '/home/kalyan/Documents/CourseEra/React/confusion/src/App.css';
import {FadeTransform,Fade,Stagger} from 'react-animation-components';

function RenderDish({dish}){
    if(dish!=null)
    {
        return(
            <FadeTransform in
                tranformProps={{
                    exitTransform:'scale(0.5) translateY(-50%)'
                }}>
                <Card>
                    <CardImg top width="100%" src={dish.image} alt={dish.name}/>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </FadeTransform>
        );
    }
    else{
        return(
            <div></div>
        );
    }
 }

function RenderComments({comments,postComment,dishId}){
    if(comments!=null){
    return(
        <div className="col-12 col-md-5 m-1">
            <h4><b>Details</b></h4>
            <ul className="list-unstyled">
                <Stagger in>
                    {comments.map((dish) => {
                        if(dish.id===0){
                            return(   
                                <Fade in>               
                                    <li key={dish.id}>
                                        <p>{"Project Report - "}<a href={dish.author}  target="_blank" rel="noopener noreferrer">Download</a></p>
                                        <p>{"Design of Actuator and Circuit Diagram - "}<a href={dish.drive}  target="_blank" rel="noopener noreferrer">Open</a></p>
                                        <div className="row">
                                            <div className="col-12 col-md-8">
                                                <video autoPlay muted loop id="myVideo" height={200} width={300} style={{marginTop:20}} controls>
                                                    <source src={dish.video1} type="video/mp4"/>
                                                </video>
                                            </div>
                                            <div className="col-12 col-md-2">
                                                <video autoPlay id="myVideo" height={200} width={300} controls style={{marginTop:20}}>
                                                    <source src={dish.video2} type="video/mp4"/>
                                                </video>
                                            </div>
                                        </div>
                                        <p>{dish.description}</p>
                                    </li>
                                </Fade>
                            );
                        }
                        else{
                            return(   
                                <Fade in>               
                                    <li key={dish.id}>
                                        <p>{"Project Report - "}<a href={dish.author}  target="_blank" rel="noopener noreferrer">Download</a></p>
                                        <p>{"Design and Simulation Files - "}<a href={dish.drive}  target="_blank" rel="noopener noreferrer">Open</a></p>
                                        <div className="row">
                                            <div className="col-12 col-md-8">
                                                    <img src={dish.video1} alt={"honeycomb"} height={200} width={300} style={{marginTop:20}}/>
                                            </div>
                                            <div className="col-12 col-md-2">
                                                    <img src={dish.video2} alt={"honeycomb"}style={{marginTop:20}} height={200} width={300}/>
                                            </div>
                                        </div>
                                        <p>{dish.description}</p>
                                        <div className="row">
                                            <div className="col-12 col-md-8">
                                                <video autoPlay id="myVideo" height={200} width={300} controls style={{marginTop:20}}>
                                                    <source src={dish.video3} type="video/mp4"/>
                                                </video>
                                            </div>
                                            <div className="col-12 col-md-2">
                                                    <img src={dish.video4} alt={"honeycomb"}style={{marginTop:20}} height={200} width={300}/>
                                            </div>
                                        </div>
                                        <p>{dish.description1}</p>
                                    </li>
                                </Fade>
                            );
                        }
                    })}
                </Stagger>
            </ul>
        </div>
        );
    }
    }

const DishDetail = (props) => {
    if (props.dish != null) 
        return(
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/project">Project</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{props.dish.name}</h3>
                    <hr />
                </div>  
            </div>
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <RenderDish dish={props.dish}/>
                </div>
                    <RenderComments comments={props.comments} postComment={props.postComment} dishId={props.dish.id}/>
            </div>
        </div>
        );
    else{
        return(
            <div></div>
        )
    }
    }

export default DishDetail;