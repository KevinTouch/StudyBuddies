import React, { Component } from 'react';

class HomePage extends Component {
    state = {
        firstQuery: '',
    };
    
    render() {
      return (
        <div>
            <form>
                <label> Name:
                    <input type="text" name="name" />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
        );
    }
}

export default HomePage;