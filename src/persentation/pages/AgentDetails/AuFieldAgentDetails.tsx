import React from 'react';
import { FieldAgentInterface } from '../../../domain/interfaces/AgentsInterface';
import DataTable from '../../hoc/DataGrid/CustomDataGrid';
import { GridColDef } from '@mui/x-data-grid/models/colDef/gridColDef';

import SnackbarAlert from '../../hoc/Alerts/SnackbarAlert';
import { useMutation, useQuery } from '@apollo/client';
import { AgentFilterInput, IRegisterAgent } from '../../../domain/interfaces/gql/RegisterAgentInterface';
import { AlertState } from '../../../domain/interfaces/AlertStateInterface'
import { GET_ALL_AGENTS } from '../../../data/ApiRequest/queries';
import { DELETE_AGENT, EDIT_AGENT, REGISTER_AGENT } from '../../../data/ApiRequest/mutations';


const header: GridColDef[] = [
  { field: 'name', headerName: 'Name' ,flex:2, headerAlign:'center',align:'center' },
  { field: 'opCode', headerName: 'Op Code',flex:1, headerAlign:'center',align:'center' },
  { field: 'email', headerName: 'Email',flex:3, headerAlign:'center',align:'center' },
  { field: 'leaderEmail', headerName: 'Leader Email',flex:3, headerAlign:'center',align:'center' },
  { field: 'appVersion', headerName: 'App Version',flex:2, headerAlign:'center',align:'center' },
  { field: 'device', headerName: 'Device',flex:2, headerAlign:'center',align:'center' },
];

const AuFieldAgentDetails:React.FC = () => {
  const filter:AgentFilterInput ={
    roleId: 2,
    countryCode: 'AUS',
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

  const [registerFieldAgentMutation] = useMutation(REGISTER_AGENT);
  const [deleteAgentMutation] = useMutation(DELETE_AGENT)
  const [editAgentMutation] = useMutation(EDIT_AGENT)
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
          role: 2,
          countryCode: 'AUS',
        },
      };
  
     await registerFieldAgentMutation({ variables });
    }catch(error){
        console.log(error);
    }
  }

  const handleClose = () => {
    setAlert({open:false,message:'',severity:'error'})
  }

  const onDelete = async (id: any) => {
    try {
      await deleteAgentMutation(id);
      setAlert({open:true,message:'Deleted Successfully',severity:'success'})
    } catch (error:any) {
      setAlert({open:true,message:error,severity:'error'})
    }
    
  }

  const onEdit = async (updateData:any) => {
    try {
      await editAgentMutation(updateData)
      setAlert({open:true,message:'Updated Successfully',severity:'success'})
    } catch (error:any) {
      setAlert({open:true,message:error,severity:'error'})
    }
  }

  return (
    <>
      <DataTable
      title='AU Field Agent Details'
      headers={header}
      data={transformedData}
      enableAdd={true}
      enableDelete={true}
      enableEdit={true}
      onAdd={handleRegisterAgent}
      onDelete={onDelete}
      onEdit={onEdit}
      />
      <SnackbarAlert open={alert.open} message={alert.message} handleClose={handleClose} severity={alert.severity!} />
    </>

  );
};

export default AuFieldAgentDetails;
