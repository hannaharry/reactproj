import React from 'react';

/*b hur man importerar bilder*/
import rockigt from '../rockigt2.jpeg';
import maskiner from '../maskiner.png';
import musik from '../musik.jpeg';
import groove from '../groove.png';


class Songs extends React.Component{
	render(){
		return (
			<body>
	
    <div className="toplist">
	
	<div className="song">
		<div className="info left">
		    <h3>Song 1</h3>
		    <p>Artist 1</p>
		</div>
		<div className="info right">
		    <h3>Albumnamn 1</h3>
		    <p>2000</p>
		</div>
		
	    </div>
	    <hr/>
	    <div className="song">
		<div className="info left">
		    <h3>Song 2</h3>
		    <p>Artist 2</p>
		</div>
		<div className="info right">
		    <h3>Albumnamn 2</h3>
		    <p>1999 </p>
		</div>
		
	    </div>
	    <hr/>
	    <div className="song">
		<div className="info left">
		    <h3>Song 2</h3>
		    <p>Artist 2</p>
		</div>
		<div className="info right">
		    <h3>Albumnamn 2</h3>
		    <p>1999 </p>
		</div>
		
	    </div>
	    <hr/>
	    <div className="song">
		<div className="info left">
		    <h3>Song 2</h3>
		    <p>Artist 2</p>
		</div>
		<div className="info right">
		    <h3>Albumnamn 2</h3>
		    <p>1999 </p>
		</div>
		
	    </div>
	    <hr/>
	    <div className="song">
		<div className="info left">
		    <h3>Song 2</h3>
		    <p>Artist 2</p>
		</div>
		<div className="info right">
		    <h3>Albumnamn 2</h3>
		    <p>1999 </p>
		</div>
		
	    </div>
	    <hr/>
	    <div className="song">
		<div className="info left">
		    <h3>Song 2</h3>
		    <p>Artist 2</p>
		</div>
		<div className="info right">
		    <h3>Albumnamn 2</h3>
		    <p>1999 </p>
		</div>
		
	    </div>
	    <hr/>
	    <div className="song">
		<div className="info left">
		    <h3>Song 2</h3>
		    <p>Artist 2</p>
		</div>
		<div className="info right">
		    <h3>Albumnamn 2</h3>
		    <p>1999 </p>
		</div>
		
	    </div>
	    <hr/>
	    <div className="song">
		<div className="info left">
		    <h3>Song 2</h3>
		    <p>Artist 2</p>
		</div>
		<div className="info right">
		    <h3>Albumnamn 2</h3>
		    <p>1999 </p>
		</div>
		
	    </div>
	    <hr/>
	    <div className="song">
		<div className="info left">
		    <h3>Song 2</h3>
		    <p>Artist 2</p>
		</div>
		<div className="info right">
		    <h3>Albumnamn 2</h3>
		    <p>1999 </p>
		</div>
		
	    </div>
	    <hr/>
	    <div className="song">
		<div className="info left">
		    <h3>Song 2</h3>
		    <p>Artist 2</p>
		</div>
		<div className="info right">
		    <h3>Albumnamn 2</h3>
		    <p>1999 </p>
		</div>
		
	    </div>
	    <hr/>
    </div>

    <div className ="albums">
	<img src={rockigt} alt="Bild 1"/>
	<img src={maskiner} alt="Bild 2"/>
	<img src={musik} alt="Bild 3"/>
	<img src={groove} alt="Bild 4"/>
    </div>


</body>
		);
	}
}

export default Songs;