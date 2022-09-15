import React  from "react";
import Header from "../components/Navbar";
import Container from 'react-bootstrap/Container';
function Layout(props){

    return(
        <div>
            <header>
            <Header />
                </header>
            <Container>{props.children}</Container>
            <Container><footer>React Redux Food App </footer> </Container>
        </div>
    )
}

export default Layout;