import React , {Component} from 'react';
import SearchBar from './search_bar';
import logo from '../logo.svg';


class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logoStyle : {
        height : '50px',
      },
      navStyle : {
        height : '50px'
      },
      onSearchtermChange : props.onSearchtermChange,
      onTermChange : props.onTermChange
    }
  }

  componentDidMount() {
    this.refs.navbar.setAttribute('uk-navbar','');
    this.refs.nav.setAttribute('uk-sticky','');
  }

  render() {
    return(
      <div ref="nav" className="nav-background">
        <nav ref="navbar" className="uk-navbar-nav uk-padding-remove-vertical" style={this.state.navStyle}>
            <div className="uk-navbar-item uk-logo uk-navbar-center uk-margin-small-top uk-light">
              <img ref="imageLogo" src={logo} style={this.state.logoStyle} alt="logo"/>
            </div>
        </nav>
        <SearchBar onSearchtermChange={term => this.state.onSearchtermChange(term)} onTermChange={term => this.state.onTermChange(term)} />

      </div>
    );
  }

}

export default Navbar;
