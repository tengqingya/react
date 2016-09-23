
require('./more.css');
require('../lib/swiper.min.css');
let Swiper = require('../lib/swiper.min.js');
let jsonp = require('../util/jsonp.js');
import React from 'react'; 

var More = React.createClass({
	componentDidMount: function() {
		new Swiper ('.more_bottom .swiper-container', {
		    loop: true,
		    pagination: '.swiper-pagination',
		    paginationClickable: true,
		    autoplay : 2000,
			autoplayDisableOnInteraction : false,		    
		}) 
	},

	render: function() {

		let countId = 0;
		return (
			<div id="more">
				<div className="more_top">
					<div className="more_link">
						<a href='#'>
							<img src={require('../images/more1.jpg')} alt=""/>
						</a>
					</div>
					<div className="more_link">
						<a href='#'>
							<img src={require('../images/more1.jpg')} alt=""/>
						</a>
					</div>
					<div className="more_link">
						<a href='#'>
							<img src={require('../images/more1.jpg')} alt=""/>
						</a>
					</div>
				</div>
				<div className="more_middle">
					<div className="more_style">
						<a href='#'>
							<img src={require('../images/more1.jpg')} alt=""/>
						</a>
					</div>
					<div className="more_style">
						<a href='#'>
							<img src={require('../images/more1.jpg')} alt=""/>
						</a>
					</div>
				</div>
				<div className="more_bottom">
					<div className="swiper-container">
						<div className="swiper-wrapper">
							<div className="swiper-slide">
								<a href='#'>
									<img src={require('../images/more7.jpg')} alt=""/>
								</a>
							</div>
							<div className="swiper-slide">
								<a href='#'>
									<img src={require('../images/more7.jpg')} alt=""/>
								</a>
							</div>
							<div className="swiper-slide">
								<a href='#'>
									<img src={require('../images/more7.jpg')} alt=""/>
								</a>
							</div>
						</div>
						<div className="swiper-pagination"></div>
					</div>
				</div>
			</div>
		);
	}
})

module.exports = More;