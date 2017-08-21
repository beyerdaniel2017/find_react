import React, { Component } from 'react';
import { SuggestionBox } from './suggestionBox';

class SearchBar extends Component {

    constructor() {
        super();
        this.state = {
            open: false
        };

        this.handleSuggestionBox = this.handleSuggestionBox.bind(this);
    }

    handleSuggestionBox(open) {
        this.setState({ open });
    }

    render() {
        return (

            <div>
                <div className='input-group'>
                    <input type='text' id='searchInput' className='form-control' placeholder='Cafe in Montego Bay'
                        onFocus={() => this.handleSuggestionBox(true)}
                        onBlur={() => this.handleSuggestionBox(false)} />
                    <span className='input-group-btn'>
                        <button className='btn btn-default' type='button'><i className='fa fa-search' aria-hidden='true' /></button>
                    </span> </div>
                <SuggestionBox open={this.state.open ? 'open' : ''}
                />
            </div>);
    }
}

export { SearchBar };