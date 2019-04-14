import React from 'react';
import { Container} from 'reactstrap';

const Footer = (props) => {
    return (
        <footer style={{background:'darkslategray',margin: '10px 0 0 0',
        padding: '5px 0'}}>
            <Container>
                <a style={{color:'#fff'}}>{props.link}</a>
            </Container>
        </footer>
    );
};

export default Footer;