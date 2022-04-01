(function (React,ReactDOM) {
	'use strict';
   React= React && React.hasOwnProperty('default')?React['default']:React;
   ReactDOM = ReactDOM && ReactDOM.hasOwnProperty('default')?ReactDOM['default']:ReactDOM;
	// import React from 'react';
	// import reactDOM from 'react-dom';

	<h1>KONTOL</h1>


	// //jangan lupa buat id selector utk dom mmanuulate react di halaman index.html
	// const rootElement=document.getElementById('root'); // id selector di indexhtml
	// //dimana kita hasil render ditampilkan di tag tsb 
	// reactDOM.render(<App />,rootElement);

	//utk ReactDOM Appnya kita buat compinent didalam filenya yg sama seperti diatas

	const rootElement = document.getElementById("root");
	ReactDOM.render(React.createElement( App, null ), rootElement);
})(React,ReactDOM);
