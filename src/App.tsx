// import Landing from './components/Landing'
// React tag use uppercase, html tag use lower case
import {Layout, Space} from 'antd';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import About from './components/About';
import DetailArticle from './components/DetailArticle';

const { Header, Content, Footer} = Layout;

export default function App() {
  return (
    <Router>
      <Header>
        <nav>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/dsahboard">Dashboard</Link>
            <Link to="/about">About</Link>

          </Space>
        </nav>
      </Header>
      <Content>
        <Routes> {/* to make hyperlink work */}
          <Route index element={ <Home />} />
          <Route path="/about" element={ <About />} />
          <Route path="/dashboard" element={ <Dashboard /> } />
          <Route path="/a/:aid" element= { <DetailArticle/>} />
        </Routes>
      </Content>
      <Footer>
        <p>VTC6003CEM Demo</p>
      </Footer>
    </Router>
  )
}