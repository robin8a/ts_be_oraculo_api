/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createModelAI = /* GraphQL */ `mutation CreateModelAI(
  $input: CreateModelAIInput!
  $condition: ModelModelAIConditionInput
) {
  createModelAI(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateModelAIMutationVariables,
  APITypes.CreateModelAIMutation
>;
export const updateModelAI = /* GraphQL */ `mutation UpdateModelAI(
  $input: UpdateModelAIInput!
  $condition: ModelModelAIConditionInput
) {
  updateModelAI(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateModelAIMutationVariables,
  APITypes.UpdateModelAIMutation
>;
export const deleteModelAI = /* GraphQL */ `mutation DeleteModelAI(
  $input: DeleteModelAIInput!
  $condition: ModelModelAIConditionInput
) {
  deleteModelAI(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteModelAIMutationVariables,
  APITypes.DeleteModelAIMutation
>;
export const createCalculation = /* GraphQL */ `mutation CreateCalculation(
  $input: CreateCalculationInput!
  $condition: ModelCalculationConditionInput
) {
  createCalculation(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateCalculationMutationVariables,
  APITypes.CreateCalculationMutation
>;
export const updateCalculation = /* GraphQL */ `mutation UpdateCalculation(
  $input: UpdateCalculationInput!
  $condition: ModelCalculationConditionInput
) {
  updateCalculation(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateCalculationMutationVariables,
  APITypes.UpdateCalculationMutation
>;
export const deleteCalculation = /* GraphQL */ `mutation DeleteCalculation(
  $input: DeleteCalculationInput!
  $condition: ModelCalculationConditionInput
) {
  deleteCalculation(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteCalculationMutationVariables,
  APITypes.DeleteCalculationMutation
>;
export const createUser = /* GraphQL */ `mutation CreateUser(
  $input: CreateUserInput!
  $condition: ModelUserConditionInput
) {
  createUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateUserMutationVariables,
  APITypes.CreateUserMutation
>;
export const updateUser = /* GraphQL */ `mutation UpdateUser(
  $input: UpdateUserInput!
  $condition: ModelUserConditionInput
) {
  updateUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateUserMutationVariables,
  APITypes.UpdateUserMutation
>;
export const deleteUser = /* GraphQL */ `mutation DeleteUser(
  $input: DeleteUserInput!
  $condition: ModelUserConditionInput
) {
  deleteUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteUserMutationVariables,
  APITypes.DeleteUserMutation
>;
export const createModelPackage = /* GraphQL */ `mutation CreateModelPackage(
  $input: CreateModelPackageInput!
  $condition: ModelModelPackageConditionInput
) {
  createModelPackage(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateModelPackageMutationVariables,
  APITypes.CreateModelPackageMutation
>;
export const updateModelPackage = /* GraphQL */ `mutation UpdateModelPackage(
  $input: UpdateModelPackageInput!
  $condition: ModelModelPackageConditionInput
) {
  updateModelPackage(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateModelPackageMutationVariables,
  APITypes.UpdateModelPackageMutation
>;
export const deleteModelPackage = /* GraphQL */ `mutation DeleteModelPackage(
  $input: DeleteModelPackageInput!
  $condition: ModelModelPackageConditionInput
) {
  deleteModelPackage(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteModelPackageMutationVariables,
  APITypes.DeleteModelPackageMutation
>;
export const createUserModelPackage = /* GraphQL */ `mutation CreateUserModelPackage(
  $input: CreateUserModelPackageInput!
  $condition: ModelUserModelPackageConditionInput
) {
  createUserModelPackage(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateUserModelPackageMutationVariables,
  APITypes.CreateUserModelPackageMutation
>;
export const updateUserModelPackage = /* GraphQL */ `mutation UpdateUserModelPackage(
  $input: UpdateUserModelPackageInput!
  $condition: ModelUserModelPackageConditionInput
) {
  updateUserModelPackage(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateUserModelPackageMutationVariables,
  APITypes.UpdateUserModelPackageMutation
>;
export const deleteUserModelPackage = /* GraphQL */ `mutation DeleteUserModelPackage(
  $input: DeleteUserModelPackageInput!
  $condition: ModelUserModelPackageConditionInput
) {
  deleteUserModelPackage(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteUserModelPackageMutationVariables,
  APITypes.DeleteUserModelPackageMutation
>;
