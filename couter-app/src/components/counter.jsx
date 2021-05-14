import React, { Component } from 'react';

class Counter extends Component {
    state = {
        tags: [
            {
                name: 'tag1',
                count: 0
            },
            {
                name: 'tag2',
                count: 0
            },
            {
                name: 'tag3',
                count: 0
            }
        ]
    };
    
    formatCount (count) {
        return count === 0? 'zero': count;
    }

    getBadgeClasses (count) {
        let counterClasses = 'badge m-2 badge-';
        counterClasses += (count === 0) ? 'warning' : 'primary';
        return counterClasses;
    }

    handleIncreament = (item) => {
        const newState = {...this.state};
        const index = newState.tags.indexOf(item);
        newState.tags[index].count += 1;

        this.setState(newState);
    };

    handleDecreament = (item) => {
        const newState = {...this.state};
        const index = newState.tags.indexOf(item);
        if( newState.tags[index].count !== 0 ) {
            newState.tags[index].count -= 1;
            this.setState(newState);
        }
    };

    renderTags () {
        if ( this.state.tags.length>0 ) {
            return (
                <ul>
                    { this.state.tags.map( item => (
                        <li key={item.name}>
                            {item.name}:
                            <span className={ this.getBadgeClasses(item.count) }>{ this.formatCount(item.count) }</span>
                            <button onClick={ () => this.handleDecreament(item) } className="btn btn-danger btn-sm m-2">-</button>
                            <button onClick={ () => this.handleIncreament(item) } className="btn btn-primary btn-sm m-2">+</button>
                        </li>
                    ))}
                </ul>
            );
        }else{
            return <h2>There are no tags...!</h2>;
        }
    }

    render() { 
        return (
            <React.Fragment>
                { this.renderTags() }
            </React.Fragment>
        );
    }
}
 
export default Counter;