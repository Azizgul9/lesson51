import React, { Component } from 'react';
//import { Button } from 'reactstrap';
import Header from './components/Header';
import Content from "./components/Content";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Film from "./components/film/Film";
import B from "./components/film/birlesen_gonuller.jpg";
import S from "./components/film/selam.jpg";
import L from "./components/film/lie_to_me.jpg";

class App extends Component {
  render() {
      return (
          <div>
          <Header l={"/Home"}/>
          {/*<Row>
          <Col>
        <h1>Hello, world!</h1>
          <Button color="danger">Danger!</Button>
          </Col>
        </Row>*/}
          <Sidebar/>
          <Content>
              <Film name={"Birlesen Gonuller"} year="2014" src={B}/>
              <Film name={"Selam"} year="march 29, 2013" src={S}/>
              <Film name={"Lie to me"} year="2009" src={L}/>
          </Content>
          <Footer link={"Subscribe us!"}/>
      </div>
      )
  }
}

export default App;
