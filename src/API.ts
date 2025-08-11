/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateModelAIInput = {
  id?: string | null,
  name: string,
  description: string,
  document_link: string,
  api_link: string,
  version: string,
  is_approved: boolean,
  tokens_cost: number,
  cost_tokens: number,
};

export type ModelModelAIConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  document_link?: ModelStringInput | null,
  api_link?: ModelStringInput | null,
  version?: ModelStringInput | null,
  is_approved?: ModelBooleanInput | null,
  tokens_cost?: ModelIntInput | null,
  cost_tokens?: ModelIntInput | null,
  and?: Array< ModelModelAIConditionInput | null > | null,
  or?: Array< ModelModelAIConditionInput | null > | null,
  not?: ModelModelAIConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelAI = {
  __typename: "ModelAI",
  id: string,
  name: string,
  description: string,
  document_link: string,
  api_link: string,
  version: string,
  is_approved: boolean,
  tokens_cost: number,
  cost_tokens: number,
  calculations?: ModelCalculationConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelCalculationConnection = {
  __typename: "ModelCalculationConnection",
  items:  Array<Calculation | null >,
  nextToken?: string | null,
};

export type Calculation = {
  __typename: "Calculation",
  id: string,
  polygon: string,
  start_date: number,
  end_date: number,
  satellite_TIF: string,
  result_TIF: string,
  result_PNG: string,
  is_to_block_chain: boolean,
  modelAI?: ModelAI | null,
  user?: User | null,
  createdAt: string,
  updatedAt: string,
  modelAICalculationsId?: string | null,
  userCalculationsId?: string | null,
};

export type User = {
  __typename: "User",
  id: string,
  user_model_packages?: ModelUserModelPackageConnection | null,
  calculations?: ModelCalculationConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelUserModelPackageConnection = {
  __typename: "ModelUserModelPackageConnection",
  items:  Array<UserModelPackage | null >,
  nextToken?: string | null,
};

export type UserModelPackage = {
  __typename: "UserModelPackage",
  id: string,
  modelPackage?: ModelPackage | null,
  user?: User | null,
  createdAt: string,
  updatedAt: string,
  userUser_model_packagesId?: string | null,
  modelPackageUser_model_packagesId?: string | null,
};

export type ModelPackage = {
  __typename: "ModelPackage",
  id: string,
  tokenAmount: number,
  user_model_packages?: ModelUserModelPackageConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateModelAIInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  document_link?: string | null,
  api_link?: string | null,
  version?: string | null,
  is_approved?: boolean | null,
  tokens_cost?: number | null,
  cost_tokens?: number | null,
};

export type DeleteModelAIInput = {
  id: string,
};

export type CreateCalculationInput = {
  id?: string | null,
  polygon: string,
  start_date: number,
  end_date: number,
  satellite_TIF: string,
  result_TIF: string,
  result_PNG: string,
  is_to_block_chain: boolean,
  modelAICalculationsId?: string | null,
  userCalculationsId?: string | null,
};

export type ModelCalculationConditionInput = {
  polygon?: ModelStringInput | null,
  start_date?: ModelIntInput | null,
  end_date?: ModelIntInput | null,
  satellite_TIF?: ModelStringInput | null,
  result_TIF?: ModelStringInput | null,
  result_PNG?: ModelStringInput | null,
  is_to_block_chain?: ModelBooleanInput | null,
  and?: Array< ModelCalculationConditionInput | null > | null,
  or?: Array< ModelCalculationConditionInput | null > | null,
  not?: ModelCalculationConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  modelAICalculationsId?: ModelIDInput | null,
  userCalculationsId?: ModelIDInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateCalculationInput = {
  id: string,
  polygon?: string | null,
  start_date?: number | null,
  end_date?: number | null,
  satellite_TIF?: string | null,
  result_TIF?: string | null,
  result_PNG?: string | null,
  is_to_block_chain?: boolean | null,
  modelAICalculationsId?: string | null,
  userCalculationsId?: string | null,
};

export type DeleteCalculationInput = {
  id: string,
};

export type CreateUserInput = {
  id?: string | null,
};

export type ModelUserConditionInput = {
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateUserInput = {
  id: string,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateModelPackageInput = {
  id?: string | null,
  tokenAmount: number,
};

export type ModelModelPackageConditionInput = {
  tokenAmount?: ModelIntInput | null,
  and?: Array< ModelModelPackageConditionInput | null > | null,
  or?: Array< ModelModelPackageConditionInput | null > | null,
  not?: ModelModelPackageConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateModelPackageInput = {
  id: string,
  tokenAmount?: number | null,
};

export type DeleteModelPackageInput = {
  id: string,
};

export type CreateUserModelPackageInput = {
  id?: string | null,
  userUser_model_packagesId?: string | null,
  modelPackageUser_model_packagesId?: string | null,
};

export type ModelUserModelPackageConditionInput = {
  and?: Array< ModelUserModelPackageConditionInput | null > | null,
  or?: Array< ModelUserModelPackageConditionInput | null > | null,
  not?: ModelUserModelPackageConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  userUser_model_packagesId?: ModelIDInput | null,
  modelPackageUser_model_packagesId?: ModelIDInput | null,
};

export type UpdateUserModelPackageInput = {
  id: string,
  userUser_model_packagesId?: string | null,
  modelPackageUser_model_packagesId?: string | null,
};

export type DeleteUserModelPackageInput = {
  id: string,
};

export type ModelModelAIFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  document_link?: ModelStringInput | null,
  api_link?: ModelStringInput | null,
  version?: ModelStringInput | null,
  is_approved?: ModelBooleanInput | null,
  tokens_cost?: ModelIntInput | null,
  cost_tokens?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelModelAIFilterInput | null > | null,
  or?: Array< ModelModelAIFilterInput | null > | null,
  not?: ModelModelAIFilterInput | null,
};

export type ModelModelAIConnection = {
  __typename: "ModelModelAIConnection",
  items:  Array<ModelAI | null >,
  nextToken?: string | null,
};

export type ModelCalculationFilterInput = {
  id?: ModelIDInput | null,
  polygon?: ModelStringInput | null,
  start_date?: ModelIntInput | null,
  end_date?: ModelIntInput | null,
  satellite_TIF?: ModelStringInput | null,
  result_TIF?: ModelStringInput | null,
  result_PNG?: ModelStringInput | null,
  is_to_block_chain?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelCalculationFilterInput | null > | null,
  or?: Array< ModelCalculationFilterInput | null > | null,
  not?: ModelCalculationFilterInput | null,
  modelAICalculationsId?: ModelIDInput | null,
  userCalculationsId?: ModelIDInput | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelModelPackageFilterInput = {
  id?: ModelIDInput | null,
  tokenAmount?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelModelPackageFilterInput | null > | null,
  or?: Array< ModelModelPackageFilterInput | null > | null,
  not?: ModelModelPackageFilterInput | null,
};

export type ModelModelPackageConnection = {
  __typename: "ModelModelPackageConnection",
  items:  Array<ModelPackage | null >,
  nextToken?: string | null,
};

export type ModelUserModelPackageFilterInput = {
  id?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelUserModelPackageFilterInput | null > | null,
  or?: Array< ModelUserModelPackageFilterInput | null > | null,
  not?: ModelUserModelPackageFilterInput | null,
  userUser_model_packagesId?: ModelIDInput | null,
  modelPackageUser_model_packagesId?: ModelIDInput | null,
};

export type ModelSubscriptionModelAIFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  document_link?: ModelSubscriptionStringInput | null,
  api_link?: ModelSubscriptionStringInput | null,
  version?: ModelSubscriptionStringInput | null,
  is_approved?: ModelSubscriptionBooleanInput | null,
  tokens_cost?: ModelSubscriptionIntInput | null,
  cost_tokens?: ModelSubscriptionIntInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionModelAIFilterInput | null > | null,
  or?: Array< ModelSubscriptionModelAIFilterInput | null > | null,
  modelAICalculationsId?: ModelSubscriptionIDInput | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionCalculationFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  polygon?: ModelSubscriptionStringInput | null,
  start_date?: ModelSubscriptionIntInput | null,
  end_date?: ModelSubscriptionIntInput | null,
  satellite_TIF?: ModelSubscriptionStringInput | null,
  result_TIF?: ModelSubscriptionStringInput | null,
  result_PNG?: ModelSubscriptionStringInput | null,
  is_to_block_chain?: ModelSubscriptionBooleanInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCalculationFilterInput | null > | null,
  or?: Array< ModelSubscriptionCalculationFilterInput | null > | null,
};

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
  userUser_model_packagesId?: ModelSubscriptionIDInput | null,
  userCalculationsId?: ModelSubscriptionIDInput | null,
};

export type ModelSubscriptionModelPackageFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  tokenAmount?: ModelSubscriptionIntInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionModelPackageFilterInput | null > | null,
  or?: Array< ModelSubscriptionModelPackageFilterInput | null > | null,
  modelPackageUser_model_packagesId?: ModelSubscriptionIDInput | null,
};

export type ModelSubscriptionUserModelPackageFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserModelPackageFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserModelPackageFilterInput | null > | null,
};

export type CreateModelAIMutationVariables = {
  input: CreateModelAIInput,
  condition?: ModelModelAIConditionInput | null,
};

export type CreateModelAIMutation = {
  createModelAI?:  {
    __typename: "ModelAI",
    id: string,
    name: string,
    description: string,
    document_link: string,
    api_link: string,
    version: string,
    is_approved: boolean,
    tokens_cost: number,
    cost_tokens: number,
    calculations?:  {
      __typename: "ModelCalculationConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateModelAIMutationVariables = {
  input: UpdateModelAIInput,
  condition?: ModelModelAIConditionInput | null,
};

export type UpdateModelAIMutation = {
  updateModelAI?:  {
    __typename: "ModelAI",
    id: string,
    name: string,
    description: string,
    document_link: string,
    api_link: string,
    version: string,
    is_approved: boolean,
    tokens_cost: number,
    cost_tokens: number,
    calculations?:  {
      __typename: "ModelCalculationConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteModelAIMutationVariables = {
  input: DeleteModelAIInput,
  condition?: ModelModelAIConditionInput | null,
};

export type DeleteModelAIMutation = {
  deleteModelAI?:  {
    __typename: "ModelAI",
    id: string,
    name: string,
    description: string,
    document_link: string,
    api_link: string,
    version: string,
    is_approved: boolean,
    tokens_cost: number,
    cost_tokens: number,
    calculations?:  {
      __typename: "ModelCalculationConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCalculationMutationVariables = {
  input: CreateCalculationInput,
  condition?: ModelCalculationConditionInput | null,
};

export type CreateCalculationMutation = {
  createCalculation?:  {
    __typename: "Calculation",
    id: string,
    polygon: string,
    start_date: number,
    end_date: number,
    satellite_TIF: string,
    result_TIF: string,
    result_PNG: string,
    is_to_block_chain: boolean,
    modelAI?:  {
      __typename: "ModelAI",
      id: string,
      name: string,
      description: string,
      document_link: string,
      api_link: string,
      version: string,
      is_approved: boolean,
      tokens_cost: number,
      cost_tokens: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    user?:  {
      __typename: "User",
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    modelAICalculationsId?: string | null,
    userCalculationsId?: string | null,
  } | null,
};

export type UpdateCalculationMutationVariables = {
  input: UpdateCalculationInput,
  condition?: ModelCalculationConditionInput | null,
};

export type UpdateCalculationMutation = {
  updateCalculation?:  {
    __typename: "Calculation",
    id: string,
    polygon: string,
    start_date: number,
    end_date: number,
    satellite_TIF: string,
    result_TIF: string,
    result_PNG: string,
    is_to_block_chain: boolean,
    modelAI?:  {
      __typename: "ModelAI",
      id: string,
      name: string,
      description: string,
      document_link: string,
      api_link: string,
      version: string,
      is_approved: boolean,
      tokens_cost: number,
      cost_tokens: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    user?:  {
      __typename: "User",
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    modelAICalculationsId?: string | null,
    userCalculationsId?: string | null,
  } | null,
};

export type DeleteCalculationMutationVariables = {
  input: DeleteCalculationInput,
  condition?: ModelCalculationConditionInput | null,
};

export type DeleteCalculationMutation = {
  deleteCalculation?:  {
    __typename: "Calculation",
    id: string,
    polygon: string,
    start_date: number,
    end_date: number,
    satellite_TIF: string,
    result_TIF: string,
    result_PNG: string,
    is_to_block_chain: boolean,
    modelAI?:  {
      __typename: "ModelAI",
      id: string,
      name: string,
      description: string,
      document_link: string,
      api_link: string,
      version: string,
      is_approved: boolean,
      tokens_cost: number,
      cost_tokens: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    user?:  {
      __typename: "User",
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    modelAICalculationsId?: string | null,
    userCalculationsId?: string | null,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    user_model_packages?:  {
      __typename: "ModelUserModelPackageConnection",
      nextToken?: string | null,
    } | null,
    calculations?:  {
      __typename: "ModelCalculationConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    user_model_packages?:  {
      __typename: "ModelUserModelPackageConnection",
      nextToken?: string | null,
    } | null,
    calculations?:  {
      __typename: "ModelCalculationConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    user_model_packages?:  {
      __typename: "ModelUserModelPackageConnection",
      nextToken?: string | null,
    } | null,
    calculations?:  {
      __typename: "ModelCalculationConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateModelPackageMutationVariables = {
  input: CreateModelPackageInput,
  condition?: ModelModelPackageConditionInput | null,
};

export type CreateModelPackageMutation = {
  createModelPackage?:  {
    __typename: "ModelPackage",
    id: string,
    tokenAmount: number,
    user_model_packages?:  {
      __typename: "ModelUserModelPackageConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateModelPackageMutationVariables = {
  input: UpdateModelPackageInput,
  condition?: ModelModelPackageConditionInput | null,
};

export type UpdateModelPackageMutation = {
  updateModelPackage?:  {
    __typename: "ModelPackage",
    id: string,
    tokenAmount: number,
    user_model_packages?:  {
      __typename: "ModelUserModelPackageConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteModelPackageMutationVariables = {
  input: DeleteModelPackageInput,
  condition?: ModelModelPackageConditionInput | null,
};

export type DeleteModelPackageMutation = {
  deleteModelPackage?:  {
    __typename: "ModelPackage",
    id: string,
    tokenAmount: number,
    user_model_packages?:  {
      __typename: "ModelUserModelPackageConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateUserModelPackageMutationVariables = {
  input: CreateUserModelPackageInput,
  condition?: ModelUserModelPackageConditionInput | null,
};

export type CreateUserModelPackageMutation = {
  createUserModelPackage?:  {
    __typename: "UserModelPackage",
    id: string,
    modelPackage?:  {
      __typename: "ModelPackage",
      id: string,
      tokenAmount: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    user?:  {
      __typename: "User",
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    userUser_model_packagesId?: string | null,
    modelPackageUser_model_packagesId?: string | null,
  } | null,
};

export type UpdateUserModelPackageMutationVariables = {
  input: UpdateUserModelPackageInput,
  condition?: ModelUserModelPackageConditionInput | null,
};

export type UpdateUserModelPackageMutation = {
  updateUserModelPackage?:  {
    __typename: "UserModelPackage",
    id: string,
    modelPackage?:  {
      __typename: "ModelPackage",
      id: string,
      tokenAmount: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    user?:  {
      __typename: "User",
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    userUser_model_packagesId?: string | null,
    modelPackageUser_model_packagesId?: string | null,
  } | null,
};

export type DeleteUserModelPackageMutationVariables = {
  input: DeleteUserModelPackageInput,
  condition?: ModelUserModelPackageConditionInput | null,
};

export type DeleteUserModelPackageMutation = {
  deleteUserModelPackage?:  {
    __typename: "UserModelPackage",
    id: string,
    modelPackage?:  {
      __typename: "ModelPackage",
      id: string,
      tokenAmount: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    user?:  {
      __typename: "User",
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    userUser_model_packagesId?: string | null,
    modelPackageUser_model_packagesId?: string | null,
  } | null,
};

export type GetModelAIQueryVariables = {
  id: string,
};

export type GetModelAIQuery = {
  getModelAI?:  {
    __typename: "ModelAI",
    id: string,
    name: string,
    description: string,
    document_link: string,
    api_link: string,
    version: string,
    is_approved: boolean,
    tokens_cost: number,
    cost_tokens: number,
    calculations?:  {
      __typename: "ModelCalculationConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListModelAISQueryVariables = {
  filter?: ModelModelAIFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListModelAISQuery = {
  listModelAIS?:  {
    __typename: "ModelModelAIConnection",
    items:  Array< {
      __typename: "ModelAI",
      id: string,
      name: string,
      description: string,
      document_link: string,
      api_link: string,
      version: string,
      is_approved: boolean,
      tokens_cost: number,
      cost_tokens: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCalculationQueryVariables = {
  id: string,
};

export type GetCalculationQuery = {
  getCalculation?:  {
    __typename: "Calculation",
    id: string,
    polygon: string,
    start_date: number,
    end_date: number,
    satellite_TIF: string,
    result_TIF: string,
    result_PNG: string,
    is_to_block_chain: boolean,
    modelAI?:  {
      __typename: "ModelAI",
      id: string,
      name: string,
      description: string,
      document_link: string,
      api_link: string,
      version: string,
      is_approved: boolean,
      tokens_cost: number,
      cost_tokens: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    user?:  {
      __typename: "User",
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    modelAICalculationsId?: string | null,
    userCalculationsId?: string | null,
  } | null,
};

export type ListCalculationsQueryVariables = {
  filter?: ModelCalculationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCalculationsQuery = {
  listCalculations?:  {
    __typename: "ModelCalculationConnection",
    items:  Array< {
      __typename: "Calculation",
      id: string,
      polygon: string,
      start_date: number,
      end_date: number,
      satellite_TIF: string,
      result_TIF: string,
      result_PNG: string,
      is_to_block_chain: boolean,
      createdAt: string,
      updatedAt: string,
      modelAICalculationsId?: string | null,
      userCalculationsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    user_model_packages?:  {
      __typename: "ModelUserModelPackageConnection",
      nextToken?: string | null,
    } | null,
    calculations?:  {
      __typename: "ModelCalculationConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetModelPackageQueryVariables = {
  id: string,
};

export type GetModelPackageQuery = {
  getModelPackage?:  {
    __typename: "ModelPackage",
    id: string,
    tokenAmount: number,
    user_model_packages?:  {
      __typename: "ModelUserModelPackageConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListModelPackagesQueryVariables = {
  filter?: ModelModelPackageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListModelPackagesQuery = {
  listModelPackages?:  {
    __typename: "ModelModelPackageConnection",
    items:  Array< {
      __typename: "ModelPackage",
      id: string,
      tokenAmount: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUserModelPackageQueryVariables = {
  id: string,
};

export type GetUserModelPackageQuery = {
  getUserModelPackage?:  {
    __typename: "UserModelPackage",
    id: string,
    modelPackage?:  {
      __typename: "ModelPackage",
      id: string,
      tokenAmount: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    user?:  {
      __typename: "User",
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    userUser_model_packagesId?: string | null,
    modelPackageUser_model_packagesId?: string | null,
  } | null,
};

export type ListUserModelPackagesQueryVariables = {
  filter?: ModelUserModelPackageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUserModelPackagesQuery = {
  listUserModelPackages?:  {
    __typename: "ModelUserModelPackageConnection",
    items:  Array< {
      __typename: "UserModelPackage",
      id: string,
      createdAt: string,
      updatedAt: string,
      userUser_model_packagesId?: string | null,
      modelPackageUser_model_packagesId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateModelAISubscriptionVariables = {
  filter?: ModelSubscriptionModelAIFilterInput | null,
};

export type OnCreateModelAISubscription = {
  onCreateModelAI?:  {
    __typename: "ModelAI",
    id: string,
    name: string,
    description: string,
    document_link: string,
    api_link: string,
    version: string,
    is_approved: boolean,
    tokens_cost: number,
    cost_tokens: number,
    calculations?:  {
      __typename: "ModelCalculationConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateModelAISubscriptionVariables = {
  filter?: ModelSubscriptionModelAIFilterInput | null,
};

export type OnUpdateModelAISubscription = {
  onUpdateModelAI?:  {
    __typename: "ModelAI",
    id: string,
    name: string,
    description: string,
    document_link: string,
    api_link: string,
    version: string,
    is_approved: boolean,
    tokens_cost: number,
    cost_tokens: number,
    calculations?:  {
      __typename: "ModelCalculationConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteModelAISubscriptionVariables = {
  filter?: ModelSubscriptionModelAIFilterInput | null,
};

export type OnDeleteModelAISubscription = {
  onDeleteModelAI?:  {
    __typename: "ModelAI",
    id: string,
    name: string,
    description: string,
    document_link: string,
    api_link: string,
    version: string,
    is_approved: boolean,
    tokens_cost: number,
    cost_tokens: number,
    calculations?:  {
      __typename: "ModelCalculationConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCalculationSubscriptionVariables = {
  filter?: ModelSubscriptionCalculationFilterInput | null,
};

export type OnCreateCalculationSubscription = {
  onCreateCalculation?:  {
    __typename: "Calculation",
    id: string,
    polygon: string,
    start_date: number,
    end_date: number,
    satellite_TIF: string,
    result_TIF: string,
    result_PNG: string,
    is_to_block_chain: boolean,
    modelAI?:  {
      __typename: "ModelAI",
      id: string,
      name: string,
      description: string,
      document_link: string,
      api_link: string,
      version: string,
      is_approved: boolean,
      tokens_cost: number,
      cost_tokens: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    user?:  {
      __typename: "User",
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    modelAICalculationsId?: string | null,
    userCalculationsId?: string | null,
  } | null,
};

export type OnUpdateCalculationSubscriptionVariables = {
  filter?: ModelSubscriptionCalculationFilterInput | null,
};

export type OnUpdateCalculationSubscription = {
  onUpdateCalculation?:  {
    __typename: "Calculation",
    id: string,
    polygon: string,
    start_date: number,
    end_date: number,
    satellite_TIF: string,
    result_TIF: string,
    result_PNG: string,
    is_to_block_chain: boolean,
    modelAI?:  {
      __typename: "ModelAI",
      id: string,
      name: string,
      description: string,
      document_link: string,
      api_link: string,
      version: string,
      is_approved: boolean,
      tokens_cost: number,
      cost_tokens: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    user?:  {
      __typename: "User",
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    modelAICalculationsId?: string | null,
    userCalculationsId?: string | null,
  } | null,
};

export type OnDeleteCalculationSubscriptionVariables = {
  filter?: ModelSubscriptionCalculationFilterInput | null,
};

export type OnDeleteCalculationSubscription = {
  onDeleteCalculation?:  {
    __typename: "Calculation",
    id: string,
    polygon: string,
    start_date: number,
    end_date: number,
    satellite_TIF: string,
    result_TIF: string,
    result_PNG: string,
    is_to_block_chain: boolean,
    modelAI?:  {
      __typename: "ModelAI",
      id: string,
      name: string,
      description: string,
      document_link: string,
      api_link: string,
      version: string,
      is_approved: boolean,
      tokens_cost: number,
      cost_tokens: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    user?:  {
      __typename: "User",
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    modelAICalculationsId?: string | null,
    userCalculationsId?: string | null,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    user_model_packages?:  {
      __typename: "ModelUserModelPackageConnection",
      nextToken?: string | null,
    } | null,
    calculations?:  {
      __typename: "ModelCalculationConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    user_model_packages?:  {
      __typename: "ModelUserModelPackageConnection",
      nextToken?: string | null,
    } | null,
    calculations?:  {
      __typename: "ModelCalculationConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    user_model_packages?:  {
      __typename: "ModelUserModelPackageConnection",
      nextToken?: string | null,
    } | null,
    calculations?:  {
      __typename: "ModelCalculationConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateModelPackageSubscriptionVariables = {
  filter?: ModelSubscriptionModelPackageFilterInput | null,
};

export type OnCreateModelPackageSubscription = {
  onCreateModelPackage?:  {
    __typename: "ModelPackage",
    id: string,
    tokenAmount: number,
    user_model_packages?:  {
      __typename: "ModelUserModelPackageConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateModelPackageSubscriptionVariables = {
  filter?: ModelSubscriptionModelPackageFilterInput | null,
};

export type OnUpdateModelPackageSubscription = {
  onUpdateModelPackage?:  {
    __typename: "ModelPackage",
    id: string,
    tokenAmount: number,
    user_model_packages?:  {
      __typename: "ModelUserModelPackageConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteModelPackageSubscriptionVariables = {
  filter?: ModelSubscriptionModelPackageFilterInput | null,
};

export type OnDeleteModelPackageSubscription = {
  onDeleteModelPackage?:  {
    __typename: "ModelPackage",
    id: string,
    tokenAmount: number,
    user_model_packages?:  {
      __typename: "ModelUserModelPackageConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateUserModelPackageSubscriptionVariables = {
  filter?: ModelSubscriptionUserModelPackageFilterInput | null,
};

export type OnCreateUserModelPackageSubscription = {
  onCreateUserModelPackage?:  {
    __typename: "UserModelPackage",
    id: string,
    modelPackage?:  {
      __typename: "ModelPackage",
      id: string,
      tokenAmount: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    user?:  {
      __typename: "User",
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    userUser_model_packagesId?: string | null,
    modelPackageUser_model_packagesId?: string | null,
  } | null,
};

export type OnUpdateUserModelPackageSubscriptionVariables = {
  filter?: ModelSubscriptionUserModelPackageFilterInput | null,
};

export type OnUpdateUserModelPackageSubscription = {
  onUpdateUserModelPackage?:  {
    __typename: "UserModelPackage",
    id: string,
    modelPackage?:  {
      __typename: "ModelPackage",
      id: string,
      tokenAmount: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    user?:  {
      __typename: "User",
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    userUser_model_packagesId?: string | null,
    modelPackageUser_model_packagesId?: string | null,
  } | null,
};

export type OnDeleteUserModelPackageSubscriptionVariables = {
  filter?: ModelSubscriptionUserModelPackageFilterInput | null,
};

export type OnDeleteUserModelPackageSubscription = {
  onDeleteUserModelPackage?:  {
    __typename: "UserModelPackage",
    id: string,
    modelPackage?:  {
      __typename: "ModelPackage",
      id: string,
      tokenAmount: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    user?:  {
      __typename: "User",
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    userUser_model_packagesId?: string | null,
    modelPackageUser_model_packagesId?: string | null,
  } | null,
};
