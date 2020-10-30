import React,{Component} from 'react';
import Project from './ProjectComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import DishDetail from './DishDetailComponent';
import About from './AboutComponent';
import {Switch ,Route ,Redirect} from 'react-router-dom';
import {DISHES} from '../shared/dishes';
import {COMMENTS} from '../shared/commments';
import {LEADERS} from '../shared/leaders';

class Main extends Component {
  constructor(props)
  {
    super(props);
    this.state={
      dishes:DISHES,
      comments:COMMENTS,
      leaders:LEADERS
    }
  }

  render(){
    const HomePage = () => {
        return(
            <Home/>
        );
      }
  
      const DishWithId = ({match}) => {
        return(
            <DishDetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
              comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
            />
        );
      };

    const AboutUs = () => {
        return(
            <About leaders={this.state.leaders} />
        );
    }
    return (
        <div>
            <Header/>
            <Switch>
                <Route path='/home' component={HomePage}/>
                <Route exact path='/project' component={() => <Project dishes={this.state.dishes}/>}/>
                <Route path='/project/:dishId' component={DishWithId}/>
                <Route exact path='/contact' component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm}/>}/>
                <Route exact path='/resume' component={AboutUs}/>
                <Redirect to='/home'/>
            </Switch>
            <Footer/>
        </div>
    );
  }
}

export default Main;
