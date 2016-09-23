
require('./otherapp.css');
let jsonp = require('../util/jsonp.js');

import React from 'react'; 

let Otherapp = React.createClass({
	render: function() {
		let countId = 0;
		return (
			<div className="oapp">
				<ul>
					<li>
						<a href='#'>
							<div className="app_icon">
								<img src={require('../images/app1.png')} alt=""/>
							</div>
							<span>京东超市</span>
						</a>
					</li>
					<li>
						<a href='#'>
							<div className="app_icon">
								<img src={require('../images/app1.png')} alt=""/>
							</div>
							<span>京东超市</span>
						</a>
					</li>
					<li>
						<a href='#'>
							<div className="app_icon">
								<img src={require('../images/app1.png')} alt=""/>
							</div>
							<span>京东超市</span>
						</a>
					</li>
					<li>
						<a href='#'>
							<div className="app_icon">
								<img src={require('../images/app1.png')} alt=""/>
							</div>
							<span>京东超市</span>
						</a>
					</li>
					<li>
						<a href='#'>
							<div className="app_icon">
								<img src={require('../images/app1.png')} alt=""/>
							</div>
							<span>京东超市</span>
						</a>
					</li>
					<li>
						<a href='#'>
							<div className="app_icon">
								<img src={require('../images/app1.png')} alt=""/>
							</div>
							<span>京东超市</span>
						</a>
					</li>
					<li>
						<a href='#'>
							<div className="app_icon">
								<img src={require('../images/app1.png')} alt=""/>
							</div>
							<span>京东超市</span>
						</a>
					</li>
					<li>
						<a href='#'>
							<div className="app_icon">
								<img src={require('../images/app1.png')} alt=""/>
							</div>
							<span>京东超市</span>
						</a>
					</li>
				</ul>
			</div>
		);
	}
})

module.exports = Otherapp;