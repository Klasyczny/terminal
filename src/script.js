// script.js
var React = require('react');
var ReactDOM = require('react-dom');

var App = React.createClass({

  getInitialState : function() {
    return {
      posts : {}
    }
  }, 
  addRecord : function(post) {
    var timestamp = (new Date()).getTime();
    this.state.posts['post-' + timestamp] = post;
    this.setState({ posts : this.state.posts });
  },
  renderRecord : function(key){
    return <NewRecord key={key} index={key} details={this.state.posts[key]} />
  },
  render : function() {
  	var imgOne = "http://img06.deviantart.net/46aa/i/2012/094/7/c/galactic_interference_by_blph-d4uyx0y.jpg";
    var imgTwo ="https://pre04.deviantart.net/6dfa/th/pre/i/2012/334/4/9/bright_arms_in_space_by_supposedlyhuman-d5mmkmm.jpg";
    var imgThree ="http://www.nasa.gov/sites/default/files/images/729665main_A-BlackHoleArt-pia16695_full.jpg";

    var RecordOne = "In this recent Space Telescope observation, one such irregular galaxy, located around 16 million light-years from Earth, has been observed. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu leo urna. Curabitur at euismod diam. Pellentesque ac sapien non urna iaculis tincidunt id sed augue. Maecenas lobortis justo elit. Vestibulum vitae euismod odio. Etiam tincidunt, erat eget placerat hendrerit, arcu lacus viverra dui, sit amet porttitor felis diam et justo. Ut porta quam odio, pharetra aliquam massa accumsan sit amet. Maecenas ut enim sem.";
    var RecordTwo = "Our quest on C-45-RHCT-421 has been to ‘follow the water,’ in our search for life in the universe, and now we have convincing science that validates what we’ve long suspected. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu leo urna. Curabitur at euismod diam. Pellentesque ac sapien non urna iaculis tincidunt id sed augue. Maecenas lobortis justo elit. Vestibulum vitae euismod odio. Etiam tincidunt, erat eget placerat hendrerit, arcu lacus viverra dui, sit amet porttitor felis diam et justo. Ut porta quam odio, pharetra aliquam massa accumsan sit amet. Maecenas ut enim sem.";
   	var RecordThree = "Over the vast distance between this galaxy and Earth, interstellar gases will cause the radio waves to scintillate — in other words, the steady radio signal will appear to flicker from afar. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu leo urna. Curabitur at euismod diam. Pellentesque ac sapien non urna iaculis tincidunt id sed augue. Maecenas lobortis justo elit. Vestibulum vitae euismod odio. Etiam tincidunt, erat eget placerat hendrerit, arcu lacus viverra dui, sit amet porttitor felis diam et justo. Ut porta quam odio, pharetra aliquam massa accumsan sit amet. Maecenas ut enim sem.";

   return (
      <div>
        <Landing />
			<div>
				<div className="comp-terminal">
					<div className="device"><code><p>RECORD HISTORY</p>
				    <Record ptitle="irregular galaxy spotted" pimg={imgOne} date="Nov 2, 1994" postbody={RecordOne} author="Commander Shepard" comments="2" tags=""/>
          			<Record ptitle="Evidence of liquid water confirmed" pimg={imgTwo} postbody={RecordTwo} date="Aug 15, 2006" author="Dr Gerard" comments="5"/>
          			<Record ptitle="Mystery Fast Radio Burst Caused By Flashing Black Hole" pimg={imgThree} date="Mar 9, 2015" postbody={RecordThree} author="Cpt. Emma Newton" comments="3"/>
				    <div className="list-of-records">
              			{Object.keys(this.state.posts).map(this.renderRecord)}
          			</div>
          			</code></div>
				</div>
			</div>

          <AddRecordForm addRecord={this.addRecord} />
      </div>
    )
  }
  
});

var RecordDate = {
	getTime: function() {
		var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
		var d = new Date();
		var mon = month[d.getMonth()];
     	var day = d.getDate();
     	var year = d.getFullYear();

     	var dateAll = mon + " " + day + ", " + year;
   
     	return dateAll;
	}
}

