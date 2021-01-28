import React,{Component} from 'react';
import { Breadcrumb, BreadcrumbItem} from 'reactstrap';
import { Link } from 'react-router-dom';


class Contact extends Component{
    render(){
        return(
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Contact</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Contact</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row row-content">
                    <div className="col-12">
                    <h3>Location Information</h3>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                            <h5>Address</h5>
                            <address>
                            851, SRT Colony<br />
                            Sanathnagar,Hyderabad 500018<br />
                            India<br />
                            <i className="fa fa-phone"></i>: +91 7995447879<br />
                            <i className="fa fa-envelope"></i>: <a href="mailto:shanmukhram123@gmail.com">shanmukhram123@gmail.com</a><br/>
                            <i className="fa fa-envelope"></i>: <a href="mailto:peri.shanmukha@vitap.ac.in">peri.shanmukha@vitap.ac.in</a><br/>
                            <i className="fa fa-linkedin"></i>: <a href="https://www.linkedin.com/in/shanmukha-ram-1801b416a">linkedin.com/in/shanmukha-ram-1801b416a</a>
                            </address>
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1">
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-secondary" href="tel:++91 7995447879"><i className="fa fa-phone"></i> Call</a>
                            <a role="button" className="btn btn-success" href="mailto:shanmukhram123@gmail.com"><i className="fa fa-envelope-o"></i> Email</a>
                            <a role="button" className="btn btn-primary" href="https://www.linkedin.com/in/shanmukha-ram-1801b416a"><i className="fa fa-linkedin"></i> Linkedin</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;