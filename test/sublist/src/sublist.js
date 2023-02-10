import { useState } from "react";

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

    var subList = item.map(function (value, key) {
        return (
            <div>
                <textarea defaultValue={value + key}></textarea><button onClick={() => {
                    var temp = [...item];
                    alert(key);
                    temp.splice(key, 1);
                    alert([...temp]);
                    setItem([...temp]);
                    alert([...item])
                }}>삭제</button>
            </div>
        )
    })


    return (
        <div>
            {subList}
            <textarea placeholder="일정을 입력하세요" onKeyDown={onKeyDown}></textarea>
        </div>
    )
}

export default Sublist;


