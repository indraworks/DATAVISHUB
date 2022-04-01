import React from 'react';
import ReactDOM from 'react-dom';

const App =()=> {
    return ( <h1>Hello WOrld</h1>)
}


//jangan lupa buat id selector utk dom mmanuulate react di halaman index.html
const rootElement = document.getElementById("root"); // id selector di indexhtml
//dimana kita hasil render ditampilkan di tag tsb 
ReactDOM.render(<App />,rootElement);

//utk ReactDOM Appnya kita buat compinent didalam filenya yg sama seperti diatas