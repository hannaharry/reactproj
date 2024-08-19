import React from 'react';
import rockigt from '../rockigt2.jpeg';
import maskiner from '../maskiner.png';
import musik from '../musik.jpeg';
import groove from '../groove.png';

class News extends React.Component{
	render(){
		return (
			<body>
			 <div className="news_left">

<img src={rockigt} alt="Bild 1"/>
	<div className="news_text">
		<h1>Hej</h1>
		<p>Varnindkfhvw he qg segr hjwqge ge wqjhgrejwhgr ewqhrgj egek wqrjkwg eqjwgr reveqjhghgv dgvfsg shghgfhg sh
			Varnindkfhvw he qg segr hjwqge ge wqjhgrejwhgr ewqhrgj egek wqrjkwg eqjwgr reveqjhghgv dgvfsg shghgfhg sh
			Varnindkfhvw he qg segr hjwqge ge wqjhgrejwhgr ewqhrgj egek wqrjkwg eqjwgr reveqjhghgv dgvfsg shghgfhg sh
		</p>
		<div id="more_news">
			<p>Even more news 1</p>
		</div>
		<button className="rectangle-button" id="knapp">Read more</button>
	</div>
</div>

<div className="news_right">
<div className="news_text">
	<h1>Hej</h1>
	<p id="paragraf2">Varnindkfhvw he qg segr hjwqge ge wqjhgrejwhgr ewqhrgj egek wqrjkwg eqjwgr reveqjhghgv dgvfsg shghgfhg sh
		Varnindkfhvw he qg segr hjwqge ge wqjhgrejwhgr ewqhrgj egek wqrjkwg eqjwgr reveqjhghgv dgvfsg shghgfhg sh
		Varnindkfhvw he qg segr hjwqge ge wqjhgrejwhgr ewqhrgj egek wqrjkwg eqjwgr reveqjhghgv dgvfsg shghgfhg sh
	</p>
	<button className="rectangle-button" id ="knapp1">Read more</button>
</div>
<img src={groove} alt="Bild 2"/>
</div>

<div className="news_left" id="third">

<img src={maskiner} alt="Bild 1" />
	<div className="news_text">
		<h1>Hej</h1>
		<p id="paragraf3">Varnindkfhvw he qg segr hjwqge ge wqjhgrejwhgr ewqhrgj egek wqrjkwg eqjwgr reveqjhghgv dgvfsg shghgfhg sh
			Varnindkfhvw he qg segr hjwqge ge wqjhgrejwhgr ewqhrgj egek wqrjkwg eqjwgr reveqjhghgv dgvfsg shghgfhg sh
			Varnindkfhvw he qg segr hjwqge ge wqjhgrejwhgr ewqhrgj egek wqrjkwg eqjwgr reveqjhghgv dgvfsg shghgfhg sh
		</p>

		<button className="rectangle-button" id="knapp2">Read more</button>
	</div>
	
</div>
			</body>
		);
	}
}

export default News;