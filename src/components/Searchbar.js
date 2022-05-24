import React from 'react';

class Searchbar extends React.Component {
    state = {
        term: ''
    };
    handleChange = (event) => {
        this.setState({
            term: event.target.value
        });
    };
    handleSubmit = event => {
        event.preventDefault();
        this.props.handleFormSubmit(this.state.term);
    }

    render() {
        return (
            <>
           
             <nav className='navBar'>
             <form onSubmit={this.handleSubmit}>
             <div className='nav_logo'>Vidz</div>
             <div className='nav_search_sec'>
               <button type='submit' className='nav_searIcon'></button>
               <div className='nav_searchbar'>
                 <input type="text"onChange={this.handleChange}value={this.state.term} placeholder='Type here...' className='inp_txt'></input>
               </div>
             </div>
             </form>
           </nav></>
        )
    }
}
export default Searchbar;