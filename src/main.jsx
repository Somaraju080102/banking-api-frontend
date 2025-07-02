import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import UserContext from '../ContextSetup/UserContext.jsx'
import './index.css'
import RoutingComponent from './Routing/RoutingComponent.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>

    <UserContext>
    <RoutingComponent />
    </UserContext>
 </StrictMode>,
)
