import React, { Component } from 'react';
import './Header.css';


class Header extends Component {
    constructor() {
        super();

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        let burgerMenu = this.burgerMenu;
        let burgerBtn = this.burgerBtn;
        console.log(burgerBtn.classList);
        if(burgerMenu.classList.contains('show-burger-menu')) {
            burgerMenu.classList.remove('show-burger-menu');
        } else if (burgerMenu.style.display === '') {
            burgerMenu.classList.add('show-burger-menu');
        }
    }



    render() {
        return (
            <div>
              <div className = 'nav-bar'>
                <ul className = 'name-div'><li className='name'>Start Bootstrap</li></ul>

                <ul className= 'nav-div'>
                    <li className = 'nav-links'>SERVICES</li>
                    <li className = 'nav-links'>PORTFOLIO</li>
                    <li className = 'nav-links'>ABOUT</li>
                    <li className = 'nav-links'>TEAM</li>
                    <li className = 'nav-links'>CONTACT</li>
                </ul>

                <div className = 'burger-div'>
                  <button className = 'burger-btn' ref = {(burgerBtn) => {this.burgerBtn = burgerBtn}} onClick = {this.handleClick} >MENU</button>
                </div>
              </div>

                <div className = 'burger-menu' ref = {(burgerMenu) => {this.burgerMenu = burgerMenu}}>
                  <ul className = 'burger-list'>
                    <li className = 'burger-links'>SERVICES</li>
                    <li className = 'burger-links'>PORTFOLIO</li>
                    <li className = 'burger-links'>ABOUT</li>
                    <li className = 'burger-links'>TEAM</li>
                    <li className = 'burger-links'>CONTACT</li>
                  </ul>
                </div>

              <div className = 'img-container' alt = "Background Image" />
            </div>

        
        )
    }
}

export default Header;