import "./App.css";
import React, { useState } from "react";

function App() {
  const [contents, setContents] = useState("");
  const [contentsList, setContentsList] = useState([{ id: 0, contents: "react를 배워봅시다." }]);
  const onChangeContents = (e) => setContents(e.target.value);
  const contentsAddHandler = (e) => {
    contents === ""
      ? alert("내용을 입력해 주세요.")
      : setContentsList([...contentsList, { id: contentsList.length, contents: contents }]);
    setContents("");
  };

  return (
    <div className="layout">
      <div className="input">
        <input
          type="text"
          onChange={onChangeContents}
          value={contents}
          placeholder="내용을 입력 하세요."
        />
        <button onClick={contentsAddHandler}>추가하기</button>
      </div>
      <h1> Todo List</h1>
      <div className="cards">
        {contentsList.map((item) => {
          return (
            <div className="card" key={item.id}>
              <p>{item.contents}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
