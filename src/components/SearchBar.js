import React from 'react';
import { Paper, TextField } from '@material-ui/core'

class SearchBar extends React.Component {
    state = {
        searchTerm: '',
    }

    // React binding (biding of functions in react)
    handleChange = (event) => this.setState({ searchTerm: event.target.value })
        // to show that the search term is stored
            // console.log(event.target.value)
        
    handleSubmit = (event) => {
        const { searchTerm } = this.state;
        const { onFormSubmit } = this.props;

        onFormSubmit(searchTerm);
        
        // to stop the page from reloading and for it to allow fetching of data
        event.preventDefault();

    }

    render() {
        return (
            <Paper elevation={6} style={{ padding: '25px' }}>
                <form onSubmit={this.handleSubmit}>
                    {/* event handler to handle the form submit */}
                    <TextField fullWidth label="search..." onChange={this.handleChange} />
                    {/* onChange handles the input changes and chages the state */}
                </form>
            </Paper>
        )
    }
}

export default SearchBar;