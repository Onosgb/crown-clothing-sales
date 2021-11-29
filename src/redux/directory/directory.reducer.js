const INITIAL_STATE = { 
    sections: [
        {
            title: 'hats',
            imageUrl: 'http://i.ibb.co/cvpntL1/hats.png',
            id: 1,
            linkUrl: 'shop/hats'
        },
        {
            title: 'jackets',
            imageUrl: 'http://i.ibb.co/px2tCc3/jackets.png',
            id: 2,
            linkUrl: 'shop/jackets'
        },
        {
            title: 'sneakers',
            imageUrl: 'http://i.ibb.co/0jqHpnp/sneekers.png',
            id: 3,
            linkUrl: 'shop/sneakers'
        },
        {
            title: 'womens',
            imageUrl: 'http://i.ibb.co/GCCdy8t/womens.png',
            id: 4,
            size: 'large',
            linkUrl: 'shop/womens'
        },
        {
            title: 'mens',
            imageUrl: 'http://i.ibb.co/R70vBrQ/mens.png',
            id: 5,
            size: 'large',
            linkUrl: 'shop/mens'
        }
    ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
    default: return state;
    }
}

export default directoryReducer;