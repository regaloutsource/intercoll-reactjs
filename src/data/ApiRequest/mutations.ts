import { gql } from "@apollo/client";

export const REGISTER_AGENT = gql`
mutation Mutation($input: RegisterAgentInput!) {
  registerAgent(input: $input)
}
`