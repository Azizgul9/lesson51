import React from 'react';

const Content = (props) => {
    return (
        <div className={'Content'} style={{
            display: 'flex',
            flexWrap: 'wrap',
            height: '100%'}}>
            {props.children}
        </div>
    );
};

export default Content;