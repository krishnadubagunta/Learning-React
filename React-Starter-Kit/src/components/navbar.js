import React , {Component} from 'react';
import SearchBar from './search_bar';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logoStyle : {
        height : '50px'
      },
      navStyle : {
        height : '50px'
      },
      onSearchtermChange : props.onSearchtermChange
    }
  }

  componentDidMount() {
    this.refs.navbar.setAttribute('uk-navbar','');
    this.refs.nav.setAttribute('uk-sticky','');
  }

  render() {
    return(
      <div ref="nav" className="uk-background-secondary">
        <nav ref="navbar" className="uk-navbar-nav uk-padding-remove-vertical" style={this.state.navStyle}>
            <div className="uk-navbar-item uk-logo uk-navbar-center uk-margin-small-top">
              <span>Tribute to &nbsp;</span>
              <img ref="imageLogo" src="/style/LP-Hexa-Shadow.svg" style={this.state.logoStyle} />
            </div>
        </nav>
        <SearchBar onSearchtermChange={term => this.state.onSearchtermChange(term)} />
      </div>
    );
  }

}

export default Navbar;
