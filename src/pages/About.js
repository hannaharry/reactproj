import React from "react";
import profilePic from '../jay.jpeg';
import LikeBtn from '../LikeBtn';

class About extends React.Component{
	render(){
		return(
			<body>
				<div className="about">
				<img id="profilepic" src={profilePic} alt="Profile" />
	<div className="bio-text">
		<h1 id="indexTitle">Bio</h1>
		<p>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultricies mauris a faucibus cursus. Pellentesque lobortis diam at risus porttitor posuere. Nullam quis congue nunc, non lobortis lacus. Nam hendrerit dolor quis ex pretium vehicula. Donec a purus tristique, tempus velit et, faucibus sapien. Nullam ullamcorper facilisis arcu in vulputate. Curabitur non nisi sit amet elit pulvinar laoreet. Aliquam erat volutpat. Aenean tincidunt non diam ut viverra. Curabitur at ligula ut nisi tempor condimentum. Donec hendrerit gravida consequat. Morbi ultrices sapien turpis, vitae condimentum ex pellentesque in. Praesent sed dictum magna, efficitur ultrices ante. Morbi et condimentum nisl. Proin nec arcu sed augue elementum sagittis et in augue. Sed nec nunc vitae tellus placerat tincidunt.<br/><br/>
		Maecenas vel pretium libero, quis pretium mi. Quisque scelerisque risus enim, nec viverra dolor congue eu. Ut ultricies mattis nisl. Donec condimentum condimentum ligula ac lacinia. Praesent sit amet velit imperdiet odio mattis mollis. Praesent tellus elit, feugiat a commodo quis, fringilla ac erat. Suspendisse turpis nisl, aliquet ut euismod eget, congue et massa. Proin ut nisi luctus quam ullamcorper placerat. Suspendisse potenti. Vivamus venenatis tincidunt dui, ut finibus sapien finibus sed. Cras bibendum varius metus, eget hendrerit leo venenatis quis. Sed id interdum nisi.<br/><br/>
			
			
			
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultricies mauris a faucibus cursus. Pellentesque lobortis diam at risus porttitor posuere. Nullam quis congue nunc, non lobortis lacus. Nam hendrerit dolor quis ex pretium vehicula. Donec a purus tristique, tempus velit et, faucibus sapien. Nullam ullamcorper facilisis arcu in vulputate. Curabitur non nisi sit amet elit pulvinar laoreet. Aliquam erat volutpat. Aenean tincidunt non diam ut viverra. Curabitur at ligula ut nisi tempor condimentum. Donec hendrerit gravida consequat. Morbi ultrices sapien turpis, vitae condimentum ex pellentesque in. Praesent sed dictum magna, efficitur ultrices ante. Morbi et condimentum nisl. Proin nec arcu sed augue elementum sagittis et in augue. Sed nec nunc vitae tellus placerat tincidu

			nt.<br/><br/>
			Maecenas vel pretium libero, quis pretium mi. Quisque scelerisque risus enim, nec viverra dolor congue eu. Ut ultricies mattis nisl. Donec condimentum condimentum ligula ac lacinia. Praesent sit amet velit imperdiet odio mattis mollis. Praesent tellus elit, feugiat a commodo quis, fringilla ac erat. Suspendisse turpis nisl, aliquet ut euismod eget, congue et massa. Proin ut nisi luctus quam ullamcorper placerat. Suspendisse potenti. Vivamus venenatis tincidunt dui, ut finibus sapien finibus sed. Cras bibendum varius metus.
		</p>
		<LikeBtn></LikeBtn>
	</div>
    </div>
			</body>
		)
	}
}

export default About;