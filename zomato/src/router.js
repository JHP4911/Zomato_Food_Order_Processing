import {Route, BrowserRouter} from 'react-router-dom';
import Home from './componenets/home';
import Filter from './componenets/filter';
import Restaurant from './componenets/restaurant';
import Header from './componenets/header';
import Details from './componenets/details';
const Router = () =>{
    return(
        <BrowserRouter>
            <Header />
           <Route exact path ="/" component = {Home} />
           <Route path ="/home" component ={Home} />
           <Route path ="/filter" component ={Filter} />
           <Route path ="/restaurant" component ={Restaurant} />
           <Route path ="/details" component ={Details} />
            
        
        </BrowserRouter>
    )
}

export default Router;