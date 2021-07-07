import React from "react";
import IndexPage from "./components/indexPage/indexPage"
import OurCcoffee from "./components/our_coffee/Our_coffee";
import Pleasure from "./components/pleasurePage/Pleasure";
import ContactUs from "./components/contactPage/ContactUs";
import About_it from "./components/about_itPage/About_it";


import {BrowserRouter,Switch,Route} from "react-router-dom";
function App() {
  return (
    <div>
       <BrowserRouter>
      <Switch>
                  <Route  path='/'exact>
                    <IndexPage/>
                  </Route> 
                  <Route path='/ourCoffee'>
                    <OurCcoffee/>
                  </Route> 
                  <Route path='/pleasure'>
                    <Pleasure/>
          </Route> 
          <Route path='/contact'>
            <ContactUs/>
          </Route>
          <Route path='/coffee/:id' component={About_it}/>
        </Switch>
      </BrowserRouter> 
      {/* <IndexPage/>  
        <Our_coffee/> 
       <Pleasure/>
      <ContactUs/>
      <About_it/>  */}
    </div>
  );
}

export default App;
