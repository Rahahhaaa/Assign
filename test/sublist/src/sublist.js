import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from "react-bootstrap";
import { DashCircle } from "react-bootstrap-icons";
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

    let [text, setText] = useState([]);
    let subList = item.map(function (value, key) {
        console.log(value, key);
        return (
            <>
                <Row style={{ textAlign: "left" }}>
                    <Col >
                        <input style={{ resize: "none", fontSize: "13px", width: "500px", textAlign: "left" }} value={value} onChange={
                            (e) => {
                                let temp = [...item];
                                temp[key] = e.target.value;
                                setItem(temp);
                            }
                        } onBlur={() => { console.log("씨발!!") }}></input>
                    </Col >
                    <Col className="mybutton" >
                        <div onClick={() => {
                            let temp = [...item];
                            temp.splice(key, 1);
                            console.log(key);
                            setItem(temp);
                        }} ><DashCircle /></div>
                    </Col>
                </Row >
            </>
        )
    });


    return (
        <div>
            <Container>
                {subList}
                <Row style={{ textAlign: "left" }}>
                    <Col><input style={{ marginLeft: "0px", resize: "none", fontSize: "13px", width: "250px", textAlign: "left" }} placeholder="일정을 입력하세요" onKeyDown={onKeyDown}></input></Col>
                </Row>
            </Container>
        </div>
    )
}

export default Sublist;


