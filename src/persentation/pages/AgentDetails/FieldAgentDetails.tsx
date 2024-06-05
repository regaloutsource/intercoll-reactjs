import React, { useState, useEffect } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { FieldAgentInterface } from '../../../domain/interfaces/AgentsInterface';
import { IRegisterAgent } from '../../../domain/interfaces/gql/RegisterAgentInterface';
import { GET_ALL_AGENTS } from '../../../data/ApiRequest/queries';
import { REGISTER_AGENT } from '../../../data/ApiRequest/mutations';
import DataTable from '../../components/DataGrid/CustomDataGrid';
import SnackbarAlert from '../../components/Alerts/SnackbarAlert';
import { GridColDef } from '@mui/x-data-grid/models/colDef/gridColDef';
import { AlertState } from '../../../domain/interfaces/AlertStateInterface';

const header: GridColDef[] = [
  { field: 'name', headerName: 'Name',flex:2 },
  { field: 'opCode', headerName: 'Op Code',flex:1 },
  { field: 'email', headerName: 'Email',flex:3 },
  { field: 'leaderEmail', headerName: 'Leader Email',flex:3 },
  { field: 'appVersion', headerName: 'App Version',flex:2 },
  { field: 'device', headerName: 'Device',flex:2 },
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
        opCode: agent.opcode,
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
      />
      <SnackbarAlert open={alert.open} message={alert.message} handleClose={handleClose} severity={alert.severity!} />
    </>
  );
};

export default FieldAgentDetails;