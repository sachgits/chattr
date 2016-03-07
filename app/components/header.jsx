import React, { Component, PropTypes } from 'react';

class Header extends Component {
    
    componentDidMount() {
        this.createTemplate.addEventListener('click', this.props.toggleCreateTemplateModal);
        this.createFilter.addEventListener('click', this.props.toggleCreateFilterModal);
    }
    
    render() {
        return (
            <header className="mdl-layout__header">
                <div className="mdl-layout__header-row">
                  <span className="mdl-layout-title">Chattr</span>
                  <div className="mdl-layout-spacer"></div>
                  <nav className="mdl-navigation mdl-layout--large-screen-only">
                    <a className="mdl-navigation__link" 
                        ref={c => this.createTemplate = c}
                        href="#">Create Template</a>
                    <a className="mdl-navigation__link" 
                        href="#"
                        ref={c => this.createFilter = c}>Filters</a>
                    <a className="mdl-navigation__link" href="#">Automated Messages</a>
                  </nav>
                </div>
            </header>        
        );
    }    
}

Header.propTypes = {
    toggleCreateTemplateModal: PropTypes.func.isRequired,
    toggleCreateFilterModal: PropTypes.func.isRequired
};

export default Header;