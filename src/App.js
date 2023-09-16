import logo from './logo.svg';
import './App.scss';
import Header from './Header/Header';
import SideNavbar from './SideNavbar/SideNavbar';
import AddEmployee from './Employee/Add-Employee/AddEmployee';
import Email from './Employee/Email';
function App() {
  return (
    <div >
       <Header/>
       <div className='bodys'>
        <div style={{width:'20%'}}><SideNavbar/></div>
        <div style={{width:'80%'}}>
          <AddEmployee/>
          <Email/>
          </div>
       </div>
       
    </div>
  );
}

export default App;
