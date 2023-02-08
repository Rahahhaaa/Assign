import { useState } from "react";

function Sublist() {
    var [text, setText] = useState([]);
    var onKeyPress = (e) => {
        if (e.key === "Enter" && e.target.value == "") {
            alert("일정을 입력하세요");
        } else if (e.key === "Enter" && e.target.value != "") {
            var temp = [...text];
            temp.push(e.target.value);
            setText(temp);
            e.value = undefined;
        }
    }
    var sublist = text.map(function (value, key) {
        return (
            <div style={{
                paddingLeft: "2px",
                fontSize: "20px"
            }}>
                {value}
                <button onClick={() => {
                    var temp = [...text];
                    temp.splice(key, 1);
                    setText(temp);
                }}>삭제</button>
            </div>
        )
    });

    return (
        <div style={{ textAlign: "left" }}>
            {sublist}
            <textarea onKeyDown={onKeyPress} style={{
                fontSize: "20px"
            }}></textarea>
        </div>
    )
}

export default Sublist;


