import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './payments.js';

class Header extends Component {
	renderContent() {
		switch (this.props.auth) {
			case null:
				return (
					<div className="black-text right">
						<i className="fa fa-spinner" aria-hidden="true" />
					</div>
				);
			case false:
				return (
					<ul className="right font-size-24">
						<li>
							<a
								className="red-text text-darken-3 no-hover"
								href="/auth/google"
							>
								<i className="fa fa-google-plus" aria-hidden="true" />
							</a>
						</li>
						<li>
							<a
								className="blue-text text-darken-4 no-hover"
								href="/auth/facebook"
							>
								<i className="fa fa-facebook" aria-hidden="true" />
							</a>
						</li>
					</ul>
				);
			default:
				return (
					<div>
						<ul className="right">
							<li key="payments">
								<Payments />
							</li>
							<li key="user" className=" all-black">
								<Link
									to={this.props.auth ? '/surveys' : '/'}
									className="box-inline no-hover"
								>
									<div>
										<img
											src={this.props.auth.photos.value}
											alt="profile"
											className="circle responsive-img"
										/>
										<span className="chip circle center-top red grey-text text-lighten-5">
											{this.props.auth.credits}
										</span>
									</div>
									<div className="font-size-18 hide-on-small px-10-left">
										{this.props.auth.displayName}
									</div>
								</Link>
							</li>
							<li key="logout">
								<a className="all-black box-inline no-hover" href="/api/logout">
									<i
										className="fa fa-sign-out font-size-18"
										aria-hidden="true"
									/>
									<span className="hide-on-small med-on-small">
										&nbsp;Logout &nbsp;
									</span>
								</a>
							</li>
						</ul>
					</div>
				);
		}
	}

	render() {
		return (
			<nav className="white z-depth-1 light-text">
				<div className="nav-wrapper box-inline">
					<Link
						to={this.props.auth ? '/surveys' : '/'}
						className="left brand-logo black-text no-hover"
					>
						Campaignist
					</Link>
					{this.renderContent()}
				</div>
			</nav>
		);
	}
}

function mapStateToProps({ auth }) {
	return { auth };
}

export default connect(mapStateToProps)(Header);
