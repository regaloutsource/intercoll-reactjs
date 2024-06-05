import { gql } from '@apollo/client';

export const GET_ALL_AGENTS = gql`
query QUERY($filter: AgentFilterInput) {
  agents(filter: $filter) {
    agentId
    opcode
    leaderId {
      email
    }
    user {
      userName
      email
      role {
        roleId
        roleName
      }
    }
    worksIn {
      country {
        countryCode
      }
    }
    agentDeviceLogs {
      appVersion
      deviceInfo
    }
  }
}
` 