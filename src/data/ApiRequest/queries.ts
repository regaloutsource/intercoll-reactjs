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
export const GET_PHONE_AGENT_CUSTOMER_DATA = gql`
query GetPhoneAgentCustomerData($endDate: Date, $startDate: Date, $country: String) {
  getPhoneAgentCustomerData(endDate: $endDate, startDate: $startDate, country: $country) {
    phoneDataId
    ccid
    amount
    dd
    date
    time
    agent {
      agentId,
      opcode
    }
  }
}
`
export const GET_TARGET_DDS = gql`
query Query {
  getAllTargetDDs {
    id
    target
    date
    active
  }
}
`
export const GET_MANUAL_DDS = gql`
query GetAllManualDDs($from: Date, $to: Date) {
  getAllManualDDs(from: $from, to: $to) {
    id
    dds
    date
  }
}
`

export const GET_FIELD_AGENT_CUSTOMER_DATA = gql`
query GetAllVisits($country: String!, $startDate: Date, $endDate: Date) {
  getAllVisits(country: $country, startDate: $startDate, endDate: $endDate) {
    visitId
    agent {
      opcode
      worksIn {
        country {
          countryCode
          countryName
        }
      }
    }
    debtor {
      id
      debtorId
      debtorName
    }
    amount
    date
    paymentMode {
      modeName
    }
 
    buttonPressed {
      buttonName
    }
    paymentType {
      frequencyName
    }
  }
}
`