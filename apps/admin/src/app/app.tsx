import { themeClass } from '@gubgoo-backoffice/design-system';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SideNav from '../components/SideNav';
import Header from '../components/Header';
import Login from '../components/Login';
import DashBoard from '../components/DashBoard';
import CreateWork from '../components/CreateWork';
import Search from '../components/Search';
import WorkManagement from '../components/WorkManagement';
import RecruitManagement from '../components/RecruitManagement';
import NotFound from '../components/NotFound';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import '../../../../libs/design-system/src/lib/global/reset.css';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import '../../../../libs/design-system/src/lib/global/text.css';
import { flexContainer } from './App.css'

const App = () => {
  return (
    <BrowserRouter>
      <div className={flexContainer}>
        <SideNav/>
        <div style={{flex: 1}}>
          <Header/>
          <Routes>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/' element={<DashBoard />}></Route>
            <Route path='/create-work' element={<CreateWork />}></Route>
            <Route path='/search' element={<Search />}></Route>
            <Route path='/work-management' element={<WorkManagement />}></Route>
            <Route path='/recruit-management' element={<RecruitManagement />}></Route>
            <Route path='*' element={<NotFound />}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
