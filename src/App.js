import React, {useState} from "react";
import logo from './logo.svg';

import Icon from './components/Icon';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {Card, CardBody, Container, Button, Col, Row} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

const itemArray = new Array(9).fill("empty");

const App = () => {

  const [IsCross, setIsCross] = useState(false);
  const [winMessage, setWinMessage] = useState("");

  const reloadGame = () => {
    setIsCross(false);
    setWinMessage("");
    itemArray.fill("empty");
  };

  const checkIsWinner = () =>{
    // 
  }

  const changeItem = itemNumber => {
    if(winMessage){
      return toast(winMessage, {type: "success"});   
    }
    if(itemArray[itemNumber] === "empty") {
      itemArray[itemNumber] = IsCross ? "cross" : "circle"
      setIsCross(!IsCross)
    }else{
      return toast("already filled", {type:"error"})
    } 
    checkIsWinner();
  }

  

  return (
    <Container className="p-5">
      <ToastContainer position="bottom-center" />
      <Row>
        <Col md={6} className="offset-md-3">
          {winMessage ? (
            <div className="mb-2 mt-2">
              <h1 className="text-success text-uppercase text-center">
                {winMessage}
              </h1>
              <Button color="success" block onClick={reloadGame()}>
                Reload The Game
              </Button>
            </div>
          ) : (
            <h1 className="text-center text-warning">
              {IsCross ? "Cross" : "Circle"} turns
            </h1>
          )}
          <div className="grid">
            {itemArray.map((item, index) => (
              <Card>
                <CardBody className="box">
                  <Icon name={item} />
                </CardBody>
              </Card>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
