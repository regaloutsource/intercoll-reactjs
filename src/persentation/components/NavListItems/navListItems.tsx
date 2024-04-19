import HomeIcon from '@mui/icons-material/Home';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
// import SupportAgentIcon from '@mui/icons-material/SupportAgent';
// import GroupIcon from '@mui/icons-material/Group';
import CalculateIcon from '@mui/icons-material/Calculate';
import AdsClickIcon from '@mui/icons-material/AdsClick';
import AddBoxIcon from '@mui/icons-material/AddBox';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

import { routes } from '../../../routes/routes';

export type IsubCategory = {
  name:string,
  href:string
}
export type INavListItem = {
  id: number,
  name: string,
  icon: JSX.Element | null,
  href: string | null,
  subCategory: Array<IsubCategory> | null
}
export const NavListItem : Array<INavListItem> = [
  {
    id: 1,
    name: 'Home',
    icon: <HomeIcon />,
    href: null,
    subCategory: [
      {
        name: 'Daily Graphs',
        href: routes.DASHBOARD
      },
      {
        name: 'Weekly Graphs',
        href: routes.DASHBOARD_WEEKLY
      },
      {
        name: 'Monthly Graphs',
        href: routes.DASHBOARD_MONTHLY
      },
      {
        name: "Target DD's Graphs",
        href: routes.DASHBOARD_TARGETS
      },
      

    ]
  },
  {
    id: 2,
    name: 'Reports',
    icon: <AnalyticsIcon />,
    href: null,
    subCategory: [
      {
        name: 'FieldAgents Report',
        href: routes.FIELD_AGENTS_REPORT
      },
      {
        name: 'PhoneAgents Report',
        href: routes.PHONE_AGENTS_REPORT
      },
      {
        name: 'AuAgents Report',
        href: routes.AU_FIELD_AGENTS_REPORT
      },
      {
        name: 'AuPhoneAgents Report',
        href: routes.AU_PHONE_AGENTS_REPORT
      }
    ],
  },
  {
    id: 3,
    name: 'Bank Details',
    icon: <AccountBalanceIcon />,
    href: routes.BANK_DETAILS,
    subCategory:null
  },
  {
    id: 4,
    name: 'Agents',
    icon: <AccountBoxIcon />,
    href:null,
    subCategory: [
      {
        name: 'Field Agent',
        href:routes.FIELD_AGENT_DETAILS
      }, 
      {
        name: 'Phone Agent',
        href:routes.PHONE_AGENT_DETAILS
      },
      {
        name: 'AU Agent',
        href:routes.AU_AGENT_DETAILS
      }],
  },
  {
    id: 5,
    name: 'Calculator',
    icon: <CalculateIcon />,
    href: null,
    subCategory: [
      {
        name: 'Calculator Matrix',
        href:routes.CALCULATOR_MATRIX
      }, 
      {
        name: 'Calculator Data',
        href:routes.CALCULATOR_DATA
      }, 
      {
        name: 'Calculator Graph',
        href:routes.CALCULATOR_GRAPH
      }],
  },
  {
    id: 6,
    name: 'Targets',
    icon: <AdsClickIcon />,
    href: routes.TARGETS,
    subCategory: null,
  },
  {
    id: 7,
    name: "Manual DD's",
    icon: <AddBoxIcon />,
    href:routes.MANUAL_DD,
    subCategory:null
  },
];