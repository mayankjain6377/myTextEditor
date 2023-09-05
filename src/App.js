import './App.css';
import Navbar from './components/Navbar';
import Textbox from './components/Textbox';
// import Textform from './components/childComp';
// import ParentComp from './components/parentComp';

function App() {
  return (
    <div className="App">

      {/* Tips and information given by sir on last day  */}


      {/* private routes in react
      learn js . org
      obsidian software
      CRUD operation in MERN
      subabase
      vite app better than create react
      next js better than react ,react web can not be ranked in google
      mongodb
      https://www.learn-js.org/
https://www.youtube.com/watch?v=enOsPhp2Z6Q
https://www.makeuseof.com/create-protected-route-in-react/


- [x] Make the private route in react
- [ ] use the login to login a user using the json data 
- [ ] show the user profile page , else please login to continue 
- [x] https://www.learn-js.org/
- [x] Tell about the what to do after this -> start with CRUD operation in MERN (https://www.youtube.com/watch?v=enOsPhp2Z6Q
- [x] https://www.makeuseof.com/create-protected-route-in-react/
      use this more ->https://sharemytext.web.app/
- [x] Use the Linked In Post the apps you make screen shots  , deploy links for use , post ,  comments just use it 
- [ ] 
- [x] My Podcast , and upcoming one also 😉
- [x] Start learn about React more app , Mongo Db setup , express , 
- [x] then , Use somethings like Supabase with react , Deploy on Firebase , etc 
- [x] How to make a react app using #Vite , 
- [x] Start learning about NEXT js (same hai react hi , it is framework)
- [x] You can learn about Sql Database like - > PostgreSQL 
- [ ]  */}

 





      {/* <ParentComp /> */}
      <Navbar title="TextEditor" abouttext="About Us" />
      <div className="container" my-3>
        <Textbox title="Enter text below:" />
      </div>
      

    </div>
  );
}

export default App;
