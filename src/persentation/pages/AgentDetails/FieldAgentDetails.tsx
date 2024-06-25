import React, { useState, useEffect } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { FieldAgentInterface } from '../../../domain/interfaces/AgentsInterface';
import { IRegisterAgent } from '../../../domain/interfaces/gql/RegisterAgentInterface';
import { GET_ALL_AGENTS } from '../../../data/ApiRequest/queries';
import { DELETE_AGENT, EDIT_AGENT, REGISTER_AGENT } from '../../../data/ApiRequest/mutations';
import DataTable from '../../hoc/DataGrid/CustomDataGrid';
import SnackbarAlert from '../../hoc/Alerts/SnackbarAlert';
import { GridColDef } from '@mui/x-data-grid/models/colDef/gridColDef';
import { AlertState } from '../../../domain/interfaces/AlertStateInterface';

const header: GridColDef[] = [
  { field: 'name', headerName: 'Name',flex:2,align:'center',headerAlign:'center'},
  { field: 'opcode', headerName: 'Op Code',flex:1 ,align:'center',headerAlign:'center'},
  { field: 'email', headerName: 'Email',flex:3,align:'center',headerAlign:'center' },
  { field: 'leaderEmail', headerName: 'Leader Email',flex:3,align:'center',headerAlign:'center' },
  { field: 'appVersion', headerName: 'App Version',flex:2 ,align:'center',headerAlign:'center'},
  { field: 'device', headerName: 'Device',flex:2,align:'center',headerAlign:'center' },
];

const FieldAgentDetails: React.FC = () => {
  const [tableData, setTableData] = useState<Partial<FieldAgentInterface>[]>([]);
  const [alert, setAlert] = useState<AlertState>({ open: false, message: '', severity: 'error' });

  const { data } = useQuery(GET_ALL_AGENTS, {
    variables: { filter: { roleId: 2, countryCode: 'NZ' } },
  }
);

  useEffect(() => {
    if (data) {
      const transformedData: Partial<FieldAgentInterface>[] = data?.agents?.map((agent: any) => ({
        id: agent.agentId,
        name: agent.user.userName,
        opcode: agent.opcode,
        email: agent.user.email,
        leaderEmail: agent.leaderId.email,
        appVersion: agent.agentDeviceLogs?.appVersion ?? '',
        device: agent.agentDeviceLogs?.device ?? '',
      }));
      setTableData(transformedData);
    }
  }, [data]);

  const [registerFieldAgentMutation] = useMutation(REGISTER_AGENT, {
    refetchQueries: [{ query: GET_ALL_AGENTS, variables: { filter: { roleId: 2, countryCode: 'NZ' } } }],
  });
  const [deleteAgentMutation] = useMutation(DELETE_AGENT)
  const [editAgentMutation] = useMutation(EDIT_AGENT)

  const handleRegisterAgent = async (input: IRegisterAgent) => {
    try {
      const { name, email, opcode, leaderEmail, password } = input;
      const variables = {
        input: {
          name,
          email,
          opcode,
          leaderEmail,
          password,
          role: 2,
          countryCode: 'NZ',
        },
      };
      const { data: mutationData } = await registerFieldAgentMutation({ variables });
      if (mutationData) {
        setAlert({ open: true, message: 'Agent added successfully', severity: 'success' });
      }
    } catch (error: any) {
      setAlert({ open: true, message: error.message, severity: 'error' });
    }
  };

  const onDelete = async (id: any) => {
    try {
      const variables = {
          agentId: id
      }
      
      await deleteAgentMutation({ variables });
      setAlert({open:true,message:'Deleted Successfully',severity:'success'})
    } catch (error:any) {
      setAlert({open:true,message:error.message,severity:'error'})
      throw error;
    }
    
  }

  const onEdit = async (updateData:any) => {
    try {
      const {id,name,opcode,email,leaderEmail,appVersion,device} = updateData;
      const variables = {
        input: {
          agentId:id,
          name,
          opcode,
          email,
          leaderEmail,
          appVersion,
          device
        },
      };

      await editAgentMutation({ variables })
      setAlert({open:true,message:'Updated Successfully',severity:'success'})
    } catch (error:any) {
      setAlert({open:true,message:error.message,severity:'error'})
    }
  }

  const handleClose = () => {
    setAlert({ open: false, message: '', severity: 'error' });
  };

  return (
    <>
      <DataTable
        title="Field Agent Details"
        headers={header}
        data={tableData}
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

export default FieldAgentDetails;