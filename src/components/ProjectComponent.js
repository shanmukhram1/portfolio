import React from 'react';
import { Card, CardImg ,Breadcrumb ,BreadcrumbItem} from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderProjectItem({dish}){
    return(
        <Card>
            <Link to={`/project/${dish.id}`}>
                <CardImg width="100%" src={dish.image} alt={dish.name}/>
                <h4>{dish.name}</h4>
            </Link>
        </Card>
    );
}
const Project = (props) => {
    const menu=props.dishes.map((dish)=>{
        return(
            <div key={dish.id} className="col-12 col-md-5 m-1">
                <RenderProjectItem dish={dish}/>
            </div>
        );
    });
    return(
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Project</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Projects</h3>
                    <hr/>
                </div>
            </div>
            <div className="row">
                {menu}
            </div>
        </div>
    );
}

export default Project;