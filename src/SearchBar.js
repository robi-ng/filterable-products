import React from 'react';
import { Input, Checkbox } from 'semantic-ui-react';
import './SearchBar.css';

class SearchBar extends React.Component {
    render() {
        const filterText = this.props.filterText;
        const inStockOnly = this.props.inStockOnly;
        return (
            <div>
                <Input 
                    size='small' 
                    icon='search' 
                    placeholder='Start searching' 
                    text={filterText}
                    onChange={this.handleFilterTextChange}
                /><br/>
                <Checkbox 
                    label='Only show products in stock' 
                    checked={inStockOnly}
                    onChange={this.handleInStockOnlyChange}
                />
            </div>
        )
    }
    handleFilterTextChange = (e) => {
        this.props.onFilterTextChange(e.target.value);
    }
    handleInStockOnlyChange = (event, data) => {
        this.props.onInStockOnlyChange(data.checked);
    }
}

export default SearchBar;