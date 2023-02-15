import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from "react-bootstrap";

function Sublist() {
    let [item, setItem] = useState([]);

    const onKeyDown = (e) => {
        if (e.key === "Enter" && e.target.value == "" && !e.shiftKey) {
            alert("일정을 입력하세요")
            e.preventDefault();
        } else if (e.key === "Enter" && !e.shiftKey) {
            var temp = [...item];
            temp.push(e.target.value);
            setItem(temp);
            e.preventDefault();
            e.target.value = "";
        }
    }

    let subList = item.map(function (value, key) {
        console.log(value, key);
        return (
            <Row style={{ textAlign: "left" }}>
                <Col>
                    <textarea style={{ resize: "none", fontSize: "13px", width: "250px", textAlign: "left" }} value={value}></textarea>
                </Col>
                <Col>
                    <button onClick={() => {
                        let temp = [...item];
                        temp.splice(key, 1);
                        console.log(key);
                        setItem(temp);
                    }}>삭제</button>
                </Col>
            </Row>
        )
    });


    return (
        <div>
            <Container>
                {subList}
                <Row style={{ textAlign: "left" }}>
                    <textarea style={{ paddingLeft: "2px", resize: "none", fontSize: "13px", width: "250px", textAlign: "left" }} placeholder="일정을 입력하세요" onKeyDown={onKeyDown}></textarea>
                </Row>
            </Container>
        </div>
    )
}

export default Sublist;


