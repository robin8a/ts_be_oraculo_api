/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateModelAI = /* GraphQL */ `subscription OnCreateModelAI($filter: ModelSubscriptionModelAIFilterInput) {
  onCreateModelAI(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateModelAISubscriptionVariables,
  APITypes.OnCreateModelAISubscription
>;
export const onUpdateModelAI = /* GraphQL */ `subscription OnUpdateModelAI($filter: ModelSubscriptionModelAIFilterInput) {
  onUpdateModelAI(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateModelAISubscriptionVariables,
  APITypes.OnUpdateModelAISubscription
>;
export const onDeleteModelAI = /* GraphQL */ `subscription OnDeleteModelAI($filter: ModelSubscriptionModelAIFilterInput) {
  onDeleteModelAI(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteModelAISubscriptionVariables,
  APITypes.OnDeleteModelAISubscription
>;
export const onCreateCalculation = /* GraphQL */ `subscription OnCreateCalculation(
  $filter: ModelSubscriptionCalculationFilterInput
) {
  onCreateCalculation(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCalculationSubscriptionVariables,
  APITypes.OnCreateCalculationSubscription
>;
export const onUpdateCalculation = /* GraphQL */ `subscription OnUpdateCalculation(
  $filter: ModelSubscriptionCalculationFilterInput
) {
  onUpdateCalculation(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCalculationSubscriptionVariables,
  APITypes.OnUpdateCalculationSubscription
>;
export const onDeleteCalculation = /* GraphQL */ `subscription OnDeleteCalculation(
  $filter: ModelSubscriptionCalculationFilterInput
) {
  onDeleteCalculation(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCalculationSubscriptionVariables,
  APITypes.OnDeleteCalculationSubscription
>;
export const onCreateUser = /* GraphQL */ `subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
  onCreateUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserSubscriptionVariables,
  APITypes.OnCreateUserSubscription
>;
export const onUpdateUser = /* GraphQL */ `subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
  onUpdateUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserSubscriptionVariables,
  APITypes.OnUpdateUserSubscription
>;
export const onDeleteUser = /* GraphQL */ `subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
  onDeleteUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserSubscriptionVariables,
  APITypes.OnDeleteUserSubscription
>;
export const onCreateModelPackage = /* GraphQL */ `subscription OnCreateModelPackage(
  $filter: ModelSubscriptionModelPackageFilterInput
) {
  onCreateModelPackage(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateModelPackageSubscriptionVariables,
  APITypes.OnCreateModelPackageSubscription
>;
export const onUpdateModelPackage = /* GraphQL */ `subscription OnUpdateModelPackage(
  $filter: ModelSubscriptionModelPackageFilterInput
) {
  onUpdateModelPackage(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateModelPackageSubscriptionVariables,
  APITypes.OnUpdateModelPackageSubscription
>;
export const onDeleteModelPackage = /* GraphQL */ `subscription OnDeleteModelPackage(
  $filter: ModelSubscriptionModelPackageFilterInput
) {
  onDeleteModelPackage(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteModelPackageSubscriptionVariables,
  APITypes.OnDeleteModelPackageSubscription
>;
export const onCreateUserModelPackage = /* GraphQL */ `subscription OnCreateUserModelPackage(
  $filter: ModelSubscriptionUserModelPackageFilterInput
) {
  onCreateUserModelPackage(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserModelPackageSubscriptionVariables,
  APITypes.OnCreateUserModelPackageSubscription
>;
export const onUpdateUserModelPackage = /* GraphQL */ `subscription OnUpdateUserModelPackage(
  $filter: ModelSubscriptionUserModelPackageFilterInput
) {
  onUpdateUserModelPackage(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserModelPackageSubscriptionVariables,
  APITypes.OnUpdateUserModelPackageSubscription
>;
export const onDeleteUserModelPackage = /* GraphQL */ `subscription OnDeleteUserModelPackage(
  $filter: ModelSubscriptionUserModelPackageFilterInput
) {
  onDeleteUserModelPackage(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserModelPackageSubscriptionVariables,
  APITypes.OnDeleteUserModelPackageSubscription
>;
