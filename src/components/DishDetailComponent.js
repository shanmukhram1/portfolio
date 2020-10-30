import React from 'react';
import { Card,CardBody,CardText,CardImg,CardTitle,BreadcrumbItem,Breadcrumb} from 'reactstrap';
import {Link} from 'react-router-dom';
import '/home/kalyan/Documents/CourseEra/React/confusion/src/App.css';
import {FadeTransform,Fade,Stagger} from 'react-animation-components';
import {baseUrl} from '../shared/baseUrl';

function RenderDish({dish}){
    if(dish!=null)
    {
        return(
            <FadeTransform in
                tranformProps={{
                    exitTransform:'scale(0.5) translateY(-50%)'
                }}>
                <Card>
                    <CardImg top width="100%" src={baseUrl+dish.image} alt={dish.name}/>
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
                        console.log(dish);
                        return(   
                            <Fade in>               
                                <li key={dish.id}>
                                    <p>{"Project Poster - "}<a href="file:///home/kalyan/Documents/CourseEra/React/confusion/public/pdf/AGRI.pdf">Open PDF</a></p>
                                    <p>{"SLRDT File - "}<a href={dish.author}  target="_blank" download>Download</a></p>
                                    <img src={dish.slrdt} alt={"actuator"} height={100} width={300}/>
                                    <p>{"Circuit Diagram - "}<a href={dish.circuitLink}  target="_blank">Open JSON File</a></p>
                                    <img src={dish.circuitImage} alt={"actuator"} height={100} width={300}/>
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
                                </li>
                            </Fade>
                        );
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