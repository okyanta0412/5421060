import { useRef, useState } from "react";
import "./App.css";
import Img from "./Img";


function App() {
  const [fetchData, setFetchData] = useState([])
  const ref = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(ref.current.value);

    const endpointURL = 
      `https://pixabay.com/api/?key=33264743-f14f4da7f38f8934a08cc3d31&q=${ref.current.value}&image_type=photo`
      fetch(endpointURL).then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data.hits);
        setFetchData(data.hits);
      });
  };

  return (
    <div className="container">
       <p1>
        <a href="https://pixabay.com/sk/service/about/api/">Pixabay Developer API</a>
      </p1>
      <p2>情報科学科 2学年 5421060 髙瀬大輝</p2>
      <p3>日本大学文理学部情報科学科 Webプログラミングの演習課題</p3>
      <h2>画像検索</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" placeholder="画像のキーワードを入力" ref={ref} />
      </form>
      <Img fetchData={fetchData}/>
    </div>
  );
}

export default App;
