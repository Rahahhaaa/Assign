import { useState } from "react";
import { Button, Row, Col } from "react-bootstrap";

function Sublist() {
    var [item, setItem] = useState([]);

    var onKeyDown = (e) => {
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

    // var subList = item.map(function (value, key) {
    //     return (
    //         <div>
    //             <textarea defaultValue={value + key}></textarea><button onClick={() => {
    //                 var temp = [...item];
    //                 alert(key);
    //                 temp.splice(key, 1);
    //                 alert([...temp]);
    //                 setItem([...temp]);
    //                 alert([...item])
    //             }}>삭제</button>
    //         </div>
    //     )
    // })

    var subList = item.map(function (value, key) {
        return (
            <Row style={{ paddingBottom: "12px" }}>
                <Col style={{
                    paddingLeft: "2px",
                    fontSize: "12px",
                    width: "150px",
                    textAlign: "left",
                    verticalAlign: "text-top",
                }} onClick={() => {
                    alert("얍")
                }}>
                    {value}
                </Col>
                <Col>
                    <Button style={{ fontSize: "12px" }} size="sm" onClick={() => {
                        var temp = [...item];
                        temp.splice(key, 1);
                        setItem(temp);
                    }}>삭제</Button>
                </Col>
            </Row>
        )
    });


    return (
        <div style={{ paddingLeft: "20px" }}>
            {subList}
            <Row style={{ textAlign: "left" }}>
                <textarea style={{ fontSize: "13px", width: "150px", textAlign: "left" }} placeholder="일정을 입력하세요" onKeyDown={onKeyDown}></textarea>
            </Row>
        </div>
    )
}

export default Sublist;


