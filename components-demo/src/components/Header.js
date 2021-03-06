import React from 'react';
import { Container} from 'reactstrap';
import './Header.css';

const Header = (props) =>{
    const pages=['Home','Movies','TV-shows','Cartoons'];
    const navLinks=pages.map((page,index)=>{
        return(
            <ul key={index} className={"nav__list"}>
                <li className={"nav__item"}>
                    <a  href={'/'+page} className={"nav__link"}>{page}</a>
                </li>
            </ul>
        );
    });
    return(
        <header className={"header"}>
            <Container>
            <a className={"logo"} href={props.l}>Lo<span>go</span></a>
            <nav className={"nav header__nav"}>
                {navLinks}
            </nav>
            </Container>
        </header>
    )
};

export default Header;