import React, { useEffect, useState } from 'react';
// import PokemonForm from './componentes/pokemonForm/PokemonForm';
import SignUp from './componentes/SignUpAndLogIn/SignUp'
import LogIn from './componentes/SignUpAndLogIn/Login';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser, protectedData } from './actions/UserActions';

const App = () => {
  const [hideRouter1, setHideRouterUser] = useState(false);
  const [hideRouter2, setHideRouterAdmin] = useState(true);
  const [hideRouter3, setHideRouterProvider] = useState(true);
  const dispatch = useDispatch();

   useEffect(()=>{
    const protectedId = async ()=> {
    const token = localStorage.getItem("auth");
    try {
      const response =  await dispatch(protectedData(token));        
      // dispatch(fetchUser());
      console.log(response.payload.user.role)

      let ManegeRouters =[];
      let role=response.payload.user.role
      if(role ==1){
        ManegeRouters= [true ,false,true ]
      }else if (role ==2){
        ManegeRouters= [true ,true,false]
      }else{
        ManegeRouters= [false ,true,true ]
      }
      setHideRouterUser(ManegeRouters[0]);
      setHideRouterAdmin(ManegeRouters[1]);
      setHideRouterProvider(ManegeRouters[2]);
console.log(ManegeRouters)

    } catch (error) {
      console.error('Failed to add Pokemon:', error);
    }
  }
  protectedId()
   },[])



   const AppRouter1 = () => {
    return (
      <Router>
        {/* <NavListMenu /> */}
        <Routes>
          {/* <Route index element={<PokemonForm />} /> */}
          <Route path="SignUp" element={<SignUp />} />    
          <Route path="LogIn" element={<LogIn />} />    
        </Routes>
      </Router>
    );
  };

  const AppRouter2 = () => {
    return (
      <Router>
        {/* <Sidebar /> */}
          {/* <Routes>
            <Route index element={<MainDashboard />} />
          </Routes> */}
      </Router>
    );
  };

  const AppRouter3 = () => {
    return (
      <Router>
        {/* <NavListMenu /> */}
        {/* <Routes>
          <Route path="ContactUs" element={<Contact />} />
          <Route path="About" element={<About />} />
        </Routes> */}
      </Router>
    );
  };

  return (

 
    <>
      {hideRouter1 ? null : (
        <>
          <AppRouter1 />
        </>
      )}

      {hideRouter2 ? null : (
        <>
          <div className="flex">
            <AppRouter2 />
          </div>
        </>
      )}

      {hideRouter3 ? null : (
        <>
          <AppRouter3 />
        </>
      )}
 
    </>

      
  );
};

export default App;
