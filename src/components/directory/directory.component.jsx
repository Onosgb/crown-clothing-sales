import React, {Component} from 'react';
import MenuItem from '../menu-items/menu-item.component';
import './directory.styles.scss';
class Directory extends Component {
constructor() {
    super();
    this.state = {
        sections: [
            {
                title: 'hats',
                imageUrl: 'http://i.ibb.co/cvpntL1/hats.png',
                id: 1,
                linkUrl: 'hats'
            },
            {
                title: 'jackets',
                imageUrl: 'http://i.ibb.co/px2tCc3/jackets.png',
                id: 2,
                linkUrl: 'jackets'
            },
            {
                title: 'sneekers',
                imageUrl: 'http://i.ibb.co/0jqHpnp/sneekers.png',
                id: 3
            },
            {
                title: 'womens',
                imageUrl: 'http://i.ibb.co/GCCdy8t/womens.png',
                id: 4,
                size: 'large',
                linkUrl: ''
            },
            {
                title: 'mens',
                imageUrl: 'http://i.ibb.co/R70vBrQ/mens.png',
                id: 5,
                size: 'large',
                linkUrl: ''
            }
        ],
    }
}

render() {
    return (
        <div className="directory-menu">
            {
                this.state.sections.map(({id, ...otherSectionProps}) => (
                 <MenuItem key={id} {...otherSectionProps}/> 
                ))
            }
        </div>
    )
}


}

export default Directory;


