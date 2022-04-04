import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar'
import reportWebVitals from './reportWebVitals';
import SubHeader from './components/SubHeader'
import Content from './components/Content'
import LineChart from './components/LineChart'

ReactDOM.render(
  <React.StrictMode>
    <div className='d-flex'>
      <div className='col-lg-2 px-0 d-none d-lg-block' id='d-none'>
        <Sidebar />
      </div>
      <div className='col-lg-10 col-12 vertical-line'>
        <Header/>
        <SubHeader/>
        <div className='card-container'>
          <Content/>
          <LineChart title="Average response Time" colors="#F05D23" avgTime="Average Response Time" resTime="Response Time" chartColor="#F05D23"/>
          <LineChart title="Replies per resolution " colors="#3E68FF" avgTime="Average Replies " resTime="Response Time" chartColor="#3E68FF"/>
          <LineChart title="Average resolution time " colors="#FB6491" avgTime="Average Contact Rate " resTime="Response Time" chartColor="#FB6491"/>
          <LineChart title="First contact resolution rate" colors="#07C9E2" avgTime="Average Contact Rate " resTime="Response Time" chartColor="#07C9E2"/>
          </div>
      </div>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
