import { useState } from "react";
import { Button, Row, Col } from "react-bootstrap";

function Sublist() {
    var [item, setItem] = useState([]);

    var onKeyDown = (e) => {
        if (e.key === "Enter" && e.target.value == "" && !e.shiftKey) {
            alert("Please enter a schedule");
            e.preventDefault();
        } else if (e.key === "Enter" && !e.shiftKey) {
            var temp = [...item];
            temp.push(e.target.value);
            setItem(temp);
            e.preventDefault();
            e.target.value = "";
        }
    }

    var subList = item.map(function (value, key) {
        return (
            <Row style={{ paddingBottom: "12px" }}>
                <Col style={{
                    paddingLeft: "2px",
                    fontSize: "12px",
                    width: "150px",
                    textAlign: "left",
                    backgroundColor: "#f2f2f2",
                    borderRadius: "5px"
                }} onClick={() => {
                    alert("Clicked")
                }}>
                    {value}
                </Col>
                <Col>
                    <Button size="sm" style={{ marginLeft: "5px" }} onClick={() => {
                        var temp = [...item];
                        temp.splice(key, 1);
                        setItem(temp);
                    }}>Delete</Button>
                </Col>
            </Row>
        )
    });

    return (
        <div style={{ paddingLeft: "20px" }}>
            {subList}
            <Row style={{ textAlign: "left" }}>
                <textarea style={{
                    fontSize: "13px",
                    width: "150px",
                    textAlign: "left",
                    backgroundColor: "#f2f2f2",
                    borderRadius: "5px",
                    paddingLeft: "5px",
                    paddingTop: "5px"
                }} placeholder="Enter a schedule" onKeyDown={onKeyDown}></textarea>
            </Row>
        </div>
    )
}

export default Sublist;