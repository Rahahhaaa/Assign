import { useState, useEffect } from 'react';

function TimeTable() {
    //const [item, setItem] = useState([]);
    const item = [{ "title": "집가기", "description": "걸어서가기", "startTime": "1715" }, { "title": "일어나기", "description": "빨리일어나기", "startTime": "0630" }]
    useEffect(() => {
        let result = item.sort(function (a, b) {
            return a.startTime - b.startTime;
        })
        console.log(item);
    }, [])

    return (
        <div>

        </div>
    )
}

export default TimeTable;