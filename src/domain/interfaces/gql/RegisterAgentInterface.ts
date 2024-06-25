export interface AgentDetails {
    name: string,
    opcode: string,
    email: string,
    leaderEmail: string,
   
}

export interface IRegisterAgent extends AgentDetails {
    password: string
}
export interface IAgentDetails extends AgentDetails{
    appVersion: string,
    device: string
}

export interface AgentFilterInput {
    countryCode:string,
    roleId: number,
}