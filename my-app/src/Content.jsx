import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

class Content extends Component {
    state = {
        firstQuery: '',
    };
    
    render() {
      return (
        <div className="Content">
            <div className="box-1"> Content </div>

            {/*<form>
                <label> Name:
                    <input type="text" name="name" />
                </label>
                <input type="submit" value="Submit" />
            </form>
            */}
        </div>
        );
    }
}

export default Content;