import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import Sublist from './sublist';
import MainList from './mainlist';

function App() {
  return (
    <div style={{ align: "center", width: "1250px", overflow: "hidden" }}>
      <Container>
        <Row>
          여긴 헤더
        </Row>
        <Row style={{ paddingTop: "20px" }}>

          <Col>여긴 타임테이블</Col>
          <Col xs={6}><MainList></MainList></Col>
          <Col><Sublist></Sublist></Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
