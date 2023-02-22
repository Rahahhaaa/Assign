import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Modal, Button, Card, Row, Col } from "react-bootstrap";

function MainList() {
    var [item, setItem] = useState([]);

    const [modalShow, setModalShow] = useState(false);
    return (
        <>
            <Row xs={1} md={4}>
                {item.map((value, idx) => (
                    <Col style={{ paddingLeft: "0", paddingRight: "0" }}>
                        <Card>
                            <Card.Body style={{ textAlign: "left" }}>
                                <Card.Title>{value.title}</Card.Title>
                                <Button size="sm">Done</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
                <Col style={{
                    paddingLeft: "0",
                    paddingRight: "0",
                }}>
                    <Card style={{
                        borderStyle: 'dotted',
                        bordrRadius: 1,
                        textAlign: "left",
                        height: 88,

                    }} onClick={() => { setModalShow(true); }}>
                        <Card.Body>
                            <Card.Text>
                                일정을 추가하세요.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <VerticalModal item={item} setItem={setItem} show={modalShow} onHide={() => { setModalShow(false); }} onExit={(title, description) => {
                // var temp = [...item];
                // temp.push({ title: title, description: description, status: false });
                // setItem(temp);
                // alert(title, description);
            }}></VerticalModal>
        </>
    );
}

function VerticalModal(props) {

    let inputTitle, inputDescription;

    return (
        <Modal {...props} size="lg" centered>
            <Modal.Header closeButton>
                <Modal.Title>
                    일정 추가하기
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div><input onChange={(e) => inputTitle = e.target.value} placeholder="제목"></input></div>
                <div style={{ paddingTop: "20px" }}><input onChange={(e) => inputDescription = e.target.value} placeholder="설명"></input></div>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={() => {
                    
                    let temp = [...props.item];
                    temp.push({ "title": inputTitle, "description": inputDescription });
                    props.setItem(temp);
                    props.onHide();
                }}>Submit</Button>
            </Modal.Footer>
        </Modal >
    )
}

export default MainList;