var AddRecordForm = React.createClass({
  createRecord : function(event) {
    event.preventDefault();

    var record = {
      title : this.refs.title.value,
      name : this.refs.name.value,
      desc : this.refs.desc.value,
      image : this.refs.image.value
    }

    this.props.addRecord(record);
    this.refs.recordForm.reset();
  },

  render : function() {
    return (
    	<div className="padd">
	      <div className="callout secondary form-area">
	      <h5>Space Terminal</h5>
	        <form className="record-edit form" ref="recordForm" onSubmit={this.createRecord}>
			   	<div className = "form-group">
			      <label>Record Name</label>
			      <input type="text" className="form-control" ref="title" placeholder="Record Name Required" required/>
			   	</div>
			   	<div className = "form-group">
			      <label>Author Name</label>
			      <input type="text" className="form-control" ref="name" placeholder="Full Name required" required/>
			   	</div>
			   	<div className = "form-group">
			      <label>Gathered Data</label>
			      <textarea className="form-control user-caption" ref="desc" placeholder="Description" required/>
	           	</div>
			   	<div className = "form-group">
			      <label>Photo documentation (you can use this one: http://bit.ly/2vJ5iW2)</label>
			      <input type="text" className="form-control" ref="image" placeholder="The URL of the image for your record" required/>
			   	</div>
	          <button type="submit" class="button">Add Record</button>
	        </form>
	      </div>
	    </div>
    )
  }
});

var NewRecord = React.createClass({
	testClick : function() {
    alert('Test of click events');
  },
  render : function() {
    var details = this.props.details;
    return (
      <div className="terminal-record">
        <h3 className="ptitle">{RecordDate.getTime() + ": "}<span className="capital">{details.title}</span></h3>
        <img className="img-posted" src={details.image} alt={details.name}/>
        <p className="caption">{details.desc}</p>
        <div className="callout callout-post">
          <ul className="menu simple">
          <li><a href="#" onClick={this.testClick}>Author: {details.name}</a></li>
          <li><a href="#" onClick={this.testClick}>Comments: 0</a></li>
          <li><a href="#" onClick={this.testClick}>Tags: </a></li>
          </ul>
        </div>
      </div>
    )
  }
});

var Record = React.createClass({
  testClick : function() {
    alert('Test of click events');
  },
  render : function() {
    var com = "Comments";
    return (
      <div className="terminal-record">
        <h3 className="ptitle">{this.props.date + ": "}<span className="capital">{this.props.ptitle}</span></h3>
        <img className="img-posted" src={this.props.pimg} />
        <p>{this.props.postbody}</p>
        <div className="callout callout-post">
          <ul className="menu simple">
          <li><a href="#" onClick={this.testClick}>Author: {this.props.author}</a></li>
          <li><a href="#" onClick={this.testClick}>{com}: {this.props.comments}</a></li>
          <li><a href="#" onClick={this.testClick}>Tags: </a></li>
          </ul>
        </div>
      </div>
    )
  }
});

var Landing = React.createClass ({
	render: function() {
		return (
			<div>
				<NavBar />
				<div className="cosmos-container"><LandingText /></div>
			</div>
		)
	}
});

var NavBar = React.createClass ({
	render: function() {
		return (
			<div className="topbar">
	        	<div className="topbar-left">
	          		<ul className="menu">
	            		<li className="menu-text">Spaceman's Diary</li>
	            		<li><a href="#">Link1</a></li>
	            		<li><a href="#">Link2</a></li>
	            		<li><a href="#">Link3</a></li>
	          		</ul>
	        	</div>
	      	</div>
		)
	}
});

var LandingText = React.createClass ({
	render: function() {
		return (
			<div>
				<svg>
					<defs>
						<filter id="filter">
						    <feFlood flood-color="" result="black" />
						    <feFlood flood-color="red" result="flood1" />
						    <feFlood flood-color="limegreen" result="flood2" />
							<feOffset in="SourceGraphic" dx="3" dy="0" result="off1a"/>
							<feOffset in="SourceGraphic" dx="2" dy="0" result="off1b"/>
							<feOffset in="SourceGraphic" dx="-3" dy="0" result="off2a"/>
							<feOffset in="SourceGraphic" dx="-2" dy="0" result="off2b"/>
						    <feComposite in="flood1" in2="off1a" operator="in"  result="comp1" />
						    <feComposite in="flood2" in2="off2a" operator="in" result="comp2" />

				 		  	<feMerge x="0" width="100%" result="merge1">
								<feMergeNode in = "" />
								<feMergeNode in = "comp1" />
								<feMergeNode in = "off1b" />

								<animate 
									attributeName="y" 
						    		id = "y"
						    		dur ="4s"
						    		
						    		values = '104px; 104px; 30px; 105px; 30px; 2px; 2px; 50px; 40px; 105px; 105px; 20px; 6ßpx; 40px; 104px; 40px; 70px; 10px; 30px; 104px; 102px'

						    		keyTimes = '0; 0.362; 0.368; 0.421; 0.440; 0.477; 0.518; 0.564; 0.593; 0.613; 0.644; 0.693; 0.721; 0.736; 0.772; 0.818; 0.844; 0.894; 0.925; 0.939; 1'

						    		repeatCount = "indefinite" />
				 
								<animate attributeName="height" 
						    		id = "h" 
						    		dur ="4s"
						    		
						    		values = '10px; 0px; 10px; 30px; 50px; 0px; 10px; 0px; 0px; 0px; 10px; 50px; 40px; 0px; 0px; 0px; 40px; 30px; 10px; 0px; 50px'

						    		keyTimes = '0; 0.362; 0.368; 0.421; 0.440; 0.477; 0.518; 0.564; 0.593; 0.613; 0.644; 0.693; 0.721; 0.736; 0.772; 0.818; 0.844; 0.894; 0.925; 0.939; 1'

						    		repeatCount = "indefinite" />
						    </feMerge>
				 			

				 			<feMerge x="0" width="100%" y="60px" height="65px" result="merge2">
								<feMergeNode in = "" />
								<feMergeNode in = "comp2" />
								<feMergeNode in = "off2b" />

								<animate attributeName="y" 
						    		id = "y"
						    		dur ="4s"
						    		values = '103px; 104px; 69px; 53px; 42px; 104px; 78px; 89px; 96px; 100px; 67px; 50px; 96px; 66px; 88px; 42px; 13px; 100px; 100px; 104px;' 

						    		keyTimes = '0; 0.055; 0.100; 0.125; 0.159; 0.182; 0.202; 0.236; 0.268; 0.326; 0.357; 0.400; 0.408; 0.461; 0.493; 0.513; 0.548; 0.577; 0.613; 1'

				 		    		repeatCount = "indefinite" />
				 
								<animate attributeName="height" 
						    		id = "h"
						    		dur = "4s"
									
									values = '0px; 0px; 0px; 16px; 16px; 12px; 12px; 0px; 0px; 5px; 10px; 22px; 33px; 11px; 0px; 0px; 10px'

						    		keyTimes = '0; 0.055; 0.100; 0.125; 0.159; 0.182; 0.202; 0.236; 0.268; 0.326; 0.357; 0.400; 0.408; 0.461; 0.493; 0.513;  1'
						    		 
						    		repeatCount = "indefinite" />
						    </feMerge>
							
						 	<feMerge>
				 				<feMergeNode in="SourceGraphic" />	

								<feMergeNode in="merge1" /> 
				 			<feMergeNode in="merge2" />

						    </feMerge>
					    </filter>

					</defs>

				<g>
					<text x="0" y="100">HELLO, TRAVELER</text>
				</g>
				</svg>
			</div>
		)
	}
});

ReactDOM.render(
	<App />,
	document.getElementById("container")
);

// ONSCROLL

window.onscroll = function(event) {
	var cosmos = document.getElementsByClassName("cosmos-container")[0];
	var topbar = document.getElementsByClassName("topbar")[0];
	var where = 10;
	var pageTop = document.body.scrollTop;

	if (pageTop > where) {
      cosmos.classList.add("blurred");
      topbar.classList.add("blacked");
    }
    else {
      cosmos.classList.remove("blurred");
      topbar.classList.remove("blacked");
  }
};

