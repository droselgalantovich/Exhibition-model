import {Routes, Route} from 'react-router-dom';
import {MainLayout} from './layouts/MainLayout';
import Home from './pages/Home';
import {ATCSmall} from './pages/ATCSmall';
import {ATCMedium} from './pages/ATCMedium';
import {ATCLarge} from './pages/ATCLarge';
import {VIP} from './pages/VIP';
import {SORM} from './pages/SORM';
import {WhatATC} from './pages/WhatATC';
import {Services} from './pages/Services';
import {ATCpreview} from './pages/ATCpreview';
import {SmallATCConnection} from "./pages/SmallATCConnection.tsx";
import {ModelsSmallATC} from "./pages/ModelsSmallATC.tsx";

function App() {
    return (
        <Routes>
            <Route path='/' element={<MainLayout/>}>
                <Route index element={<Home/>}/>
                <Route path='Services' element={<Services/>}/>
                <Route path='SmallATCConnection' element={<SmallATCConnection/>}/>
                <Route path='ModelsSmallATC' element={<ModelsSmallATC/>}/>
                <Route path='ATCpreview' element={<ATCpreview/>}/>
                <Route path='ATCsmall' element={<ATCSmall/>}/>
                <Route path='ATCmedium' element={<ATCMedium/>}/>
                <Route path='ATClarge' element={<ATCLarge/>}/>
                <Route path='VIP' element={<VIP/>}/>
                <Route path='SORM' element={<SORM/>}/>
                <Route path='WhatATC' element={<WhatATC/>}/>
            </Route>
        </Routes>
    );
}

export default App;
