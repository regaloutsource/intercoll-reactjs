import { gql } from "@apollo/client";

export const REGISTER_AGENT = gql`
mutation Mutation($input: RegisterAgentInput!) {
  registerAgent(input: $input)
}
`
export const DELETE_AGENT = gql`
 mutation DeleteAgent($agentId: Int!) {
  deleteAgent(agentId: $agentId)
}

 `

 export const EDIT_AGENT = gql`
 mutation UpdateAgentInfo($input: AgentUpdate) {
  updateAgentInfo(input: $input)
}
 `

export const DELETE_PHONE_AGENT_CUSTOMER_DATA = gql`
mutation Mutation($phoneDataId: Int!) {
  deletePhoneAgentCustomerData(PhoneDataId: $phoneDataId)
}

`
export const CREATE_TARGET_DD = gql`
mutation CreateTargetDD($input: TargetDDInput!) {
  createTargetDD(input: $input){
    id
  }
}

`

export const EDIT_TARGET_DD = gql`
mutation UpdateTargetDD($input: TargetDDUpdate!) {
  updateTargetDD(input: $input) {
    id
  }
}
`

export const DELETE_TARGET_DD = gql`
mutation DeleteTargetDD($deleteTargetDdId: Int!) {
  deleteTargetDD(id: $deleteTargetDdId)
}
`
export const CREATE_MANUAL_DD = gql`
mutation Mutation($input: ManualDDInput!) {
  createManualDD(input: $input) {
    id
  }
}
`

export const EDIT_MANUAL_DD = gql`
mutation UpdateManualDD($input: ManualDDUpdate!) {
  updateManualDD(input: $input) {
    id
  }
}
`
export const DELETE_MANUAL_DD = gql`
mutation DeleteManualDD($deleteManualDdId: Int!) {
  deleteManualDD(id: $deleteManualDdId)
}

`
export const DELETE_FEILD_AGENT_CUSTOMER_DATA = gql`
mutation DeleteVisit($visitId: Int!) {
  deleteVisit(visitId: $visitId)
}
`