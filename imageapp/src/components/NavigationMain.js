import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navigation extends Component {
    constructor() {
        super()
        this.state = {
            scrolled: false
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', () => {
            window.scrollY > 6 ? this.setState({ scrolled: true }) :
                this.setState({ scrolled: false })
        })
    }


    render() {
        let scrolled = this.state.scrolled ? { display: 'none', transition: '5s' } : { display: 'block', transition: '5s' }
        return (
            <div className='NavigationMain' style={scrolled}>
                <ul>
                    <li><Link to='/' style={{ fontSize: '3rem' }}>home</Link></li>
                    <li><Link to='gallery' style={{ fontSize: '2.7rem' }}>gallery</Link></li>
                    <li><Link to='contact' style={{ fontSize: '1.8rem' }}>contact</Link></li>
                </ul>
                <h1 className='logo'>Modern art</h1>
            </div>
        )
    }
}
