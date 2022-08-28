import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import "./styles.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App/>
);

//아이디가 root 인 곳에서 render() 를 실행하는 파일