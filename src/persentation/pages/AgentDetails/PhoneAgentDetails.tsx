import React from 'react'

import DataTable from '../../components/DataGrid/CustomDataGrid';
import { PhoneAgentInterface } from '../../../domain/interfaces/AgentsInterface';
import { GridColDef } from '@mui/x-data-grid/models/colDef/gridColDef';

import SnackbarAlert from '../../components/Alerts/SnackbarAlert';
import { useMutation, useQuery } from '@apollo/client';
import { AgentFilterInput, IRegisterAgent } from '../../../domain/interfaces/gql/RegisterAgentInterface';
import { AlertState } from '../../../domain/interfaces/AlertStateInterface'
import { GET_ALL_AGENTS } from '../../../data/ApiRequest/queries';
import { REGISTER_AGENT } from '../../../data/ApiRequest/mutations';

const header: GridColDef[] = [
  { field: 'name', headerName: 'Name',flex:2 },
  { field: 'opCode', headerName: 'Op Code',flex:1 },
  { field: 'email', headerName: 'Email',flex:3 },
  { field: 'leaderEmail', headerName: 'Leader Email',flex:3 },
];


const AuPhoneAgentDetails:React.FC = () => {

  const filter:AgentFilterInput ={
    roleId: 3,
    countryCode: 'NZ',
  }
  
  const { data } =  useQuery(GET_ALL_AGENTS, {
    variables: { filter },
  });


     
    const transformedData = data?.agents.map((agent: any) => ({
      id: agent.agentId,
      name: agent.user.userName,
      opCode: agent.opcode,
      email: agent.user.email,
      leaderEmail: agent.leaderId.email,
      appVersion: agent.agentDeviceLogs?.appVersion ?? "",
      device: agent.agentDeviceLogs?.device ?? "",
  }))??[]; 

  const [registerFieldAgentMutation,{error, loading }] = useMutation(REGISTER_AGENT);
  const [alert, setAlert] = React.useState<AlertState>({ open: false, message: "" })
  const handleRegisterAgent = async (input:IRegisterAgent) => {
    try{
    const { name , email, opcode,leaderEmail, password} = input;
      const variables = {
        input: {
          name,
          email,
          opcode,
          leaderEmail,
          password,
          role: 3,
          countryCode: 'NZ',
        },
      };
  
    await registerFieldAgentMutation({ variables });
    if(error)
    

    if(!loading && !error)
    setAlert({open:true,message:"Agent Added successfully",severity:'success'});
    }catch(error:any){
      setAlert({open:true,message:error.message,severity:'error'});
    }
  }

  const handleClose = () => {
    setAlert({open:false,message:'',severity:'error'})
  }

  return (
    <>
    <DataTable
      title='Phone Agent Details'
      headers={header}
      data={transformedData}
      enableAdd={true}
      enableDelete={true}
      enableEdit={true}
      onAdd={handleRegisterAgent}     
    />
    <SnackbarAlert open={alert.open} message={alert.message} handleClose={handleClose} severity={alert.severity!} />
    </>
  )
}

export default AuPhoneAgentDetails