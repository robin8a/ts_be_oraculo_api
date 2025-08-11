/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getModelAI = /* GraphQL */ `query GetModelAI($id: ID!) {
  getModelAI(id: $id) {
    id
    name
    description
    document_link
    api_link
    version
    is_approved
    tokens_cost
    cost_tokens
    calculations {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetModelAIQueryVariables,
  APITypes.GetModelAIQuery
>;
export const listModelAIS = /* GraphQL */ `query ListModelAIS(
  $filter: ModelModelAIFilterInput
  $limit: Int
  $nextToken: String
) {
  listModelAIS(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      description
      document_link
      api_link
      version
      is_approved
      tokens_cost
      cost_tokens
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListModelAISQueryVariables,
  APITypes.ListModelAISQuery
>;
export const getCalculation = /* GraphQL */ `query GetCalculation($id: ID!) {
  getCalculation(id: $id) {
    id
    polygon
    start_date
    end_date
    satellite_TIF
    result_TIF
    result_PNG
    is_to_block_chain
    modelAI {
      id
      name
      description
      document_link
      api_link
      version
      is_approved
      tokens_cost
      cost_tokens
      createdAt
      updatedAt
      __typename
    }
    user {
      id
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    modelAICalculationsId
    userCalculationsId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetCalculationQueryVariables,
  APITypes.GetCalculationQuery
>;
export const listCalculations = /* GraphQL */ `query ListCalculations(
  $filter: ModelCalculationFilterInput
  $limit: Int
  $nextToken: String
) {
  listCalculations(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      polygon
      start_date
      end_date
      satellite_TIF
      result_TIF
      result_PNG
      is_to_block_chain
      createdAt
      updatedAt
      modelAICalculationsId
      userCalculationsId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCalculationsQueryVariables,
  APITypes.ListCalculationsQuery
>;
export const getUser = /* GraphQL */ `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    user_model_packages {
      nextToken
      __typename
    }
    calculations {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetUserQueryVariables, APITypes.GetUserQuery>;
export const listUsers = /* GraphQL */ `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListUsersQueryVariables, APITypes.ListUsersQuery>;
export const getModelPackage = /* GraphQL */ `query GetModelPackage($id: ID!) {
  getModelPackage(id: $id) {
    id
    tokenAmount
    user_model_packages {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetModelPackageQueryVariables,
  APITypes.GetModelPackageQuery
>;
export const listModelPackages = /* GraphQL */ `query ListModelPackages(
  $filter: ModelModelPackageFilterInput
  $limit: Int
  $nextToken: String
) {
  listModelPackages(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      tokenAmount
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListModelPackagesQueryVariables,
  APITypes.ListModelPackagesQuery
>;
export const getUserModelPackage = /* GraphQL */ `query GetUserModelPackage($id: ID!) {
  getUserModelPackage(id: $id) {
    id
    modelPackage {
      id
      tokenAmount
      createdAt
      updatedAt
      __typename
    }
    user {
      id
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    userUser_model_packagesId
    modelPackageUser_model_packagesId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetUserModelPackageQueryVariables,
  APITypes.GetUserModelPackageQuery
>;
export const listUserModelPackages = /* GraphQL */ `query ListUserModelPackages(
  $filter: ModelUserModelPackageFilterInput
  $limit: Int
  $nextToken: String
) {
  listUserModelPackages(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      createdAt
      updatedAt
      userUser_model_packagesId
      modelPackageUser_model_packagesId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListUserModelPackagesQueryVariables,
  APITypes.ListUserModelPackagesQuery
>;
