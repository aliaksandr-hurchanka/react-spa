import React, { Component } from 'react'

export default class App extends Component {
    render() {
        return (
          <div className='container'>
            <h1>App</h1>
            <ul>
              <li><Link to='/admin'>Admin</Link></li>
              <li><Link to='/genre'>Genre</Link></li>
            </ul>
            {/* добавили вывод потомков */}
            {this.props.children}
          </div>
        )
    }
}
