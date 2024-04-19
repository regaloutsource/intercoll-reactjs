import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router'
import { routes } from './routes'
import NoPage from '../persentation/pages/NoPage/NoPage'
import Dashboard from '../persentation/pages/dashboard/Dashboard'
import DashboardMontly from '../persentation/pages/dashboard/DashboardMontly'


const AppRoutes = () => {

    //const NoPage = React.lazy(() => import("../persentation/pages/NoPage/NoPage")) 

    const AuthLayout = React.lazy(() => import("../persentation/layout/authentication/AuthLayout"))
    const Login = React.lazy(() => import("../persentation/pages/login/Login"))
    
    const MainLayout = React.lazy(() => import('../persentation/layout/mainLayout/MainLayout'))
    
    //const Dashboard = React.lazy(() => import('../persentation/pages/dashboard/Dashboard') )
    const MontlyDashboard = React.lazy(() => import('../persentation/pages/dashboard/DashboardMontly'))

    //reports
    const FieldAgentReport = React.lazy(() => import('../persentation/pages/Reports/FieldAgentReport'))
    const PhoneAgentReport = React.lazy(() => import('../persentation/pages/Reports/PhoneAgentReport'))
    const AUFieldAgentReport = React.lazy(() => import('../persentation/pages/Reports/AUFieldAgentReport'))
    const AUPhoneAgentReport = React.lazy(() => import('../persentation/pages/Reports/AUPhoneAgentReport'))

    const BankDetails = React.lazy(() => import('../persentation/pages/BankDetails/BankDetailsTable'))

    //Agent Details
    const FieldAgentDetails = React.lazy(() => import('../persentation/pages/AgentDetails/FieldAgentDetails'))
    const PhoneAgentDetails = React.lazy(() => import('../persentation/pages/AgentDetails/PhoneAgentDetails'))
    const AuFieldAgentDetails = React.lazy(() => import('../persentation/pages/AgentDetails/AuFieldAgentDetails'))
    //const AuPhoneAgentDetails = React.lazy(() => import('../persentation/pages/AgentDetails/AuPhoneAgentDetails'))

  

    const ManualDdTable = React.lazy(() => import('../persentation/pages/ManualDdTable/ManualDdTable'))
    const TargetTable = React.lazy(() => import('../persentation/pages/TargetTable/TargetTable'))

    //calculator
    const CalculatorMatrix = React.lazy(() => import('../persentation/pages/CalculatorMatrix/CalculatorMatrix'))

  return (
    <Routes>
      <Route 
        path={routes.LOGIN} 
        element={
        <Suspense fallback="">
          <AuthLayout 
            Child={<Login />} 
          />
        </Suspense>} 
      />

      <Route path={routes.DASHBOARD} element={<Suspense fallback=""><MainLayout Child={<Dashboard/>}/></Suspense>}/>
      <Route path={routes.DASHBOARD_WEEKLY} element={<Suspense fallback=""><MainLayout Child={<Dashboard/>}/></Suspense>}/>
      <Route path={routes.DASHBOARD_MONTHLY} element={<Suspense fallback=""><MainLayout Child={<DashboardMontly/>}/></Suspense>}/>

      <Route path={routes.FIELD_AGENTS_REPORT} element ={ <Suspense fallback=""><MainLayout Child={<FieldAgentReport/>}/></Suspense>}/>
      <Route path={routes.PHONE_AGENTS_REPORT} element ={<Suspense fallback=""><MainLayout Child={<PhoneAgentReport/>}/></Suspense>}/>
      <Route path={routes.AU_FIELD_AGENTS_REPORT} element ={<Suspense fallback=""><MainLayout Child={<AUFieldAgentReport/>}/></Suspense>}/>
      <Route path={routes.AU_PHONE_AGENTS_REPORT} element ={<Suspense fallback=""><MainLayout Child={<AUPhoneAgentReport/>}/></Suspense>}/> 

      <Route path={routes.BANK_DETAILS} element ={<Suspense fallback=""><MainLayout Child={<BankDetails/>}/></Suspense>}/> 

      <Route path={routes.FIELD_AGENT_DETAILS} element ={<Suspense fallback=""><MainLayout Child={<FieldAgentDetails/>}/></Suspense>}/>
      <Route path={routes.PHONE_AGENT_DETAILS} element ={<Suspense fallback=""><MainLayout Child={<PhoneAgentDetails/>}/></Suspense>}/>
      <Route path={routes.AU_AGENT_DETAILS} element ={<Suspense fallback=""><MainLayout Child={<AuFieldAgentDetails/>}/></Suspense>}/>


      <Route path={routes.CALCULATOR_MATRIX} element ={<Suspense fallback=""><MainLayout Child={<CalculatorMatrix/>}/></Suspense>}/>

      <Route path={routes.MANUAL_DD} element ={<Suspense fallback=""><MainLayout Child={<ManualDdTable/>}/></Suspense>}/>
      <Route path={routes.TARGETS} element ={<Suspense fallback=""><MainLayout Child={<TargetTable/>}/></Suspense>}/>

      
       <Route 
        path="*" 
        element={<NoPage/>} 
       /> 
    </Routes>
  )
}

export default AppRoutes