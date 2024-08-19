import Home from "./pages/Home";
import About from "./pages/About";
import Songs from "./pages/Songs";
import Play from "./pages/Play";
import News from "./pages/News";
import Header from "./components/Header";
import Welcome from "./components/Welcome"

import LikeBtn from './LikeBtn';

/*Routes ist för switch*/ 
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import './App.css';

function App() {

	
  return (
    <div> 
	
	<Router>
		<Header />
		{/*<Home />*/}
		<Routes>
          		<Route path="/index" element={<><Welcome message ="Welcome"/><Home /> </>} />  
			<Route path="/About" element={<><Welcome message ="Welcome to about"/><About /> </>} />
			<Route path="/Songs" element={<><Welcome message ="Welcome to songs"/><Songs /> </>} />
			<Route path="/studio" element={<><Welcome message ="Welcome to studio"/><Play/> </>} />
			<Route path="/news" element={<><Welcome message ="Welcome to news"/><News /> </>} />
        	</Routes>
	</Router>
	<LikeBtn />
    </div>
  );
}

export default App;
