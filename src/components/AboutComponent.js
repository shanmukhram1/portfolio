import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardImg, CardText} from 'reactstrap';
import { Link } from 'react-router-dom';


function About(props) {
    return(
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>About Us</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Resume</h3>
                    <hr />
                </div>     
                <div className="col-12 offset-1 col-sm-10">
                    <Card>
                       <CardBody style={{borderColor:'solid black'}}>
                            <CardText style={{fontSize:40}}><a href="/portfolio/pdf/resume.pdf" target="_blank" rel="noopener noreferrer" style={{color:"#FF0000"}}>Click Here to Access PDF</a></CardText>
                        </CardBody>
                        <CardImg src={"images/shannu.png"} width={600}/>
                    </Card>
                </div>           
            </div>
        </div>
    );
}

export default About;    