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

export type CreateProyectoInput = {
  id?: string | null,
  proyectoNombre: string,
  proyectoDescripcion?: string | null,
  proyectoIdExterno?: string | null,
  proyectoActivo: boolean,
  proyectoFechaCreacion?: string | null,
  proyectoFechaActualizacion?: string | null,
};

export type ModelProyectoConditionInput = {
  proyectoNombre?: ModelStringInput | null,
  proyectoDescripcion?: ModelStringInput | null,
  proyectoIdExterno?: ModelStringInput | null,
  proyectoActivo?: ModelBooleanInput | null,
  proyectoFechaCreacion?: ModelStringInput | null,
  proyectoFechaActualizacion?: ModelStringInput | null,
  and?: Array< ModelProyectoConditionInput | null > | null,
  or?: Array< ModelProyectoConditionInput | null > | null,
  not?: ModelProyectoConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type Proyecto = {
  __typename: "Proyecto",
  id: string,
  proyectoNombre: string,
  proyectoDescripcion?: string | null,
  proyectoIdExterno?: string | null,
  proyectoActivo: boolean,
  proyectoFechaCreacion?: string | null,
  proyectoFechaActualizacion?: string | null,
  consultasAnalisis?: ModelConsultaAnalisisConnection | null,
  gruposIot?: ModelRelGrupoIotProyectoConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelConsultaAnalisisConnection = {
  __typename: "ModelConsultaAnalisisConnection",
  items:  Array<ConsultaAnalisis | null >,
  nextToken?: string | null,
};

export type ConsultaAnalisis = {
  __typename: "ConsultaAnalisis",
  id: string,
  proyectoId?: string | null,
  consultaNombre: string,
  consultaUbicacion: string,
  consultaParametros?: string | null,
  consultaExternaPoligonos?: string | null,
  consultaIdExterna?: string | null,
  respuestaResultado?: string | null,
  respuestaIdentificadorExterno?: string | null,
  modeloId?: string | null,
  modeloName?: string | null,
  modeloDescription?: string | null,
  modeloVersion?: string | null,
  modeloDocumentLink?: string | null,
  modeloApiLink?: string | null,
  blockchainHashTransaccion?: string | null,
  fechaCreacion?: string | null,
  source: SourceType,
  proyecto?: Proyecto | null,
  estados?: ModelConsultaEstadoConnection | null,
  cuotasUso?: ModelAnalisisCuotasUsoDiarioConnection | null,
  createdAt: string,
  updatedAt: string,
};

export enum SourceType {
  INTERNAL = "INTERNAL",
  EXTERNAL = "EXTERNAL",
}


export type ModelConsultaEstadoConnection = {
  __typename: "ModelConsultaEstadoConnection",
  items:  Array<ConsultaEstado | null >,
  nextToken?: string | null,
};

export type ConsultaEstado = {
  __typename: "ConsultaEstado",
  id: string,
  consultaId: string,
  estado: EstadoConsulta,
  estadoFecha: string,
  estadoUsername?: string | null,
  estadoObservaciones?: string | null,
  estadoTipoActor: EstadoTipoActor,
  consulta?: ConsultaAnalisis | null,
  createdAt: string,
  updatedAt: string,
};

export enum EstadoConsulta {
  REGISTRADO = "REGISTRADO",
  PROCESANDO = "PROCESANDO",
  COMPLETADO = "COMPLETADO",
  CERTIFICADO_BLOCKCHAIN = "CERTIFICADO_BLOCKCHAIN",
  ERROR = "ERROR",
}


export enum EstadoTipoActor {
  USER = "USER",
  SYSTEM = "SYSTEM",
  API_CLIENT = "API_CLIENT",
}


export type ModelAnalisisCuotasUsoDiarioConnection = {
  __typename: "ModelAnalisisCuotasUsoDiarioConnection",
  items:  Array<AnalisisCuotasUsoDiario | null >,
  nextToken?: string | null,
};

export type AnalisisCuotasUsoDiario = {
  __typename: "AnalisisCuotasUsoDiario",
  id: string,
  usuarioNombre: string,
  grupoId: string,
  fechaUso: string,
  consultaId: string,
  creadoEn?: string | null,
  consulta?: ConsultaAnalisis | null,
  grupo?: AnalisisCuota | null,
  createdAt: string,
  updatedAt: string,
};

export type AnalisisCuota = {
  __typename: "AnalisisCuota",
  id: string,
  nombreGrupo: string,
  limiteDiario: number,
  activo: boolean,
  creadoEn?: string | null,
  actualizadoEn?: string | null,
  usosDiarios?: ModelAnalisisCuotasUsoDiarioConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelRelGrupoIotProyectoConnection = {
  __typename: "ModelRelGrupoIotProyectoConnection",
  items:  Array<RelGrupoIotProyecto | null >,
  nextToken?: string | null,
};

export type RelGrupoIotProyecto = {
  __typename: "RelGrupoIotProyecto",
  id: string,
  grupoId: string,
  proyectoId: string,
  fechaAsignacion?: string | null,
  usuarioId?: string | null,
  notas?: string | null,
  grupo?: GrupoIot | null,
  proyecto?: Proyecto | null,
  createdAt: string,
  updatedAt: string,
};

export type GrupoIot = {
  __typename: "GrupoIot",
  id: string,
  nombre: string,
  descripcion?: string | null,
  estado: EstadoDispositivo,
  usuarioCreador?: string | null,
  observaciones?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  dispositivos?: ModelRelDispositivoGrupoIotConnection | null,
  proyectos?: ModelRelGrupoIotProyectoConnection | null,
};

export enum EstadoDispositivo {
  ACTIVO = "ACTIVO",
  INACTIVO = "INACTIVO",
  MANTENIMIENTO = "MANTENIMIENTO",
  ERROR = "ERROR",
}


export type ModelRelDispositivoGrupoIotConnection = {
  __typename: "ModelRelDispositivoGrupoIotConnection",
  items:  Array<RelDispositivoGrupoIot | null >,
  nextToken?: string | null,
};

export type RelDispositivoGrupoIot = {
  __typename: "RelDispositivoGrupoIot",
  id: string,
  dispositivoId: string,
  grupoId: string,
  fechaAsignacion?: string | null,
  usuarioId?: string | null,
  notas?: string | null,
  dispositivo?: DispositivoIot | null,
  grupo?: GrupoIot | null,
  createdAt: string,
  updatedAt: string,
};

export type DispositivoIot = {
  __typename: "DispositivoIot",
  id: string,
  deviceId: string,
  nombre: string,
  departamento: string,
  zona: string,
  tipoDispositivo: TipoDispositivo,
  variablesPublicadas: string,
  localizacion?: string | null,
  estado: EstadoDispositivo,
  observaciones?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  grupos?: ModelRelDispositivoGrupoIotConnection | null,
  mediciones?: ModelMedicionIotConnection | null,
};

export enum TipoDispositivo {
  SENSOR = "SENSOR",
  ACTUADOR = "ACTUADOR",
  GATEWAY = "GATEWAY",
  CAMERA = "CAMERA",
  OTHER = "OTHER",
}


export type ModelMedicionIotConnection = {
  __typename: "ModelMedicionIotConnection",
  items:  Array<MedicionIot | null >,
  nextToken?: string | null,
};

export type MedicionIot = {
  __typename: "MedicionIot",
  id: string,
  dispositivoId: string,
  deviceId: string,
  departamento: string,
  zona: string,
  variable: string,
  valor: number,
  timestamp: string,
  dispositivo?: DispositivoIot | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateProyectoInput = {
  id: string,
  proyectoNombre?: string | null,
  proyectoDescripcion?: string | null,
  proyectoIdExterno?: string | null,
  proyectoActivo?: boolean | null,
  proyectoFechaCreacion?: string | null,
  proyectoFechaActualizacion?: string | null,
};

export type DeleteProyectoInput = {
  id: string,
};

export type CreateConsultaAnalisisInput = {
  id?: string | null,
  proyectoId?: string | null,
  consultaNombre: string,
  consultaUbicacion: string,
  consultaParametros?: string | null,
  consultaExternaPoligonos?: string | null,
  consultaIdExterna?: string | null,
  respuestaResultado?: string | null,
  respuestaIdentificadorExterno?: string | null,
  modeloId?: string | null,
  modeloName?: string | null,
  modeloDescription?: string | null,
  modeloVersion?: string | null,
  modeloDocumentLink?: string | null,
  modeloApiLink?: string | null,
  blockchainHashTransaccion?: string | null,
  fechaCreacion?: string | null,
  source: SourceType,
};

export type ModelConsultaAnalisisConditionInput = {
  proyectoId?: ModelIDInput | null,
  consultaNombre?: ModelStringInput | null,
  consultaUbicacion?: ModelStringInput | null,
  consultaParametros?: ModelStringInput | null,
  consultaExternaPoligonos?: ModelStringInput | null,
  consultaIdExterna?: ModelStringInput | null,
  respuestaResultado?: ModelStringInput | null,
  respuestaIdentificadorExterno?: ModelStringInput | null,
  modeloId?: ModelStringInput | null,
  modeloName?: ModelStringInput | null,
  modeloDescription?: ModelStringInput | null,
  modeloVersion?: ModelStringInput | null,
  modeloDocumentLink?: ModelStringInput | null,
  modeloApiLink?: ModelStringInput | null,
  blockchainHashTransaccion?: ModelStringInput | null,
  fechaCreacion?: ModelStringInput | null,
  source?: ModelSourceTypeInput | null,
  and?: Array< ModelConsultaAnalisisConditionInput | null > | null,
  or?: Array< ModelConsultaAnalisisConditionInput | null > | null,
  not?: ModelConsultaAnalisisConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelSourceTypeInput = {
  eq?: SourceType | null,
  ne?: SourceType | null,
};

export type UpdateConsultaAnalisisInput = {
  id: string,
  proyectoId?: string | null,
  consultaNombre?: string | null,
  consultaUbicacion?: string | null,
  consultaParametros?: string | null,
  consultaExternaPoligonos?: string | null,
  consultaIdExterna?: string | null,
  respuestaResultado?: string | null,
  respuestaIdentificadorExterno?: string | null,
  modeloId?: string | null,
  modeloName?: string | null,
  modeloDescription?: string | null,
  modeloVersion?: string | null,
  modeloDocumentLink?: string | null,
  modeloApiLink?: string | null,
  blockchainHashTransaccion?: string | null,
  fechaCreacion?: string | null,
  source?: SourceType | null,
};

export type DeleteConsultaAnalisisInput = {
  id: string,
};

export type CreateConsultaEstadoInput = {
  id?: string | null,
  consultaId: string,
  estado: EstadoConsulta,
  estadoFecha: string,
  estadoUsername?: string | null,
  estadoObservaciones?: string | null,
  estadoTipoActor: EstadoTipoActor,
};

export type ModelConsultaEstadoConditionInput = {
  consultaId?: ModelIDInput | null,
  estado?: ModelEstadoConsultaInput | null,
  estadoFecha?: ModelStringInput | null,
  estadoUsername?: ModelStringInput | null,
  estadoObservaciones?: ModelStringInput | null,
  estadoTipoActor?: ModelEstadoTipoActorInput | null,
  and?: Array< ModelConsultaEstadoConditionInput | null > | null,
  or?: Array< ModelConsultaEstadoConditionInput | null > | null,
  not?: ModelConsultaEstadoConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelEstadoConsultaInput = {
  eq?: EstadoConsulta | null,
  ne?: EstadoConsulta | null,
};

export type ModelEstadoTipoActorInput = {
  eq?: EstadoTipoActor | null,
  ne?: EstadoTipoActor | null,
};

export type UpdateConsultaEstadoInput = {
  id: string,
  consultaId?: string | null,
  estado?: EstadoConsulta | null,
  estadoFecha?: string | null,
  estadoUsername?: string | null,
  estadoObservaciones?: string | null,
  estadoTipoActor?: EstadoTipoActor | null,
};

export type DeleteConsultaEstadoInput = {
  id: string,
};

export type CreateAnalisisCuotaInput = {
  id?: string | null,
  nombreGrupo: string,
  limiteDiario: number,
  activo: boolean,
  creadoEn?: string | null,
  actualizadoEn?: string | null,
};

export type ModelAnalisisCuotaConditionInput = {
  nombreGrupo?: ModelStringInput | null,
  limiteDiario?: ModelIntInput | null,
  activo?: ModelBooleanInput | null,
  creadoEn?: ModelStringInput | null,
  actualizadoEn?: ModelStringInput | null,
  and?: Array< ModelAnalisisCuotaConditionInput | null > | null,
  or?: Array< ModelAnalisisCuotaConditionInput | null > | null,
  not?: ModelAnalisisCuotaConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateAnalisisCuotaInput = {
  id: string,
  nombreGrupo?: string | null,
  limiteDiario?: number | null,
  activo?: boolean | null,
  creadoEn?: string | null,
  actualizadoEn?: string | null,
};

export type DeleteAnalisisCuotaInput = {
  id: string,
};

export type CreateAnalisisCuotasUsoDiarioInput = {
  id?: string | null,
  usuarioNombre: string,
  grupoId: string,
  fechaUso: string,
  consultaId: string,
  creadoEn?: string | null,
};

export type ModelAnalisisCuotasUsoDiarioConditionInput = {
  usuarioNombre?: ModelStringInput | null,
  grupoId?: ModelIDInput | null,
  fechaUso?: ModelStringInput | null,
  consultaId?: ModelIDInput | null,
  creadoEn?: ModelStringInput | null,
  and?: Array< ModelAnalisisCuotasUsoDiarioConditionInput | null > | null,
  or?: Array< ModelAnalisisCuotasUsoDiarioConditionInput | null > | null,
  not?: ModelAnalisisCuotasUsoDiarioConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateAnalisisCuotasUsoDiarioInput = {
  id: string,
  usuarioNombre?: string | null,
  grupoId?: string | null,
  fechaUso?: string | null,
  consultaId?: string | null,
  creadoEn?: string | null,
};

export type DeleteAnalisisCuotasUsoDiarioInput = {
  id: string,
};

export type CreateDispositivoIotInput = {
  id?: string | null,
  deviceId: string,
  nombre: string,
  departamento: string,
  zona: string,
  tipoDispositivo: TipoDispositivo,
  variablesPublicadas: string,
  localizacion?: string | null,
  estado: EstadoDispositivo,
  observaciones?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelDispositivoIotConditionInput = {
  deviceId?: ModelStringInput | null,
  nombre?: ModelStringInput | null,
  departamento?: ModelStringInput | null,
  zona?: ModelStringInput | null,
  tipoDispositivo?: ModelTipoDispositivoInput | null,
  variablesPublicadas?: ModelStringInput | null,
  localizacion?: ModelStringInput | null,
  estado?: ModelEstadoDispositivoInput | null,
  observaciones?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelDispositivoIotConditionInput | null > | null,
  or?: Array< ModelDispositivoIotConditionInput | null > | null,
  not?: ModelDispositivoIotConditionInput | null,
};

export type ModelTipoDispositivoInput = {
  eq?: TipoDispositivo | null,
  ne?: TipoDispositivo | null,
};

export type ModelEstadoDispositivoInput = {
  eq?: EstadoDispositivo | null,
  ne?: EstadoDispositivo | null,
};

export type UpdateDispositivoIotInput = {
  id: string,
  deviceId?: string | null,
  nombre?: string | null,
  departamento?: string | null,
  zona?: string | null,
  tipoDispositivo?: TipoDispositivo | null,
  variablesPublicadas?: string | null,
  localizacion?: string | null,
  estado?: EstadoDispositivo | null,
  observaciones?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteDispositivoIotInput = {
  id: string,
};

export type CreateGrupoIotInput = {
  id?: string | null,
  nombre: string,
  descripcion?: string | null,
  estado: EstadoDispositivo,
  usuarioCreador?: string | null,
  observaciones?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelGrupoIotConditionInput = {
  nombre?: ModelStringInput | null,
  descripcion?: ModelStringInput | null,
  estado?: ModelEstadoDispositivoInput | null,
  usuarioCreador?: ModelStringInput | null,
  observaciones?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelGrupoIotConditionInput | null > | null,
  or?: Array< ModelGrupoIotConditionInput | null > | null,
  not?: ModelGrupoIotConditionInput | null,
};

export type UpdateGrupoIotInput = {
  id: string,
  nombre?: string | null,
  descripcion?: string | null,
  estado?: EstadoDispositivo | null,
  usuarioCreador?: string | null,
  observaciones?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteGrupoIotInput = {
  id: string,
};

export type CreateRelDispositivoGrupoIotInput = {
  id?: string | null,
  dispositivoId: string,
  grupoId: string,
  fechaAsignacion?: string | null,
  usuarioId?: string | null,
  notas?: string | null,
};

export type ModelRelDispositivoGrupoIotConditionInput = {
  dispositivoId?: ModelIDInput | null,
  grupoId?: ModelIDInput | null,
  fechaAsignacion?: ModelStringInput | null,
  usuarioId?: ModelStringInput | null,
  notas?: ModelStringInput | null,
  and?: Array< ModelRelDispositivoGrupoIotConditionInput | null > | null,
  or?: Array< ModelRelDispositivoGrupoIotConditionInput | null > | null,
  not?: ModelRelDispositivoGrupoIotConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateRelDispositivoGrupoIotInput = {
  id: string,
  dispositivoId?: string | null,
  grupoId?: string | null,
  fechaAsignacion?: string | null,
  usuarioId?: string | null,
  notas?: string | null,
};

export type DeleteRelDispositivoGrupoIotInput = {
  id: string,
};

export type CreateRelGrupoIotProyectoInput = {
  id?: string | null,
  grupoId: string,
  proyectoId: string,
  fechaAsignacion?: string | null,
  usuarioId?: string | null,
  notas?: string | null,
};

export type ModelRelGrupoIotProyectoConditionInput = {
  grupoId?: ModelIDInput | null,
  proyectoId?: ModelIDInput | null,
  fechaAsignacion?: ModelStringInput | null,
  usuarioId?: ModelStringInput | null,
  notas?: ModelStringInput | null,
  and?: Array< ModelRelGrupoIotProyectoConditionInput | null > | null,
  or?: Array< ModelRelGrupoIotProyectoConditionInput | null > | null,
  not?: ModelRelGrupoIotProyectoConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateRelGrupoIotProyectoInput = {
  id: string,
  grupoId?: string | null,
  proyectoId?: string | null,
  fechaAsignacion?: string | null,
  usuarioId?: string | null,
  notas?: string | null,
};

export type DeleteRelGrupoIotProyectoInput = {
  id: string,
};

export type CreateMedicionIotInput = {
  id?: string | null,
  dispositivoId: string,
  deviceId: string,
  departamento: string,
  zona: string,
  variable: string,
  valor: number,
  timestamp: string,
};

export type ModelMedicionIotConditionInput = {
  dispositivoId?: ModelIDInput | null,
  deviceId?: ModelStringInput | null,
  departamento?: ModelStringInput | null,
  zona?: ModelStringInput | null,
  variable?: ModelStringInput | null,
  valor?: ModelFloatInput | null,
  timestamp?: ModelStringInput | null,
  and?: Array< ModelMedicionIotConditionInput | null > | null,
  or?: Array< ModelMedicionIotConditionInput | null > | null,
  not?: ModelMedicionIotConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelFloatInput = {
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

export type UpdateMedicionIotInput = {
  id: string,
  dispositivoId?: string | null,
  deviceId?: string | null,
  departamento?: string | null,
  zona?: string | null,
  variable?: string | null,
  valor?: number | null,
  timestamp?: string | null,
};

export type DeleteMedicionIotInput = {
  id: string,
};

export type CreateProyectoLegacyInput = {
  id?: string | null,
  projectId: string,
  descripcion?: string | null,
};

export type ModelProyectoLegacyConditionInput = {
  projectId?: ModelStringInput | null,
  descripcion?: ModelStringInput | null,
  and?: Array< ModelProyectoLegacyConditionInput | null > | null,
  or?: Array< ModelProyectoLegacyConditionInput | null > | null,
  not?: ModelProyectoLegacyConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ProyectoLegacy = {
  __typename: "ProyectoLegacy",
  id: string,
  projectId: string,
  descripcion?: string | null,
  consultasWeb?: ModelConsultaWebConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelConsultaWebConnection = {
  __typename: "ModelConsultaWebConnection",
  items:  Array<ConsultaWeb | null >,
  nextToken?: string | null,
};

export type ConsultaWeb = {
  __typename: "ConsultaWeb",
  id: string,
  projectID?: string | null,
  imgAnteriorNombreImg?: string | null,
  imgAnteriorSatellite?: string | null,
  imgAnteriorYear?: number | null,
  imgAnteriorMesInicial?: number | null,
  imgAnteriorMesFinal?: number | null,
  imgAnteriorNubosidadMaxima?: number | null,
  imgAnteriorBandas?: string | null,
  imgPosteriorNombreImg?: string | null,
  imgPosteriorSatellite?: string | null,
  imgPosteriorYear?: number | null,
  imgPosteriorMesInicial?: number | null,
  imgPosteriorMesFinal?: number | null,
  imgPosteriorNubosidadMaxima?: number | null,
  imgPosteriorBandas?: string | null,
  fechaHoraConsulta?: string | null,
  usuarioEmailUpdate?: string | null,
  rawConsulta?: string | null,
  resultadoConsulta?: string | null,
  proyecto?: ProyectoLegacy | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateProyectoLegacyInput = {
  id: string,
  projectId?: string | null,
  descripcion?: string | null,
};

export type DeleteProyectoLegacyInput = {
  id: string,
};

export type CreateConsultaWebInput = {
  id?: string | null,
  projectID?: string | null,
  imgAnteriorNombreImg?: string | null,
  imgAnteriorSatellite?: string | null,
  imgAnteriorYear?: number | null,
  imgAnteriorMesInicial?: number | null,
  imgAnteriorMesFinal?: number | null,
  imgAnteriorNubosidadMaxima?: number | null,
  imgAnteriorBandas?: string | null,
  imgPosteriorNombreImg?: string | null,
  imgPosteriorSatellite?: string | null,
  imgPosteriorYear?: number | null,
  imgPosteriorMesInicial?: number | null,
  imgPosteriorMesFinal?: number | null,
  imgPosteriorNubosidadMaxima?: number | null,
  imgPosteriorBandas?: string | null,
  fechaHoraConsulta?: string | null,
  usuarioEmailUpdate?: string | null,
  rawConsulta?: string | null,
  resultadoConsulta?: string | null,
};

export type ModelConsultaWebConditionInput = {
  projectID?: ModelIDInput | null,
  imgAnteriorNombreImg?: ModelStringInput | null,
  imgAnteriorSatellite?: ModelStringInput | null,
  imgAnteriorYear?: ModelIntInput | null,
  imgAnteriorMesInicial?: ModelIntInput | null,
  imgAnteriorMesFinal?: ModelIntInput | null,
  imgAnteriorNubosidadMaxima?: ModelIntInput | null,
  imgAnteriorBandas?: ModelStringInput | null,
  imgPosteriorNombreImg?: ModelStringInput | null,
  imgPosteriorSatellite?: ModelStringInput | null,
  imgPosteriorYear?: ModelIntInput | null,
  imgPosteriorMesInicial?: ModelIntInput | null,
  imgPosteriorMesFinal?: ModelIntInput | null,
  imgPosteriorNubosidadMaxima?: ModelIntInput | null,
  imgPosteriorBandas?: ModelStringInput | null,
  fechaHoraConsulta?: ModelStringInput | null,
  usuarioEmailUpdate?: ModelStringInput | null,
  rawConsulta?: ModelStringInput | null,
  resultadoConsulta?: ModelStringInput | null,
  and?: Array< ModelConsultaWebConditionInput | null > | null,
  or?: Array< ModelConsultaWebConditionInput | null > | null,
  not?: ModelConsultaWebConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateConsultaWebInput = {
  id: string,
  projectID?: string | null,
  imgAnteriorNombreImg?: string | null,
  imgAnteriorSatellite?: string | null,
  imgAnteriorYear?: number | null,
  imgAnteriorMesInicial?: number | null,
  imgAnteriorMesFinal?: number | null,
  imgAnteriorNubosidadMaxima?: number | null,
  imgAnteriorBandas?: string | null,
  imgPosteriorNombreImg?: string | null,
  imgPosteriorSatellite?: string | null,
  imgPosteriorYear?: number | null,
  imgPosteriorMesInicial?: number | null,
  imgPosteriorMesFinal?: number | null,
  imgPosteriorNubosidadMaxima?: number | null,
  imgPosteriorBandas?: string | null,
  fechaHoraConsulta?: string | null,
  usuarioEmailUpdate?: string | null,
  rawConsulta?: string | null,
  resultadoConsulta?: string | null,
};

export type DeleteConsultaWebInput = {
  id: string,
};

export type CreateConsultaApiInput = {
  id?: string | null,
  projectID?: string | null,
  cedulaCatastral?: string | null,
  imgAnteriorNombreImg?: string | null,
  imgAnteriorSatellite?: string | null,
  imgAnteriorYear?: number | null,
  imgAnteriorMesInicial?: number | null,
  imgAnteriorMesFinal?: number | null,
  imgAnteriorNubosidadMaxima?: number | null,
  imgAnteriorBandas?: string | null,
  imgPosteriorNombreImg?: string | null,
  imgPosteriorSatellite?: string | null,
  imgPosteriorYear?: number | null,
  imgPosteriorMesInicial?: number | null,
  imgPosteriorMesFinal?: number | null,
  imgPosteriorNubosidadMaxima?: number | null,
  imgPosteriorBandas?: string | null,
  fechaHoraConsulta?: string | null,
  fechaHoraActualizacion?: string | null,
  usuarioEmailUpdate?: string | null,
  verificado: boolean,
  rawConsulta?: string | null,
  resultadoConsulta?: string | null,
  hashBlockchain?: string | null,
  indexNumberBlockchain?: number | null,
  timestampBlockchain?: string | null,
  onchainBlockchain: boolean,
  txIdBlockchain?: string | null,
};

export type ModelConsultaApiConditionInput = {
  projectID?: ModelStringInput | null,
  cedulaCatastral?: ModelStringInput | null,
  imgAnteriorNombreImg?: ModelStringInput | null,
  imgAnteriorSatellite?: ModelStringInput | null,
  imgAnteriorYear?: ModelIntInput | null,
  imgAnteriorMesInicial?: ModelIntInput | null,
  imgAnteriorMesFinal?: ModelIntInput | null,
  imgAnteriorNubosidadMaxima?: ModelIntInput | null,
  imgAnteriorBandas?: ModelStringInput | null,
  imgPosteriorNombreImg?: ModelStringInput | null,
  imgPosteriorSatellite?: ModelStringInput | null,
  imgPosteriorYear?: ModelIntInput | null,
  imgPosteriorMesInicial?: ModelIntInput | null,
  imgPosteriorMesFinal?: ModelIntInput | null,
  imgPosteriorNubosidadMaxima?: ModelIntInput | null,
  imgPosteriorBandas?: ModelStringInput | null,
  fechaHoraConsulta?: ModelStringInput | null,
  fechaHoraActualizacion?: ModelStringInput | null,
  usuarioEmailUpdate?: ModelStringInput | null,
  verificado?: ModelBooleanInput | null,
  rawConsulta?: ModelStringInput | null,
  resultadoConsulta?: ModelStringInput | null,
  hashBlockchain?: ModelStringInput | null,
  indexNumberBlockchain?: ModelIntInput | null,
  timestampBlockchain?: ModelStringInput | null,
  onchainBlockchain?: ModelBooleanInput | null,
  txIdBlockchain?: ModelStringInput | null,
  and?: Array< ModelConsultaApiConditionInput | null > | null,
  or?: Array< ModelConsultaApiConditionInput | null > | null,
  not?: ModelConsultaApiConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ConsultaApi = {
  __typename: "ConsultaApi",
  id: string,
  projectID?: string | null,
  cedulaCatastral?: string | null,
  imgAnteriorNombreImg?: string | null,
  imgAnteriorSatellite?: string | null,
  imgAnteriorYear?: number | null,
  imgAnteriorMesInicial?: number | null,
  imgAnteriorMesFinal?: number | null,
  imgAnteriorNubosidadMaxima?: number | null,
  imgAnteriorBandas?: string | null,
  imgPosteriorNombreImg?: string | null,
  imgPosteriorSatellite?: string | null,
  imgPosteriorYear?: number | null,
  imgPosteriorMesInicial?: number | null,
  imgPosteriorMesFinal?: number | null,
  imgPosteriorNubosidadMaxima?: number | null,
  imgPosteriorBandas?: string | null,
  fechaHoraConsulta?: string | null,
  fechaHoraActualizacion?: string | null,
  usuarioEmailUpdate?: string | null,
  verificado: boolean,
  rawConsulta?: string | null,
  resultadoConsulta?: string | null,
  hashBlockchain?: string | null,
  indexNumberBlockchain?: number | null,
  timestampBlockchain?: string | null,
  onchainBlockchain: boolean,
  txIdBlockchain?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateConsultaApiInput = {
  id: string,
  projectID?: string | null,
  cedulaCatastral?: string | null,
  imgAnteriorNombreImg?: string | null,
  imgAnteriorSatellite?: string | null,
  imgAnteriorYear?: number | null,
  imgAnteriorMesInicial?: number | null,
  imgAnteriorMesFinal?: number | null,
  imgAnteriorNubosidadMaxima?: number | null,
  imgAnteriorBandas?: string | null,
  imgPosteriorNombreImg?: string | null,
  imgPosteriorSatellite?: string | null,
  imgPosteriorYear?: number | null,
  imgPosteriorMesInicial?: number | null,
  imgPosteriorMesFinal?: number | null,
  imgPosteriorNubosidadMaxima?: number | null,
  imgPosteriorBandas?: string | null,
  fechaHoraConsulta?: string | null,
  fechaHoraActualizacion?: string | null,
  usuarioEmailUpdate?: string | null,
  verificado?: boolean | null,
  rawConsulta?: string | null,
  resultadoConsulta?: string | null,
  hashBlockchain?: string | null,
  indexNumberBlockchain?: number | null,
  timestampBlockchain?: string | null,
  onchainBlockchain?: boolean | null,
  txIdBlockchain?: string | null,
};

export type DeleteConsultaApiInput = {
  id: string,
};

export type CreateIotSessionInput = {
  id?: string | null,
  sessionId: string,
  iotData: string,
  createdAt?: string | null,
  expiresAt: string,
};

export type ModelIotSessionConditionInput = {
  sessionId?: ModelStringInput | null,
  iotData?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  expiresAt?: ModelStringInput | null,
  and?: Array< ModelIotSessionConditionInput | null > | null,
  or?: Array< ModelIotSessionConditionInput | null > | null,
  not?: ModelIotSessionConditionInput | null,
  updatedAt?: ModelStringInput | null,
};

export type IotSession = {
  __typename: "IotSession",
  id: string,
  sessionId: string,
  iotData: string,
  createdAt?: string | null,
  expiresAt: string,
  updatedAt: string,
};

export type UpdateIotSessionInput = {
  id: string,
  sessionId?: string | null,
  iotData?: string | null,
  createdAt?: string | null,
  expiresAt?: string | null,
};

export type DeleteIotSessionInput = {
  id: string,
};

export type CreateConstructorFormulaCategoriaInput = {
  id?: string | null,
  nombre: string,
  estado: boolean,
};

export type ModelConstructorFormulaCategoriaConditionInput = {
  nombre?: ModelStringInput | null,
  estado?: ModelBooleanInput | null,
  and?: Array< ModelConstructorFormulaCategoriaConditionInput | null > | null,
  or?: Array< ModelConstructorFormulaCategoriaConditionInput | null > | null,
  not?: ModelConstructorFormulaCategoriaConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ConstructorFormulaCategoria = {
  __typename: "ConstructorFormulaCategoria",
  id: string,
  nombre: string,
  estado: boolean,
  variables?: ModelConstructorFormulaVariableConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelConstructorFormulaVariableConnection = {
  __typename: "ModelConstructorFormulaVariableConnection",
  items:  Array<ConstructorFormulaVariable | null >,
  nextToken?: string | null,
};

export type ConstructorFormulaVariable = {
  __typename: "ConstructorFormulaVariable",
  id: string,
  nombre: string,
  simbolo: string,
  unidades: string,
  descripcion: string,
  categoriaId?: string | null,
  estado: boolean,
  categoria?: ConstructorFormulaCategoria | null,
  formulas?: ModelConstructorFormulaVariableRelConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelConstructorFormulaVariableRelConnection = {
  __typename: "ModelConstructorFormulaVariableRelConnection",
  items:  Array<ConstructorFormulaVariableRel | null >,
  nextToken?: string | null,
};

export type ConstructorFormulaVariableRel = {
  __typename: "ConstructorFormulaVariableRel",
  id: string,
  formulaId: string,
  variableId: string,
  formula?: ConstructorFormula | null,
  variable?: ConstructorFormulaVariable | null,
  createdAt: string,
  updatedAt: string,
};

export type ConstructorFormula = {
  __typename: "ConstructorFormula",
  id: string,
  nombre: string,
  descripcion: string,
  fuente?: string | null,
  usuarioId?: string | null,
  tipoFormula: TipoFormula,
  estado: boolean,
  expresionJson?: string | null,
  fechaCreacion?: string | null,
  version: number,
  versionActiva: boolean,
  variables?: ModelConstructorFormulaVariableRelConnection | null,
  teledeteccion?: ModelFormulaTeledeteccionConnection | null,
  deepLearning?: ModelFormulaDeepLearningConnection | null,
  historial?: ModelFormulaHistorialConnection | null,
  createdAt: string,
  updatedAt: string,
};

export enum TipoFormula {
  ALOMETRICA = "ALOMETRICA",
  TELEDETECCION = "TELEDETECCION",
  DEEP_LEARNING = "DEEP_LEARNING",
  ESTADISTICA = "ESTADISTICA",
}


export type ModelFormulaTeledeteccionConnection = {
  __typename: "ModelFormulaTeledeteccionConnection",
  items:  Array<FormulaTeledeteccion | null >,
  nextToken?: string | null,
};

export type FormulaTeledeteccion = {
  __typename: "FormulaTeledeteccion",
  id: string,
  formulaId: string,
  codigoScript: string,
  tipoEntrada: string,
  parametrosJson?: string | null,
  formula?: ConstructorFormula | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelFormulaDeepLearningConnection = {
  __typename: "ModelFormulaDeepLearningConnection",
  items:  Array<FormulaDeepLearning | null >,
  nextToken?: string | null,
};

export type FormulaDeepLearning = {
  __typename: "FormulaDeepLearning",
  id: string,
  formulaId: string,
  rutaModelo: string,
  rutaEtiquetas: string,
  parametrosJson?: string | null,
  formula?: ConstructorFormula | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelFormulaHistorialConnection = {
  __typename: "ModelFormulaHistorialConnection",
  items:  Array<FormulaHistorial | null >,
  nextToken?: string | null,
};

export type FormulaHistorial = {
  __typename: "FormulaHistorial",
  id: string,
  formulaId: string,
  version: number,
  fechaModificacion?: string | null,
  datosJson: string,
  usuarioId?: string | null,
  formula?: ConstructorFormula | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateConstructorFormulaCategoriaInput = {
  id: string,
  nombre?: string | null,
  estado?: boolean | null,
};

export type DeleteConstructorFormulaCategoriaInput = {
  id: string,
};

export type CreateConstructorFormulaVariableInput = {
  id?: string | null,
  nombre: string,
  simbolo: string,
  unidades: string,
  descripcion: string,
  categoriaId?: string | null,
  estado: boolean,
};

export type ModelConstructorFormulaVariableConditionInput = {
  nombre?: ModelStringInput | null,
  simbolo?: ModelStringInput | null,
  unidades?: ModelStringInput | null,
  descripcion?: ModelStringInput | null,
  categoriaId?: ModelIDInput | null,
  estado?: ModelBooleanInput | null,
  and?: Array< ModelConstructorFormulaVariableConditionInput | null > | null,
  or?: Array< ModelConstructorFormulaVariableConditionInput | null > | null,
  not?: ModelConstructorFormulaVariableConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateConstructorFormulaVariableInput = {
  id: string,
  nombre?: string | null,
  simbolo?: string | null,
  unidades?: string | null,
  descripcion?: string | null,
  categoriaId?: string | null,
  estado?: boolean | null,
};

export type DeleteConstructorFormulaVariableInput = {
  id: string,
};

export type CreateConstructorFormulaInput = {
  id?: string | null,
  nombre: string,
  descripcion: string,
  fuente?: string | null,
  usuarioId?: string | null,
  tipoFormula: TipoFormula,
  estado: boolean,
  expresionJson?: string | null,
  fechaCreacion?: string | null,
  version: number,
  versionActiva: boolean,
};

export type ModelConstructorFormulaConditionInput = {
  nombre?: ModelStringInput | null,
  descripcion?: ModelStringInput | null,
  fuente?: ModelStringInput | null,
  usuarioId?: ModelStringInput | null,
  tipoFormula?: ModelTipoFormulaInput | null,
  estado?: ModelBooleanInput | null,
  expresionJson?: ModelStringInput | null,
  fechaCreacion?: ModelStringInput | null,
  version?: ModelIntInput | null,
  versionActiva?: ModelBooleanInput | null,
  and?: Array< ModelConstructorFormulaConditionInput | null > | null,
  or?: Array< ModelConstructorFormulaConditionInput | null > | null,
  not?: ModelConstructorFormulaConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelTipoFormulaInput = {
  eq?: TipoFormula | null,
  ne?: TipoFormula | null,
};

export type UpdateConstructorFormulaInput = {
  id: string,
  nombre?: string | null,
  descripcion?: string | null,
  fuente?: string | null,
  usuarioId?: string | null,
  tipoFormula?: TipoFormula | null,
  estado?: boolean | null,
  expresionJson?: string | null,
  fechaCreacion?: string | null,
  version?: number | null,
  versionActiva?: boolean | null,
};

export type DeleteConstructorFormulaInput = {
  id: string,
};

export type CreateConstructorFormulaVariableRelInput = {
  id?: string | null,
  formulaId: string,
  variableId: string,
};

export type ModelConstructorFormulaVariableRelConditionInput = {
  formulaId?: ModelIDInput | null,
  variableId?: ModelIDInput | null,
  and?: Array< ModelConstructorFormulaVariableRelConditionInput | null > | null,
  or?: Array< ModelConstructorFormulaVariableRelConditionInput | null > | null,
  not?: ModelConstructorFormulaVariableRelConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateConstructorFormulaVariableRelInput = {
  id: string,
  formulaId?: string | null,
  variableId?: string | null,
};

export type DeleteConstructorFormulaVariableRelInput = {
  id: string,
};

export type CreateFormulaTeledeteccionInput = {
  id?: string | null,
  formulaId: string,
  codigoScript: string,
  tipoEntrada: string,
  parametrosJson?: string | null,
};

export type ModelFormulaTeledeteccionConditionInput = {
  formulaId?: ModelIDInput | null,
  codigoScript?: ModelStringInput | null,
  tipoEntrada?: ModelStringInput | null,
  parametrosJson?: ModelStringInput | null,
  and?: Array< ModelFormulaTeledeteccionConditionInput | null > | null,
  or?: Array< ModelFormulaTeledeteccionConditionInput | null > | null,
  not?: ModelFormulaTeledeteccionConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateFormulaTeledeteccionInput = {
  id: string,
  formulaId?: string | null,
  codigoScript?: string | null,
  tipoEntrada?: string | null,
  parametrosJson?: string | null,
};

export type DeleteFormulaTeledeteccionInput = {
  id: string,
};

export type CreateFormulaDeepLearningInput = {
  id?: string | null,
  formulaId: string,
  rutaModelo: string,
  rutaEtiquetas: string,
  parametrosJson?: string | null,
};

export type ModelFormulaDeepLearningConditionInput = {
  formulaId?: ModelIDInput | null,
  rutaModelo?: ModelStringInput | null,
  rutaEtiquetas?: ModelStringInput | null,
  parametrosJson?: ModelStringInput | null,
  and?: Array< ModelFormulaDeepLearningConditionInput | null > | null,
  or?: Array< ModelFormulaDeepLearningConditionInput | null > | null,
  not?: ModelFormulaDeepLearningConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateFormulaDeepLearningInput = {
  id: string,
  formulaId?: string | null,
  rutaModelo?: string | null,
  rutaEtiquetas?: string | null,
  parametrosJson?: string | null,
};

export type DeleteFormulaDeepLearningInput = {
  id: string,
};

export type CreateFormulaHistorialInput = {
  id?: string | null,
  formulaId: string,
  version: number,
  fechaModificacion?: string | null,
  datosJson: string,
  usuarioId?: string | null,
};

export type ModelFormulaHistorialConditionInput = {
  formulaId?: ModelIDInput | null,
  version?: ModelIntInput | null,
  fechaModificacion?: ModelStringInput | null,
  datosJson?: ModelStringInput | null,
  usuarioId?: ModelStringInput | null,
  and?: Array< ModelFormulaHistorialConditionInput | null > | null,
  or?: Array< ModelFormulaHistorialConditionInput | null > | null,
  not?: ModelFormulaHistorialConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateFormulaHistorialInput = {
  id: string,
  formulaId?: string | null,
  version?: number | null,
  fechaModificacion?: string | null,
  datosJson?: string | null,
  usuarioId?: string | null,
};

export type DeleteFormulaHistorialInput = {
  id: string,
};

export type CreateAccessDeadlineInput = {
  id?: string | null,
  subjectType: SubjectType,
  subjectKey: string,
  deadline: string,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export enum SubjectType {
  USER = "USER",
  GROUP = "GROUP",
  API_CLIENT = "API_CLIENT",
}


export type ModelAccessDeadlineConditionInput = {
  subjectType?: ModelSubjectTypeInput | null,
  subjectKey?: ModelStringInput | null,
  deadline?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelAccessDeadlineConditionInput | null > | null,
  or?: Array< ModelAccessDeadlineConditionInput | null > | null,
  not?: ModelAccessDeadlineConditionInput | null,
};

export type ModelSubjectTypeInput = {
  eq?: SubjectType | null,
  ne?: SubjectType | null,
};

export type AccessDeadline = {
  __typename: "AccessDeadline",
  id: string,
  subjectType: SubjectType,
  subjectKey: string,
  deadline: string,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type UpdateAccessDeadlineInput = {
  id: string,
  subjectType?: SubjectType | null,
  subjectKey?: string | null,
  deadline?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteAccessDeadlineInput = {
  id: string,
};

export type CreateRoutePermissionInput = {
  id?: string | null,
  subjectType: SubjectType,
  subjectKey: string,
  tagName: string,
  method: string,
  allow: boolean,
  createdAt?: string | null,
};

export type ModelRoutePermissionConditionInput = {
  subjectType?: ModelSubjectTypeInput | null,
  subjectKey?: ModelStringInput | null,
  tagName?: ModelStringInput | null,
  method?: ModelStringInput | null,
  allow?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelRoutePermissionConditionInput | null > | null,
  or?: Array< ModelRoutePermissionConditionInput | null > | null,
  not?: ModelRoutePermissionConditionInput | null,
  updatedAt?: ModelStringInput | null,
};

export type RoutePermission = {
  __typename: "RoutePermission",
  id: string,
  subjectType: SubjectType,
  subjectKey: string,
  tagName: string,
  method: string,
  allow: boolean,
  createdAt?: string | null,
  updatedAt: string,
};

export type UpdateRoutePermissionInput = {
  id: string,
  subjectType?: SubjectType | null,
  subjectKey?: string | null,
  tagName?: string | null,
  method?: string | null,
  allow?: boolean | null,
  createdAt?: string | null,
};

export type DeleteRoutePermissionInput = {
  id: string,
};

export type CreateApiCredentialInput = {
  id?: string | null,
  name: string,
  apiKeyHash: string,
  active: boolean,
  allowedIps?: string | null,
  expiresAt?: string | null,
  createdAt?: string | null,
};

export type ModelApiCredentialConditionInput = {
  name?: ModelStringInput | null,
  apiKeyHash?: ModelStringInput | null,
  active?: ModelBooleanInput | null,
  allowedIps?: ModelStringInput | null,
  expiresAt?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelApiCredentialConditionInput | null > | null,
  or?: Array< ModelApiCredentialConditionInput | null > | null,
  not?: ModelApiCredentialConditionInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ApiCredential = {
  __typename: "ApiCredential",
  id: string,
  name: string,
  apiKeyHash: string,
  active: boolean,
  allowedIps?: string | null,
  expiresAt?: string | null,
  createdAt?: string | null,
  updatedAt: string,
};

export type UpdateApiCredentialInput = {
  id: string,
  name?: string | null,
  apiKeyHash?: string | null,
  active?: boolean | null,
  allowedIps?: string | null,
  expiresAt?: string | null,
  createdAt?: string | null,
};

export type DeleteApiCredentialInput = {
  id: string,
};

export type CreatePermVersionInput = {
  id?: string | null,
  updatedAt?: string | null,
};

export type ModelPermVersionConditionInput = {
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelPermVersionConditionInput | null > | null,
  or?: Array< ModelPermVersionConditionInput | null > | null,
  not?: ModelPermVersionConditionInput | null,
  createdAt?: ModelStringInput | null,
};

export type PermVersion = {
  __typename: "PermVersion",
  id: string,
  updatedAt?: string | null,
  createdAt: string,
};

export type UpdatePermVersionInput = {
  id: string,
  updatedAt?: string | null,
};

export type DeletePermVersionInput = {
  id: string,
};

export type CreateUnitOfMeasureInput = {
  id?: string | null,
  name: string,
  abbreviation?: string | null,
};

export type ModelUnitOfMeasureConditionInput = {
  name?: ModelStringInput | null,
  abbreviation?: ModelStringInput | null,
  and?: Array< ModelUnitOfMeasureConditionInput | null > | null,
  or?: Array< ModelUnitOfMeasureConditionInput | null > | null,
  not?: ModelUnitOfMeasureConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UnitOfMeasure = {
  __typename: "UnitOfMeasure",
  id: string,
  name: string,
  abbreviation?: string | null,
  features?: ModelFeatureConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelFeatureConnection = {
  __typename: "ModelFeatureConnection",
  items:  Array<Feature | null >,
  nextToken?: string | null,
};

export type Feature = {
  __typename: "Feature",
  id: string,
  feature_type?: string | null,
  name: string,
  description?: string | null,
  feature_group?: string | null,
  default_value?: number | null,
  is_float?: boolean | null,
  unitOfMeasure?: UnitOfMeasure | null,
  templateFeatures?: ModelTemplateFeatureConnection | null,
  rawDatas?: ModelRawDataConnection | null,
  createdAt: string,
  updatedAt: string,
  unitOfMeasureFeaturesId?: string | null,
};

export type ModelTemplateFeatureConnection = {
  __typename: "ModelTemplateFeatureConnection",
  items:  Array<TemplateFeature | null >,
  nextToken?: string | null,
};

export type TemplateFeature = {
  __typename: "TemplateFeature",
  id: string,
  template?: Template | null,
  feature?: Feature | null,
  createdAt: string,
  updatedAt: string,
  templateTemplateFeaturesId?: string | null,
  featureTemplateFeaturesId?: string | null,
};

export type Template = {
  __typename: "Template",
  id: string,
  name: string,
  description?: string | null,
  type: number,
  version?: string | null,
  is_latest: boolean,
  templateParent?: Template | null,
  templates?: ModelTemplateConnection | null,
  templateFeatures?: ModelTemplateFeatureConnection | null,
  trees?: ModelTreeConnection | null,
  createdAt: string,
  updatedAt: string,
  templateTemplatesId?: string | null,
};

export type ModelTemplateConnection = {
  __typename: "ModelTemplateConnection",
  items:  Array<Template | null >,
  nextToken?: string | null,
};

export type ModelTreeConnection = {
  __typename: "ModelTreeConnection",
  items:  Array<Tree | null >,
  nextToken?: string | null,
};

export type Tree = {
  __typename: "Tree",
  id: string,
  name: string,
  status?: string | null,
  project?: Project | null,
  template?: Template | null,
  rawData?: ModelRawDataConnection | null,
  createdAt: string,
  updatedAt: string,
  projectTreesId?: string | null,
  templateTreesId?: string | null,
};

export type Project = {
  __typename: "Project",
  id: string,
  name: string,
  status: string,
  trees?: ModelTreeConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelRawDataConnection = {
  __typename: "ModelRawDataConnection",
  items:  Array<RawData | null >,
  nextToken?: string | null,
};

export type RawData = {
  __typename: "RawData",
  id: string,
  name?: string | null,
  valueFloat?: number | null,
  valueString?: string | null,
  start_date?: string | null,
  end_date?: string | null,
  feature?: Feature | null,
  tree?: Tree | null,
  createdAt: string,
  updatedAt: string,
  treeRawDataId?: string | null,
  featureRawDatasId?: string | null,
};

export type UpdateUnitOfMeasureInput = {
  id: string,
  name?: string | null,
  abbreviation?: string | null,
};

export type DeleteUnitOfMeasureInput = {
  id: string,
};

export type CreateProjectInput = {
  id?: string | null,
  name: string,
  status: string,
};

export type ModelProjectConditionInput = {
  name?: ModelStringInput | null,
  status?: ModelStringInput | null,
  and?: Array< ModelProjectConditionInput | null > | null,
  or?: Array< ModelProjectConditionInput | null > | null,
  not?: ModelProjectConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateProjectInput = {
  id: string,
  name?: string | null,
  status?: string | null,
};

export type DeleteProjectInput = {
  id: string,
};

export type CreateTemplateInput = {
  id?: string | null,
  name: string,
  description?: string | null,
  type: number,
  version?: string | null,
  is_latest: boolean,
  templateTemplatesId?: string | null,
};

export type ModelTemplateConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  type?: ModelIntInput | null,
  version?: ModelStringInput | null,
  is_latest?: ModelBooleanInput | null,
  and?: Array< ModelTemplateConditionInput | null > | null,
  or?: Array< ModelTemplateConditionInput | null > | null,
  not?: ModelTemplateConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  templateTemplatesId?: ModelIDInput | null,
};

export type UpdateTemplateInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  type?: number | null,
  version?: string | null,
  is_latest?: boolean | null,
  templateTemplatesId?: string | null,
};

export type DeleteTemplateInput = {
  id: string,
};

export type CreateTreeInput = {
  id?: string | null,
  name: string,
  status?: string | null,
  projectTreesId?: string | null,
  templateTreesId?: string | null,
};

export type ModelTreeConditionInput = {
  name?: ModelStringInput | null,
  status?: ModelStringInput | null,
  and?: Array< ModelTreeConditionInput | null > | null,
  or?: Array< ModelTreeConditionInput | null > | null,
  not?: ModelTreeConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  projectTreesId?: ModelIDInput | null,
  templateTreesId?: ModelIDInput | null,
};

export type UpdateTreeInput = {
  id: string,
  name?: string | null,
  status?: string | null,
  projectTreesId?: string | null,
  templateTreesId?: string | null,
};

export type DeleteTreeInput = {
  id: string,
};

export type CreateTemplateFeatureInput = {
  id?: string | null,
  templateTemplateFeaturesId?: string | null,
  featureTemplateFeaturesId?: string | null,
};

export type ModelTemplateFeatureConditionInput = {
  and?: Array< ModelTemplateFeatureConditionInput | null > | null,
  or?: Array< ModelTemplateFeatureConditionInput | null > | null,
  not?: ModelTemplateFeatureConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  templateTemplateFeaturesId?: ModelIDInput | null,
  featureTemplateFeaturesId?: ModelIDInput | null,
};

export type UpdateTemplateFeatureInput = {
  id: string,
  templateTemplateFeaturesId?: string | null,
  featureTemplateFeaturesId?: string | null,
};

export type DeleteTemplateFeatureInput = {
  id: string,
};

export type CreateFeatureInput = {
  id?: string | null,
  feature_type?: string | null,
  name: string,
  description?: string | null,
  feature_group?: string | null,
  default_value?: number | null,
  is_float?: boolean | null,
  unitOfMeasureFeaturesId?: string | null,
};

export type ModelFeatureConditionInput = {
  feature_type?: ModelStringInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  feature_group?: ModelStringInput | null,
  default_value?: ModelFloatInput | null,
  is_float?: ModelBooleanInput | null,
  and?: Array< ModelFeatureConditionInput | null > | null,
  or?: Array< ModelFeatureConditionInput | null > | null,
  not?: ModelFeatureConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  unitOfMeasureFeaturesId?: ModelIDInput | null,
};

export type UpdateFeatureInput = {
  id: string,
  feature_type?: string | null,
  name?: string | null,
  description?: string | null,
  feature_group?: string | null,
  default_value?: number | null,
  is_float?: boolean | null,
  unitOfMeasureFeaturesId?: string | null,
};

export type DeleteFeatureInput = {
  id: string,
};

export type CreateRawDataInput = {
  id?: string | null,
  name?: string | null,
  valueFloat?: number | null,
  valueString?: string | null,
  start_date?: string | null,
  end_date?: string | null,
  treeRawDataId?: string | null,
  featureRawDatasId?: string | null,
};

export type ModelRawDataConditionInput = {
  name?: ModelStringInput | null,
  valueFloat?: ModelFloatInput | null,
  valueString?: ModelStringInput | null,
  start_date?: ModelStringInput | null,
  end_date?: ModelStringInput | null,
  and?: Array< ModelRawDataConditionInput | null > | null,
  or?: Array< ModelRawDataConditionInput | null > | null,
  not?: ModelRawDataConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  treeRawDataId?: ModelIDInput | null,
  featureRawDatasId?: ModelIDInput | null,
};

export type UpdateRawDataInput = {
  id: string,
  name?: string | null,
  valueFloat?: number | null,
  valueString?: string | null,
  start_date?: string | null,
  end_date?: string | null,
  treeRawDataId?: string | null,
  featureRawDatasId?: string | null,
};

export type DeleteRawDataInput = {
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

export type ModelProyectoFilterInput = {
  id?: ModelIDInput | null,
  proyectoNombre?: ModelStringInput | null,
  proyectoDescripcion?: ModelStringInput | null,
  proyectoIdExterno?: ModelStringInput | null,
  proyectoActivo?: ModelBooleanInput | null,
  proyectoFechaCreacion?: ModelStringInput | null,
  proyectoFechaActualizacion?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelProyectoFilterInput | null > | null,
  or?: Array< ModelProyectoFilterInput | null > | null,
  not?: ModelProyectoFilterInput | null,
};

export type ModelProyectoConnection = {
  __typename: "ModelProyectoConnection",
  items:  Array<Proyecto | null >,
  nextToken?: string | null,
};

export type ModelConsultaAnalisisFilterInput = {
  id?: ModelIDInput | null,
  proyectoId?: ModelIDInput | null,
  consultaNombre?: ModelStringInput | null,
  consultaUbicacion?: ModelStringInput | null,
  consultaParametros?: ModelStringInput | null,
  consultaExternaPoligonos?: ModelStringInput | null,
  consultaIdExterna?: ModelStringInput | null,
  respuestaResultado?: ModelStringInput | null,
  respuestaIdentificadorExterno?: ModelStringInput | null,
  modeloId?: ModelStringInput | null,
  modeloName?: ModelStringInput | null,
  modeloDescription?: ModelStringInput | null,
  modeloVersion?: ModelStringInput | null,
  modeloDocumentLink?: ModelStringInput | null,
  modeloApiLink?: ModelStringInput | null,
  blockchainHashTransaccion?: ModelStringInput | null,
  fechaCreacion?: ModelStringInput | null,
  source?: ModelSourceTypeInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelConsultaAnalisisFilterInput | null > | null,
  or?: Array< ModelConsultaAnalisisFilterInput | null > | null,
  not?: ModelConsultaAnalisisFilterInput | null,
};

export type ModelConsultaEstadoFilterInput = {
  id?: ModelIDInput | null,
  consultaId?: ModelIDInput | null,
  estado?: ModelEstadoConsultaInput | null,
  estadoFecha?: ModelStringInput | null,
  estadoUsername?: ModelStringInput | null,
  estadoObservaciones?: ModelStringInput | null,
  estadoTipoActor?: ModelEstadoTipoActorInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelConsultaEstadoFilterInput | null > | null,
  or?: Array< ModelConsultaEstadoFilterInput | null > | null,
  not?: ModelConsultaEstadoFilterInput | null,
};

export type ModelAnalisisCuotaFilterInput = {
  id?: ModelIDInput | null,
  nombreGrupo?: ModelStringInput | null,
  limiteDiario?: ModelIntInput | null,
  activo?: ModelBooleanInput | null,
  creadoEn?: ModelStringInput | null,
  actualizadoEn?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelAnalisisCuotaFilterInput | null > | null,
  or?: Array< ModelAnalisisCuotaFilterInput | null > | null,
  not?: ModelAnalisisCuotaFilterInput | null,
};

export type ModelAnalisisCuotaConnection = {
  __typename: "ModelAnalisisCuotaConnection",
  items:  Array<AnalisisCuota | null >,
  nextToken?: string | null,
};

export type ModelAnalisisCuotasUsoDiarioFilterInput = {
  id?: ModelIDInput | null,
  usuarioNombre?: ModelStringInput | null,
  grupoId?: ModelIDInput | null,
  fechaUso?: ModelStringInput | null,
  consultaId?: ModelIDInput | null,
  creadoEn?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelAnalisisCuotasUsoDiarioFilterInput | null > | null,
  or?: Array< ModelAnalisisCuotasUsoDiarioFilterInput | null > | null,
  not?: ModelAnalisisCuotasUsoDiarioFilterInput | null,
};

export type ModelDispositivoIotFilterInput = {
  id?: ModelIDInput | null,
  deviceId?: ModelStringInput | null,
  nombre?: ModelStringInput | null,
  departamento?: ModelStringInput | null,
  zona?: ModelStringInput | null,
  tipoDispositivo?: ModelTipoDispositivoInput | null,
  variablesPublicadas?: ModelStringInput | null,
  localizacion?: ModelStringInput | null,
  estado?: ModelEstadoDispositivoInput | null,
  observaciones?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelDispositivoIotFilterInput | null > | null,
  or?: Array< ModelDispositivoIotFilterInput | null > | null,
  not?: ModelDispositivoIotFilterInput | null,
};

export type ModelDispositivoIotConnection = {
  __typename: "ModelDispositivoIotConnection",
  items:  Array<DispositivoIot | null >,
  nextToken?: string | null,
};

export type ModelGrupoIotFilterInput = {
  id?: ModelIDInput | null,
  nombre?: ModelStringInput | null,
  descripcion?: ModelStringInput | null,
  estado?: ModelEstadoDispositivoInput | null,
  usuarioCreador?: ModelStringInput | null,
  observaciones?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelGrupoIotFilterInput | null > | null,
  or?: Array< ModelGrupoIotFilterInput | null > | null,
  not?: ModelGrupoIotFilterInput | null,
};

export type ModelGrupoIotConnection = {
  __typename: "ModelGrupoIotConnection",
  items:  Array<GrupoIot | null >,
  nextToken?: string | null,
};

export type ModelRelDispositivoGrupoIotFilterInput = {
  id?: ModelIDInput | null,
  dispositivoId?: ModelIDInput | null,
  grupoId?: ModelIDInput | null,
  fechaAsignacion?: ModelStringInput | null,
  usuarioId?: ModelStringInput | null,
  notas?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelRelDispositivoGrupoIotFilterInput | null > | null,
  or?: Array< ModelRelDispositivoGrupoIotFilterInput | null > | null,
  not?: ModelRelDispositivoGrupoIotFilterInput | null,
};

export type ModelRelGrupoIotProyectoFilterInput = {
  id?: ModelIDInput | null,
  grupoId?: ModelIDInput | null,
  proyectoId?: ModelIDInput | null,
  fechaAsignacion?: ModelStringInput | null,
  usuarioId?: ModelStringInput | null,
  notas?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelRelGrupoIotProyectoFilterInput | null > | null,
  or?: Array< ModelRelGrupoIotProyectoFilterInput | null > | null,
  not?: ModelRelGrupoIotProyectoFilterInput | null,
};

export type ModelMedicionIotFilterInput = {
  id?: ModelIDInput | null,
  dispositivoId?: ModelIDInput | null,
  deviceId?: ModelStringInput | null,
  departamento?: ModelStringInput | null,
  zona?: ModelStringInput | null,
  variable?: ModelStringInput | null,
  valor?: ModelFloatInput | null,
  timestamp?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelMedicionIotFilterInput | null > | null,
  or?: Array< ModelMedicionIotFilterInput | null > | null,
  not?: ModelMedicionIotFilterInput | null,
};

export type ModelProyectoLegacyFilterInput = {
  id?: ModelIDInput | null,
  projectId?: ModelStringInput | null,
  descripcion?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelProyectoLegacyFilterInput | null > | null,
  or?: Array< ModelProyectoLegacyFilterInput | null > | null,
  not?: ModelProyectoLegacyFilterInput | null,
};

export type ModelProyectoLegacyConnection = {
  __typename: "ModelProyectoLegacyConnection",
  items:  Array<ProyectoLegacy | null >,
  nextToken?: string | null,
};

export type ModelConsultaWebFilterInput = {
  id?: ModelIDInput | null,
  projectID?: ModelIDInput | null,
  imgAnteriorNombreImg?: ModelStringInput | null,
  imgAnteriorSatellite?: ModelStringInput | null,
  imgAnteriorYear?: ModelIntInput | null,
  imgAnteriorMesInicial?: ModelIntInput | null,
  imgAnteriorMesFinal?: ModelIntInput | null,
  imgAnteriorNubosidadMaxima?: ModelIntInput | null,
  imgAnteriorBandas?: ModelStringInput | null,
  imgPosteriorNombreImg?: ModelStringInput | null,
  imgPosteriorSatellite?: ModelStringInput | null,
  imgPosteriorYear?: ModelIntInput | null,
  imgPosteriorMesInicial?: ModelIntInput | null,
  imgPosteriorMesFinal?: ModelIntInput | null,
  imgPosteriorNubosidadMaxima?: ModelIntInput | null,
  imgPosteriorBandas?: ModelStringInput | null,
  fechaHoraConsulta?: ModelStringInput | null,
  usuarioEmailUpdate?: ModelStringInput | null,
  rawConsulta?: ModelStringInput | null,
  resultadoConsulta?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelConsultaWebFilterInput | null > | null,
  or?: Array< ModelConsultaWebFilterInput | null > | null,
  not?: ModelConsultaWebFilterInput | null,
};

export type ModelConsultaApiFilterInput = {
  id?: ModelIDInput | null,
  projectID?: ModelStringInput | null,
  cedulaCatastral?: ModelStringInput | null,
  imgAnteriorNombreImg?: ModelStringInput | null,
  imgAnteriorSatellite?: ModelStringInput | null,
  imgAnteriorYear?: ModelIntInput | null,
  imgAnteriorMesInicial?: ModelIntInput | null,
  imgAnteriorMesFinal?: ModelIntInput | null,
  imgAnteriorNubosidadMaxima?: ModelIntInput | null,
  imgAnteriorBandas?: ModelStringInput | null,
  imgPosteriorNombreImg?: ModelStringInput | null,
  imgPosteriorSatellite?: ModelStringInput | null,
  imgPosteriorYear?: ModelIntInput | null,
  imgPosteriorMesInicial?: ModelIntInput | null,
  imgPosteriorMesFinal?: ModelIntInput | null,
  imgPosteriorNubosidadMaxima?: ModelIntInput | null,
  imgPosteriorBandas?: ModelStringInput | null,
  fechaHoraConsulta?: ModelStringInput | null,
  fechaHoraActualizacion?: ModelStringInput | null,
  usuarioEmailUpdate?: ModelStringInput | null,
  verificado?: ModelBooleanInput | null,
  rawConsulta?: ModelStringInput | null,
  resultadoConsulta?: ModelStringInput | null,
  hashBlockchain?: ModelStringInput | null,
  indexNumberBlockchain?: ModelIntInput | null,
  timestampBlockchain?: ModelStringInput | null,
  onchainBlockchain?: ModelBooleanInput | null,
  txIdBlockchain?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelConsultaApiFilterInput | null > | null,
  or?: Array< ModelConsultaApiFilterInput | null > | null,
  not?: ModelConsultaApiFilterInput | null,
};

export type ModelConsultaApiConnection = {
  __typename: "ModelConsultaApiConnection",
  items:  Array<ConsultaApi | null >,
  nextToken?: string | null,
};

export type ModelIotSessionFilterInput = {
  id?: ModelIDInput | null,
  sessionId?: ModelStringInput | null,
  iotData?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  expiresAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelIotSessionFilterInput | null > | null,
  or?: Array< ModelIotSessionFilterInput | null > | null,
  not?: ModelIotSessionFilterInput | null,
};

export type ModelIotSessionConnection = {
  __typename: "ModelIotSessionConnection",
  items:  Array<IotSession | null >,
  nextToken?: string | null,
};

export type ModelConstructorFormulaCategoriaFilterInput = {
  id?: ModelIDInput | null,
  nombre?: ModelStringInput | null,
  estado?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelConstructorFormulaCategoriaFilterInput | null > | null,
  or?: Array< ModelConstructorFormulaCategoriaFilterInput | null > | null,
  not?: ModelConstructorFormulaCategoriaFilterInput | null,
};

export type ModelConstructorFormulaCategoriaConnection = {
  __typename: "ModelConstructorFormulaCategoriaConnection",
  items:  Array<ConstructorFormulaCategoria | null >,
  nextToken?: string | null,
};

export type ModelConstructorFormulaVariableFilterInput = {
  id?: ModelIDInput | null,
  nombre?: ModelStringInput | null,
  simbolo?: ModelStringInput | null,
  unidades?: ModelStringInput | null,
  descripcion?: ModelStringInput | null,
  categoriaId?: ModelIDInput | null,
  estado?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelConstructorFormulaVariableFilterInput | null > | null,
  or?: Array< ModelConstructorFormulaVariableFilterInput | null > | null,
  not?: ModelConstructorFormulaVariableFilterInput | null,
};

export type ModelConstructorFormulaFilterInput = {
  id?: ModelIDInput | null,
  nombre?: ModelStringInput | null,
  descripcion?: ModelStringInput | null,
  fuente?: ModelStringInput | null,
  usuarioId?: ModelStringInput | null,
  tipoFormula?: ModelTipoFormulaInput | null,
  estado?: ModelBooleanInput | null,
  expresionJson?: ModelStringInput | null,
  fechaCreacion?: ModelStringInput | null,
  version?: ModelIntInput | null,
  versionActiva?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelConstructorFormulaFilterInput | null > | null,
  or?: Array< ModelConstructorFormulaFilterInput | null > | null,
  not?: ModelConstructorFormulaFilterInput | null,
};

export type ModelConstructorFormulaConnection = {
  __typename: "ModelConstructorFormulaConnection",
  items:  Array<ConstructorFormula | null >,
  nextToken?: string | null,
};

export type ModelConstructorFormulaVariableRelFilterInput = {
  id?: ModelIDInput | null,
  formulaId?: ModelIDInput | null,
  variableId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelConstructorFormulaVariableRelFilterInput | null > | null,
  or?: Array< ModelConstructorFormulaVariableRelFilterInput | null > | null,
  not?: ModelConstructorFormulaVariableRelFilterInput | null,
};

export type ModelFormulaTeledeteccionFilterInput = {
  id?: ModelIDInput | null,
  formulaId?: ModelIDInput | null,
  codigoScript?: ModelStringInput | null,
  tipoEntrada?: ModelStringInput | null,
  parametrosJson?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelFormulaTeledeteccionFilterInput | null > | null,
  or?: Array< ModelFormulaTeledeteccionFilterInput | null > | null,
  not?: ModelFormulaTeledeteccionFilterInput | null,
};

export type ModelFormulaDeepLearningFilterInput = {
  id?: ModelIDInput | null,
  formulaId?: ModelIDInput | null,
  rutaModelo?: ModelStringInput | null,
  rutaEtiquetas?: ModelStringInput | null,
  parametrosJson?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelFormulaDeepLearningFilterInput | null > | null,
  or?: Array< ModelFormulaDeepLearningFilterInput | null > | null,
  not?: ModelFormulaDeepLearningFilterInput | null,
};

export type ModelFormulaHistorialFilterInput = {
  id?: ModelIDInput | null,
  formulaId?: ModelIDInput | null,
  version?: ModelIntInput | null,
  fechaModificacion?: ModelStringInput | null,
  datosJson?: ModelStringInput | null,
  usuarioId?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelFormulaHistorialFilterInput | null > | null,
  or?: Array< ModelFormulaHistorialFilterInput | null > | null,
  not?: ModelFormulaHistorialFilterInput | null,
};

export type ModelAccessDeadlineFilterInput = {
  id?: ModelIDInput | null,
  subjectType?: ModelSubjectTypeInput | null,
  subjectKey?: ModelStringInput | null,
  deadline?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelAccessDeadlineFilterInput | null > | null,
  or?: Array< ModelAccessDeadlineFilterInput | null > | null,
  not?: ModelAccessDeadlineFilterInput | null,
};

export type ModelAccessDeadlineConnection = {
  __typename: "ModelAccessDeadlineConnection",
  items:  Array<AccessDeadline | null >,
  nextToken?: string | null,
};

export type ModelRoutePermissionFilterInput = {
  id?: ModelIDInput | null,
  subjectType?: ModelSubjectTypeInput | null,
  subjectKey?: ModelStringInput | null,
  tagName?: ModelStringInput | null,
  method?: ModelStringInput | null,
  allow?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelRoutePermissionFilterInput | null > | null,
  or?: Array< ModelRoutePermissionFilterInput | null > | null,
  not?: ModelRoutePermissionFilterInput | null,
};

export type ModelRoutePermissionConnection = {
  __typename: "ModelRoutePermissionConnection",
  items:  Array<RoutePermission | null >,
  nextToken?: string | null,
};

export type ModelApiCredentialFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  apiKeyHash?: ModelStringInput | null,
  active?: ModelBooleanInput | null,
  allowedIps?: ModelStringInput | null,
  expiresAt?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelApiCredentialFilterInput | null > | null,
  or?: Array< ModelApiCredentialFilterInput | null > | null,
  not?: ModelApiCredentialFilterInput | null,
};

export type ModelApiCredentialConnection = {
  __typename: "ModelApiCredentialConnection",
  items:  Array<ApiCredential | null >,
  nextToken?: string | null,
};

export type ModelPermVersionFilterInput = {
  id?: ModelIDInput | null,
  updatedAt?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelPermVersionFilterInput | null > | null,
  or?: Array< ModelPermVersionFilterInput | null > | null,
  not?: ModelPermVersionFilterInput | null,
};

export type ModelPermVersionConnection = {
  __typename: "ModelPermVersionConnection",
  items:  Array<PermVersion | null >,
  nextToken?: string | null,
};

export type ModelUnitOfMeasureFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  abbreviation?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelUnitOfMeasureFilterInput | null > | null,
  or?: Array< ModelUnitOfMeasureFilterInput | null > | null,
  not?: ModelUnitOfMeasureFilterInput | null,
};

export type ModelUnitOfMeasureConnection = {
  __typename: "ModelUnitOfMeasureConnection",
  items:  Array<UnitOfMeasure | null >,
  nextToken?: string | null,
};

export type ModelProjectFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  status?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelProjectFilterInput | null > | null,
  or?: Array< ModelProjectFilterInput | null > | null,
  not?: ModelProjectFilterInput | null,
};

export type ModelProjectConnection = {
  __typename: "ModelProjectConnection",
  items:  Array<Project | null >,
  nextToken?: string | null,
};

export type ModelTemplateFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  type?: ModelIntInput | null,
  version?: ModelStringInput | null,
  is_latest?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelTemplateFilterInput | null > | null,
  or?: Array< ModelTemplateFilterInput | null > | null,
  not?: ModelTemplateFilterInput | null,
  templateTemplatesId?: ModelIDInput | null,
};

export type ModelTreeFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  status?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelTreeFilterInput | null > | null,
  or?: Array< ModelTreeFilterInput | null > | null,
  not?: ModelTreeFilterInput | null,
  projectTreesId?: ModelIDInput | null,
  templateTreesId?: ModelIDInput | null,
};

export type ModelTemplateFeatureFilterInput = {
  id?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelTemplateFeatureFilterInput | null > | null,
  or?: Array< ModelTemplateFeatureFilterInput | null > | null,
  not?: ModelTemplateFeatureFilterInput | null,
  templateTemplateFeaturesId?: ModelIDInput | null,
  featureTemplateFeaturesId?: ModelIDInput | null,
};

export type ModelFeatureFilterInput = {
  id?: ModelIDInput | null,
  feature_type?: ModelStringInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  feature_group?: ModelStringInput | null,
  default_value?: ModelFloatInput | null,
  is_float?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelFeatureFilterInput | null > | null,
  or?: Array< ModelFeatureFilterInput | null > | null,
  not?: ModelFeatureFilterInput | null,
  unitOfMeasureFeaturesId?: ModelIDInput | null,
};

export type ModelRawDataFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  valueFloat?: ModelFloatInput | null,
  valueString?: ModelStringInput | null,
  start_date?: ModelStringInput | null,
  end_date?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelRawDataFilterInput | null > | null,
  or?: Array< ModelRawDataFilterInput | null > | null,
  not?: ModelRawDataFilterInput | null,
  treeRawDataId?: ModelIDInput | null,
  featureRawDatasId?: ModelIDInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


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

export type ModelSubscriptionProyectoFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  proyectoNombre?: ModelSubscriptionStringInput | null,
  proyectoDescripcion?: ModelSubscriptionStringInput | null,
  proyectoIdExterno?: ModelSubscriptionStringInput | null,
  proyectoActivo?: ModelSubscriptionBooleanInput | null,
  proyectoFechaCreacion?: ModelSubscriptionStringInput | null,
  proyectoFechaActualizacion?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionProyectoFilterInput | null > | null,
  or?: Array< ModelSubscriptionProyectoFilterInput | null > | null,
};

export type ModelSubscriptionConsultaAnalisisFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  proyectoId?: ModelSubscriptionIDInput | null,
  consultaNombre?: ModelSubscriptionStringInput | null,
  consultaUbicacion?: ModelSubscriptionStringInput | null,
  consultaParametros?: ModelSubscriptionStringInput | null,
  consultaExternaPoligonos?: ModelSubscriptionStringInput | null,
  consultaIdExterna?: ModelSubscriptionStringInput | null,
  respuestaResultado?: ModelSubscriptionStringInput | null,
  respuestaIdentificadorExterno?: ModelSubscriptionStringInput | null,
  modeloId?: ModelSubscriptionStringInput | null,
  modeloName?: ModelSubscriptionStringInput | null,
  modeloDescription?: ModelSubscriptionStringInput | null,
  modeloVersion?: ModelSubscriptionStringInput | null,
  modeloDocumentLink?: ModelSubscriptionStringInput | null,
  modeloApiLink?: ModelSubscriptionStringInput | null,
  blockchainHashTransaccion?: ModelSubscriptionStringInput | null,
  fechaCreacion?: ModelSubscriptionStringInput | null,
  source?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionConsultaAnalisisFilterInput | null > | null,
  or?: Array< ModelSubscriptionConsultaAnalisisFilterInput | null > | null,
};

export type ModelSubscriptionConsultaEstadoFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  consultaId?: ModelSubscriptionIDInput | null,
  estado?: ModelSubscriptionStringInput | null,
  estadoFecha?: ModelSubscriptionStringInput | null,
  estadoUsername?: ModelSubscriptionStringInput | null,
  estadoObservaciones?: ModelSubscriptionStringInput | null,
  estadoTipoActor?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionConsultaEstadoFilterInput | null > | null,
  or?: Array< ModelSubscriptionConsultaEstadoFilterInput | null > | null,
};

export type ModelSubscriptionAnalisisCuotaFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  nombreGrupo?: ModelSubscriptionStringInput | null,
  limiteDiario?: ModelSubscriptionIntInput | null,
  activo?: ModelSubscriptionBooleanInput | null,
  creadoEn?: ModelSubscriptionStringInput | null,
  actualizadoEn?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionAnalisisCuotaFilterInput | null > | null,
  or?: Array< ModelSubscriptionAnalisisCuotaFilterInput | null > | null,
};

export type ModelSubscriptionAnalisisCuotasUsoDiarioFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  usuarioNombre?: ModelSubscriptionStringInput | null,
  grupoId?: ModelSubscriptionIDInput | null,
  fechaUso?: ModelSubscriptionStringInput | null,
  consultaId?: ModelSubscriptionIDInput | null,
  creadoEn?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionAnalisisCuotasUsoDiarioFilterInput | null > | null,
  or?: Array< ModelSubscriptionAnalisisCuotasUsoDiarioFilterInput | null > | null,
};

export type ModelSubscriptionDispositivoIotFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  deviceId?: ModelSubscriptionStringInput | null,
  nombre?: ModelSubscriptionStringInput | null,
  departamento?: ModelSubscriptionStringInput | null,
  zona?: ModelSubscriptionStringInput | null,
  tipoDispositivo?: ModelSubscriptionStringInput | null,
  variablesPublicadas?: ModelSubscriptionStringInput | null,
  localizacion?: ModelSubscriptionStringInput | null,
  estado?: ModelSubscriptionStringInput | null,
  observaciones?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionDispositivoIotFilterInput | null > | null,
  or?: Array< ModelSubscriptionDispositivoIotFilterInput | null > | null,
};

export type ModelSubscriptionGrupoIotFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  nombre?: ModelSubscriptionStringInput | null,
  descripcion?: ModelSubscriptionStringInput | null,
  estado?: ModelSubscriptionStringInput | null,
  usuarioCreador?: ModelSubscriptionStringInput | null,
  observaciones?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionGrupoIotFilterInput | null > | null,
  or?: Array< ModelSubscriptionGrupoIotFilterInput | null > | null,
};

export type ModelSubscriptionRelDispositivoGrupoIotFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  dispositivoId?: ModelSubscriptionIDInput | null,
  grupoId?: ModelSubscriptionIDInput | null,
  fechaAsignacion?: ModelSubscriptionStringInput | null,
  usuarioId?: ModelSubscriptionStringInput | null,
  notas?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionRelDispositivoGrupoIotFilterInput | null > | null,
  or?: Array< ModelSubscriptionRelDispositivoGrupoIotFilterInput | null > | null,
};

export type ModelSubscriptionRelGrupoIotProyectoFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  grupoId?: ModelSubscriptionIDInput | null,
  proyectoId?: ModelSubscriptionIDInput | null,
  fechaAsignacion?: ModelSubscriptionStringInput | null,
  usuarioId?: ModelSubscriptionStringInput | null,
  notas?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionRelGrupoIotProyectoFilterInput | null > | null,
  or?: Array< ModelSubscriptionRelGrupoIotProyectoFilterInput | null > | null,
};

export type ModelSubscriptionMedicionIotFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  dispositivoId?: ModelSubscriptionIDInput | null,
  deviceId?: ModelSubscriptionStringInput | null,
  departamento?: ModelSubscriptionStringInput | null,
  zona?: ModelSubscriptionStringInput | null,
  variable?: ModelSubscriptionStringInput | null,
  valor?: ModelSubscriptionFloatInput | null,
  timestamp?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionMedicionIotFilterInput | null > | null,
  or?: Array< ModelSubscriptionMedicionIotFilterInput | null > | null,
};

export type ModelSubscriptionFloatInput = {
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

export type ModelSubscriptionProyectoLegacyFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  projectId?: ModelSubscriptionStringInput | null,
  descripcion?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionProyectoLegacyFilterInput | null > | null,
  or?: Array< ModelSubscriptionProyectoLegacyFilterInput | null > | null,
};

export type ModelSubscriptionConsultaWebFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  projectID?: ModelSubscriptionIDInput | null,
  imgAnteriorNombreImg?: ModelSubscriptionStringInput | null,
  imgAnteriorSatellite?: ModelSubscriptionStringInput | null,
  imgAnteriorYear?: ModelSubscriptionIntInput | null,
  imgAnteriorMesInicial?: ModelSubscriptionIntInput | null,
  imgAnteriorMesFinal?: ModelSubscriptionIntInput | null,
  imgAnteriorNubosidadMaxima?: ModelSubscriptionIntInput | null,
  imgAnteriorBandas?: ModelSubscriptionStringInput | null,
  imgPosteriorNombreImg?: ModelSubscriptionStringInput | null,
  imgPosteriorSatellite?: ModelSubscriptionStringInput | null,
  imgPosteriorYear?: ModelSubscriptionIntInput | null,
  imgPosteriorMesInicial?: ModelSubscriptionIntInput | null,
  imgPosteriorMesFinal?: ModelSubscriptionIntInput | null,
  imgPosteriorNubosidadMaxima?: ModelSubscriptionIntInput | null,
  imgPosteriorBandas?: ModelSubscriptionStringInput | null,
  fechaHoraConsulta?: ModelSubscriptionStringInput | null,
  usuarioEmailUpdate?: ModelSubscriptionStringInput | null,
  rawConsulta?: ModelSubscriptionStringInput | null,
  resultadoConsulta?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionConsultaWebFilterInput | null > | null,
  or?: Array< ModelSubscriptionConsultaWebFilterInput | null > | null,
};

export type ModelSubscriptionConsultaApiFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  projectID?: ModelSubscriptionStringInput | null,
  cedulaCatastral?: ModelSubscriptionStringInput | null,
  imgAnteriorNombreImg?: ModelSubscriptionStringInput | null,
  imgAnteriorSatellite?: ModelSubscriptionStringInput | null,
  imgAnteriorYear?: ModelSubscriptionIntInput | null,
  imgAnteriorMesInicial?: ModelSubscriptionIntInput | null,
  imgAnteriorMesFinal?: ModelSubscriptionIntInput | null,
  imgAnteriorNubosidadMaxima?: ModelSubscriptionIntInput | null,
  imgAnteriorBandas?: ModelSubscriptionStringInput | null,
  imgPosteriorNombreImg?: ModelSubscriptionStringInput | null,
  imgPosteriorSatellite?: ModelSubscriptionStringInput | null,
  imgPosteriorYear?: ModelSubscriptionIntInput | null,
  imgPosteriorMesInicial?: ModelSubscriptionIntInput | null,
  imgPosteriorMesFinal?: ModelSubscriptionIntInput | null,
  imgPosteriorNubosidadMaxima?: ModelSubscriptionIntInput | null,
  imgPosteriorBandas?: ModelSubscriptionStringInput | null,
  fechaHoraConsulta?: ModelSubscriptionStringInput | null,
  fechaHoraActualizacion?: ModelSubscriptionStringInput | null,
  usuarioEmailUpdate?: ModelSubscriptionStringInput | null,
  verificado?: ModelSubscriptionBooleanInput | null,
  rawConsulta?: ModelSubscriptionStringInput | null,
  resultadoConsulta?: ModelSubscriptionStringInput | null,
  hashBlockchain?: ModelSubscriptionStringInput | null,
  indexNumberBlockchain?: ModelSubscriptionIntInput | null,
  timestampBlockchain?: ModelSubscriptionStringInput | null,
  onchainBlockchain?: ModelSubscriptionBooleanInput | null,
  txIdBlockchain?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionConsultaApiFilterInput | null > | null,
  or?: Array< ModelSubscriptionConsultaApiFilterInput | null > | null,
};

export type ModelSubscriptionIotSessionFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  sessionId?: ModelSubscriptionStringInput | null,
  iotData?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  expiresAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionIotSessionFilterInput | null > | null,
  or?: Array< ModelSubscriptionIotSessionFilterInput | null > | null,
};

export type ModelSubscriptionConstructorFormulaCategoriaFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  nombre?: ModelSubscriptionStringInput | null,
  estado?: ModelSubscriptionBooleanInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionConstructorFormulaCategoriaFilterInput | null > | null,
  or?: Array< ModelSubscriptionConstructorFormulaCategoriaFilterInput | null > | null,
};

export type ModelSubscriptionConstructorFormulaVariableFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  nombre?: ModelSubscriptionStringInput | null,
  simbolo?: ModelSubscriptionStringInput | null,
  unidades?: ModelSubscriptionStringInput | null,
  descripcion?: ModelSubscriptionStringInput | null,
  categoriaId?: ModelSubscriptionIDInput | null,
  estado?: ModelSubscriptionBooleanInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionConstructorFormulaVariableFilterInput | null > | null,
  or?: Array< ModelSubscriptionConstructorFormulaVariableFilterInput | null > | null,
};

export type ModelSubscriptionConstructorFormulaFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  nombre?: ModelSubscriptionStringInput | null,
  descripcion?: ModelSubscriptionStringInput | null,
  fuente?: ModelSubscriptionStringInput | null,
  usuarioId?: ModelSubscriptionStringInput | null,
  tipoFormula?: ModelSubscriptionStringInput | null,
  estado?: ModelSubscriptionBooleanInput | null,
  expresionJson?: ModelSubscriptionStringInput | null,
  fechaCreacion?: ModelSubscriptionStringInput | null,
  version?: ModelSubscriptionIntInput | null,
  versionActiva?: ModelSubscriptionBooleanInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionConstructorFormulaFilterInput | null > | null,
  or?: Array< ModelSubscriptionConstructorFormulaFilterInput | null > | null,
};

export type ModelSubscriptionConstructorFormulaVariableRelFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  formulaId?: ModelSubscriptionIDInput | null,
  variableId?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionConstructorFormulaVariableRelFilterInput | null > | null,
  or?: Array< ModelSubscriptionConstructorFormulaVariableRelFilterInput | null > | null,
};

export type ModelSubscriptionFormulaTeledeteccionFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  formulaId?: ModelSubscriptionIDInput | null,
  codigoScript?: ModelSubscriptionStringInput | null,
  tipoEntrada?: ModelSubscriptionStringInput | null,
  parametrosJson?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionFormulaTeledeteccionFilterInput | null > | null,
  or?: Array< ModelSubscriptionFormulaTeledeteccionFilterInput | null > | null,
};

export type ModelSubscriptionFormulaDeepLearningFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  formulaId?: ModelSubscriptionIDInput | null,
  rutaModelo?: ModelSubscriptionStringInput | null,
  rutaEtiquetas?: ModelSubscriptionStringInput | null,
  parametrosJson?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionFormulaDeepLearningFilterInput | null > | null,
  or?: Array< ModelSubscriptionFormulaDeepLearningFilterInput | null > | null,
};

export type ModelSubscriptionFormulaHistorialFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  formulaId?: ModelSubscriptionIDInput | null,
  version?: ModelSubscriptionIntInput | null,
  fechaModificacion?: ModelSubscriptionStringInput | null,
  datosJson?: ModelSubscriptionStringInput | null,
  usuarioId?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionFormulaHistorialFilterInput | null > | null,
  or?: Array< ModelSubscriptionFormulaHistorialFilterInput | null > | null,
};

export type ModelSubscriptionAccessDeadlineFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  subjectType?: ModelSubscriptionStringInput | null,
  subjectKey?: ModelSubscriptionStringInput | null,
  deadline?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionAccessDeadlineFilterInput | null > | null,
  or?: Array< ModelSubscriptionAccessDeadlineFilterInput | null > | null,
};

export type ModelSubscriptionRoutePermissionFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  subjectType?: ModelSubscriptionStringInput | null,
  subjectKey?: ModelSubscriptionStringInput | null,
  tagName?: ModelSubscriptionStringInput | null,
  method?: ModelSubscriptionStringInput | null,
  allow?: ModelSubscriptionBooleanInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionRoutePermissionFilterInput | null > | null,
  or?: Array< ModelSubscriptionRoutePermissionFilterInput | null > | null,
};

export type ModelSubscriptionApiCredentialFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  apiKeyHash?: ModelSubscriptionStringInput | null,
  active?: ModelSubscriptionBooleanInput | null,
  allowedIps?: ModelSubscriptionStringInput | null,
  expiresAt?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionApiCredentialFilterInput | null > | null,
  or?: Array< ModelSubscriptionApiCredentialFilterInput | null > | null,
};

export type ModelSubscriptionPermVersionFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionPermVersionFilterInput | null > | null,
  or?: Array< ModelSubscriptionPermVersionFilterInput | null > | null,
};

export type ModelSubscriptionUnitOfMeasureFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  abbreviation?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUnitOfMeasureFilterInput | null > | null,
  or?: Array< ModelSubscriptionUnitOfMeasureFilterInput | null > | null,
  unitOfMeasureFeaturesId?: ModelSubscriptionIDInput | null,
};

export type ModelSubscriptionProjectFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionProjectFilterInput | null > | null,
  or?: Array< ModelSubscriptionProjectFilterInput | null > | null,
  projectTreesId?: ModelSubscriptionIDInput | null,
};

export type ModelSubscriptionTemplateFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  type?: ModelSubscriptionIntInput | null,
  version?: ModelSubscriptionStringInput | null,
  is_latest?: ModelSubscriptionBooleanInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionTemplateFilterInput | null > | null,
  or?: Array< ModelSubscriptionTemplateFilterInput | null > | null,
  templateTemplatesId?: ModelSubscriptionIDInput | null,
  templateTemplateFeaturesId?: ModelSubscriptionIDInput | null,
  templateTreesId?: ModelSubscriptionIDInput | null,
};

export type ModelSubscriptionTreeFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionTreeFilterInput | null > | null,
  or?: Array< ModelSubscriptionTreeFilterInput | null > | null,
  treeRawDataId?: ModelSubscriptionIDInput | null,
};

export type ModelSubscriptionTemplateFeatureFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionTemplateFeatureFilterInput | null > | null,
  or?: Array< ModelSubscriptionTemplateFeatureFilterInput | null > | null,
};

export type ModelSubscriptionFeatureFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  feature_type?: ModelSubscriptionStringInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  feature_group?: ModelSubscriptionStringInput | null,
  default_value?: ModelSubscriptionFloatInput | null,
  is_float?: ModelSubscriptionBooleanInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionFeatureFilterInput | null > | null,
  or?: Array< ModelSubscriptionFeatureFilterInput | null > | null,
  featureTemplateFeaturesId?: ModelSubscriptionIDInput | null,
  featureRawDatasId?: ModelSubscriptionIDInput | null,
};

export type ModelSubscriptionRawDataFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  valueFloat?: ModelSubscriptionFloatInput | null,
  valueString?: ModelSubscriptionStringInput | null,
  start_date?: ModelSubscriptionStringInput | null,
  end_date?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionRawDataFilterInput | null > | null,
  or?: Array< ModelSubscriptionRawDataFilterInput | null > | null,
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

export type CreateProyectoMutationVariables = {
  input: CreateProyectoInput,
  condition?: ModelProyectoConditionInput | null,
};

export type CreateProyectoMutation = {
  createProyecto?:  {
    __typename: "Proyecto",
    id: string,
    proyectoNombre: string,
    proyectoDescripcion?: string | null,
    proyectoIdExterno?: string | null,
    proyectoActivo: boolean,
    proyectoFechaCreacion?: string | null,
    proyectoFechaActualizacion?: string | null,
    consultasAnalisis?:  {
      __typename: "ModelConsultaAnalisisConnection",
      nextToken?: string | null,
    } | null,
    gruposIot?:  {
      __typename: "ModelRelGrupoIotProyectoConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateProyectoMutationVariables = {
  input: UpdateProyectoInput,
  condition?: ModelProyectoConditionInput | null,
};

export type UpdateProyectoMutation = {
  updateProyecto?:  {
    __typename: "Proyecto",
    id: string,
    proyectoNombre: string,
    proyectoDescripcion?: string | null,
    proyectoIdExterno?: string | null,
    proyectoActivo: boolean,
    proyectoFechaCreacion?: string | null,
    proyectoFechaActualizacion?: string | null,
    consultasAnalisis?:  {
      __typename: "ModelConsultaAnalisisConnection",
      nextToken?: string | null,
    } | null,
    gruposIot?:  {
      __typename: "ModelRelGrupoIotProyectoConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteProyectoMutationVariables = {
  input: DeleteProyectoInput,
  condition?: ModelProyectoConditionInput | null,
};

export type DeleteProyectoMutation = {
  deleteProyecto?:  {
    __typename: "Proyecto",
    id: string,
    proyectoNombre: string,
    proyectoDescripcion?: string | null,
    proyectoIdExterno?: string | null,
    proyectoActivo: boolean,
    proyectoFechaCreacion?: string | null,
    proyectoFechaActualizacion?: string | null,
    consultasAnalisis?:  {
      __typename: "ModelConsultaAnalisisConnection",
      nextToken?: string | null,
    } | null,
    gruposIot?:  {
      __typename: "ModelRelGrupoIotProyectoConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateConsultaAnalisisMutationVariables = {
  input: CreateConsultaAnalisisInput,
  condition?: ModelConsultaAnalisisConditionInput | null,
};

export type CreateConsultaAnalisisMutation = {
  createConsultaAnalisis?:  {
    __typename: "ConsultaAnalisis",
    id: string,
    proyectoId?: string | null,
    consultaNombre: string,
    consultaUbicacion: string,
    consultaParametros?: string | null,
    consultaExternaPoligonos?: string | null,
    consultaIdExterna?: string | null,
    respuestaResultado?: string | null,
    respuestaIdentificadorExterno?: string | null,
    modeloId?: string | null,
    modeloName?: string | null,
    modeloDescription?: string | null,
    modeloVersion?: string | null,
    modeloDocumentLink?: string | null,
    modeloApiLink?: string | null,
    blockchainHashTransaccion?: string | null,
    fechaCreacion?: string | null,
    source: SourceType,
    proyecto?:  {
      __typename: "Proyecto",
      id: string,
      proyectoNombre: string,
      proyectoDescripcion?: string | null,
      proyectoIdExterno?: string | null,
      proyectoActivo: boolean,
      proyectoFechaCreacion?: string | null,
      proyectoFechaActualizacion?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    estados?:  {
      __typename: "ModelConsultaEstadoConnection",
      nextToken?: string | null,
    } | null,
    cuotasUso?:  {
      __typename: "ModelAnalisisCuotasUsoDiarioConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateConsultaAnalisisMutationVariables = {
  input: UpdateConsultaAnalisisInput,
  condition?: ModelConsultaAnalisisConditionInput | null,
};

export type UpdateConsultaAnalisisMutation = {
  updateConsultaAnalisis?:  {
    __typename: "ConsultaAnalisis",
    id: string,
    proyectoId?: string | null,
    consultaNombre: string,
    consultaUbicacion: string,
    consultaParametros?: string | null,
    consultaExternaPoligonos?: string | null,
    consultaIdExterna?: string | null,
    respuestaResultado?: string | null,
    respuestaIdentificadorExterno?: string | null,
    modeloId?: string | null,
    modeloName?: string | null,
    modeloDescription?: string | null,
    modeloVersion?: string | null,
    modeloDocumentLink?: string | null,
    modeloApiLink?: string | null,
    blockchainHashTransaccion?: string | null,
    fechaCreacion?: string | null,
    source: SourceType,
    proyecto?:  {
      __typename: "Proyecto",
      id: string,
      proyectoNombre: string,
      proyectoDescripcion?: string | null,
      proyectoIdExterno?: string | null,
      proyectoActivo: boolean,
      proyectoFechaCreacion?: string | null,
      proyectoFechaActualizacion?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    estados?:  {
      __typename: "ModelConsultaEstadoConnection",
      nextToken?: string | null,
    } | null,
    cuotasUso?:  {
      __typename: "ModelAnalisisCuotasUsoDiarioConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteConsultaAnalisisMutationVariables = {
  input: DeleteConsultaAnalisisInput,
  condition?: ModelConsultaAnalisisConditionInput | null,
};

export type DeleteConsultaAnalisisMutation = {
  deleteConsultaAnalisis?:  {
    __typename: "ConsultaAnalisis",
    id: string,
    proyectoId?: string | null,
    consultaNombre: string,
    consultaUbicacion: string,
    consultaParametros?: string | null,
    consultaExternaPoligonos?: string | null,
    consultaIdExterna?: string | null,
    respuestaResultado?: string | null,
    respuestaIdentificadorExterno?: string | null,
    modeloId?: string | null,
    modeloName?: string | null,
    modeloDescription?: string | null,
    modeloVersion?: string | null,
    modeloDocumentLink?: string | null,
    modeloApiLink?: string | null,
    blockchainHashTransaccion?: string | null,
    fechaCreacion?: string | null,
    source: SourceType,
    proyecto?:  {
      __typename: "Proyecto",
      id: string,
      proyectoNombre: string,
      proyectoDescripcion?: string | null,
      proyectoIdExterno?: string | null,
      proyectoActivo: boolean,
      proyectoFechaCreacion?: string | null,
      proyectoFechaActualizacion?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    estados?:  {
      __typename: "ModelConsultaEstadoConnection",
      nextToken?: string | null,
    } | null,
    cuotasUso?:  {
      __typename: "ModelAnalisisCuotasUsoDiarioConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateConsultaEstadoMutationVariables = {
  input: CreateConsultaEstadoInput,
  condition?: ModelConsultaEstadoConditionInput | null,
};

export type CreateConsultaEstadoMutation = {
  createConsultaEstado?:  {
    __typename: "ConsultaEstado",
    id: string,
    consultaId: string,
    estado: EstadoConsulta,
    estadoFecha: string,
    estadoUsername?: string | null,
    estadoObservaciones?: string | null,
    estadoTipoActor: EstadoTipoActor,
    consulta?:  {
      __typename: "ConsultaAnalisis",
      id: string,
      proyectoId?: string | null,
      consultaNombre: string,
      consultaUbicacion: string,
      consultaParametros?: string | null,
      consultaExternaPoligonos?: string | null,
      consultaIdExterna?: string | null,
      respuestaResultado?: string | null,
      respuestaIdentificadorExterno?: string | null,
      modeloId?: string | null,
      modeloName?: string | null,
      modeloDescription?: string | null,
      modeloVersion?: string | null,
      modeloDocumentLink?: string | null,
      modeloApiLink?: string | null,
      blockchainHashTransaccion?: string | null,
      fechaCreacion?: string | null,
      source: SourceType,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateConsultaEstadoMutationVariables = {
  input: UpdateConsultaEstadoInput,
  condition?: ModelConsultaEstadoConditionInput | null,
};

export type UpdateConsultaEstadoMutation = {
  updateConsultaEstado?:  {
    __typename: "ConsultaEstado",
    id: string,
    consultaId: string,
    estado: EstadoConsulta,
    estadoFecha: string,
    estadoUsername?: string | null,
    estadoObservaciones?: string | null,
    estadoTipoActor: EstadoTipoActor,
    consulta?:  {
      __typename: "ConsultaAnalisis",
      id: string,
      proyectoId?: string | null,
      consultaNombre: string,
      consultaUbicacion: string,
      consultaParametros?: string | null,
      consultaExternaPoligonos?: string | null,
      consultaIdExterna?: string | null,
      respuestaResultado?: string | null,
      respuestaIdentificadorExterno?: string | null,
      modeloId?: string | null,
      modeloName?: string | null,
      modeloDescription?: string | null,
      modeloVersion?: string | null,
      modeloDocumentLink?: string | null,
      modeloApiLink?: string | null,
      blockchainHashTransaccion?: string | null,
      fechaCreacion?: string | null,
      source: SourceType,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteConsultaEstadoMutationVariables = {
  input: DeleteConsultaEstadoInput,
  condition?: ModelConsultaEstadoConditionInput | null,
};

export type DeleteConsultaEstadoMutation = {
  deleteConsultaEstado?:  {
    __typename: "ConsultaEstado",
    id: string,
    consultaId: string,
    estado: EstadoConsulta,
    estadoFecha: string,
    estadoUsername?: string | null,
    estadoObservaciones?: string | null,
    estadoTipoActor: EstadoTipoActor,
    consulta?:  {
      __typename: "ConsultaAnalisis",
      id: string,
      proyectoId?: string | null,
      consultaNombre: string,
      consultaUbicacion: string,
      consultaParametros?: string | null,
      consultaExternaPoligonos?: string | null,
      consultaIdExterna?: string | null,
      respuestaResultado?: string | null,
      respuestaIdentificadorExterno?: string | null,
      modeloId?: string | null,
      modeloName?: string | null,
      modeloDescription?: string | null,
      modeloVersion?: string | null,
      modeloDocumentLink?: string | null,
      modeloApiLink?: string | null,
      blockchainHashTransaccion?: string | null,
      fechaCreacion?: string | null,
      source: SourceType,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateAnalisisCuotaMutationVariables = {
  input: CreateAnalisisCuotaInput,
  condition?: ModelAnalisisCuotaConditionInput | null,
};

export type CreateAnalisisCuotaMutation = {
  createAnalisisCuota?:  {
    __typename: "AnalisisCuota",
    id: string,
    nombreGrupo: string,
    limiteDiario: number,
    activo: boolean,
    creadoEn?: string | null,
    actualizadoEn?: string | null,
    usosDiarios?:  {
      __typename: "ModelAnalisisCuotasUsoDiarioConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateAnalisisCuotaMutationVariables = {
  input: UpdateAnalisisCuotaInput,
  condition?: ModelAnalisisCuotaConditionInput | null,
};

export type UpdateAnalisisCuotaMutation = {
  updateAnalisisCuota?:  {
    __typename: "AnalisisCuota",
    id: string,
    nombreGrupo: string,
    limiteDiario: number,
    activo: boolean,
    creadoEn?: string | null,
    actualizadoEn?: string | null,
    usosDiarios?:  {
      __typename: "ModelAnalisisCuotasUsoDiarioConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteAnalisisCuotaMutationVariables = {
  input: DeleteAnalisisCuotaInput,
  condition?: ModelAnalisisCuotaConditionInput | null,
};

export type DeleteAnalisisCuotaMutation = {
  deleteAnalisisCuota?:  {
    __typename: "AnalisisCuota",
    id: string,
    nombreGrupo: string,
    limiteDiario: number,
    activo: boolean,
    creadoEn?: string | null,
    actualizadoEn?: string | null,
    usosDiarios?:  {
      __typename: "ModelAnalisisCuotasUsoDiarioConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateAnalisisCuotasUsoDiarioMutationVariables = {
  input: CreateAnalisisCuotasUsoDiarioInput,
  condition?: ModelAnalisisCuotasUsoDiarioConditionInput | null,
};

export type CreateAnalisisCuotasUsoDiarioMutation = {
  createAnalisisCuotasUsoDiario?:  {
    __typename: "AnalisisCuotasUsoDiario",
    id: string,
    usuarioNombre: string,
    grupoId: string,
    fechaUso: string,
    consultaId: string,
    creadoEn?: string | null,
    consulta?:  {
      __typename: "ConsultaAnalisis",
      id: string,
      proyectoId?: string | null,
      consultaNombre: string,
      consultaUbicacion: string,
      consultaParametros?: string | null,
      consultaExternaPoligonos?: string | null,
      consultaIdExterna?: string | null,
      respuestaResultado?: string | null,
      respuestaIdentificadorExterno?: string | null,
      modeloId?: string | null,
      modeloName?: string | null,
      modeloDescription?: string | null,
      modeloVersion?: string | null,
      modeloDocumentLink?: string | null,
      modeloApiLink?: string | null,
      blockchainHashTransaccion?: string | null,
      fechaCreacion?: string | null,
      source: SourceType,
      createdAt: string,
      updatedAt: string,
    } | null,
    grupo?:  {
      __typename: "AnalisisCuota",
      id: string,
      nombreGrupo: string,
      limiteDiario: number,
      activo: boolean,
      creadoEn?: string | null,
      actualizadoEn?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateAnalisisCuotasUsoDiarioMutationVariables = {
  input: UpdateAnalisisCuotasUsoDiarioInput,
  condition?: ModelAnalisisCuotasUsoDiarioConditionInput | null,
};

export type UpdateAnalisisCuotasUsoDiarioMutation = {
  updateAnalisisCuotasUsoDiario?:  {
    __typename: "AnalisisCuotasUsoDiario",
    id: string,
    usuarioNombre: string,
    grupoId: string,
    fechaUso: string,
    consultaId: string,
    creadoEn?: string | null,
    consulta?:  {
      __typename: "ConsultaAnalisis",
      id: string,
      proyectoId?: string | null,
      consultaNombre: string,
      consultaUbicacion: string,
      consultaParametros?: string | null,
      consultaExternaPoligonos?: string | null,
      consultaIdExterna?: string | null,
      respuestaResultado?: string | null,
      respuestaIdentificadorExterno?: string | null,
      modeloId?: string | null,
      modeloName?: string | null,
      modeloDescription?: string | null,
      modeloVersion?: string | null,
      modeloDocumentLink?: string | null,
      modeloApiLink?: string | null,
      blockchainHashTransaccion?: string | null,
      fechaCreacion?: string | null,
      source: SourceType,
      createdAt: string,
      updatedAt: string,
    } | null,
    grupo?:  {
      __typename: "AnalisisCuota",
      id: string,
      nombreGrupo: string,
      limiteDiario: number,
      activo: boolean,
      creadoEn?: string | null,
      actualizadoEn?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteAnalisisCuotasUsoDiarioMutationVariables = {
  input: DeleteAnalisisCuotasUsoDiarioInput,
  condition?: ModelAnalisisCuotasUsoDiarioConditionInput | null,
};

export type DeleteAnalisisCuotasUsoDiarioMutation = {
  deleteAnalisisCuotasUsoDiario?:  {
    __typename: "AnalisisCuotasUsoDiario",
    id: string,
    usuarioNombre: string,
    grupoId: string,
    fechaUso: string,
    consultaId: string,
    creadoEn?: string | null,
    consulta?:  {
      __typename: "ConsultaAnalisis",
      id: string,
      proyectoId?: string | null,
      consultaNombre: string,
      consultaUbicacion: string,
      consultaParametros?: string | null,
      consultaExternaPoligonos?: string | null,
      consultaIdExterna?: string | null,
      respuestaResultado?: string | null,
      respuestaIdentificadorExterno?: string | null,
      modeloId?: string | null,
      modeloName?: string | null,
      modeloDescription?: string | null,
      modeloVersion?: string | null,
      modeloDocumentLink?: string | null,
      modeloApiLink?: string | null,
      blockchainHashTransaccion?: string | null,
      fechaCreacion?: string | null,
      source: SourceType,
      createdAt: string,
      updatedAt: string,
    } | null,
    grupo?:  {
      __typename: "AnalisisCuota",
      id: string,
      nombreGrupo: string,
      limiteDiario: number,
      activo: boolean,
      creadoEn?: string | null,
      actualizadoEn?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateDispositivoIotMutationVariables = {
  input: CreateDispositivoIotInput,
  condition?: ModelDispositivoIotConditionInput | null,
};

export type CreateDispositivoIotMutation = {
  createDispositivoIot?:  {
    __typename: "DispositivoIot",
    id: string,
    deviceId: string,
    nombre: string,
    departamento: string,
    zona: string,
    tipoDispositivo: TipoDispositivo,
    variablesPublicadas: string,
    localizacion?: string | null,
    estado: EstadoDispositivo,
    observaciones?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    grupos?:  {
      __typename: "ModelRelDispositivoGrupoIotConnection",
      nextToken?: string | null,
    } | null,
    mediciones?:  {
      __typename: "ModelMedicionIotConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type UpdateDispositivoIotMutationVariables = {
  input: UpdateDispositivoIotInput,
  condition?: ModelDispositivoIotConditionInput | null,
};

export type UpdateDispositivoIotMutation = {
  updateDispositivoIot?:  {
    __typename: "DispositivoIot",
    id: string,
    deviceId: string,
    nombre: string,
    departamento: string,
    zona: string,
    tipoDispositivo: TipoDispositivo,
    variablesPublicadas: string,
    localizacion?: string | null,
    estado: EstadoDispositivo,
    observaciones?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    grupos?:  {
      __typename: "ModelRelDispositivoGrupoIotConnection",
      nextToken?: string | null,
    } | null,
    mediciones?:  {
      __typename: "ModelMedicionIotConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type DeleteDispositivoIotMutationVariables = {
  input: DeleteDispositivoIotInput,
  condition?: ModelDispositivoIotConditionInput | null,
};

export type DeleteDispositivoIotMutation = {
  deleteDispositivoIot?:  {
    __typename: "DispositivoIot",
    id: string,
    deviceId: string,
    nombre: string,
    departamento: string,
    zona: string,
    tipoDispositivo: TipoDispositivo,
    variablesPublicadas: string,
    localizacion?: string | null,
    estado: EstadoDispositivo,
    observaciones?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    grupos?:  {
      __typename: "ModelRelDispositivoGrupoIotConnection",
      nextToken?: string | null,
    } | null,
    mediciones?:  {
      __typename: "ModelMedicionIotConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type CreateGrupoIotMutationVariables = {
  input: CreateGrupoIotInput,
  condition?: ModelGrupoIotConditionInput | null,
};

export type CreateGrupoIotMutation = {
  createGrupoIot?:  {
    __typename: "GrupoIot",
    id: string,
    nombre: string,
    descripcion?: string | null,
    estado: EstadoDispositivo,
    usuarioCreador?: string | null,
    observaciones?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    dispositivos?:  {
      __typename: "ModelRelDispositivoGrupoIotConnection",
      nextToken?: string | null,
    } | null,
    proyectos?:  {
      __typename: "ModelRelGrupoIotProyectoConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type UpdateGrupoIotMutationVariables = {
  input: UpdateGrupoIotInput,
  condition?: ModelGrupoIotConditionInput | null,
};

export type UpdateGrupoIotMutation = {
  updateGrupoIot?:  {
    __typename: "GrupoIot",
    id: string,
    nombre: string,
    descripcion?: string | null,
    estado: EstadoDispositivo,
    usuarioCreador?: string | null,
    observaciones?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    dispositivos?:  {
      __typename: "ModelRelDispositivoGrupoIotConnection",
      nextToken?: string | null,
    } | null,
    proyectos?:  {
      __typename: "ModelRelGrupoIotProyectoConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type DeleteGrupoIotMutationVariables = {
  input: DeleteGrupoIotInput,
  condition?: ModelGrupoIotConditionInput | null,
};

export type DeleteGrupoIotMutation = {
  deleteGrupoIot?:  {
    __typename: "GrupoIot",
    id: string,
    nombre: string,
    descripcion?: string | null,
    estado: EstadoDispositivo,
    usuarioCreador?: string | null,
    observaciones?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    dispositivos?:  {
      __typename: "ModelRelDispositivoGrupoIotConnection",
      nextToken?: string | null,
    } | null,
    proyectos?:  {
      __typename: "ModelRelGrupoIotProyectoConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type CreateRelDispositivoGrupoIotMutationVariables = {
  input: CreateRelDispositivoGrupoIotInput,
  condition?: ModelRelDispositivoGrupoIotConditionInput | null,
};

export type CreateRelDispositivoGrupoIotMutation = {
  createRelDispositivoGrupoIot?:  {
    __typename: "RelDispositivoGrupoIot",
    id: string,
    dispositivoId: string,
    grupoId: string,
    fechaAsignacion?: string | null,
    usuarioId?: string | null,
    notas?: string | null,
    dispositivo?:  {
      __typename: "DispositivoIot",
      id: string,
      deviceId: string,
      nombre: string,
      departamento: string,
      zona: string,
      tipoDispositivo: TipoDispositivo,
      variablesPublicadas: string,
      localizacion?: string | null,
      estado: EstadoDispositivo,
      observaciones?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    grupo?:  {
      __typename: "GrupoIot",
      id: string,
      nombre: string,
      descripcion?: string | null,
      estado: EstadoDispositivo,
      usuarioCreador?: string | null,
      observaciones?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateRelDispositivoGrupoIotMutationVariables = {
  input: UpdateRelDispositivoGrupoIotInput,
  condition?: ModelRelDispositivoGrupoIotConditionInput | null,
};

export type UpdateRelDispositivoGrupoIotMutation = {
  updateRelDispositivoGrupoIot?:  {
    __typename: "RelDispositivoGrupoIot",
    id: string,
    dispositivoId: string,
    grupoId: string,
    fechaAsignacion?: string | null,
    usuarioId?: string | null,
    notas?: string | null,
    dispositivo?:  {
      __typename: "DispositivoIot",
      id: string,
      deviceId: string,
      nombre: string,
      departamento: string,
      zona: string,
      tipoDispositivo: TipoDispositivo,
      variablesPublicadas: string,
      localizacion?: string | null,
      estado: EstadoDispositivo,
      observaciones?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    grupo?:  {
      __typename: "GrupoIot",
      id: string,
      nombre: string,
      descripcion?: string | null,
      estado: EstadoDispositivo,
      usuarioCreador?: string | null,
      observaciones?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteRelDispositivoGrupoIotMutationVariables = {
  input: DeleteRelDispositivoGrupoIotInput,
  condition?: ModelRelDispositivoGrupoIotConditionInput | null,
};

export type DeleteRelDispositivoGrupoIotMutation = {
  deleteRelDispositivoGrupoIot?:  {
    __typename: "RelDispositivoGrupoIot",
    id: string,
    dispositivoId: string,
    grupoId: string,
    fechaAsignacion?: string | null,
    usuarioId?: string | null,
    notas?: string | null,
    dispositivo?:  {
      __typename: "DispositivoIot",
      id: string,
      deviceId: string,
      nombre: string,
      departamento: string,
      zona: string,
      tipoDispositivo: TipoDispositivo,
      variablesPublicadas: string,
      localizacion?: string | null,
      estado: EstadoDispositivo,
      observaciones?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    grupo?:  {
      __typename: "GrupoIot",
      id: string,
      nombre: string,
      descripcion?: string | null,
      estado: EstadoDispositivo,
      usuarioCreador?: string | null,
      observaciones?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateRelGrupoIotProyectoMutationVariables = {
  input: CreateRelGrupoIotProyectoInput,
  condition?: ModelRelGrupoIotProyectoConditionInput | null,
};

export type CreateRelGrupoIotProyectoMutation = {
  createRelGrupoIotProyecto?:  {
    __typename: "RelGrupoIotProyecto",
    id: string,
    grupoId: string,
    proyectoId: string,
    fechaAsignacion?: string | null,
    usuarioId?: string | null,
    notas?: string | null,
    grupo?:  {
      __typename: "GrupoIot",
      id: string,
      nombre: string,
      descripcion?: string | null,
      estado: EstadoDispositivo,
      usuarioCreador?: string | null,
      observaciones?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    proyecto?:  {
      __typename: "Proyecto",
      id: string,
      proyectoNombre: string,
      proyectoDescripcion?: string | null,
      proyectoIdExterno?: string | null,
      proyectoActivo: boolean,
      proyectoFechaCreacion?: string | null,
      proyectoFechaActualizacion?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateRelGrupoIotProyectoMutationVariables = {
  input: UpdateRelGrupoIotProyectoInput,
  condition?: ModelRelGrupoIotProyectoConditionInput | null,
};

export type UpdateRelGrupoIotProyectoMutation = {
  updateRelGrupoIotProyecto?:  {
    __typename: "RelGrupoIotProyecto",
    id: string,
    grupoId: string,
    proyectoId: string,
    fechaAsignacion?: string | null,
    usuarioId?: string | null,
    notas?: string | null,
    grupo?:  {
      __typename: "GrupoIot",
      id: string,
      nombre: string,
      descripcion?: string | null,
      estado: EstadoDispositivo,
      usuarioCreador?: string | null,
      observaciones?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    proyecto?:  {
      __typename: "Proyecto",
      id: string,
      proyectoNombre: string,
      proyectoDescripcion?: string | null,
      proyectoIdExterno?: string | null,
      proyectoActivo: boolean,
      proyectoFechaCreacion?: string | null,
      proyectoFechaActualizacion?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteRelGrupoIotProyectoMutationVariables = {
  input: DeleteRelGrupoIotProyectoInput,
  condition?: ModelRelGrupoIotProyectoConditionInput | null,
};

export type DeleteRelGrupoIotProyectoMutation = {
  deleteRelGrupoIotProyecto?:  {
    __typename: "RelGrupoIotProyecto",
    id: string,
    grupoId: string,
    proyectoId: string,
    fechaAsignacion?: string | null,
    usuarioId?: string | null,
    notas?: string | null,
    grupo?:  {
      __typename: "GrupoIot",
      id: string,
      nombre: string,
      descripcion?: string | null,
      estado: EstadoDispositivo,
      usuarioCreador?: string | null,
      observaciones?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    proyecto?:  {
      __typename: "Proyecto",
      id: string,
      proyectoNombre: string,
      proyectoDescripcion?: string | null,
      proyectoIdExterno?: string | null,
      proyectoActivo: boolean,
      proyectoFechaCreacion?: string | null,
      proyectoFechaActualizacion?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateMedicionIotMutationVariables = {
  input: CreateMedicionIotInput,
  condition?: ModelMedicionIotConditionInput | null,
};

export type CreateMedicionIotMutation = {
  createMedicionIot?:  {
    __typename: "MedicionIot",
    id: string,
    dispositivoId: string,
    deviceId: string,
    departamento: string,
    zona: string,
    variable: string,
    valor: number,
    timestamp: string,
    dispositivo?:  {
      __typename: "DispositivoIot",
      id: string,
      deviceId: string,
      nombre: string,
      departamento: string,
      zona: string,
      tipoDispositivo: TipoDispositivo,
      variablesPublicadas: string,
      localizacion?: string | null,
      estado: EstadoDispositivo,
      observaciones?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateMedicionIotMutationVariables = {
  input: UpdateMedicionIotInput,
  condition?: ModelMedicionIotConditionInput | null,
};

export type UpdateMedicionIotMutation = {
  updateMedicionIot?:  {
    __typename: "MedicionIot",
    id: string,
    dispositivoId: string,
    deviceId: string,
    departamento: string,
    zona: string,
    variable: string,
    valor: number,
    timestamp: string,
    dispositivo?:  {
      __typename: "DispositivoIot",
      id: string,
      deviceId: string,
      nombre: string,
      departamento: string,
      zona: string,
      tipoDispositivo: TipoDispositivo,
      variablesPublicadas: string,
      localizacion?: string | null,
      estado: EstadoDispositivo,
      observaciones?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteMedicionIotMutationVariables = {
  input: DeleteMedicionIotInput,
  condition?: ModelMedicionIotConditionInput | null,
};

export type DeleteMedicionIotMutation = {
  deleteMedicionIot?:  {
    __typename: "MedicionIot",
    id: string,
    dispositivoId: string,
    deviceId: string,
    departamento: string,
    zona: string,
    variable: string,
    valor: number,
    timestamp: string,
    dispositivo?:  {
      __typename: "DispositivoIot",
      id: string,
      deviceId: string,
      nombre: string,
      departamento: string,
      zona: string,
      tipoDispositivo: TipoDispositivo,
      variablesPublicadas: string,
      localizacion?: string | null,
      estado: EstadoDispositivo,
      observaciones?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateProyectoLegacyMutationVariables = {
  input: CreateProyectoLegacyInput,
  condition?: ModelProyectoLegacyConditionInput | null,
};

export type CreateProyectoLegacyMutation = {
  createProyectoLegacy?:  {
    __typename: "ProyectoLegacy",
    id: string,
    projectId: string,
    descripcion?: string | null,
    consultasWeb?:  {
      __typename: "ModelConsultaWebConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateProyectoLegacyMutationVariables = {
  input: UpdateProyectoLegacyInput,
  condition?: ModelProyectoLegacyConditionInput | null,
};

export type UpdateProyectoLegacyMutation = {
  updateProyectoLegacy?:  {
    __typename: "ProyectoLegacy",
    id: string,
    projectId: string,
    descripcion?: string | null,
    consultasWeb?:  {
      __typename: "ModelConsultaWebConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteProyectoLegacyMutationVariables = {
  input: DeleteProyectoLegacyInput,
  condition?: ModelProyectoLegacyConditionInput | null,
};

export type DeleteProyectoLegacyMutation = {
  deleteProyectoLegacy?:  {
    __typename: "ProyectoLegacy",
    id: string,
    projectId: string,
    descripcion?: string | null,
    consultasWeb?:  {
      __typename: "ModelConsultaWebConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateConsultaWebMutationVariables = {
  input: CreateConsultaWebInput,
  condition?: ModelConsultaWebConditionInput | null,
};

export type CreateConsultaWebMutation = {
  createConsultaWeb?:  {
    __typename: "ConsultaWeb",
    id: string,
    projectID?: string | null,
    imgAnteriorNombreImg?: string | null,
    imgAnteriorSatellite?: string | null,
    imgAnteriorYear?: number | null,
    imgAnteriorMesInicial?: number | null,
    imgAnteriorMesFinal?: number | null,
    imgAnteriorNubosidadMaxima?: number | null,
    imgAnteriorBandas?: string | null,
    imgPosteriorNombreImg?: string | null,
    imgPosteriorSatellite?: string | null,
    imgPosteriorYear?: number | null,
    imgPosteriorMesInicial?: number | null,
    imgPosteriorMesFinal?: number | null,
    imgPosteriorNubosidadMaxima?: number | null,
    imgPosteriorBandas?: string | null,
    fechaHoraConsulta?: string | null,
    usuarioEmailUpdate?: string | null,
    rawConsulta?: string | null,
    resultadoConsulta?: string | null,
    proyecto?:  {
      __typename: "ProyectoLegacy",
      id: string,
      projectId: string,
      descripcion?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateConsultaWebMutationVariables = {
  input: UpdateConsultaWebInput,
  condition?: ModelConsultaWebConditionInput | null,
};

export type UpdateConsultaWebMutation = {
  updateConsultaWeb?:  {
    __typename: "ConsultaWeb",
    id: string,
    projectID?: string | null,
    imgAnteriorNombreImg?: string | null,
    imgAnteriorSatellite?: string | null,
    imgAnteriorYear?: number | null,
    imgAnteriorMesInicial?: number | null,
    imgAnteriorMesFinal?: number | null,
    imgAnteriorNubosidadMaxima?: number | null,
    imgAnteriorBandas?: string | null,
    imgPosteriorNombreImg?: string | null,
    imgPosteriorSatellite?: string | null,
    imgPosteriorYear?: number | null,
    imgPosteriorMesInicial?: number | null,
    imgPosteriorMesFinal?: number | null,
    imgPosteriorNubosidadMaxima?: number | null,
    imgPosteriorBandas?: string | null,
    fechaHoraConsulta?: string | null,
    usuarioEmailUpdate?: string | null,
    rawConsulta?: string | null,
    resultadoConsulta?: string | null,
    proyecto?:  {
      __typename: "ProyectoLegacy",
      id: string,
      projectId: string,
      descripcion?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteConsultaWebMutationVariables = {
  input: DeleteConsultaWebInput,
  condition?: ModelConsultaWebConditionInput | null,
};

export type DeleteConsultaWebMutation = {
  deleteConsultaWeb?:  {
    __typename: "ConsultaWeb",
    id: string,
    projectID?: string | null,
    imgAnteriorNombreImg?: string | null,
    imgAnteriorSatellite?: string | null,
    imgAnteriorYear?: number | null,
    imgAnteriorMesInicial?: number | null,
    imgAnteriorMesFinal?: number | null,
    imgAnteriorNubosidadMaxima?: number | null,
    imgAnteriorBandas?: string | null,
    imgPosteriorNombreImg?: string | null,
    imgPosteriorSatellite?: string | null,
    imgPosteriorYear?: number | null,
    imgPosteriorMesInicial?: number | null,
    imgPosteriorMesFinal?: number | null,
    imgPosteriorNubosidadMaxima?: number | null,
    imgPosteriorBandas?: string | null,
    fechaHoraConsulta?: string | null,
    usuarioEmailUpdate?: string | null,
    rawConsulta?: string | null,
    resultadoConsulta?: string | null,
    proyecto?:  {
      __typename: "ProyectoLegacy",
      id: string,
      projectId: string,
      descripcion?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateConsultaApiMutationVariables = {
  input: CreateConsultaApiInput,
  condition?: ModelConsultaApiConditionInput | null,
};

export type CreateConsultaApiMutation = {
  createConsultaApi?:  {
    __typename: "ConsultaApi",
    id: string,
    projectID?: string | null,
    cedulaCatastral?: string | null,
    imgAnteriorNombreImg?: string | null,
    imgAnteriorSatellite?: string | null,
    imgAnteriorYear?: number | null,
    imgAnteriorMesInicial?: number | null,
    imgAnteriorMesFinal?: number | null,
    imgAnteriorNubosidadMaxima?: number | null,
    imgAnteriorBandas?: string | null,
    imgPosteriorNombreImg?: string | null,
    imgPosteriorSatellite?: string | null,
    imgPosteriorYear?: number | null,
    imgPosteriorMesInicial?: number | null,
    imgPosteriorMesFinal?: number | null,
    imgPosteriorNubosidadMaxima?: number | null,
    imgPosteriorBandas?: string | null,
    fechaHoraConsulta?: string | null,
    fechaHoraActualizacion?: string | null,
    usuarioEmailUpdate?: string | null,
    verificado: boolean,
    rawConsulta?: string | null,
    resultadoConsulta?: string | null,
    hashBlockchain?: string | null,
    indexNumberBlockchain?: number | null,
    timestampBlockchain?: string | null,
    onchainBlockchain: boolean,
    txIdBlockchain?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateConsultaApiMutationVariables = {
  input: UpdateConsultaApiInput,
  condition?: ModelConsultaApiConditionInput | null,
};

export type UpdateConsultaApiMutation = {
  updateConsultaApi?:  {
    __typename: "ConsultaApi",
    id: string,
    projectID?: string | null,
    cedulaCatastral?: string | null,
    imgAnteriorNombreImg?: string | null,
    imgAnteriorSatellite?: string | null,
    imgAnteriorYear?: number | null,
    imgAnteriorMesInicial?: number | null,
    imgAnteriorMesFinal?: number | null,
    imgAnteriorNubosidadMaxima?: number | null,
    imgAnteriorBandas?: string | null,
    imgPosteriorNombreImg?: string | null,
    imgPosteriorSatellite?: string | null,
    imgPosteriorYear?: number | null,
    imgPosteriorMesInicial?: number | null,
    imgPosteriorMesFinal?: number | null,
    imgPosteriorNubosidadMaxima?: number | null,
    imgPosteriorBandas?: string | null,
    fechaHoraConsulta?: string | null,
    fechaHoraActualizacion?: string | null,
    usuarioEmailUpdate?: string | null,
    verificado: boolean,
    rawConsulta?: string | null,
    resultadoConsulta?: string | null,
    hashBlockchain?: string | null,
    indexNumberBlockchain?: number | null,
    timestampBlockchain?: string | null,
    onchainBlockchain: boolean,
    txIdBlockchain?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteConsultaApiMutationVariables = {
  input: DeleteConsultaApiInput,
  condition?: ModelConsultaApiConditionInput | null,
};

export type DeleteConsultaApiMutation = {
  deleteConsultaApi?:  {
    __typename: "ConsultaApi",
    id: string,
    projectID?: string | null,
    cedulaCatastral?: string | null,
    imgAnteriorNombreImg?: string | null,
    imgAnteriorSatellite?: string | null,
    imgAnteriorYear?: number | null,
    imgAnteriorMesInicial?: number | null,
    imgAnteriorMesFinal?: number | null,
    imgAnteriorNubosidadMaxima?: number | null,
    imgAnteriorBandas?: string | null,
    imgPosteriorNombreImg?: string | null,
    imgPosteriorSatellite?: string | null,
    imgPosteriorYear?: number | null,
    imgPosteriorMesInicial?: number | null,
    imgPosteriorMesFinal?: number | null,
    imgPosteriorNubosidadMaxima?: number | null,
    imgPosteriorBandas?: string | null,
    fechaHoraConsulta?: string | null,
    fechaHoraActualizacion?: string | null,
    usuarioEmailUpdate?: string | null,
    verificado: boolean,
    rawConsulta?: string | null,
    resultadoConsulta?: string | null,
    hashBlockchain?: string | null,
    indexNumberBlockchain?: number | null,
    timestampBlockchain?: string | null,
    onchainBlockchain: boolean,
    txIdBlockchain?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateIotSessionMutationVariables = {
  input: CreateIotSessionInput,
  condition?: ModelIotSessionConditionInput | null,
};

export type CreateIotSessionMutation = {
  createIotSession?:  {
    __typename: "IotSession",
    id: string,
    sessionId: string,
    iotData: string,
    createdAt?: string | null,
    expiresAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateIotSessionMutationVariables = {
  input: UpdateIotSessionInput,
  condition?: ModelIotSessionConditionInput | null,
};

export type UpdateIotSessionMutation = {
  updateIotSession?:  {
    __typename: "IotSession",
    id: string,
    sessionId: string,
    iotData: string,
    createdAt?: string | null,
    expiresAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteIotSessionMutationVariables = {
  input: DeleteIotSessionInput,
  condition?: ModelIotSessionConditionInput | null,
};

export type DeleteIotSessionMutation = {
  deleteIotSession?:  {
    __typename: "IotSession",
    id: string,
    sessionId: string,
    iotData: string,
    createdAt?: string | null,
    expiresAt: string,
    updatedAt: string,
  } | null,
};

export type CreateConstructorFormulaCategoriaMutationVariables = {
  input: CreateConstructorFormulaCategoriaInput,
  condition?: ModelConstructorFormulaCategoriaConditionInput | null,
};

export type CreateConstructorFormulaCategoriaMutation = {
  createConstructorFormulaCategoria?:  {
    __typename: "ConstructorFormulaCategoria",
    id: string,
    nombre: string,
    estado: boolean,
    variables?:  {
      __typename: "ModelConstructorFormulaVariableConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateConstructorFormulaCategoriaMutationVariables = {
  input: UpdateConstructorFormulaCategoriaInput,
  condition?: ModelConstructorFormulaCategoriaConditionInput | null,
};

export type UpdateConstructorFormulaCategoriaMutation = {
  updateConstructorFormulaCategoria?:  {
    __typename: "ConstructorFormulaCategoria",
    id: string,
    nombre: string,
    estado: boolean,
    variables?:  {
      __typename: "ModelConstructorFormulaVariableConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteConstructorFormulaCategoriaMutationVariables = {
  input: DeleteConstructorFormulaCategoriaInput,
  condition?: ModelConstructorFormulaCategoriaConditionInput | null,
};

export type DeleteConstructorFormulaCategoriaMutation = {
  deleteConstructorFormulaCategoria?:  {
    __typename: "ConstructorFormulaCategoria",
    id: string,
    nombre: string,
    estado: boolean,
    variables?:  {
      __typename: "ModelConstructorFormulaVariableConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateConstructorFormulaVariableMutationVariables = {
  input: CreateConstructorFormulaVariableInput,
  condition?: ModelConstructorFormulaVariableConditionInput | null,
};

export type CreateConstructorFormulaVariableMutation = {
  createConstructorFormulaVariable?:  {
    __typename: "ConstructorFormulaVariable",
    id: string,
    nombre: string,
    simbolo: string,
    unidades: string,
    descripcion: string,
    categoriaId?: string | null,
    estado: boolean,
    categoria?:  {
      __typename: "ConstructorFormulaCategoria",
      id: string,
      nombre: string,
      estado: boolean,
      createdAt: string,
      updatedAt: string,
    } | null,
    formulas?:  {
      __typename: "ModelConstructorFormulaVariableRelConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateConstructorFormulaVariableMutationVariables = {
  input: UpdateConstructorFormulaVariableInput,
  condition?: ModelConstructorFormulaVariableConditionInput | null,
};

export type UpdateConstructorFormulaVariableMutation = {
  updateConstructorFormulaVariable?:  {
    __typename: "ConstructorFormulaVariable",
    id: string,
    nombre: string,
    simbolo: string,
    unidades: string,
    descripcion: string,
    categoriaId?: string | null,
    estado: boolean,
    categoria?:  {
      __typename: "ConstructorFormulaCategoria",
      id: string,
      nombre: string,
      estado: boolean,
      createdAt: string,
      updatedAt: string,
    } | null,
    formulas?:  {
      __typename: "ModelConstructorFormulaVariableRelConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteConstructorFormulaVariableMutationVariables = {
  input: DeleteConstructorFormulaVariableInput,
  condition?: ModelConstructorFormulaVariableConditionInput | null,
};

export type DeleteConstructorFormulaVariableMutation = {
  deleteConstructorFormulaVariable?:  {
    __typename: "ConstructorFormulaVariable",
    id: string,
    nombre: string,
    simbolo: string,
    unidades: string,
    descripcion: string,
    categoriaId?: string | null,
    estado: boolean,
    categoria?:  {
      __typename: "ConstructorFormulaCategoria",
      id: string,
      nombre: string,
      estado: boolean,
      createdAt: string,
      updatedAt: string,
    } | null,
    formulas?:  {
      __typename: "ModelConstructorFormulaVariableRelConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateConstructorFormulaMutationVariables = {
  input: CreateConstructorFormulaInput,
  condition?: ModelConstructorFormulaConditionInput | null,
};

export type CreateConstructorFormulaMutation = {
  createConstructorFormula?:  {
    __typename: "ConstructorFormula",
    id: string,
    nombre: string,
    descripcion: string,
    fuente?: string | null,
    usuarioId?: string | null,
    tipoFormula: TipoFormula,
    estado: boolean,
    expresionJson?: string | null,
    fechaCreacion?: string | null,
    version: number,
    versionActiva: boolean,
    variables?:  {
      __typename: "ModelConstructorFormulaVariableRelConnection",
      nextToken?: string | null,
    } | null,
    teledeteccion?:  {
      __typename: "ModelFormulaTeledeteccionConnection",
      nextToken?: string | null,
    } | null,
    deepLearning?:  {
      __typename: "ModelFormulaDeepLearningConnection",
      nextToken?: string | null,
    } | null,
    historial?:  {
      __typename: "ModelFormulaHistorialConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateConstructorFormulaMutationVariables = {
  input: UpdateConstructorFormulaInput,
  condition?: ModelConstructorFormulaConditionInput | null,
};

export type UpdateConstructorFormulaMutation = {
  updateConstructorFormula?:  {
    __typename: "ConstructorFormula",
    id: string,
    nombre: string,
    descripcion: string,
    fuente?: string | null,
    usuarioId?: string | null,
    tipoFormula: TipoFormula,
    estado: boolean,
    expresionJson?: string | null,
    fechaCreacion?: string | null,
    version: number,
    versionActiva: boolean,
    variables?:  {
      __typename: "ModelConstructorFormulaVariableRelConnection",
      nextToken?: string | null,
    } | null,
    teledeteccion?:  {
      __typename: "ModelFormulaTeledeteccionConnection",
      nextToken?: string | null,
    } | null,
    deepLearning?:  {
      __typename: "ModelFormulaDeepLearningConnection",
      nextToken?: string | null,
    } | null,
    historial?:  {
      __typename: "ModelFormulaHistorialConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteConstructorFormulaMutationVariables = {
  input: DeleteConstructorFormulaInput,
  condition?: ModelConstructorFormulaConditionInput | null,
};

export type DeleteConstructorFormulaMutation = {
  deleteConstructorFormula?:  {
    __typename: "ConstructorFormula",
    id: string,
    nombre: string,
    descripcion: string,
    fuente?: string | null,
    usuarioId?: string | null,
    tipoFormula: TipoFormula,
    estado: boolean,
    expresionJson?: string | null,
    fechaCreacion?: string | null,
    version: number,
    versionActiva: boolean,
    variables?:  {
      __typename: "ModelConstructorFormulaVariableRelConnection",
      nextToken?: string | null,
    } | null,
    teledeteccion?:  {
      __typename: "ModelFormulaTeledeteccionConnection",
      nextToken?: string | null,
    } | null,
    deepLearning?:  {
      __typename: "ModelFormulaDeepLearningConnection",
      nextToken?: string | null,
    } | null,
    historial?:  {
      __typename: "ModelFormulaHistorialConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateConstructorFormulaVariableRelMutationVariables = {
  input: CreateConstructorFormulaVariableRelInput,
  condition?: ModelConstructorFormulaVariableRelConditionInput | null,
};

export type CreateConstructorFormulaVariableRelMutation = {
  createConstructorFormulaVariableRel?:  {
    __typename: "ConstructorFormulaVariableRel",
    id: string,
    formulaId: string,
    variableId: string,
    formula?:  {
      __typename: "ConstructorFormula",
      id: string,
      nombre: string,
      descripcion: string,
      fuente?: string | null,
      usuarioId?: string | null,
      tipoFormula: TipoFormula,
      estado: boolean,
      expresionJson?: string | null,
      fechaCreacion?: string | null,
      version: number,
      versionActiva: boolean,
      createdAt: string,
      updatedAt: string,
    } | null,
    variable?:  {
      __typename: "ConstructorFormulaVariable",
      id: string,
      nombre: string,
      simbolo: string,
      unidades: string,
      descripcion: string,
      categoriaId?: string | null,
      estado: boolean,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateConstructorFormulaVariableRelMutationVariables = {
  input: UpdateConstructorFormulaVariableRelInput,
  condition?: ModelConstructorFormulaVariableRelConditionInput | null,
};

export type UpdateConstructorFormulaVariableRelMutation = {
  updateConstructorFormulaVariableRel?:  {
    __typename: "ConstructorFormulaVariableRel",
    id: string,
    formulaId: string,
    variableId: string,
    formula?:  {
      __typename: "ConstructorFormula",
      id: string,
      nombre: string,
      descripcion: string,
      fuente?: string | null,
      usuarioId?: string | null,
      tipoFormula: TipoFormula,
      estado: boolean,
      expresionJson?: string | null,
      fechaCreacion?: string | null,
      version: number,
      versionActiva: boolean,
      createdAt: string,
      updatedAt: string,
    } | null,
    variable?:  {
      __typename: "ConstructorFormulaVariable",
      id: string,
      nombre: string,
      simbolo: string,
      unidades: string,
      descripcion: string,
      categoriaId?: string | null,
      estado: boolean,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteConstructorFormulaVariableRelMutationVariables = {
  input: DeleteConstructorFormulaVariableRelInput,
  condition?: ModelConstructorFormulaVariableRelConditionInput | null,
};

export type DeleteConstructorFormulaVariableRelMutation = {
  deleteConstructorFormulaVariableRel?:  {
    __typename: "ConstructorFormulaVariableRel",
    id: string,
    formulaId: string,
    variableId: string,
    formula?:  {
      __typename: "ConstructorFormula",
      id: string,
      nombre: string,
      descripcion: string,
      fuente?: string | null,
      usuarioId?: string | null,
      tipoFormula: TipoFormula,
      estado: boolean,
      expresionJson?: string | null,
      fechaCreacion?: string | null,
      version: number,
      versionActiva: boolean,
      createdAt: string,
      updatedAt: string,
    } | null,
    variable?:  {
      __typename: "ConstructorFormulaVariable",
      id: string,
      nombre: string,
      simbolo: string,
      unidades: string,
      descripcion: string,
      categoriaId?: string | null,
      estado: boolean,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateFormulaTeledeteccionMutationVariables = {
  input: CreateFormulaTeledeteccionInput,
  condition?: ModelFormulaTeledeteccionConditionInput | null,
};

export type CreateFormulaTeledeteccionMutation = {
  createFormulaTeledeteccion?:  {
    __typename: "FormulaTeledeteccion",
    id: string,
    formulaId: string,
    codigoScript: string,
    tipoEntrada: string,
    parametrosJson?: string | null,
    formula?:  {
      __typename: "ConstructorFormula",
      id: string,
      nombre: string,
      descripcion: string,
      fuente?: string | null,
      usuarioId?: string | null,
      tipoFormula: TipoFormula,
      estado: boolean,
      expresionJson?: string | null,
      fechaCreacion?: string | null,
      version: number,
      versionActiva: boolean,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateFormulaTeledeteccionMutationVariables = {
  input: UpdateFormulaTeledeteccionInput,
  condition?: ModelFormulaTeledeteccionConditionInput | null,
};

export type UpdateFormulaTeledeteccionMutation = {
  updateFormulaTeledeteccion?:  {
    __typename: "FormulaTeledeteccion",
    id: string,
    formulaId: string,
    codigoScript: string,
    tipoEntrada: string,
    parametrosJson?: string | null,
    formula?:  {
      __typename: "ConstructorFormula",
      id: string,
      nombre: string,
      descripcion: string,
      fuente?: string | null,
      usuarioId?: string | null,
      tipoFormula: TipoFormula,
      estado: boolean,
      expresionJson?: string | null,
      fechaCreacion?: string | null,
      version: number,
      versionActiva: boolean,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteFormulaTeledeteccionMutationVariables = {
  input: DeleteFormulaTeledeteccionInput,
  condition?: ModelFormulaTeledeteccionConditionInput | null,
};

export type DeleteFormulaTeledeteccionMutation = {
  deleteFormulaTeledeteccion?:  {
    __typename: "FormulaTeledeteccion",
    id: string,
    formulaId: string,
    codigoScript: string,
    tipoEntrada: string,
    parametrosJson?: string | null,
    formula?:  {
      __typename: "ConstructorFormula",
      id: string,
      nombre: string,
      descripcion: string,
      fuente?: string | null,
      usuarioId?: string | null,
      tipoFormula: TipoFormula,
      estado: boolean,
      expresionJson?: string | null,
      fechaCreacion?: string | null,
      version: number,
      versionActiva: boolean,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateFormulaDeepLearningMutationVariables = {
  input: CreateFormulaDeepLearningInput,
  condition?: ModelFormulaDeepLearningConditionInput | null,
};

export type CreateFormulaDeepLearningMutation = {
  createFormulaDeepLearning?:  {
    __typename: "FormulaDeepLearning",
    id: string,
    formulaId: string,
    rutaModelo: string,
    rutaEtiquetas: string,
    parametrosJson?: string | null,
    formula?:  {
      __typename: "ConstructorFormula",
      id: string,
      nombre: string,
      descripcion: string,
      fuente?: string | null,
      usuarioId?: string | null,
      tipoFormula: TipoFormula,
      estado: boolean,
      expresionJson?: string | null,
      fechaCreacion?: string | null,
      version: number,
      versionActiva: boolean,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateFormulaDeepLearningMutationVariables = {
  input: UpdateFormulaDeepLearningInput,
  condition?: ModelFormulaDeepLearningConditionInput | null,
};

export type UpdateFormulaDeepLearningMutation = {
  updateFormulaDeepLearning?:  {
    __typename: "FormulaDeepLearning",
    id: string,
    formulaId: string,
    rutaModelo: string,
    rutaEtiquetas: string,
    parametrosJson?: string | null,
    formula?:  {
      __typename: "ConstructorFormula",
      id: string,
      nombre: string,
      descripcion: string,
      fuente?: string | null,
      usuarioId?: string | null,
      tipoFormula: TipoFormula,
      estado: boolean,
      expresionJson?: string | null,
      fechaCreacion?: string | null,
      version: number,
      versionActiva: boolean,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteFormulaDeepLearningMutationVariables = {
  input: DeleteFormulaDeepLearningInput,
  condition?: ModelFormulaDeepLearningConditionInput | null,
};

export type DeleteFormulaDeepLearningMutation = {
  deleteFormulaDeepLearning?:  {
    __typename: "FormulaDeepLearning",
    id: string,
    formulaId: string,
    rutaModelo: string,
    rutaEtiquetas: string,
    parametrosJson?: string | null,
    formula?:  {
      __typename: "ConstructorFormula",
      id: string,
      nombre: string,
      descripcion: string,
      fuente?: string | null,
      usuarioId?: string | null,
      tipoFormula: TipoFormula,
      estado: boolean,
      expresionJson?: string | null,
      fechaCreacion?: string | null,
      version: number,
      versionActiva: boolean,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateFormulaHistorialMutationVariables = {
  input: CreateFormulaHistorialInput,
  condition?: ModelFormulaHistorialConditionInput | null,
};

export type CreateFormulaHistorialMutation = {
  createFormulaHistorial?:  {
    __typename: "FormulaHistorial",
    id: string,
    formulaId: string,
    version: number,
    fechaModificacion?: string | null,
    datosJson: string,
    usuarioId?: string | null,
    formula?:  {
      __typename: "ConstructorFormula",
      id: string,
      nombre: string,
      descripcion: string,
      fuente?: string | null,
      usuarioId?: string | null,
      tipoFormula: TipoFormula,
      estado: boolean,
      expresionJson?: string | null,
      fechaCreacion?: string | null,
      version: number,
      versionActiva: boolean,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateFormulaHistorialMutationVariables = {
  input: UpdateFormulaHistorialInput,
  condition?: ModelFormulaHistorialConditionInput | null,
};

export type UpdateFormulaHistorialMutation = {
  updateFormulaHistorial?:  {
    __typename: "FormulaHistorial",
    id: string,
    formulaId: string,
    version: number,
    fechaModificacion?: string | null,
    datosJson: string,
    usuarioId?: string | null,
    formula?:  {
      __typename: "ConstructorFormula",
      id: string,
      nombre: string,
      descripcion: string,
      fuente?: string | null,
      usuarioId?: string | null,
      tipoFormula: TipoFormula,
      estado: boolean,
      expresionJson?: string | null,
      fechaCreacion?: string | null,
      version: number,
      versionActiva: boolean,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteFormulaHistorialMutationVariables = {
  input: DeleteFormulaHistorialInput,
  condition?: ModelFormulaHistorialConditionInput | null,
};

export type DeleteFormulaHistorialMutation = {
  deleteFormulaHistorial?:  {
    __typename: "FormulaHistorial",
    id: string,
    formulaId: string,
    version: number,
    fechaModificacion?: string | null,
    datosJson: string,
    usuarioId?: string | null,
    formula?:  {
      __typename: "ConstructorFormula",
      id: string,
      nombre: string,
      descripcion: string,
      fuente?: string | null,
      usuarioId?: string | null,
      tipoFormula: TipoFormula,
      estado: boolean,
      expresionJson?: string | null,
      fechaCreacion?: string | null,
      version: number,
      versionActiva: boolean,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateAccessDeadlineMutationVariables = {
  input: CreateAccessDeadlineInput,
  condition?: ModelAccessDeadlineConditionInput | null,
};

export type CreateAccessDeadlineMutation = {
  createAccessDeadline?:  {
    __typename: "AccessDeadline",
    id: string,
    subjectType: SubjectType,
    subjectKey: string,
    deadline: string,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type UpdateAccessDeadlineMutationVariables = {
  input: UpdateAccessDeadlineInput,
  condition?: ModelAccessDeadlineConditionInput | null,
};

export type UpdateAccessDeadlineMutation = {
  updateAccessDeadline?:  {
    __typename: "AccessDeadline",
    id: string,
    subjectType: SubjectType,
    subjectKey: string,
    deadline: string,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type DeleteAccessDeadlineMutationVariables = {
  input: DeleteAccessDeadlineInput,
  condition?: ModelAccessDeadlineConditionInput | null,
};

export type DeleteAccessDeadlineMutation = {
  deleteAccessDeadline?:  {
    __typename: "AccessDeadline",
    id: string,
    subjectType: SubjectType,
    subjectKey: string,
    deadline: string,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type CreateRoutePermissionMutationVariables = {
  input: CreateRoutePermissionInput,
  condition?: ModelRoutePermissionConditionInput | null,
};

export type CreateRoutePermissionMutation = {
  createRoutePermission?:  {
    __typename: "RoutePermission",
    id: string,
    subjectType: SubjectType,
    subjectKey: string,
    tagName: string,
    method: string,
    allow: boolean,
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type UpdateRoutePermissionMutationVariables = {
  input: UpdateRoutePermissionInput,
  condition?: ModelRoutePermissionConditionInput | null,
};

export type UpdateRoutePermissionMutation = {
  updateRoutePermission?:  {
    __typename: "RoutePermission",
    id: string,
    subjectType: SubjectType,
    subjectKey: string,
    tagName: string,
    method: string,
    allow: boolean,
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type DeleteRoutePermissionMutationVariables = {
  input: DeleteRoutePermissionInput,
  condition?: ModelRoutePermissionConditionInput | null,
};

export type DeleteRoutePermissionMutation = {
  deleteRoutePermission?:  {
    __typename: "RoutePermission",
    id: string,
    subjectType: SubjectType,
    subjectKey: string,
    tagName: string,
    method: string,
    allow: boolean,
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type CreateApiCredentialMutationVariables = {
  input: CreateApiCredentialInput,
  condition?: ModelApiCredentialConditionInput | null,
};

export type CreateApiCredentialMutation = {
  createApiCredential?:  {
    __typename: "ApiCredential",
    id: string,
    name: string,
    apiKeyHash: string,
    active: boolean,
    allowedIps?: string | null,
    expiresAt?: string | null,
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type UpdateApiCredentialMutationVariables = {
  input: UpdateApiCredentialInput,
  condition?: ModelApiCredentialConditionInput | null,
};

export type UpdateApiCredentialMutation = {
  updateApiCredential?:  {
    __typename: "ApiCredential",
    id: string,
    name: string,
    apiKeyHash: string,
    active: boolean,
    allowedIps?: string | null,
    expiresAt?: string | null,
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type DeleteApiCredentialMutationVariables = {
  input: DeleteApiCredentialInput,
  condition?: ModelApiCredentialConditionInput | null,
};

export type DeleteApiCredentialMutation = {
  deleteApiCredential?:  {
    __typename: "ApiCredential",
    id: string,
    name: string,
    apiKeyHash: string,
    active: boolean,
    allowedIps?: string | null,
    expiresAt?: string | null,
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type CreatePermVersionMutationVariables = {
  input: CreatePermVersionInput,
  condition?: ModelPermVersionConditionInput | null,
};

export type CreatePermVersionMutation = {
  createPermVersion?:  {
    __typename: "PermVersion",
    id: string,
    updatedAt?: string | null,
    createdAt: string,
  } | null,
};

export type UpdatePermVersionMutationVariables = {
  input: UpdatePermVersionInput,
  condition?: ModelPermVersionConditionInput | null,
};

export type UpdatePermVersionMutation = {
  updatePermVersion?:  {
    __typename: "PermVersion",
    id: string,
    updatedAt?: string | null,
    createdAt: string,
  } | null,
};

export type DeletePermVersionMutationVariables = {
  input: DeletePermVersionInput,
  condition?: ModelPermVersionConditionInput | null,
};

export type DeletePermVersionMutation = {
  deletePermVersion?:  {
    __typename: "PermVersion",
    id: string,
    updatedAt?: string | null,
    createdAt: string,
  } | null,
};

export type CreateUnitOfMeasureMutationVariables = {
  input: CreateUnitOfMeasureInput,
  condition?: ModelUnitOfMeasureConditionInput | null,
};

export type CreateUnitOfMeasureMutation = {
  createUnitOfMeasure?:  {
    __typename: "UnitOfMeasure",
    id: string,
    name: string,
    abbreviation?: string | null,
    features?:  {
      __typename: "ModelFeatureConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUnitOfMeasureMutationVariables = {
  input: UpdateUnitOfMeasureInput,
  condition?: ModelUnitOfMeasureConditionInput | null,
};

export type UpdateUnitOfMeasureMutation = {
  updateUnitOfMeasure?:  {
    __typename: "UnitOfMeasure",
    id: string,
    name: string,
    abbreviation?: string | null,
    features?:  {
      __typename: "ModelFeatureConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUnitOfMeasureMutationVariables = {
  input: DeleteUnitOfMeasureInput,
  condition?: ModelUnitOfMeasureConditionInput | null,
};

export type DeleteUnitOfMeasureMutation = {
  deleteUnitOfMeasure?:  {
    __typename: "UnitOfMeasure",
    id: string,
    name: string,
    abbreviation?: string | null,
    features?:  {
      __typename: "ModelFeatureConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateProjectMutationVariables = {
  input: CreateProjectInput,
  condition?: ModelProjectConditionInput | null,
};

export type CreateProjectMutation = {
  createProject?:  {
    __typename: "Project",
    id: string,
    name: string,
    status: string,
    trees?:  {
      __typename: "ModelTreeConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateProjectMutationVariables = {
  input: UpdateProjectInput,
  condition?: ModelProjectConditionInput | null,
};

export type UpdateProjectMutation = {
  updateProject?:  {
    __typename: "Project",
    id: string,
    name: string,
    status: string,
    trees?:  {
      __typename: "ModelTreeConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteProjectMutationVariables = {
  input: DeleteProjectInput,
  condition?: ModelProjectConditionInput | null,
};

export type DeleteProjectMutation = {
  deleteProject?:  {
    __typename: "Project",
    id: string,
    name: string,
    status: string,
    trees?:  {
      __typename: "ModelTreeConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateTemplateMutationVariables = {
  input: CreateTemplateInput,
  condition?: ModelTemplateConditionInput | null,
};

export type CreateTemplateMutation = {
  createTemplate?:  {
    __typename: "Template",
    id: string,
    name: string,
    description?: string | null,
    type: number,
    version?: string | null,
    is_latest: boolean,
    templateParent?:  {
      __typename: "Template",
      id: string,
      name: string,
      description?: string | null,
      type: number,
      version?: string | null,
      is_latest: boolean,
      createdAt: string,
      updatedAt: string,
      templateTemplatesId?: string | null,
    } | null,
    templates?:  {
      __typename: "ModelTemplateConnection",
      nextToken?: string | null,
    } | null,
    templateFeatures?:  {
      __typename: "ModelTemplateFeatureConnection",
      nextToken?: string | null,
    } | null,
    trees?:  {
      __typename: "ModelTreeConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    templateTemplatesId?: string | null,
  } | null,
};

export type UpdateTemplateMutationVariables = {
  input: UpdateTemplateInput,
  condition?: ModelTemplateConditionInput | null,
};

export type UpdateTemplateMutation = {
  updateTemplate?:  {
    __typename: "Template",
    id: string,
    name: string,
    description?: string | null,
    type: number,
    version?: string | null,
    is_latest: boolean,
    templateParent?:  {
      __typename: "Template",
      id: string,
      name: string,
      description?: string | null,
      type: number,
      version?: string | null,
      is_latest: boolean,
      createdAt: string,
      updatedAt: string,
      templateTemplatesId?: string | null,
    } | null,
    templates?:  {
      __typename: "ModelTemplateConnection",
      nextToken?: string | null,
    } | null,
    templateFeatures?:  {
      __typename: "ModelTemplateFeatureConnection",
      nextToken?: string | null,
    } | null,
    trees?:  {
      __typename: "ModelTreeConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    templateTemplatesId?: string | null,
  } | null,
};

export type DeleteTemplateMutationVariables = {
  input: DeleteTemplateInput,
  condition?: ModelTemplateConditionInput | null,
};

export type DeleteTemplateMutation = {
  deleteTemplate?:  {
    __typename: "Template",
    id: string,
    name: string,
    description?: string | null,
    type: number,
    version?: string | null,
    is_latest: boolean,
    templateParent?:  {
      __typename: "Template",
      id: string,
      name: string,
      description?: string | null,
      type: number,
      version?: string | null,
      is_latest: boolean,
      createdAt: string,
      updatedAt: string,
      templateTemplatesId?: string | null,
    } | null,
    templates?:  {
      __typename: "ModelTemplateConnection",
      nextToken?: string | null,
    } | null,
    templateFeatures?:  {
      __typename: "ModelTemplateFeatureConnection",
      nextToken?: string | null,
    } | null,
    trees?:  {
      __typename: "ModelTreeConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    templateTemplatesId?: string | null,
  } | null,
};

export type CreateTreeMutationVariables = {
  input: CreateTreeInput,
  condition?: ModelTreeConditionInput | null,
};

export type CreateTreeMutation = {
  createTree?:  {
    __typename: "Tree",
    id: string,
    name: string,
    status?: string | null,
    project?:  {
      __typename: "Project",
      id: string,
      name: string,
      status: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    template?:  {
      __typename: "Template",
      id: string,
      name: string,
      description?: string | null,
      type: number,
      version?: string | null,
      is_latest: boolean,
      createdAt: string,
      updatedAt: string,
      templateTemplatesId?: string | null,
    } | null,
    rawData?:  {
      __typename: "ModelRawDataConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    projectTreesId?: string | null,
    templateTreesId?: string | null,
  } | null,
};

export type UpdateTreeMutationVariables = {
  input: UpdateTreeInput,
  condition?: ModelTreeConditionInput | null,
};

export type UpdateTreeMutation = {
  updateTree?:  {
    __typename: "Tree",
    id: string,
    name: string,
    status?: string | null,
    project?:  {
      __typename: "Project",
      id: string,
      name: string,
      status: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    template?:  {
      __typename: "Template",
      id: string,
      name: string,
      description?: string | null,
      type: number,
      version?: string | null,
      is_latest: boolean,
      createdAt: string,
      updatedAt: string,
      templateTemplatesId?: string | null,
    } | null,
    rawData?:  {
      __typename: "ModelRawDataConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    projectTreesId?: string | null,
    templateTreesId?: string | null,
  } | null,
};

export type DeleteTreeMutationVariables = {
  input: DeleteTreeInput,
  condition?: ModelTreeConditionInput | null,
};

export type DeleteTreeMutation = {
  deleteTree?:  {
    __typename: "Tree",
    id: string,
    name: string,
    status?: string | null,
    project?:  {
      __typename: "Project",
      id: string,
      name: string,
      status: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    template?:  {
      __typename: "Template",
      id: string,
      name: string,
      description?: string | null,
      type: number,
      version?: string | null,
      is_latest: boolean,
      createdAt: string,
      updatedAt: string,
      templateTemplatesId?: string | null,
    } | null,
    rawData?:  {
      __typename: "ModelRawDataConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    projectTreesId?: string | null,
    templateTreesId?: string | null,
  } | null,
};

export type CreateTemplateFeatureMutationVariables = {
  input: CreateTemplateFeatureInput,
  condition?: ModelTemplateFeatureConditionInput | null,
};

export type CreateTemplateFeatureMutation = {
  createTemplateFeature?:  {
    __typename: "TemplateFeature",
    id: string,
    template?:  {
      __typename: "Template",
      id: string,
      name: string,
      description?: string | null,
      type: number,
      version?: string | null,
      is_latest: boolean,
      createdAt: string,
      updatedAt: string,
      templateTemplatesId?: string | null,
    } | null,
    feature?:  {
      __typename: "Feature",
      id: string,
      feature_type?: string | null,
      name: string,
      description?: string | null,
      feature_group?: string | null,
      default_value?: number | null,
      is_float?: boolean | null,
      createdAt: string,
      updatedAt: string,
      unitOfMeasureFeaturesId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    templateTemplateFeaturesId?: string | null,
    featureTemplateFeaturesId?: string | null,
  } | null,
};

export type UpdateTemplateFeatureMutationVariables = {
  input: UpdateTemplateFeatureInput,
  condition?: ModelTemplateFeatureConditionInput | null,
};

export type UpdateTemplateFeatureMutation = {
  updateTemplateFeature?:  {
    __typename: "TemplateFeature",
    id: string,
    template?:  {
      __typename: "Template",
      id: string,
      name: string,
      description?: string | null,
      type: number,
      version?: string | null,
      is_latest: boolean,
      createdAt: string,
      updatedAt: string,
      templateTemplatesId?: string | null,
    } | null,
    feature?:  {
      __typename: "Feature",
      id: string,
      feature_type?: string | null,
      name: string,
      description?: string | null,
      feature_group?: string | null,
      default_value?: number | null,
      is_float?: boolean | null,
      createdAt: string,
      updatedAt: string,
      unitOfMeasureFeaturesId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    templateTemplateFeaturesId?: string | null,
    featureTemplateFeaturesId?: string | null,
  } | null,
};

export type DeleteTemplateFeatureMutationVariables = {
  input: DeleteTemplateFeatureInput,
  condition?: ModelTemplateFeatureConditionInput | null,
};

export type DeleteTemplateFeatureMutation = {
  deleteTemplateFeature?:  {
    __typename: "TemplateFeature",
    id: string,
    template?:  {
      __typename: "Template",
      id: string,
      name: string,
      description?: string | null,
      type: number,
      version?: string | null,
      is_latest: boolean,
      createdAt: string,
      updatedAt: string,
      templateTemplatesId?: string | null,
    } | null,
    feature?:  {
      __typename: "Feature",
      id: string,
      feature_type?: string | null,
      name: string,
      description?: string | null,
      feature_group?: string | null,
      default_value?: number | null,
      is_float?: boolean | null,
      createdAt: string,
      updatedAt: string,
      unitOfMeasureFeaturesId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    templateTemplateFeaturesId?: string | null,
    featureTemplateFeaturesId?: string | null,
  } | null,
};

export type CreateFeatureMutationVariables = {
  input: CreateFeatureInput,
  condition?: ModelFeatureConditionInput | null,
};

export type CreateFeatureMutation = {
  createFeature?:  {
    __typename: "Feature",
    id: string,
    feature_type?: string | null,
    name: string,
    description?: string | null,
    feature_group?: string | null,
    default_value?: number | null,
    is_float?: boolean | null,
    unitOfMeasure?:  {
      __typename: "UnitOfMeasure",
      id: string,
      name: string,
      abbreviation?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    templateFeatures?:  {
      __typename: "ModelTemplateFeatureConnection",
      nextToken?: string | null,
    } | null,
    rawDatas?:  {
      __typename: "ModelRawDataConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    unitOfMeasureFeaturesId?: string | null,
  } | null,
};

export type UpdateFeatureMutationVariables = {
  input: UpdateFeatureInput,
  condition?: ModelFeatureConditionInput | null,
};

export type UpdateFeatureMutation = {
  updateFeature?:  {
    __typename: "Feature",
    id: string,
    feature_type?: string | null,
    name: string,
    description?: string | null,
    feature_group?: string | null,
    default_value?: number | null,
    is_float?: boolean | null,
    unitOfMeasure?:  {
      __typename: "UnitOfMeasure",
      id: string,
      name: string,
      abbreviation?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    templateFeatures?:  {
      __typename: "ModelTemplateFeatureConnection",
      nextToken?: string | null,
    } | null,
    rawDatas?:  {
      __typename: "ModelRawDataConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    unitOfMeasureFeaturesId?: string | null,
  } | null,
};

export type DeleteFeatureMutationVariables = {
  input: DeleteFeatureInput,
  condition?: ModelFeatureConditionInput | null,
};

export type DeleteFeatureMutation = {
  deleteFeature?:  {
    __typename: "Feature",
    id: string,
    feature_type?: string | null,
    name: string,
    description?: string | null,
    feature_group?: string | null,
    default_value?: number | null,
    is_float?: boolean | null,
    unitOfMeasure?:  {
      __typename: "UnitOfMeasure",
      id: string,
      name: string,
      abbreviation?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    templateFeatures?:  {
      __typename: "ModelTemplateFeatureConnection",
      nextToken?: string | null,
    } | null,
    rawDatas?:  {
      __typename: "ModelRawDataConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    unitOfMeasureFeaturesId?: string | null,
  } | null,
};

export type CreateRawDataMutationVariables = {
  input: CreateRawDataInput,
  condition?: ModelRawDataConditionInput | null,
};

export type CreateRawDataMutation = {
  createRawData?:  {
    __typename: "RawData",
    id: string,
    name?: string | null,
    valueFloat?: number | null,
    valueString?: string | null,
    start_date?: string | null,
    end_date?: string | null,
    feature?:  {
      __typename: "Feature",
      id: string,
      feature_type?: string | null,
      name: string,
      description?: string | null,
      feature_group?: string | null,
      default_value?: number | null,
      is_float?: boolean | null,
      createdAt: string,
      updatedAt: string,
      unitOfMeasureFeaturesId?: string | null,
    } | null,
    tree?:  {
      __typename: "Tree",
      id: string,
      name: string,
      status?: string | null,
      createdAt: string,
      updatedAt: string,
      projectTreesId?: string | null,
      templateTreesId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    treeRawDataId?: string | null,
    featureRawDatasId?: string | null,
  } | null,
};

export type UpdateRawDataMutationVariables = {
  input: UpdateRawDataInput,
  condition?: ModelRawDataConditionInput | null,
};

export type UpdateRawDataMutation = {
  updateRawData?:  {
    __typename: "RawData",
    id: string,
    name?: string | null,
    valueFloat?: number | null,
    valueString?: string | null,
    start_date?: string | null,
    end_date?: string | null,
    feature?:  {
      __typename: "Feature",
      id: string,
      feature_type?: string | null,
      name: string,
      description?: string | null,
      feature_group?: string | null,
      default_value?: number | null,
      is_float?: boolean | null,
      createdAt: string,
      updatedAt: string,
      unitOfMeasureFeaturesId?: string | null,
    } | null,
    tree?:  {
      __typename: "Tree",
      id: string,
      name: string,
      status?: string | null,
      createdAt: string,
      updatedAt: string,
      projectTreesId?: string | null,
      templateTreesId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    treeRawDataId?: string | null,
    featureRawDatasId?: string | null,
  } | null,
};

export type DeleteRawDataMutationVariables = {
  input: DeleteRawDataInput,
  condition?: ModelRawDataConditionInput | null,
};

export type DeleteRawDataMutation = {
  deleteRawData?:  {
    __typename: "RawData",
    id: string,
    name?: string | null,
    valueFloat?: number | null,
    valueString?: string | null,
    start_date?: string | null,
    end_date?: string | null,
    feature?:  {
      __typename: "Feature",
      id: string,
      feature_type?: string | null,
      name: string,
      description?: string | null,
      feature_group?: string | null,
      default_value?: number | null,
      is_float?: boolean | null,
      createdAt: string,
      updatedAt: string,
      unitOfMeasureFeaturesId?: string | null,
    } | null,
    tree?:  {
      __typename: "Tree",
      id: string,
      name: string,
      status?: string | null,
      createdAt: string,
      updatedAt: string,
      projectTreesId?: string | null,
      templateTreesId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    treeRawDataId?: string | null,
    featureRawDatasId?: string | null,
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

export type GetProyectoQueryVariables = {
  id: string,
};

export type GetProyectoQuery = {
  getProyecto?:  {
    __typename: "Proyecto",
    id: string,
    proyectoNombre: string,
    proyectoDescripcion?: string | null,
    proyectoIdExterno?: string | null,
    proyectoActivo: boolean,
    proyectoFechaCreacion?: string | null,
    proyectoFechaActualizacion?: string | null,
    consultasAnalisis?:  {
      __typename: "ModelConsultaAnalisisConnection",
      nextToken?: string | null,
    } | null,
    gruposIot?:  {
      __typename: "ModelRelGrupoIotProyectoConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListProyectosQueryVariables = {
  filter?: ModelProyectoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProyectosQuery = {
  listProyectos?:  {
    __typename: "ModelProyectoConnection",
    items:  Array< {
      __typename: "Proyecto",
      id: string,
      proyectoNombre: string,
      proyectoDescripcion?: string | null,
      proyectoIdExterno?: string | null,
      proyectoActivo: boolean,
      proyectoFechaCreacion?: string | null,
      proyectoFechaActualizacion?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetConsultaAnalisisQueryVariables = {
  id: string,
};

export type GetConsultaAnalisisQuery = {
  getConsultaAnalisis?:  {
    __typename: "ConsultaAnalisis",
    id: string,
    proyectoId?: string | null,
    consultaNombre: string,
    consultaUbicacion: string,
    consultaParametros?: string | null,
    consultaExternaPoligonos?: string | null,
    consultaIdExterna?: string | null,
    respuestaResultado?: string | null,
    respuestaIdentificadorExterno?: string | null,
    modeloId?: string | null,
    modeloName?: string | null,
    modeloDescription?: string | null,
    modeloVersion?: string | null,
    modeloDocumentLink?: string | null,
    modeloApiLink?: string | null,
    blockchainHashTransaccion?: string | null,
    fechaCreacion?: string | null,
    source: SourceType,
    proyecto?:  {
      __typename: "Proyecto",
      id: string,
      proyectoNombre: string,
      proyectoDescripcion?: string | null,
      proyectoIdExterno?: string | null,
      proyectoActivo: boolean,
      proyectoFechaCreacion?: string | null,
      proyectoFechaActualizacion?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    estados?:  {
      __typename: "ModelConsultaEstadoConnection",
      nextToken?: string | null,
    } | null,
    cuotasUso?:  {
      __typename: "ModelAnalisisCuotasUsoDiarioConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListConsultaAnalisesQueryVariables = {
  filter?: ModelConsultaAnalisisFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListConsultaAnalisesQuery = {
  listConsultaAnalises?:  {
    __typename: "ModelConsultaAnalisisConnection",
    items:  Array< {
      __typename: "ConsultaAnalisis",
      id: string,
      proyectoId?: string | null,
      consultaNombre: string,
      consultaUbicacion: string,
      consultaParametros?: string | null,
      consultaExternaPoligonos?: string | null,
      consultaIdExterna?: string | null,
      respuestaResultado?: string | null,
      respuestaIdentificadorExterno?: string | null,
      modeloId?: string | null,
      modeloName?: string | null,
      modeloDescription?: string | null,
      modeloVersion?: string | null,
      modeloDocumentLink?: string | null,
      modeloApiLink?: string | null,
      blockchainHashTransaccion?: string | null,
      fechaCreacion?: string | null,
      source: SourceType,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetConsultaEstadoQueryVariables = {
  id: string,
};

export type GetConsultaEstadoQuery = {
  getConsultaEstado?:  {
    __typename: "ConsultaEstado",
    id: string,
    consultaId: string,
    estado: EstadoConsulta,
    estadoFecha: string,
    estadoUsername?: string | null,
    estadoObservaciones?: string | null,
    estadoTipoActor: EstadoTipoActor,
    consulta?:  {
      __typename: "ConsultaAnalisis",
      id: string,
      proyectoId?: string | null,
      consultaNombre: string,
      consultaUbicacion: string,
      consultaParametros?: string | null,
      consultaExternaPoligonos?: string | null,
      consultaIdExterna?: string | null,
      respuestaResultado?: string | null,
      respuestaIdentificadorExterno?: string | null,
      modeloId?: string | null,
      modeloName?: string | null,
      modeloDescription?: string | null,
      modeloVersion?: string | null,
      modeloDocumentLink?: string | null,
      modeloApiLink?: string | null,
      blockchainHashTransaccion?: string | null,
      fechaCreacion?: string | null,
      source: SourceType,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListConsultaEstadosQueryVariables = {
  filter?: ModelConsultaEstadoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListConsultaEstadosQuery = {
  listConsultaEstados?:  {
    __typename: "ModelConsultaEstadoConnection",
    items:  Array< {
      __typename: "ConsultaEstado",
      id: string,
      consultaId: string,
      estado: EstadoConsulta,
      estadoFecha: string,
      estadoUsername?: string | null,
      estadoObservaciones?: string | null,
      estadoTipoActor: EstadoTipoActor,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetAnalisisCuotaQueryVariables = {
  id: string,
};

export type GetAnalisisCuotaQuery = {
  getAnalisisCuota?:  {
    __typename: "AnalisisCuota",
    id: string,
    nombreGrupo: string,
    limiteDiario: number,
    activo: boolean,
    creadoEn?: string | null,
    actualizadoEn?: string | null,
    usosDiarios?:  {
      __typename: "ModelAnalisisCuotasUsoDiarioConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListAnalisisCuotasQueryVariables = {
  filter?: ModelAnalisisCuotaFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAnalisisCuotasQuery = {
  listAnalisisCuotas?:  {
    __typename: "ModelAnalisisCuotaConnection",
    items:  Array< {
      __typename: "AnalisisCuota",
      id: string,
      nombreGrupo: string,
      limiteDiario: number,
      activo: boolean,
      creadoEn?: string | null,
      actualizadoEn?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetAnalisisCuotasUsoDiarioQueryVariables = {
  id: string,
};

export type GetAnalisisCuotasUsoDiarioQuery = {
  getAnalisisCuotasUsoDiario?:  {
    __typename: "AnalisisCuotasUsoDiario",
    id: string,
    usuarioNombre: string,
    grupoId: string,
    fechaUso: string,
    consultaId: string,
    creadoEn?: string | null,
    consulta?:  {
      __typename: "ConsultaAnalisis",
      id: string,
      proyectoId?: string | null,
      consultaNombre: string,
      consultaUbicacion: string,
      consultaParametros?: string | null,
      consultaExternaPoligonos?: string | null,
      consultaIdExterna?: string | null,
      respuestaResultado?: string | null,
      respuestaIdentificadorExterno?: string | null,
      modeloId?: string | null,
      modeloName?: string | null,
      modeloDescription?: string | null,
      modeloVersion?: string | null,
      modeloDocumentLink?: string | null,
      modeloApiLink?: string | null,
      blockchainHashTransaccion?: string | null,
      fechaCreacion?: string | null,
      source: SourceType,
      createdAt: string,
      updatedAt: string,
    } | null,
    grupo?:  {
      __typename: "AnalisisCuota",
      id: string,
      nombreGrupo: string,
      limiteDiario: number,
      activo: boolean,
      creadoEn?: string | null,
      actualizadoEn?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListAnalisisCuotasUsoDiariosQueryVariables = {
  filter?: ModelAnalisisCuotasUsoDiarioFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAnalisisCuotasUsoDiariosQuery = {
  listAnalisisCuotasUsoDiarios?:  {
    __typename: "ModelAnalisisCuotasUsoDiarioConnection",
    items:  Array< {
      __typename: "AnalisisCuotasUsoDiario",
      id: string,
      usuarioNombre: string,
      grupoId: string,
      fechaUso: string,
      consultaId: string,
      creadoEn?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetDispositivoIotQueryVariables = {
  id: string,
};

export type GetDispositivoIotQuery = {
  getDispositivoIot?:  {
    __typename: "DispositivoIot",
    id: string,
    deviceId: string,
    nombre: string,
    departamento: string,
    zona: string,
    tipoDispositivo: TipoDispositivo,
    variablesPublicadas: string,
    localizacion?: string | null,
    estado: EstadoDispositivo,
    observaciones?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    grupos?:  {
      __typename: "ModelRelDispositivoGrupoIotConnection",
      nextToken?: string | null,
    } | null,
    mediciones?:  {
      __typename: "ModelMedicionIotConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type ListDispositivoIotsQueryVariables = {
  filter?: ModelDispositivoIotFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListDispositivoIotsQuery = {
  listDispositivoIots?:  {
    __typename: "ModelDispositivoIotConnection",
    items:  Array< {
      __typename: "DispositivoIot",
      id: string,
      deviceId: string,
      nombre: string,
      departamento: string,
      zona: string,
      tipoDispositivo: TipoDispositivo,
      variablesPublicadas: string,
      localizacion?: string | null,
      estado: EstadoDispositivo,
      observaciones?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetGrupoIotQueryVariables = {
  id: string,
};

export type GetGrupoIotQuery = {
  getGrupoIot?:  {
    __typename: "GrupoIot",
    id: string,
    nombre: string,
    descripcion?: string | null,
    estado: EstadoDispositivo,
    usuarioCreador?: string | null,
    observaciones?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    dispositivos?:  {
      __typename: "ModelRelDispositivoGrupoIotConnection",
      nextToken?: string | null,
    } | null,
    proyectos?:  {
      __typename: "ModelRelGrupoIotProyectoConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type ListGrupoIotsQueryVariables = {
  filter?: ModelGrupoIotFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListGrupoIotsQuery = {
  listGrupoIots?:  {
    __typename: "ModelGrupoIotConnection",
    items:  Array< {
      __typename: "GrupoIot",
      id: string,
      nombre: string,
      descripcion?: string | null,
      estado: EstadoDispositivo,
      usuarioCreador?: string | null,
      observaciones?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetRelDispositivoGrupoIotQueryVariables = {
  id: string,
};

export type GetRelDispositivoGrupoIotQuery = {
  getRelDispositivoGrupoIot?:  {
    __typename: "RelDispositivoGrupoIot",
    id: string,
    dispositivoId: string,
    grupoId: string,
    fechaAsignacion?: string | null,
    usuarioId?: string | null,
    notas?: string | null,
    dispositivo?:  {
      __typename: "DispositivoIot",
      id: string,
      deviceId: string,
      nombre: string,
      departamento: string,
      zona: string,
      tipoDispositivo: TipoDispositivo,
      variablesPublicadas: string,
      localizacion?: string | null,
      estado: EstadoDispositivo,
      observaciones?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    grupo?:  {
      __typename: "GrupoIot",
      id: string,
      nombre: string,
      descripcion?: string | null,
      estado: EstadoDispositivo,
      usuarioCreador?: string | null,
      observaciones?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListRelDispositivoGrupoIotsQueryVariables = {
  filter?: ModelRelDispositivoGrupoIotFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRelDispositivoGrupoIotsQuery = {
  listRelDispositivoGrupoIots?:  {
    __typename: "ModelRelDispositivoGrupoIotConnection",
    items:  Array< {
      __typename: "RelDispositivoGrupoIot",
      id: string,
      dispositivoId: string,
      grupoId: string,
      fechaAsignacion?: string | null,
      usuarioId?: string | null,
      notas?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetRelGrupoIotProyectoQueryVariables = {
  id: string,
};

export type GetRelGrupoIotProyectoQuery = {
  getRelGrupoIotProyecto?:  {
    __typename: "RelGrupoIotProyecto",
    id: string,
    grupoId: string,
    proyectoId: string,
    fechaAsignacion?: string | null,
    usuarioId?: string | null,
    notas?: string | null,
    grupo?:  {
      __typename: "GrupoIot",
      id: string,
      nombre: string,
      descripcion?: string | null,
      estado: EstadoDispositivo,
      usuarioCreador?: string | null,
      observaciones?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    proyecto?:  {
      __typename: "Proyecto",
      id: string,
      proyectoNombre: string,
      proyectoDescripcion?: string | null,
      proyectoIdExterno?: string | null,
      proyectoActivo: boolean,
      proyectoFechaCreacion?: string | null,
      proyectoFechaActualizacion?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListRelGrupoIotProyectosQueryVariables = {
  filter?: ModelRelGrupoIotProyectoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRelGrupoIotProyectosQuery = {
  listRelGrupoIotProyectos?:  {
    __typename: "ModelRelGrupoIotProyectoConnection",
    items:  Array< {
      __typename: "RelGrupoIotProyecto",
      id: string,
      grupoId: string,
      proyectoId: string,
      fechaAsignacion?: string | null,
      usuarioId?: string | null,
      notas?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetMedicionIotQueryVariables = {
  id: string,
};

export type GetMedicionIotQuery = {
  getMedicionIot?:  {
    __typename: "MedicionIot",
    id: string,
    dispositivoId: string,
    deviceId: string,
    departamento: string,
    zona: string,
    variable: string,
    valor: number,
    timestamp: string,
    dispositivo?:  {
      __typename: "DispositivoIot",
      id: string,
      deviceId: string,
      nombre: string,
      departamento: string,
      zona: string,
      tipoDispositivo: TipoDispositivo,
      variablesPublicadas: string,
      localizacion?: string | null,
      estado: EstadoDispositivo,
      observaciones?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListMedicionIotsQueryVariables = {
  filter?: ModelMedicionIotFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMedicionIotsQuery = {
  listMedicionIots?:  {
    __typename: "ModelMedicionIotConnection",
    items:  Array< {
      __typename: "MedicionIot",
      id: string,
      dispositivoId: string,
      deviceId: string,
      departamento: string,
      zona: string,
      variable: string,
      valor: number,
      timestamp: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetProyectoLegacyQueryVariables = {
  id: string,
};

export type GetProyectoLegacyQuery = {
  getProyectoLegacy?:  {
    __typename: "ProyectoLegacy",
    id: string,
    projectId: string,
    descripcion?: string | null,
    consultasWeb?:  {
      __typename: "ModelConsultaWebConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListProyectoLegaciesQueryVariables = {
  filter?: ModelProyectoLegacyFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProyectoLegaciesQuery = {
  listProyectoLegacies?:  {
    __typename: "ModelProyectoLegacyConnection",
    items:  Array< {
      __typename: "ProyectoLegacy",
      id: string,
      projectId: string,
      descripcion?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetConsultaWebQueryVariables = {
  id: string,
};

export type GetConsultaWebQuery = {
  getConsultaWeb?:  {
    __typename: "ConsultaWeb",
    id: string,
    projectID?: string | null,
    imgAnteriorNombreImg?: string | null,
    imgAnteriorSatellite?: string | null,
    imgAnteriorYear?: number | null,
    imgAnteriorMesInicial?: number | null,
    imgAnteriorMesFinal?: number | null,
    imgAnteriorNubosidadMaxima?: number | null,
    imgAnteriorBandas?: string | null,
    imgPosteriorNombreImg?: string | null,
    imgPosteriorSatellite?: string | null,
    imgPosteriorYear?: number | null,
    imgPosteriorMesInicial?: number | null,
    imgPosteriorMesFinal?: number | null,
    imgPosteriorNubosidadMaxima?: number | null,
    imgPosteriorBandas?: string | null,
    fechaHoraConsulta?: string | null,
    usuarioEmailUpdate?: string | null,
    rawConsulta?: string | null,
    resultadoConsulta?: string | null,
    proyecto?:  {
      __typename: "ProyectoLegacy",
      id: string,
      projectId: string,
      descripcion?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListConsultaWebsQueryVariables = {
  filter?: ModelConsultaWebFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListConsultaWebsQuery = {
  listConsultaWebs?:  {
    __typename: "ModelConsultaWebConnection",
    items:  Array< {
      __typename: "ConsultaWeb",
      id: string,
      projectID?: string | null,
      imgAnteriorNombreImg?: string | null,
      imgAnteriorSatellite?: string | null,
      imgAnteriorYear?: number | null,
      imgAnteriorMesInicial?: number | null,
      imgAnteriorMesFinal?: number | null,
      imgAnteriorNubosidadMaxima?: number | null,
      imgAnteriorBandas?: string | null,
      imgPosteriorNombreImg?: string | null,
      imgPosteriorSatellite?: string | null,
      imgPosteriorYear?: number | null,
      imgPosteriorMesInicial?: number | null,
      imgPosteriorMesFinal?: number | null,
      imgPosteriorNubosidadMaxima?: number | null,
      imgPosteriorBandas?: string | null,
      fechaHoraConsulta?: string | null,
      usuarioEmailUpdate?: string | null,
      rawConsulta?: string | null,
      resultadoConsulta?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetConsultaApiQueryVariables = {
  id: string,
};

export type GetConsultaApiQuery = {
  getConsultaApi?:  {
    __typename: "ConsultaApi",
    id: string,
    projectID?: string | null,
    cedulaCatastral?: string | null,
    imgAnteriorNombreImg?: string | null,
    imgAnteriorSatellite?: string | null,
    imgAnteriorYear?: number | null,
    imgAnteriorMesInicial?: number | null,
    imgAnteriorMesFinal?: number | null,
    imgAnteriorNubosidadMaxima?: number | null,
    imgAnteriorBandas?: string | null,
    imgPosteriorNombreImg?: string | null,
    imgPosteriorSatellite?: string | null,
    imgPosteriorYear?: number | null,
    imgPosteriorMesInicial?: number | null,
    imgPosteriorMesFinal?: number | null,
    imgPosteriorNubosidadMaxima?: number | null,
    imgPosteriorBandas?: string | null,
    fechaHoraConsulta?: string | null,
    fechaHoraActualizacion?: string | null,
    usuarioEmailUpdate?: string | null,
    verificado: boolean,
    rawConsulta?: string | null,
    resultadoConsulta?: string | null,
    hashBlockchain?: string | null,
    indexNumberBlockchain?: number | null,
    timestampBlockchain?: string | null,
    onchainBlockchain: boolean,
    txIdBlockchain?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListConsultaApisQueryVariables = {
  filter?: ModelConsultaApiFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListConsultaApisQuery = {
  listConsultaApis?:  {
    __typename: "ModelConsultaApiConnection",
    items:  Array< {
      __typename: "ConsultaApi",
      id: string,
      projectID?: string | null,
      cedulaCatastral?: string | null,
      imgAnteriorNombreImg?: string | null,
      imgAnteriorSatellite?: string | null,
      imgAnteriorYear?: number | null,
      imgAnteriorMesInicial?: number | null,
      imgAnteriorMesFinal?: number | null,
      imgAnteriorNubosidadMaxima?: number | null,
      imgAnteriorBandas?: string | null,
      imgPosteriorNombreImg?: string | null,
      imgPosteriorSatellite?: string | null,
      imgPosteriorYear?: number | null,
      imgPosteriorMesInicial?: number | null,
      imgPosteriorMesFinal?: number | null,
      imgPosteriorNubosidadMaxima?: number | null,
      imgPosteriorBandas?: string | null,
      fechaHoraConsulta?: string | null,
      fechaHoraActualizacion?: string | null,
      usuarioEmailUpdate?: string | null,
      verificado: boolean,
      rawConsulta?: string | null,
      resultadoConsulta?: string | null,
      hashBlockchain?: string | null,
      indexNumberBlockchain?: number | null,
      timestampBlockchain?: string | null,
      onchainBlockchain: boolean,
      txIdBlockchain?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetIotSessionQueryVariables = {
  id: string,
};

export type GetIotSessionQuery = {
  getIotSession?:  {
    __typename: "IotSession",
    id: string,
    sessionId: string,
    iotData: string,
    createdAt?: string | null,
    expiresAt: string,
    updatedAt: string,
  } | null,
};

export type ListIotSessionsQueryVariables = {
  filter?: ModelIotSessionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListIotSessionsQuery = {
  listIotSessions?:  {
    __typename: "ModelIotSessionConnection",
    items:  Array< {
      __typename: "IotSession",
      id: string,
      sessionId: string,
      iotData: string,
      createdAt?: string | null,
      expiresAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetConstructorFormulaCategoriaQueryVariables = {
  id: string,
};

export type GetConstructorFormulaCategoriaQuery = {
  getConstructorFormulaCategoria?:  {
    __typename: "ConstructorFormulaCategoria",
    id: string,
    nombre: string,
    estado: boolean,
    variables?:  {
      __typename: "ModelConstructorFormulaVariableConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListConstructorFormulaCategoriasQueryVariables = {
  filter?: ModelConstructorFormulaCategoriaFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListConstructorFormulaCategoriasQuery = {
  listConstructorFormulaCategorias?:  {
    __typename: "ModelConstructorFormulaCategoriaConnection",
    items:  Array< {
      __typename: "ConstructorFormulaCategoria",
      id: string,
      nombre: string,
      estado: boolean,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetConstructorFormulaVariableQueryVariables = {
  id: string,
};

export type GetConstructorFormulaVariableQuery = {
  getConstructorFormulaVariable?:  {
    __typename: "ConstructorFormulaVariable",
    id: string,
    nombre: string,
    simbolo: string,
    unidades: string,
    descripcion: string,
    categoriaId?: string | null,
    estado: boolean,
    categoria?:  {
      __typename: "ConstructorFormulaCategoria",
      id: string,
      nombre: string,
      estado: boolean,
      createdAt: string,
      updatedAt: string,
    } | null,
    formulas?:  {
      __typename: "ModelConstructorFormulaVariableRelConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListConstructorFormulaVariablesQueryVariables = {
  filter?: ModelConstructorFormulaVariableFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListConstructorFormulaVariablesQuery = {
  listConstructorFormulaVariables?:  {
    __typename: "ModelConstructorFormulaVariableConnection",
    items:  Array< {
      __typename: "ConstructorFormulaVariable",
      id: string,
      nombre: string,
      simbolo: string,
      unidades: string,
      descripcion: string,
      categoriaId?: string | null,
      estado: boolean,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetConstructorFormulaQueryVariables = {
  id: string,
};

export type GetConstructorFormulaQuery = {
  getConstructorFormula?:  {
    __typename: "ConstructorFormula",
    id: string,
    nombre: string,
    descripcion: string,
    fuente?: string | null,
    usuarioId?: string | null,
    tipoFormula: TipoFormula,
    estado: boolean,
    expresionJson?: string | null,
    fechaCreacion?: string | null,
    version: number,
    versionActiva: boolean,
    variables?:  {
      __typename: "ModelConstructorFormulaVariableRelConnection",
      nextToken?: string | null,
    } | null,
    teledeteccion?:  {
      __typename: "ModelFormulaTeledeteccionConnection",
      nextToken?: string | null,
    } | null,
    deepLearning?:  {
      __typename: "ModelFormulaDeepLearningConnection",
      nextToken?: string | null,
    } | null,
    historial?:  {
      __typename: "ModelFormulaHistorialConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListConstructorFormulasQueryVariables = {
  filter?: ModelConstructorFormulaFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListConstructorFormulasQuery = {
  listConstructorFormulas?:  {
    __typename: "ModelConstructorFormulaConnection",
    items:  Array< {
      __typename: "ConstructorFormula",
      id: string,
      nombre: string,
      descripcion: string,
      fuente?: string | null,
      usuarioId?: string | null,
      tipoFormula: TipoFormula,
      estado: boolean,
      expresionJson?: string | null,
      fechaCreacion?: string | null,
      version: number,
      versionActiva: boolean,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetConstructorFormulaVariableRelQueryVariables = {
  id: string,
};

export type GetConstructorFormulaVariableRelQuery = {
  getConstructorFormulaVariableRel?:  {
    __typename: "ConstructorFormulaVariableRel",
    id: string,
    formulaId: string,
    variableId: string,
    formula?:  {
      __typename: "ConstructorFormula",
      id: string,
      nombre: string,
      descripcion: string,
      fuente?: string | null,
      usuarioId?: string | null,
      tipoFormula: TipoFormula,
      estado: boolean,
      expresionJson?: string | null,
      fechaCreacion?: string | null,
      version: number,
      versionActiva: boolean,
      createdAt: string,
      updatedAt: string,
    } | null,
    variable?:  {
      __typename: "ConstructorFormulaVariable",
      id: string,
      nombre: string,
      simbolo: string,
      unidades: string,
      descripcion: string,
      categoriaId?: string | null,
      estado: boolean,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListConstructorFormulaVariableRelsQueryVariables = {
  filter?: ModelConstructorFormulaVariableRelFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListConstructorFormulaVariableRelsQuery = {
  listConstructorFormulaVariableRels?:  {
    __typename: "ModelConstructorFormulaVariableRelConnection",
    items:  Array< {
      __typename: "ConstructorFormulaVariableRel",
      id: string,
      formulaId: string,
      variableId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetFormulaTeledeteccionQueryVariables = {
  id: string,
};

export type GetFormulaTeledeteccionQuery = {
  getFormulaTeledeteccion?:  {
    __typename: "FormulaTeledeteccion",
    id: string,
    formulaId: string,
    codigoScript: string,
    tipoEntrada: string,
    parametrosJson?: string | null,
    formula?:  {
      __typename: "ConstructorFormula",
      id: string,
      nombre: string,
      descripcion: string,
      fuente?: string | null,
      usuarioId?: string | null,
      tipoFormula: TipoFormula,
      estado: boolean,
      expresionJson?: string | null,
      fechaCreacion?: string | null,
      version: number,
      versionActiva: boolean,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListFormulaTeledeteccionsQueryVariables = {
  filter?: ModelFormulaTeledeteccionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFormulaTeledeteccionsQuery = {
  listFormulaTeledeteccions?:  {
    __typename: "ModelFormulaTeledeteccionConnection",
    items:  Array< {
      __typename: "FormulaTeledeteccion",
      id: string,
      formulaId: string,
      codigoScript: string,
      tipoEntrada: string,
      parametrosJson?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetFormulaDeepLearningQueryVariables = {
  id: string,
};

export type GetFormulaDeepLearningQuery = {
  getFormulaDeepLearning?:  {
    __typename: "FormulaDeepLearning",
    id: string,
    formulaId: string,
    rutaModelo: string,
    rutaEtiquetas: string,
    parametrosJson?: string | null,
    formula?:  {
      __typename: "ConstructorFormula",
      id: string,
      nombre: string,
      descripcion: string,
      fuente?: string | null,
      usuarioId?: string | null,
      tipoFormula: TipoFormula,
      estado: boolean,
      expresionJson?: string | null,
      fechaCreacion?: string | null,
      version: number,
      versionActiva: boolean,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListFormulaDeepLearningsQueryVariables = {
  filter?: ModelFormulaDeepLearningFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFormulaDeepLearningsQuery = {
  listFormulaDeepLearnings?:  {
    __typename: "ModelFormulaDeepLearningConnection",
    items:  Array< {
      __typename: "FormulaDeepLearning",
      id: string,
      formulaId: string,
      rutaModelo: string,
      rutaEtiquetas: string,
      parametrosJson?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetFormulaHistorialQueryVariables = {
  id: string,
};

export type GetFormulaHistorialQuery = {
  getFormulaHistorial?:  {
    __typename: "FormulaHistorial",
    id: string,
    formulaId: string,
    version: number,
    fechaModificacion?: string | null,
    datosJson: string,
    usuarioId?: string | null,
    formula?:  {
      __typename: "ConstructorFormula",
      id: string,
      nombre: string,
      descripcion: string,
      fuente?: string | null,
      usuarioId?: string | null,
      tipoFormula: TipoFormula,
      estado: boolean,
      expresionJson?: string | null,
      fechaCreacion?: string | null,
      version: number,
      versionActiva: boolean,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListFormulaHistorialsQueryVariables = {
  filter?: ModelFormulaHistorialFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFormulaHistorialsQuery = {
  listFormulaHistorials?:  {
    __typename: "ModelFormulaHistorialConnection",
    items:  Array< {
      __typename: "FormulaHistorial",
      id: string,
      formulaId: string,
      version: number,
      fechaModificacion?: string | null,
      datosJson: string,
      usuarioId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetAccessDeadlineQueryVariables = {
  id: string,
};

export type GetAccessDeadlineQuery = {
  getAccessDeadline?:  {
    __typename: "AccessDeadline",
    id: string,
    subjectType: SubjectType,
    subjectKey: string,
    deadline: string,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type ListAccessDeadlinesQueryVariables = {
  filter?: ModelAccessDeadlineFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAccessDeadlinesQuery = {
  listAccessDeadlines?:  {
    __typename: "ModelAccessDeadlineConnection",
    items:  Array< {
      __typename: "AccessDeadline",
      id: string,
      subjectType: SubjectType,
      subjectKey: string,
      deadline: string,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetRoutePermissionQueryVariables = {
  id: string,
};

export type GetRoutePermissionQuery = {
  getRoutePermission?:  {
    __typename: "RoutePermission",
    id: string,
    subjectType: SubjectType,
    subjectKey: string,
    tagName: string,
    method: string,
    allow: boolean,
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type ListRoutePermissionsQueryVariables = {
  filter?: ModelRoutePermissionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRoutePermissionsQuery = {
  listRoutePermissions?:  {
    __typename: "ModelRoutePermissionConnection",
    items:  Array< {
      __typename: "RoutePermission",
      id: string,
      subjectType: SubjectType,
      subjectKey: string,
      tagName: string,
      method: string,
      allow: boolean,
      createdAt?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetApiCredentialQueryVariables = {
  id: string,
};

export type GetApiCredentialQuery = {
  getApiCredential?:  {
    __typename: "ApiCredential",
    id: string,
    name: string,
    apiKeyHash: string,
    active: boolean,
    allowedIps?: string | null,
    expiresAt?: string | null,
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type ListApiCredentialsQueryVariables = {
  filter?: ModelApiCredentialFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListApiCredentialsQuery = {
  listApiCredentials?:  {
    __typename: "ModelApiCredentialConnection",
    items:  Array< {
      __typename: "ApiCredential",
      id: string,
      name: string,
      apiKeyHash: string,
      active: boolean,
      allowedIps?: string | null,
      expiresAt?: string | null,
      createdAt?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPermVersionQueryVariables = {
  id: string,
};

export type GetPermVersionQuery = {
  getPermVersion?:  {
    __typename: "PermVersion",
    id: string,
    updatedAt?: string | null,
    createdAt: string,
  } | null,
};

export type ListPermVersionsQueryVariables = {
  filter?: ModelPermVersionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPermVersionsQuery = {
  listPermVersions?:  {
    __typename: "ModelPermVersionConnection",
    items:  Array< {
      __typename: "PermVersion",
      id: string,
      updatedAt?: string | null,
      createdAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUnitOfMeasureQueryVariables = {
  id: string,
};

export type GetUnitOfMeasureQuery = {
  getUnitOfMeasure?:  {
    __typename: "UnitOfMeasure",
    id: string,
    name: string,
    abbreviation?: string | null,
    features?:  {
      __typename: "ModelFeatureConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUnitOfMeasuresQueryVariables = {
  filter?: ModelUnitOfMeasureFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUnitOfMeasuresQuery = {
  listUnitOfMeasures?:  {
    __typename: "ModelUnitOfMeasureConnection",
    items:  Array< {
      __typename: "UnitOfMeasure",
      id: string,
      name: string,
      abbreviation?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetProjectQueryVariables = {
  id: string,
};

export type GetProjectQuery = {
  getProject?:  {
    __typename: "Project",
    id: string,
    name: string,
    status: string,
    trees?:  {
      __typename: "ModelTreeConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListProjectsQueryVariables = {
  filter?: ModelProjectFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProjectsQuery = {
  listProjects?:  {
    __typename: "ModelProjectConnection",
    items:  Array< {
      __typename: "Project",
      id: string,
      name: string,
      status: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetTemplateQueryVariables = {
  id: string,
};

export type GetTemplateQuery = {
  getTemplate?:  {
    __typename: "Template",
    id: string,
    name: string,
    description?: string | null,
    type: number,
    version?: string | null,
    is_latest: boolean,
    templateParent?:  {
      __typename: "Template",
      id: string,
      name: string,
      description?: string | null,
      type: number,
      version?: string | null,
      is_latest: boolean,
      createdAt: string,
      updatedAt: string,
      templateTemplatesId?: string | null,
    } | null,
    templates?:  {
      __typename: "ModelTemplateConnection",
      nextToken?: string | null,
    } | null,
    templateFeatures?:  {
      __typename: "ModelTemplateFeatureConnection",
      nextToken?: string | null,
    } | null,
    trees?:  {
      __typename: "ModelTreeConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    templateTemplatesId?: string | null,
  } | null,
};

export type ListTemplatesQueryVariables = {
  filter?: ModelTemplateFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTemplatesQuery = {
  listTemplates?:  {
    __typename: "ModelTemplateConnection",
    items:  Array< {
      __typename: "Template",
      id: string,
      name: string,
      description?: string | null,
      type: number,
      version?: string | null,
      is_latest: boolean,
      createdAt: string,
      updatedAt: string,
      templateTemplatesId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetTreeQueryVariables = {
  id: string,
};

export type GetTreeQuery = {
  getTree?:  {
    __typename: "Tree",
    id: string,
    name: string,
    status?: string | null,
    project?:  {
      __typename: "Project",
      id: string,
      name: string,
      status: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    template?:  {
      __typename: "Template",
      id: string,
      name: string,
      description?: string | null,
      type: number,
      version?: string | null,
      is_latest: boolean,
      createdAt: string,
      updatedAt: string,
      templateTemplatesId?: string | null,
    } | null,
    rawData?:  {
      __typename: "ModelRawDataConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    projectTreesId?: string | null,
    templateTreesId?: string | null,
  } | null,
};

export type ListTreesQueryVariables = {
  filter?: ModelTreeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTreesQuery = {
  listTrees?:  {
    __typename: "ModelTreeConnection",
    items:  Array< {
      __typename: "Tree",
      id: string,
      name: string,
      status?: string | null,
      createdAt: string,
      updatedAt: string,
      projectTreesId?: string | null,
      templateTreesId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetTemplateFeatureQueryVariables = {
  id: string,
};

export type GetTemplateFeatureQuery = {
  getTemplateFeature?:  {
    __typename: "TemplateFeature",
    id: string,
    template?:  {
      __typename: "Template",
      id: string,
      name: string,
      description?: string | null,
      type: number,
      version?: string | null,
      is_latest: boolean,
      createdAt: string,
      updatedAt: string,
      templateTemplatesId?: string | null,
    } | null,
    feature?:  {
      __typename: "Feature",
      id: string,
      feature_type?: string | null,
      name: string,
      description?: string | null,
      feature_group?: string | null,
      default_value?: number | null,
      is_float?: boolean | null,
      createdAt: string,
      updatedAt: string,
      unitOfMeasureFeaturesId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    templateTemplateFeaturesId?: string | null,
    featureTemplateFeaturesId?: string | null,
  } | null,
};

export type ListTemplateFeaturesQueryVariables = {
  filter?: ModelTemplateFeatureFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTemplateFeaturesQuery = {
  listTemplateFeatures?:  {
    __typename: "ModelTemplateFeatureConnection",
    items:  Array< {
      __typename: "TemplateFeature",
      id: string,
      createdAt: string,
      updatedAt: string,
      templateTemplateFeaturesId?: string | null,
      featureTemplateFeaturesId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetFeatureQueryVariables = {
  id: string,
};

export type GetFeatureQuery = {
  getFeature?:  {
    __typename: "Feature",
    id: string,
    feature_type?: string | null,
    name: string,
    description?: string | null,
    feature_group?: string | null,
    default_value?: number | null,
    is_float?: boolean | null,
    unitOfMeasure?:  {
      __typename: "UnitOfMeasure",
      id: string,
      name: string,
      abbreviation?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    templateFeatures?:  {
      __typename: "ModelTemplateFeatureConnection",
      nextToken?: string | null,
    } | null,
    rawDatas?:  {
      __typename: "ModelRawDataConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    unitOfMeasureFeaturesId?: string | null,
  } | null,
};

export type ListFeaturesQueryVariables = {
  filter?: ModelFeatureFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFeaturesQuery = {
  listFeatures?:  {
    __typename: "ModelFeatureConnection",
    items:  Array< {
      __typename: "Feature",
      id: string,
      feature_type?: string | null,
      name: string,
      description?: string | null,
      feature_group?: string | null,
      default_value?: number | null,
      is_float?: boolean | null,
      createdAt: string,
      updatedAt: string,
      unitOfMeasureFeaturesId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetRawDataQueryVariables = {
  id: string,
};

export type GetRawDataQuery = {
  getRawData?:  {
    __typename: "RawData",
    id: string,
    name?: string | null,
    valueFloat?: number | null,
    valueString?: string | null,
    start_date?: string | null,
    end_date?: string | null,
    feature?:  {
      __typename: "Feature",
      id: string,
      feature_type?: string | null,
      name: string,
      description?: string | null,
      feature_group?: string | null,
      default_value?: number | null,
      is_float?: boolean | null,
      createdAt: string,
      updatedAt: string,
      unitOfMeasureFeaturesId?: string | null,
    } | null,
    tree?:  {
      __typename: "Tree",
      id: string,
      name: string,
      status?: string | null,
      createdAt: string,
      updatedAt: string,
      projectTreesId?: string | null,
      templateTreesId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    treeRawDataId?: string | null,
    featureRawDatasId?: string | null,
  } | null,
};

export type ListRawDataQueryVariables = {
  filter?: ModelRawDataFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRawDataQuery = {
  listRawData?:  {
    __typename: "ModelRawDataConnection",
    items:  Array< {
      __typename: "RawData",
      id: string,
      name?: string | null,
      valueFloat?: number | null,
      valueString?: string | null,
      start_date?: string | null,
      end_date?: string | null,
      createdAt: string,
      updatedAt: string,
      treeRawDataId?: string | null,
      featureRawDatasId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ConsultaAnalisesByProyectoIdQueryVariables = {
  proyectoId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelConsultaAnalisisFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ConsultaAnalisesByProyectoIdQuery = {
  consultaAnalisesByProyectoId?:  {
    __typename: "ModelConsultaAnalisisConnection",
    items:  Array< {
      __typename: "ConsultaAnalisis",
      id: string,
      proyectoId?: string | null,
      consultaNombre: string,
      consultaUbicacion: string,
      consultaParametros?: string | null,
      consultaExternaPoligonos?: string | null,
      consultaIdExterna?: string | null,
      respuestaResultado?: string | null,
      respuestaIdentificadorExterno?: string | null,
      modeloId?: string | null,
      modeloName?: string | null,
      modeloDescription?: string | null,
      modeloVersion?: string | null,
      modeloDocumentLink?: string | null,
      modeloApiLink?: string | null,
      blockchainHashTransaccion?: string | null,
      fechaCreacion?: string | null,
      source: SourceType,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ConsultaEstadosByConsultaIdQueryVariables = {
  consultaId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelConsultaEstadoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ConsultaEstadosByConsultaIdQuery = {
  consultaEstadosByConsultaId?:  {
    __typename: "ModelConsultaEstadoConnection",
    items:  Array< {
      __typename: "ConsultaEstado",
      id: string,
      consultaId: string,
      estado: EstadoConsulta,
      estadoFecha: string,
      estadoUsername?: string | null,
      estadoObservaciones?: string | null,
      estadoTipoActor: EstadoTipoActor,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type AnalisisCuotasByNombreGrupoQueryVariables = {
  nombreGrupo: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAnalisisCuotaFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type AnalisisCuotasByNombreGrupoQuery = {
  analisisCuotasByNombreGrupo?:  {
    __typename: "ModelAnalisisCuotaConnection",
    items:  Array< {
      __typename: "AnalisisCuota",
      id: string,
      nombreGrupo: string,
      limiteDiario: number,
      activo: boolean,
      creadoEn?: string | null,
      actualizadoEn?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type AnalisisCuotasUsoDiariosByUsuarioNombreQueryVariables = {
  usuarioNombre: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAnalisisCuotasUsoDiarioFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type AnalisisCuotasUsoDiariosByUsuarioNombreQuery = {
  analisisCuotasUsoDiariosByUsuarioNombre?:  {
    __typename: "ModelAnalisisCuotasUsoDiarioConnection",
    items:  Array< {
      __typename: "AnalisisCuotasUsoDiario",
      id: string,
      usuarioNombre: string,
      grupoId: string,
      fechaUso: string,
      consultaId: string,
      creadoEn?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type AnalisisCuotasUsoDiariosByGrupoIdQueryVariables = {
  grupoId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAnalisisCuotasUsoDiarioFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type AnalisisCuotasUsoDiariosByGrupoIdQuery = {
  analisisCuotasUsoDiariosByGrupoId?:  {
    __typename: "ModelAnalisisCuotasUsoDiarioConnection",
    items:  Array< {
      __typename: "AnalisisCuotasUsoDiario",
      id: string,
      usuarioNombre: string,
      grupoId: string,
      fechaUso: string,
      consultaId: string,
      creadoEn?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type AnalisisCuotasUsoDiariosByFechaUsoQueryVariables = {
  fechaUso: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAnalisisCuotasUsoDiarioFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type AnalisisCuotasUsoDiariosByFechaUsoQuery = {
  analisisCuotasUsoDiariosByFechaUso?:  {
    __typename: "ModelAnalisisCuotasUsoDiarioConnection",
    items:  Array< {
      __typename: "AnalisisCuotasUsoDiario",
      id: string,
      usuarioNombre: string,
      grupoId: string,
      fechaUso: string,
      consultaId: string,
      creadoEn?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type AnalisisCuotasUsoDiariosByConsultaIdQueryVariables = {
  consultaId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAnalisisCuotasUsoDiarioFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type AnalisisCuotasUsoDiariosByConsultaIdQuery = {
  analisisCuotasUsoDiariosByConsultaId?:  {
    __typename: "ModelAnalisisCuotasUsoDiarioConnection",
    items:  Array< {
      __typename: "AnalisisCuotasUsoDiario",
      id: string,
      usuarioNombre: string,
      grupoId: string,
      fechaUso: string,
      consultaId: string,
      creadoEn?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type DispositivoIotsByDeviceIdQueryVariables = {
  deviceId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelDispositivoIotFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type DispositivoIotsByDeviceIdQuery = {
  dispositivoIotsByDeviceId?:  {
    __typename: "ModelDispositivoIotConnection",
    items:  Array< {
      __typename: "DispositivoIot",
      id: string,
      deviceId: string,
      nombre: string,
      departamento: string,
      zona: string,
      tipoDispositivo: TipoDispositivo,
      variablesPublicadas: string,
      localizacion?: string | null,
      estado: EstadoDispositivo,
      observaciones?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GrupoIotsByNombreQueryVariables = {
  nombre: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelGrupoIotFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type GrupoIotsByNombreQuery = {
  grupoIotsByNombre?:  {
    __typename: "ModelGrupoIotConnection",
    items:  Array< {
      __typename: "GrupoIot",
      id: string,
      nombre: string,
      descripcion?: string | null,
      estado: EstadoDispositivo,
      usuarioCreador?: string | null,
      observaciones?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type RelDispositivoGrupoIotsByDispositivoIdQueryVariables = {
  dispositivoId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelRelDispositivoGrupoIotFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type RelDispositivoGrupoIotsByDispositivoIdQuery = {
  relDispositivoGrupoIotsByDispositivoId?:  {
    __typename: "ModelRelDispositivoGrupoIotConnection",
    items:  Array< {
      __typename: "RelDispositivoGrupoIot",
      id: string,
      dispositivoId: string,
      grupoId: string,
      fechaAsignacion?: string | null,
      usuarioId?: string | null,
      notas?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type RelDispositivoGrupoIotsByGrupoIdQueryVariables = {
  grupoId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelRelDispositivoGrupoIotFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type RelDispositivoGrupoIotsByGrupoIdQuery = {
  relDispositivoGrupoIotsByGrupoId?:  {
    __typename: "ModelRelDispositivoGrupoIotConnection",
    items:  Array< {
      __typename: "RelDispositivoGrupoIot",
      id: string,
      dispositivoId: string,
      grupoId: string,
      fechaAsignacion?: string | null,
      usuarioId?: string | null,
      notas?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type RelGrupoIotProyectosByGrupoIdQueryVariables = {
  grupoId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelRelGrupoIotProyectoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type RelGrupoIotProyectosByGrupoIdQuery = {
  relGrupoIotProyectosByGrupoId?:  {
    __typename: "ModelRelGrupoIotProyectoConnection",
    items:  Array< {
      __typename: "RelGrupoIotProyecto",
      id: string,
      grupoId: string,
      proyectoId: string,
      fechaAsignacion?: string | null,
      usuarioId?: string | null,
      notas?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type RelGrupoIotProyectosByProyectoIdQueryVariables = {
  proyectoId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelRelGrupoIotProyectoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type RelGrupoIotProyectosByProyectoIdQuery = {
  relGrupoIotProyectosByProyectoId?:  {
    __typename: "ModelRelGrupoIotProyectoConnection",
    items:  Array< {
      __typename: "RelGrupoIotProyecto",
      id: string,
      grupoId: string,
      proyectoId: string,
      fechaAsignacion?: string | null,
      usuarioId?: string | null,
      notas?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type MedicionIotsByDispositivoIdQueryVariables = {
  dispositivoId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelMedicionIotFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type MedicionIotsByDispositivoIdQuery = {
  medicionIotsByDispositivoId?:  {
    __typename: "ModelMedicionIotConnection",
    items:  Array< {
      __typename: "MedicionIot",
      id: string,
      dispositivoId: string,
      deviceId: string,
      departamento: string,
      zona: string,
      variable: string,
      valor: number,
      timestamp: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type MedicionIotsByDeviceIdQueryVariables = {
  deviceId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelMedicionIotFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type MedicionIotsByDeviceIdQuery = {
  medicionIotsByDeviceId?:  {
    __typename: "ModelMedicionIotConnection",
    items:  Array< {
      __typename: "MedicionIot",
      id: string,
      dispositivoId: string,
      deviceId: string,
      departamento: string,
      zona: string,
      variable: string,
      valor: number,
      timestamp: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type MedicionIotsByTimestampQueryVariables = {
  timestamp: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelMedicionIotFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type MedicionIotsByTimestampQuery = {
  medicionIotsByTimestamp?:  {
    __typename: "ModelMedicionIotConnection",
    items:  Array< {
      __typename: "MedicionIot",
      id: string,
      dispositivoId: string,
      deviceId: string,
      departamento: string,
      zona: string,
      variable: string,
      valor: number,
      timestamp: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ProyectoLegaciesByProjectIdQueryVariables = {
  projectId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelProyectoLegacyFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ProyectoLegaciesByProjectIdQuery = {
  proyectoLegaciesByProjectId?:  {
    __typename: "ModelProyectoLegacyConnection",
    items:  Array< {
      __typename: "ProyectoLegacy",
      id: string,
      projectId: string,
      descripcion?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ConsultaWebsByProjectIDQueryVariables = {
  projectID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelConsultaWebFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ConsultaWebsByProjectIDQuery = {
  consultaWebsByProjectID?:  {
    __typename: "ModelConsultaWebConnection",
    items:  Array< {
      __typename: "ConsultaWeb",
      id: string,
      projectID?: string | null,
      imgAnteriorNombreImg?: string | null,
      imgAnteriorSatellite?: string | null,
      imgAnteriorYear?: number | null,
      imgAnteriorMesInicial?: number | null,
      imgAnteriorMesFinal?: number | null,
      imgAnteriorNubosidadMaxima?: number | null,
      imgAnteriorBandas?: string | null,
      imgPosteriorNombreImg?: string | null,
      imgPosteriorSatellite?: string | null,
      imgPosteriorYear?: number | null,
      imgPosteriorMesInicial?: number | null,
      imgPosteriorMesFinal?: number | null,
      imgPosteriorNubosidadMaxima?: number | null,
      imgPosteriorBandas?: string | null,
      fechaHoraConsulta?: string | null,
      usuarioEmailUpdate?: string | null,
      rawConsulta?: string | null,
      resultadoConsulta?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ConsultaWebsByFechaHoraConsultaQueryVariables = {
  fechaHoraConsulta: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelConsultaWebFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ConsultaWebsByFechaHoraConsultaQuery = {
  consultaWebsByFechaHoraConsulta?:  {
    __typename: "ModelConsultaWebConnection",
    items:  Array< {
      __typename: "ConsultaWeb",
      id: string,
      projectID?: string | null,
      imgAnteriorNombreImg?: string | null,
      imgAnteriorSatellite?: string | null,
      imgAnteriorYear?: number | null,
      imgAnteriorMesInicial?: number | null,
      imgAnteriorMesFinal?: number | null,
      imgAnteriorNubosidadMaxima?: number | null,
      imgAnteriorBandas?: string | null,
      imgPosteriorNombreImg?: string | null,
      imgPosteriorSatellite?: string | null,
      imgPosteriorYear?: number | null,
      imgPosteriorMesInicial?: number | null,
      imgPosteriorMesFinal?: number | null,
      imgPosteriorNubosidadMaxima?: number | null,
      imgPosteriorBandas?: string | null,
      fechaHoraConsulta?: string | null,
      usuarioEmailUpdate?: string | null,
      rawConsulta?: string | null,
      resultadoConsulta?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ConsultaApisByFechaHoraConsultaQueryVariables = {
  fechaHoraConsulta: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelConsultaApiFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ConsultaApisByFechaHoraConsultaQuery = {
  consultaApisByFechaHoraConsulta?:  {
    __typename: "ModelConsultaApiConnection",
    items:  Array< {
      __typename: "ConsultaApi",
      id: string,
      projectID?: string | null,
      cedulaCatastral?: string | null,
      imgAnteriorNombreImg?: string | null,
      imgAnteriorSatellite?: string | null,
      imgAnteriorYear?: number | null,
      imgAnteriorMesInicial?: number | null,
      imgAnteriorMesFinal?: number | null,
      imgAnteriorNubosidadMaxima?: number | null,
      imgAnteriorBandas?: string | null,
      imgPosteriorNombreImg?: string | null,
      imgPosteriorSatellite?: string | null,
      imgPosteriorYear?: number | null,
      imgPosteriorMesInicial?: number | null,
      imgPosteriorMesFinal?: number | null,
      imgPosteriorNubosidadMaxima?: number | null,
      imgPosteriorBandas?: string | null,
      fechaHoraConsulta?: string | null,
      fechaHoraActualizacion?: string | null,
      usuarioEmailUpdate?: string | null,
      verificado: boolean,
      rawConsulta?: string | null,
      resultadoConsulta?: string | null,
      hashBlockchain?: string | null,
      indexNumberBlockchain?: number | null,
      timestampBlockchain?: string | null,
      onchainBlockchain: boolean,
      txIdBlockchain?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ConsultaApisByHashBlockchainQueryVariables = {
  hashBlockchain: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelConsultaApiFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ConsultaApisByHashBlockchainQuery = {
  consultaApisByHashBlockchain?:  {
    __typename: "ModelConsultaApiConnection",
    items:  Array< {
      __typename: "ConsultaApi",
      id: string,
      projectID?: string | null,
      cedulaCatastral?: string | null,
      imgAnteriorNombreImg?: string | null,
      imgAnteriorSatellite?: string | null,
      imgAnteriorYear?: number | null,
      imgAnteriorMesInicial?: number | null,
      imgAnteriorMesFinal?: number | null,
      imgAnteriorNubosidadMaxima?: number | null,
      imgAnteriorBandas?: string | null,
      imgPosteriorNombreImg?: string | null,
      imgPosteriorSatellite?: string | null,
      imgPosteriorYear?: number | null,
      imgPosteriorMesInicial?: number | null,
      imgPosteriorMesFinal?: number | null,
      imgPosteriorNubosidadMaxima?: number | null,
      imgPosteriorBandas?: string | null,
      fechaHoraConsulta?: string | null,
      fechaHoraActualizacion?: string | null,
      usuarioEmailUpdate?: string | null,
      verificado: boolean,
      rawConsulta?: string | null,
      resultadoConsulta?: string | null,
      hashBlockchain?: string | null,
      indexNumberBlockchain?: number | null,
      timestampBlockchain?: string | null,
      onchainBlockchain: boolean,
      txIdBlockchain?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type IotSessionsBySessionIdQueryVariables = {
  sessionId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelIotSessionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type IotSessionsBySessionIdQuery = {
  iotSessionsBySessionId?:  {
    __typename: "ModelIotSessionConnection",
    items:  Array< {
      __typename: "IotSession",
      id: string,
      sessionId: string,
      iotData: string,
      createdAt?: string | null,
      expiresAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type IotSessionsByExpiresAtQueryVariables = {
  expiresAt: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelIotSessionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type IotSessionsByExpiresAtQuery = {
  iotSessionsByExpiresAt?:  {
    __typename: "ModelIotSessionConnection",
    items:  Array< {
      __typename: "IotSession",
      id: string,
      sessionId: string,
      iotData: string,
      createdAt?: string | null,
      expiresAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ConstructorFormulaCategoriasByNombreQueryVariables = {
  nombre: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelConstructorFormulaCategoriaFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ConstructorFormulaCategoriasByNombreQuery = {
  constructorFormulaCategoriasByNombre?:  {
    __typename: "ModelConstructorFormulaCategoriaConnection",
    items:  Array< {
      __typename: "ConstructorFormulaCategoria",
      id: string,
      nombre: string,
      estado: boolean,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ConstructorFormulaVariablesByNombreQueryVariables = {
  nombre: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelConstructorFormulaVariableFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ConstructorFormulaVariablesByNombreQuery = {
  constructorFormulaVariablesByNombre?:  {
    __typename: "ModelConstructorFormulaVariableConnection",
    items:  Array< {
      __typename: "ConstructorFormulaVariable",
      id: string,
      nombre: string,
      simbolo: string,
      unidades: string,
      descripcion: string,
      categoriaId?: string | null,
      estado: boolean,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ConstructorFormulaVariablesBySimboloQueryVariables = {
  simbolo: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelConstructorFormulaVariableFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ConstructorFormulaVariablesBySimboloQuery = {
  constructorFormulaVariablesBySimbolo?:  {
    __typename: "ModelConstructorFormulaVariableConnection",
    items:  Array< {
      __typename: "ConstructorFormulaVariable",
      id: string,
      nombre: string,
      simbolo: string,
      unidades: string,
      descripcion: string,
      categoriaId?: string | null,
      estado: boolean,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ConstructorFormulaVariablesByCategoriaIdQueryVariables = {
  categoriaId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelConstructorFormulaVariableFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ConstructorFormulaVariablesByCategoriaIdQuery = {
  constructorFormulaVariablesByCategoriaId?:  {
    __typename: "ModelConstructorFormulaVariableConnection",
    items:  Array< {
      __typename: "ConstructorFormulaVariable",
      id: string,
      nombre: string,
      simbolo: string,
      unidades: string,
      descripcion: string,
      categoriaId?: string | null,
      estado: boolean,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ConstructorFormulasByNombreQueryVariables = {
  nombre: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelConstructorFormulaFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ConstructorFormulasByNombreQuery = {
  constructorFormulasByNombre?:  {
    __typename: "ModelConstructorFormulaConnection",
    items:  Array< {
      __typename: "ConstructorFormula",
      id: string,
      nombre: string,
      descripcion: string,
      fuente?: string | null,
      usuarioId?: string | null,
      tipoFormula: TipoFormula,
      estado: boolean,
      expresionJson?: string | null,
      fechaCreacion?: string | null,
      version: number,
      versionActiva: boolean,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ConstructorFormulasByUsuarioIdQueryVariables = {
  usuarioId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelConstructorFormulaFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ConstructorFormulasByUsuarioIdQuery = {
  constructorFormulasByUsuarioId?:  {
    __typename: "ModelConstructorFormulaConnection",
    items:  Array< {
      __typename: "ConstructorFormula",
      id: string,
      nombre: string,
      descripcion: string,
      fuente?: string | null,
      usuarioId?: string | null,
      tipoFormula: TipoFormula,
      estado: boolean,
      expresionJson?: string | null,
      fechaCreacion?: string | null,
      version: number,
      versionActiva: boolean,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ConstructorFormulaVariableRelsByFormulaIdQueryVariables = {
  formulaId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelConstructorFormulaVariableRelFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ConstructorFormulaVariableRelsByFormulaIdQuery = {
  constructorFormulaVariableRelsByFormulaId?:  {
    __typename: "ModelConstructorFormulaVariableRelConnection",
    items:  Array< {
      __typename: "ConstructorFormulaVariableRel",
      id: string,
      formulaId: string,
      variableId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ConstructorFormulaVariableRelsByVariableIdQueryVariables = {
  variableId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelConstructorFormulaVariableRelFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ConstructorFormulaVariableRelsByVariableIdQuery = {
  constructorFormulaVariableRelsByVariableId?:  {
    __typename: "ModelConstructorFormulaVariableRelConnection",
    items:  Array< {
      __typename: "ConstructorFormulaVariableRel",
      id: string,
      formulaId: string,
      variableId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type FormulaTeledeteccionsByFormulaIdQueryVariables = {
  formulaId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelFormulaTeledeteccionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type FormulaTeledeteccionsByFormulaIdQuery = {
  formulaTeledeteccionsByFormulaId?:  {
    __typename: "ModelFormulaTeledeteccionConnection",
    items:  Array< {
      __typename: "FormulaTeledeteccion",
      id: string,
      formulaId: string,
      codigoScript: string,
      tipoEntrada: string,
      parametrosJson?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type FormulaDeepLearningsByFormulaIdQueryVariables = {
  formulaId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelFormulaDeepLearningFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type FormulaDeepLearningsByFormulaIdQuery = {
  formulaDeepLearningsByFormulaId?:  {
    __typename: "ModelFormulaDeepLearningConnection",
    items:  Array< {
      __typename: "FormulaDeepLearning",
      id: string,
      formulaId: string,
      rutaModelo: string,
      rutaEtiquetas: string,
      parametrosJson?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type FormulaHistorialsByFormulaIdQueryVariables = {
  formulaId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelFormulaHistorialFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type FormulaHistorialsByFormulaIdQuery = {
  formulaHistorialsByFormulaId?:  {
    __typename: "ModelFormulaHistorialConnection",
    items:  Array< {
      __typename: "FormulaHistorial",
      id: string,
      formulaId: string,
      version: number,
      fechaModificacion?: string | null,
      datosJson: string,
      usuarioId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type FormulaHistorialsByVersionQueryVariables = {
  version: number,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelFormulaHistorialFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type FormulaHistorialsByVersionQuery = {
  formulaHistorialsByVersion?:  {
    __typename: "ModelFormulaHistorialConnection",
    items:  Array< {
      __typename: "FormulaHistorial",
      id: string,
      formulaId: string,
      version: number,
      fechaModificacion?: string | null,
      datosJson: string,
      usuarioId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type FormulaHistorialsByFechaModificacionQueryVariables = {
  fechaModificacion: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelFormulaHistorialFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type FormulaHistorialsByFechaModificacionQuery = {
  formulaHistorialsByFechaModificacion?:  {
    __typename: "ModelFormulaHistorialConnection",
    items:  Array< {
      __typename: "FormulaHistorial",
      id: string,
      formulaId: string,
      version: number,
      fechaModificacion?: string | null,
      datosJson: string,
      usuarioId?: string | null,
      createdAt: string,
      updatedAt: string,
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

export type OnCreateProyectoSubscriptionVariables = {
  filter?: ModelSubscriptionProyectoFilterInput | null,
};

export type OnCreateProyectoSubscription = {
  onCreateProyecto?:  {
    __typename: "Proyecto",
    id: string,
    proyectoNombre: string,
    proyectoDescripcion?: string | null,
    proyectoIdExterno?: string | null,
    proyectoActivo: boolean,
    proyectoFechaCreacion?: string | null,
    proyectoFechaActualizacion?: string | null,
    consultasAnalisis?:  {
      __typename: "ModelConsultaAnalisisConnection",
      nextToken?: string | null,
    } | null,
    gruposIot?:  {
      __typename: "ModelRelGrupoIotProyectoConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateProyectoSubscriptionVariables = {
  filter?: ModelSubscriptionProyectoFilterInput | null,
};

export type OnUpdateProyectoSubscription = {
  onUpdateProyecto?:  {
    __typename: "Proyecto",
    id: string,
    proyectoNombre: string,
    proyectoDescripcion?: string | null,
    proyectoIdExterno?: string | null,
    proyectoActivo: boolean,
    proyectoFechaCreacion?: string | null,
    proyectoFechaActualizacion?: string | null,
    consultasAnalisis?:  {
      __typename: "ModelConsultaAnalisisConnection",
      nextToken?: string | null,
    } | null,
    gruposIot?:  {
      __typename: "ModelRelGrupoIotProyectoConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteProyectoSubscriptionVariables = {
  filter?: ModelSubscriptionProyectoFilterInput | null,
};

export type OnDeleteProyectoSubscription = {
  onDeleteProyecto?:  {
    __typename: "Proyecto",
    id: string,
    proyectoNombre: string,
    proyectoDescripcion?: string | null,
    proyectoIdExterno?: string | null,
    proyectoActivo: boolean,
    proyectoFechaCreacion?: string | null,
    proyectoFechaActualizacion?: string | null,
    consultasAnalisis?:  {
      __typename: "ModelConsultaAnalisisConnection",
      nextToken?: string | null,
    } | null,
    gruposIot?:  {
      __typename: "ModelRelGrupoIotProyectoConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateConsultaAnalisisSubscriptionVariables = {
  filter?: ModelSubscriptionConsultaAnalisisFilterInput | null,
};

export type OnCreateConsultaAnalisisSubscription = {
  onCreateConsultaAnalisis?:  {
    __typename: "ConsultaAnalisis",
    id: string,
    proyectoId?: string | null,
    consultaNombre: string,
    consultaUbicacion: string,
    consultaParametros?: string | null,
    consultaExternaPoligonos?: string | null,
    consultaIdExterna?: string | null,
    respuestaResultado?: string | null,
    respuestaIdentificadorExterno?: string | null,
    modeloId?: string | null,
    modeloName?: string | null,
    modeloDescription?: string | null,
    modeloVersion?: string | null,
    modeloDocumentLink?: string | null,
    modeloApiLink?: string | null,
    blockchainHashTransaccion?: string | null,
    fechaCreacion?: string | null,
    source: SourceType,
    proyecto?:  {
      __typename: "Proyecto",
      id: string,
      proyectoNombre: string,
      proyectoDescripcion?: string | null,
      proyectoIdExterno?: string | null,
      proyectoActivo: boolean,
      proyectoFechaCreacion?: string | null,
      proyectoFechaActualizacion?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    estados?:  {
      __typename: "ModelConsultaEstadoConnection",
      nextToken?: string | null,
    } | null,
    cuotasUso?:  {
      __typename: "ModelAnalisisCuotasUsoDiarioConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateConsultaAnalisisSubscriptionVariables = {
  filter?: ModelSubscriptionConsultaAnalisisFilterInput | null,
};

export type OnUpdateConsultaAnalisisSubscription = {
  onUpdateConsultaAnalisis?:  {
    __typename: "ConsultaAnalisis",
    id: string,
    proyectoId?: string | null,
    consultaNombre: string,
    consultaUbicacion: string,
    consultaParametros?: string | null,
    consultaExternaPoligonos?: string | null,
    consultaIdExterna?: string | null,
    respuestaResultado?: string | null,
    respuestaIdentificadorExterno?: string | null,
    modeloId?: string | null,
    modeloName?: string | null,
    modeloDescription?: string | null,
    modeloVersion?: string | null,
    modeloDocumentLink?: string | null,
    modeloApiLink?: string | null,
    blockchainHashTransaccion?: string | null,
    fechaCreacion?: string | null,
    source: SourceType,
    proyecto?:  {
      __typename: "Proyecto",
      id: string,
      proyectoNombre: string,
      proyectoDescripcion?: string | null,
      proyectoIdExterno?: string | null,
      proyectoActivo: boolean,
      proyectoFechaCreacion?: string | null,
      proyectoFechaActualizacion?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    estados?:  {
      __typename: "ModelConsultaEstadoConnection",
      nextToken?: string | null,
    } | null,
    cuotasUso?:  {
      __typename: "ModelAnalisisCuotasUsoDiarioConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteConsultaAnalisisSubscriptionVariables = {
  filter?: ModelSubscriptionConsultaAnalisisFilterInput | null,
};

export type OnDeleteConsultaAnalisisSubscription = {
  onDeleteConsultaAnalisis?:  {
    __typename: "ConsultaAnalisis",
    id: string,
    proyectoId?: string | null,
    consultaNombre: string,
    consultaUbicacion: string,
    consultaParametros?: string | null,
    consultaExternaPoligonos?: string | null,
    consultaIdExterna?: string | null,
    respuestaResultado?: string | null,
    respuestaIdentificadorExterno?: string | null,
    modeloId?: string | null,
    modeloName?: string | null,
    modeloDescription?: string | null,
    modeloVersion?: string | null,
    modeloDocumentLink?: string | null,
    modeloApiLink?: string | null,
    blockchainHashTransaccion?: string | null,
    fechaCreacion?: string | null,
    source: SourceType,
    proyecto?:  {
      __typename: "Proyecto",
      id: string,
      proyectoNombre: string,
      proyectoDescripcion?: string | null,
      proyectoIdExterno?: string | null,
      proyectoActivo: boolean,
      proyectoFechaCreacion?: string | null,
      proyectoFechaActualizacion?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    estados?:  {
      __typename: "ModelConsultaEstadoConnection",
      nextToken?: string | null,
    } | null,
    cuotasUso?:  {
      __typename: "ModelAnalisisCuotasUsoDiarioConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateConsultaEstadoSubscriptionVariables = {
  filter?: ModelSubscriptionConsultaEstadoFilterInput | null,
};

export type OnCreateConsultaEstadoSubscription = {
  onCreateConsultaEstado?:  {
    __typename: "ConsultaEstado",
    id: string,
    consultaId: string,
    estado: EstadoConsulta,
    estadoFecha: string,
    estadoUsername?: string | null,
    estadoObservaciones?: string | null,
    estadoTipoActor: EstadoTipoActor,
    consulta?:  {
      __typename: "ConsultaAnalisis",
      id: string,
      proyectoId?: string | null,
      consultaNombre: string,
      consultaUbicacion: string,
      consultaParametros?: string | null,
      consultaExternaPoligonos?: string | null,
      consultaIdExterna?: string | null,
      respuestaResultado?: string | null,
      respuestaIdentificadorExterno?: string | null,
      modeloId?: string | null,
      modeloName?: string | null,
      modeloDescription?: string | null,
      modeloVersion?: string | null,
      modeloDocumentLink?: string | null,
      modeloApiLink?: string | null,
      blockchainHashTransaccion?: string | null,
      fechaCreacion?: string | null,
      source: SourceType,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateConsultaEstadoSubscriptionVariables = {
  filter?: ModelSubscriptionConsultaEstadoFilterInput | null,
};

export type OnUpdateConsultaEstadoSubscription = {
  onUpdateConsultaEstado?:  {
    __typename: "ConsultaEstado",
    id: string,
    consultaId: string,
    estado: EstadoConsulta,
    estadoFecha: string,
    estadoUsername?: string | null,
    estadoObservaciones?: string | null,
    estadoTipoActor: EstadoTipoActor,
    consulta?:  {
      __typename: "ConsultaAnalisis",
      id: string,
      proyectoId?: string | null,
      consultaNombre: string,
      consultaUbicacion: string,
      consultaParametros?: string | null,
      consultaExternaPoligonos?: string | null,
      consultaIdExterna?: string | null,
      respuestaResultado?: string | null,
      respuestaIdentificadorExterno?: string | null,
      modeloId?: string | null,
      modeloName?: string | null,
      modeloDescription?: string | null,
      modeloVersion?: string | null,
      modeloDocumentLink?: string | null,
      modeloApiLink?: string | null,
      blockchainHashTransaccion?: string | null,
      fechaCreacion?: string | null,
      source: SourceType,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteConsultaEstadoSubscriptionVariables = {
  filter?: ModelSubscriptionConsultaEstadoFilterInput | null,
};

export type OnDeleteConsultaEstadoSubscription = {
  onDeleteConsultaEstado?:  {
    __typename: "ConsultaEstado",
    id: string,
    consultaId: string,
    estado: EstadoConsulta,
    estadoFecha: string,
    estadoUsername?: string | null,
    estadoObservaciones?: string | null,
    estadoTipoActor: EstadoTipoActor,
    consulta?:  {
      __typename: "ConsultaAnalisis",
      id: string,
      proyectoId?: string | null,
      consultaNombre: string,
      consultaUbicacion: string,
      consultaParametros?: string | null,
      consultaExternaPoligonos?: string | null,
      consultaIdExterna?: string | null,
      respuestaResultado?: string | null,
      respuestaIdentificadorExterno?: string | null,
      modeloId?: string | null,
      modeloName?: string | null,
      modeloDescription?: string | null,
      modeloVersion?: string | null,
      modeloDocumentLink?: string | null,
      modeloApiLink?: string | null,
      blockchainHashTransaccion?: string | null,
      fechaCreacion?: string | null,
      source: SourceType,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateAnalisisCuotaSubscriptionVariables = {
  filter?: ModelSubscriptionAnalisisCuotaFilterInput | null,
};

export type OnCreateAnalisisCuotaSubscription = {
  onCreateAnalisisCuota?:  {
    __typename: "AnalisisCuota",
    id: string,
    nombreGrupo: string,
    limiteDiario: number,
    activo: boolean,
    creadoEn?: string | null,
    actualizadoEn?: string | null,
    usosDiarios?:  {
      __typename: "ModelAnalisisCuotasUsoDiarioConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateAnalisisCuotaSubscriptionVariables = {
  filter?: ModelSubscriptionAnalisisCuotaFilterInput | null,
};

export type OnUpdateAnalisisCuotaSubscription = {
  onUpdateAnalisisCuota?:  {
    __typename: "AnalisisCuota",
    id: string,
    nombreGrupo: string,
    limiteDiario: number,
    activo: boolean,
    creadoEn?: string | null,
    actualizadoEn?: string | null,
    usosDiarios?:  {
      __typename: "ModelAnalisisCuotasUsoDiarioConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteAnalisisCuotaSubscriptionVariables = {
  filter?: ModelSubscriptionAnalisisCuotaFilterInput | null,
};

export type OnDeleteAnalisisCuotaSubscription = {
  onDeleteAnalisisCuota?:  {
    __typename: "AnalisisCuota",
    id: string,
    nombreGrupo: string,
    limiteDiario: number,
    activo: boolean,
    creadoEn?: string | null,
    actualizadoEn?: string | null,
    usosDiarios?:  {
      __typename: "ModelAnalisisCuotasUsoDiarioConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateAnalisisCuotasUsoDiarioSubscriptionVariables = {
  filter?: ModelSubscriptionAnalisisCuotasUsoDiarioFilterInput | null,
};

export type OnCreateAnalisisCuotasUsoDiarioSubscription = {
  onCreateAnalisisCuotasUsoDiario?:  {
    __typename: "AnalisisCuotasUsoDiario",
    id: string,
    usuarioNombre: string,
    grupoId: string,
    fechaUso: string,
    consultaId: string,
    creadoEn?: string | null,
    consulta?:  {
      __typename: "ConsultaAnalisis",
      id: string,
      proyectoId?: string | null,
      consultaNombre: string,
      consultaUbicacion: string,
      consultaParametros?: string | null,
      consultaExternaPoligonos?: string | null,
      consultaIdExterna?: string | null,
      respuestaResultado?: string | null,
      respuestaIdentificadorExterno?: string | null,
      modeloId?: string | null,
      modeloName?: string | null,
      modeloDescription?: string | null,
      modeloVersion?: string | null,
      modeloDocumentLink?: string | null,
      modeloApiLink?: string | null,
      blockchainHashTransaccion?: string | null,
      fechaCreacion?: string | null,
      source: SourceType,
      createdAt: string,
      updatedAt: string,
    } | null,
    grupo?:  {
      __typename: "AnalisisCuota",
      id: string,
      nombreGrupo: string,
      limiteDiario: number,
      activo: boolean,
      creadoEn?: string | null,
      actualizadoEn?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateAnalisisCuotasUsoDiarioSubscriptionVariables = {
  filter?: ModelSubscriptionAnalisisCuotasUsoDiarioFilterInput | null,
};

export type OnUpdateAnalisisCuotasUsoDiarioSubscription = {
  onUpdateAnalisisCuotasUsoDiario?:  {
    __typename: "AnalisisCuotasUsoDiario",
    id: string,
    usuarioNombre: string,
    grupoId: string,
    fechaUso: string,
    consultaId: string,
    creadoEn?: string | null,
    consulta?:  {
      __typename: "ConsultaAnalisis",
      id: string,
      proyectoId?: string | null,
      consultaNombre: string,
      consultaUbicacion: string,
      consultaParametros?: string | null,
      consultaExternaPoligonos?: string | null,
      consultaIdExterna?: string | null,
      respuestaResultado?: string | null,
      respuestaIdentificadorExterno?: string | null,
      modeloId?: string | null,
      modeloName?: string | null,
      modeloDescription?: string | null,
      modeloVersion?: string | null,
      modeloDocumentLink?: string | null,
      modeloApiLink?: string | null,
      blockchainHashTransaccion?: string | null,
      fechaCreacion?: string | null,
      source: SourceType,
      createdAt: string,
      updatedAt: string,
    } | null,
    grupo?:  {
      __typename: "AnalisisCuota",
      id: string,
      nombreGrupo: string,
      limiteDiario: number,
      activo: boolean,
      creadoEn?: string | null,
      actualizadoEn?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteAnalisisCuotasUsoDiarioSubscriptionVariables = {
  filter?: ModelSubscriptionAnalisisCuotasUsoDiarioFilterInput | null,
};

export type OnDeleteAnalisisCuotasUsoDiarioSubscription = {
  onDeleteAnalisisCuotasUsoDiario?:  {
    __typename: "AnalisisCuotasUsoDiario",
    id: string,
    usuarioNombre: string,
    grupoId: string,
    fechaUso: string,
    consultaId: string,
    creadoEn?: string | null,
    consulta?:  {
      __typename: "ConsultaAnalisis",
      id: string,
      proyectoId?: string | null,
      consultaNombre: string,
      consultaUbicacion: string,
      consultaParametros?: string | null,
      consultaExternaPoligonos?: string | null,
      consultaIdExterna?: string | null,
      respuestaResultado?: string | null,
      respuestaIdentificadorExterno?: string | null,
      modeloId?: string | null,
      modeloName?: string | null,
      modeloDescription?: string | null,
      modeloVersion?: string | null,
      modeloDocumentLink?: string | null,
      modeloApiLink?: string | null,
      blockchainHashTransaccion?: string | null,
      fechaCreacion?: string | null,
      source: SourceType,
      createdAt: string,
      updatedAt: string,
    } | null,
    grupo?:  {
      __typename: "AnalisisCuota",
      id: string,
      nombreGrupo: string,
      limiteDiario: number,
      activo: boolean,
      creadoEn?: string | null,
      actualizadoEn?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateDispositivoIotSubscriptionVariables = {
  filter?: ModelSubscriptionDispositivoIotFilterInput | null,
};

export type OnCreateDispositivoIotSubscription = {
  onCreateDispositivoIot?:  {
    __typename: "DispositivoIot",
    id: string,
    deviceId: string,
    nombre: string,
    departamento: string,
    zona: string,
    tipoDispositivo: TipoDispositivo,
    variablesPublicadas: string,
    localizacion?: string | null,
    estado: EstadoDispositivo,
    observaciones?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    grupos?:  {
      __typename: "ModelRelDispositivoGrupoIotConnection",
      nextToken?: string | null,
    } | null,
    mediciones?:  {
      __typename: "ModelMedicionIotConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnUpdateDispositivoIotSubscriptionVariables = {
  filter?: ModelSubscriptionDispositivoIotFilterInput | null,
};

export type OnUpdateDispositivoIotSubscription = {
  onUpdateDispositivoIot?:  {
    __typename: "DispositivoIot",
    id: string,
    deviceId: string,
    nombre: string,
    departamento: string,
    zona: string,
    tipoDispositivo: TipoDispositivo,
    variablesPublicadas: string,
    localizacion?: string | null,
    estado: EstadoDispositivo,
    observaciones?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    grupos?:  {
      __typename: "ModelRelDispositivoGrupoIotConnection",
      nextToken?: string | null,
    } | null,
    mediciones?:  {
      __typename: "ModelMedicionIotConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnDeleteDispositivoIotSubscriptionVariables = {
  filter?: ModelSubscriptionDispositivoIotFilterInput | null,
};

export type OnDeleteDispositivoIotSubscription = {
  onDeleteDispositivoIot?:  {
    __typename: "DispositivoIot",
    id: string,
    deviceId: string,
    nombre: string,
    departamento: string,
    zona: string,
    tipoDispositivo: TipoDispositivo,
    variablesPublicadas: string,
    localizacion?: string | null,
    estado: EstadoDispositivo,
    observaciones?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    grupos?:  {
      __typename: "ModelRelDispositivoGrupoIotConnection",
      nextToken?: string | null,
    } | null,
    mediciones?:  {
      __typename: "ModelMedicionIotConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnCreateGrupoIotSubscriptionVariables = {
  filter?: ModelSubscriptionGrupoIotFilterInput | null,
};

export type OnCreateGrupoIotSubscription = {
  onCreateGrupoIot?:  {
    __typename: "GrupoIot",
    id: string,
    nombre: string,
    descripcion?: string | null,
    estado: EstadoDispositivo,
    usuarioCreador?: string | null,
    observaciones?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    dispositivos?:  {
      __typename: "ModelRelDispositivoGrupoIotConnection",
      nextToken?: string | null,
    } | null,
    proyectos?:  {
      __typename: "ModelRelGrupoIotProyectoConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnUpdateGrupoIotSubscriptionVariables = {
  filter?: ModelSubscriptionGrupoIotFilterInput | null,
};

export type OnUpdateGrupoIotSubscription = {
  onUpdateGrupoIot?:  {
    __typename: "GrupoIot",
    id: string,
    nombre: string,
    descripcion?: string | null,
    estado: EstadoDispositivo,
    usuarioCreador?: string | null,
    observaciones?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    dispositivos?:  {
      __typename: "ModelRelDispositivoGrupoIotConnection",
      nextToken?: string | null,
    } | null,
    proyectos?:  {
      __typename: "ModelRelGrupoIotProyectoConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnDeleteGrupoIotSubscriptionVariables = {
  filter?: ModelSubscriptionGrupoIotFilterInput | null,
};

export type OnDeleteGrupoIotSubscription = {
  onDeleteGrupoIot?:  {
    __typename: "GrupoIot",
    id: string,
    nombre: string,
    descripcion?: string | null,
    estado: EstadoDispositivo,
    usuarioCreador?: string | null,
    observaciones?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    dispositivos?:  {
      __typename: "ModelRelDispositivoGrupoIotConnection",
      nextToken?: string | null,
    } | null,
    proyectos?:  {
      __typename: "ModelRelGrupoIotProyectoConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnCreateRelDispositivoGrupoIotSubscriptionVariables = {
  filter?: ModelSubscriptionRelDispositivoGrupoIotFilterInput | null,
};

export type OnCreateRelDispositivoGrupoIotSubscription = {
  onCreateRelDispositivoGrupoIot?:  {
    __typename: "RelDispositivoGrupoIot",
    id: string,
    dispositivoId: string,
    grupoId: string,
    fechaAsignacion?: string | null,
    usuarioId?: string | null,
    notas?: string | null,
    dispositivo?:  {
      __typename: "DispositivoIot",
      id: string,
      deviceId: string,
      nombre: string,
      departamento: string,
      zona: string,
      tipoDispositivo: TipoDispositivo,
      variablesPublicadas: string,
      localizacion?: string | null,
      estado: EstadoDispositivo,
      observaciones?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    grupo?:  {
      __typename: "GrupoIot",
      id: string,
      nombre: string,
      descripcion?: string | null,
      estado: EstadoDispositivo,
      usuarioCreador?: string | null,
      observaciones?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateRelDispositivoGrupoIotSubscriptionVariables = {
  filter?: ModelSubscriptionRelDispositivoGrupoIotFilterInput | null,
};

export type OnUpdateRelDispositivoGrupoIotSubscription = {
  onUpdateRelDispositivoGrupoIot?:  {
    __typename: "RelDispositivoGrupoIot",
    id: string,
    dispositivoId: string,
    grupoId: string,
    fechaAsignacion?: string | null,
    usuarioId?: string | null,
    notas?: string | null,
    dispositivo?:  {
      __typename: "DispositivoIot",
      id: string,
      deviceId: string,
      nombre: string,
      departamento: string,
      zona: string,
      tipoDispositivo: TipoDispositivo,
      variablesPublicadas: string,
      localizacion?: string | null,
      estado: EstadoDispositivo,
      observaciones?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    grupo?:  {
      __typename: "GrupoIot",
      id: string,
      nombre: string,
      descripcion?: string | null,
      estado: EstadoDispositivo,
      usuarioCreador?: string | null,
      observaciones?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteRelDispositivoGrupoIotSubscriptionVariables = {
  filter?: ModelSubscriptionRelDispositivoGrupoIotFilterInput | null,
};

export type OnDeleteRelDispositivoGrupoIotSubscription = {
  onDeleteRelDispositivoGrupoIot?:  {
    __typename: "RelDispositivoGrupoIot",
    id: string,
    dispositivoId: string,
    grupoId: string,
    fechaAsignacion?: string | null,
    usuarioId?: string | null,
    notas?: string | null,
    dispositivo?:  {
      __typename: "DispositivoIot",
      id: string,
      deviceId: string,
      nombre: string,
      departamento: string,
      zona: string,
      tipoDispositivo: TipoDispositivo,
      variablesPublicadas: string,
      localizacion?: string | null,
      estado: EstadoDispositivo,
      observaciones?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    grupo?:  {
      __typename: "GrupoIot",
      id: string,
      nombre: string,
      descripcion?: string | null,
      estado: EstadoDispositivo,
      usuarioCreador?: string | null,
      observaciones?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateRelGrupoIotProyectoSubscriptionVariables = {
  filter?: ModelSubscriptionRelGrupoIotProyectoFilterInput | null,
};

export type OnCreateRelGrupoIotProyectoSubscription = {
  onCreateRelGrupoIotProyecto?:  {
    __typename: "RelGrupoIotProyecto",
    id: string,
    grupoId: string,
    proyectoId: string,
    fechaAsignacion?: string | null,
    usuarioId?: string | null,
    notas?: string | null,
    grupo?:  {
      __typename: "GrupoIot",
      id: string,
      nombre: string,
      descripcion?: string | null,
      estado: EstadoDispositivo,
      usuarioCreador?: string | null,
      observaciones?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    proyecto?:  {
      __typename: "Proyecto",
      id: string,
      proyectoNombre: string,
      proyectoDescripcion?: string | null,
      proyectoIdExterno?: string | null,
      proyectoActivo: boolean,
      proyectoFechaCreacion?: string | null,
      proyectoFechaActualizacion?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateRelGrupoIotProyectoSubscriptionVariables = {
  filter?: ModelSubscriptionRelGrupoIotProyectoFilterInput | null,
};

export type OnUpdateRelGrupoIotProyectoSubscription = {
  onUpdateRelGrupoIotProyecto?:  {
    __typename: "RelGrupoIotProyecto",
    id: string,
    grupoId: string,
    proyectoId: string,
    fechaAsignacion?: string | null,
    usuarioId?: string | null,
    notas?: string | null,
    grupo?:  {
      __typename: "GrupoIot",
      id: string,
      nombre: string,
      descripcion?: string | null,
      estado: EstadoDispositivo,
      usuarioCreador?: string | null,
      observaciones?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    proyecto?:  {
      __typename: "Proyecto",
      id: string,
      proyectoNombre: string,
      proyectoDescripcion?: string | null,
      proyectoIdExterno?: string | null,
      proyectoActivo: boolean,
      proyectoFechaCreacion?: string | null,
      proyectoFechaActualizacion?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteRelGrupoIotProyectoSubscriptionVariables = {
  filter?: ModelSubscriptionRelGrupoIotProyectoFilterInput | null,
};

export type OnDeleteRelGrupoIotProyectoSubscription = {
  onDeleteRelGrupoIotProyecto?:  {
    __typename: "RelGrupoIotProyecto",
    id: string,
    grupoId: string,
    proyectoId: string,
    fechaAsignacion?: string | null,
    usuarioId?: string | null,
    notas?: string | null,
    grupo?:  {
      __typename: "GrupoIot",
      id: string,
      nombre: string,
      descripcion?: string | null,
      estado: EstadoDispositivo,
      usuarioCreador?: string | null,
      observaciones?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    proyecto?:  {
      __typename: "Proyecto",
      id: string,
      proyectoNombre: string,
      proyectoDescripcion?: string | null,
      proyectoIdExterno?: string | null,
      proyectoActivo: boolean,
      proyectoFechaCreacion?: string | null,
      proyectoFechaActualizacion?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateMedicionIotSubscriptionVariables = {
  filter?: ModelSubscriptionMedicionIotFilterInput | null,
};

export type OnCreateMedicionIotSubscription = {
  onCreateMedicionIot?:  {
    __typename: "MedicionIot",
    id: string,
    dispositivoId: string,
    deviceId: string,
    departamento: string,
    zona: string,
    variable: string,
    valor: number,
    timestamp: string,
    dispositivo?:  {
      __typename: "DispositivoIot",
      id: string,
      deviceId: string,
      nombre: string,
      departamento: string,
      zona: string,
      tipoDispositivo: TipoDispositivo,
      variablesPublicadas: string,
      localizacion?: string | null,
      estado: EstadoDispositivo,
      observaciones?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateMedicionIotSubscriptionVariables = {
  filter?: ModelSubscriptionMedicionIotFilterInput | null,
};

export type OnUpdateMedicionIotSubscription = {
  onUpdateMedicionIot?:  {
    __typename: "MedicionIot",
    id: string,
    dispositivoId: string,
    deviceId: string,
    departamento: string,
    zona: string,
    variable: string,
    valor: number,
    timestamp: string,
    dispositivo?:  {
      __typename: "DispositivoIot",
      id: string,
      deviceId: string,
      nombre: string,
      departamento: string,
      zona: string,
      tipoDispositivo: TipoDispositivo,
      variablesPublicadas: string,
      localizacion?: string | null,
      estado: EstadoDispositivo,
      observaciones?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteMedicionIotSubscriptionVariables = {
  filter?: ModelSubscriptionMedicionIotFilterInput | null,
};

export type OnDeleteMedicionIotSubscription = {
  onDeleteMedicionIot?:  {
    __typename: "MedicionIot",
    id: string,
    dispositivoId: string,
    deviceId: string,
    departamento: string,
    zona: string,
    variable: string,
    valor: number,
    timestamp: string,
    dispositivo?:  {
      __typename: "DispositivoIot",
      id: string,
      deviceId: string,
      nombre: string,
      departamento: string,
      zona: string,
      tipoDispositivo: TipoDispositivo,
      variablesPublicadas: string,
      localizacion?: string | null,
      estado: EstadoDispositivo,
      observaciones?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateProyectoLegacySubscriptionVariables = {
  filter?: ModelSubscriptionProyectoLegacyFilterInput | null,
};

export type OnCreateProyectoLegacySubscription = {
  onCreateProyectoLegacy?:  {
    __typename: "ProyectoLegacy",
    id: string,
    projectId: string,
    descripcion?: string | null,
    consultasWeb?:  {
      __typename: "ModelConsultaWebConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateProyectoLegacySubscriptionVariables = {
  filter?: ModelSubscriptionProyectoLegacyFilterInput | null,
};

export type OnUpdateProyectoLegacySubscription = {
  onUpdateProyectoLegacy?:  {
    __typename: "ProyectoLegacy",
    id: string,
    projectId: string,
    descripcion?: string | null,
    consultasWeb?:  {
      __typename: "ModelConsultaWebConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteProyectoLegacySubscriptionVariables = {
  filter?: ModelSubscriptionProyectoLegacyFilterInput | null,
};

export type OnDeleteProyectoLegacySubscription = {
  onDeleteProyectoLegacy?:  {
    __typename: "ProyectoLegacy",
    id: string,
    projectId: string,
    descripcion?: string | null,
    consultasWeb?:  {
      __typename: "ModelConsultaWebConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateConsultaWebSubscriptionVariables = {
  filter?: ModelSubscriptionConsultaWebFilterInput | null,
};

export type OnCreateConsultaWebSubscription = {
  onCreateConsultaWeb?:  {
    __typename: "ConsultaWeb",
    id: string,
    projectID?: string | null,
    imgAnteriorNombreImg?: string | null,
    imgAnteriorSatellite?: string | null,
    imgAnteriorYear?: number | null,
    imgAnteriorMesInicial?: number | null,
    imgAnteriorMesFinal?: number | null,
    imgAnteriorNubosidadMaxima?: number | null,
    imgAnteriorBandas?: string | null,
    imgPosteriorNombreImg?: string | null,
    imgPosteriorSatellite?: string | null,
    imgPosteriorYear?: number | null,
    imgPosteriorMesInicial?: number | null,
    imgPosteriorMesFinal?: number | null,
    imgPosteriorNubosidadMaxima?: number | null,
    imgPosteriorBandas?: string | null,
    fechaHoraConsulta?: string | null,
    usuarioEmailUpdate?: string | null,
    rawConsulta?: string | null,
    resultadoConsulta?: string | null,
    proyecto?:  {
      __typename: "ProyectoLegacy",
      id: string,
      projectId: string,
      descripcion?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateConsultaWebSubscriptionVariables = {
  filter?: ModelSubscriptionConsultaWebFilterInput | null,
};

export type OnUpdateConsultaWebSubscription = {
  onUpdateConsultaWeb?:  {
    __typename: "ConsultaWeb",
    id: string,
    projectID?: string | null,
    imgAnteriorNombreImg?: string | null,
    imgAnteriorSatellite?: string | null,
    imgAnteriorYear?: number | null,
    imgAnteriorMesInicial?: number | null,
    imgAnteriorMesFinal?: number | null,
    imgAnteriorNubosidadMaxima?: number | null,
    imgAnteriorBandas?: string | null,
    imgPosteriorNombreImg?: string | null,
    imgPosteriorSatellite?: string | null,
    imgPosteriorYear?: number | null,
    imgPosteriorMesInicial?: number | null,
    imgPosteriorMesFinal?: number | null,
    imgPosteriorNubosidadMaxima?: number | null,
    imgPosteriorBandas?: string | null,
    fechaHoraConsulta?: string | null,
    usuarioEmailUpdate?: string | null,
    rawConsulta?: string | null,
    resultadoConsulta?: string | null,
    proyecto?:  {
      __typename: "ProyectoLegacy",
      id: string,
      projectId: string,
      descripcion?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteConsultaWebSubscriptionVariables = {
  filter?: ModelSubscriptionConsultaWebFilterInput | null,
};

export type OnDeleteConsultaWebSubscription = {
  onDeleteConsultaWeb?:  {
    __typename: "ConsultaWeb",
    id: string,
    projectID?: string | null,
    imgAnteriorNombreImg?: string | null,
    imgAnteriorSatellite?: string | null,
    imgAnteriorYear?: number | null,
    imgAnteriorMesInicial?: number | null,
    imgAnteriorMesFinal?: number | null,
    imgAnteriorNubosidadMaxima?: number | null,
    imgAnteriorBandas?: string | null,
    imgPosteriorNombreImg?: string | null,
    imgPosteriorSatellite?: string | null,
    imgPosteriorYear?: number | null,
    imgPosteriorMesInicial?: number | null,
    imgPosteriorMesFinal?: number | null,
    imgPosteriorNubosidadMaxima?: number | null,
    imgPosteriorBandas?: string | null,
    fechaHoraConsulta?: string | null,
    usuarioEmailUpdate?: string | null,
    rawConsulta?: string | null,
    resultadoConsulta?: string | null,
    proyecto?:  {
      __typename: "ProyectoLegacy",
      id: string,
      projectId: string,
      descripcion?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateConsultaApiSubscriptionVariables = {
  filter?: ModelSubscriptionConsultaApiFilterInput | null,
};

export type OnCreateConsultaApiSubscription = {
  onCreateConsultaApi?:  {
    __typename: "ConsultaApi",
    id: string,
    projectID?: string | null,
    cedulaCatastral?: string | null,
    imgAnteriorNombreImg?: string | null,
    imgAnteriorSatellite?: string | null,
    imgAnteriorYear?: number | null,
    imgAnteriorMesInicial?: number | null,
    imgAnteriorMesFinal?: number | null,
    imgAnteriorNubosidadMaxima?: number | null,
    imgAnteriorBandas?: string | null,
    imgPosteriorNombreImg?: string | null,
    imgPosteriorSatellite?: string | null,
    imgPosteriorYear?: number | null,
    imgPosteriorMesInicial?: number | null,
    imgPosteriorMesFinal?: number | null,
    imgPosteriorNubosidadMaxima?: number | null,
    imgPosteriorBandas?: string | null,
    fechaHoraConsulta?: string | null,
    fechaHoraActualizacion?: string | null,
    usuarioEmailUpdate?: string | null,
    verificado: boolean,
    rawConsulta?: string | null,
    resultadoConsulta?: string | null,
    hashBlockchain?: string | null,
    indexNumberBlockchain?: number | null,
    timestampBlockchain?: string | null,
    onchainBlockchain: boolean,
    txIdBlockchain?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateConsultaApiSubscriptionVariables = {
  filter?: ModelSubscriptionConsultaApiFilterInput | null,
};

export type OnUpdateConsultaApiSubscription = {
  onUpdateConsultaApi?:  {
    __typename: "ConsultaApi",
    id: string,
    projectID?: string | null,
    cedulaCatastral?: string | null,
    imgAnteriorNombreImg?: string | null,
    imgAnteriorSatellite?: string | null,
    imgAnteriorYear?: number | null,
    imgAnteriorMesInicial?: number | null,
    imgAnteriorMesFinal?: number | null,
    imgAnteriorNubosidadMaxima?: number | null,
    imgAnteriorBandas?: string | null,
    imgPosteriorNombreImg?: string | null,
    imgPosteriorSatellite?: string | null,
    imgPosteriorYear?: number | null,
    imgPosteriorMesInicial?: number | null,
    imgPosteriorMesFinal?: number | null,
    imgPosteriorNubosidadMaxima?: number | null,
    imgPosteriorBandas?: string | null,
    fechaHoraConsulta?: string | null,
    fechaHoraActualizacion?: string | null,
    usuarioEmailUpdate?: string | null,
    verificado: boolean,
    rawConsulta?: string | null,
    resultadoConsulta?: string | null,
    hashBlockchain?: string | null,
    indexNumberBlockchain?: number | null,
    timestampBlockchain?: string | null,
    onchainBlockchain: boolean,
    txIdBlockchain?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteConsultaApiSubscriptionVariables = {
  filter?: ModelSubscriptionConsultaApiFilterInput | null,
};

export type OnDeleteConsultaApiSubscription = {
  onDeleteConsultaApi?:  {
    __typename: "ConsultaApi",
    id: string,
    projectID?: string | null,
    cedulaCatastral?: string | null,
    imgAnteriorNombreImg?: string | null,
    imgAnteriorSatellite?: string | null,
    imgAnteriorYear?: number | null,
    imgAnteriorMesInicial?: number | null,
    imgAnteriorMesFinal?: number | null,
    imgAnteriorNubosidadMaxima?: number | null,
    imgAnteriorBandas?: string | null,
    imgPosteriorNombreImg?: string | null,
    imgPosteriorSatellite?: string | null,
    imgPosteriorYear?: number | null,
    imgPosteriorMesInicial?: number | null,
    imgPosteriorMesFinal?: number | null,
    imgPosteriorNubosidadMaxima?: number | null,
    imgPosteriorBandas?: string | null,
    fechaHoraConsulta?: string | null,
    fechaHoraActualizacion?: string | null,
    usuarioEmailUpdate?: string | null,
    verificado: boolean,
    rawConsulta?: string | null,
    resultadoConsulta?: string | null,
    hashBlockchain?: string | null,
    indexNumberBlockchain?: number | null,
    timestampBlockchain?: string | null,
    onchainBlockchain: boolean,
    txIdBlockchain?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateIotSessionSubscriptionVariables = {
  filter?: ModelSubscriptionIotSessionFilterInput | null,
};

export type OnCreateIotSessionSubscription = {
  onCreateIotSession?:  {
    __typename: "IotSession",
    id: string,
    sessionId: string,
    iotData: string,
    createdAt?: string | null,
    expiresAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateIotSessionSubscriptionVariables = {
  filter?: ModelSubscriptionIotSessionFilterInput | null,
};

export type OnUpdateIotSessionSubscription = {
  onUpdateIotSession?:  {
    __typename: "IotSession",
    id: string,
    sessionId: string,
    iotData: string,
    createdAt?: string | null,
    expiresAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteIotSessionSubscriptionVariables = {
  filter?: ModelSubscriptionIotSessionFilterInput | null,
};

export type OnDeleteIotSessionSubscription = {
  onDeleteIotSession?:  {
    __typename: "IotSession",
    id: string,
    sessionId: string,
    iotData: string,
    createdAt?: string | null,
    expiresAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateConstructorFormulaCategoriaSubscriptionVariables = {
  filter?: ModelSubscriptionConstructorFormulaCategoriaFilterInput | null,
};

export type OnCreateConstructorFormulaCategoriaSubscription = {
  onCreateConstructorFormulaCategoria?:  {
    __typename: "ConstructorFormulaCategoria",
    id: string,
    nombre: string,
    estado: boolean,
    variables?:  {
      __typename: "ModelConstructorFormulaVariableConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateConstructorFormulaCategoriaSubscriptionVariables = {
  filter?: ModelSubscriptionConstructorFormulaCategoriaFilterInput | null,
};

export type OnUpdateConstructorFormulaCategoriaSubscription = {
  onUpdateConstructorFormulaCategoria?:  {
    __typename: "ConstructorFormulaCategoria",
    id: string,
    nombre: string,
    estado: boolean,
    variables?:  {
      __typename: "ModelConstructorFormulaVariableConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteConstructorFormulaCategoriaSubscriptionVariables = {
  filter?: ModelSubscriptionConstructorFormulaCategoriaFilterInput | null,
};

export type OnDeleteConstructorFormulaCategoriaSubscription = {
  onDeleteConstructorFormulaCategoria?:  {
    __typename: "ConstructorFormulaCategoria",
    id: string,
    nombre: string,
    estado: boolean,
    variables?:  {
      __typename: "ModelConstructorFormulaVariableConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateConstructorFormulaVariableSubscriptionVariables = {
  filter?: ModelSubscriptionConstructorFormulaVariableFilterInput | null,
};

export type OnCreateConstructorFormulaVariableSubscription = {
  onCreateConstructorFormulaVariable?:  {
    __typename: "ConstructorFormulaVariable",
    id: string,
    nombre: string,
    simbolo: string,
    unidades: string,
    descripcion: string,
    categoriaId?: string | null,
    estado: boolean,
    categoria?:  {
      __typename: "ConstructorFormulaCategoria",
      id: string,
      nombre: string,
      estado: boolean,
      createdAt: string,
      updatedAt: string,
    } | null,
    formulas?:  {
      __typename: "ModelConstructorFormulaVariableRelConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateConstructorFormulaVariableSubscriptionVariables = {
  filter?: ModelSubscriptionConstructorFormulaVariableFilterInput | null,
};

export type OnUpdateConstructorFormulaVariableSubscription = {
  onUpdateConstructorFormulaVariable?:  {
    __typename: "ConstructorFormulaVariable",
    id: string,
    nombre: string,
    simbolo: string,
    unidades: string,
    descripcion: string,
    categoriaId?: string | null,
    estado: boolean,
    categoria?:  {
      __typename: "ConstructorFormulaCategoria",
      id: string,
      nombre: string,
      estado: boolean,
      createdAt: string,
      updatedAt: string,
    } | null,
    formulas?:  {
      __typename: "ModelConstructorFormulaVariableRelConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteConstructorFormulaVariableSubscriptionVariables = {
  filter?: ModelSubscriptionConstructorFormulaVariableFilterInput | null,
};

export type OnDeleteConstructorFormulaVariableSubscription = {
  onDeleteConstructorFormulaVariable?:  {
    __typename: "ConstructorFormulaVariable",
    id: string,
    nombre: string,
    simbolo: string,
    unidades: string,
    descripcion: string,
    categoriaId?: string | null,
    estado: boolean,
    categoria?:  {
      __typename: "ConstructorFormulaCategoria",
      id: string,
      nombre: string,
      estado: boolean,
      createdAt: string,
      updatedAt: string,
    } | null,
    formulas?:  {
      __typename: "ModelConstructorFormulaVariableRelConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateConstructorFormulaSubscriptionVariables = {
  filter?: ModelSubscriptionConstructorFormulaFilterInput | null,
};

export type OnCreateConstructorFormulaSubscription = {
  onCreateConstructorFormula?:  {
    __typename: "ConstructorFormula",
    id: string,
    nombre: string,
    descripcion: string,
    fuente?: string | null,
    usuarioId?: string | null,
    tipoFormula: TipoFormula,
    estado: boolean,
    expresionJson?: string | null,
    fechaCreacion?: string | null,
    version: number,
    versionActiva: boolean,
    variables?:  {
      __typename: "ModelConstructorFormulaVariableRelConnection",
      nextToken?: string | null,
    } | null,
    teledeteccion?:  {
      __typename: "ModelFormulaTeledeteccionConnection",
      nextToken?: string | null,
    } | null,
    deepLearning?:  {
      __typename: "ModelFormulaDeepLearningConnection",
      nextToken?: string | null,
    } | null,
    historial?:  {
      __typename: "ModelFormulaHistorialConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateConstructorFormulaSubscriptionVariables = {
  filter?: ModelSubscriptionConstructorFormulaFilterInput | null,
};

export type OnUpdateConstructorFormulaSubscription = {
  onUpdateConstructorFormula?:  {
    __typename: "ConstructorFormula",
    id: string,
    nombre: string,
    descripcion: string,
    fuente?: string | null,
    usuarioId?: string | null,
    tipoFormula: TipoFormula,
    estado: boolean,
    expresionJson?: string | null,
    fechaCreacion?: string | null,
    version: number,
    versionActiva: boolean,
    variables?:  {
      __typename: "ModelConstructorFormulaVariableRelConnection",
      nextToken?: string | null,
    } | null,
    teledeteccion?:  {
      __typename: "ModelFormulaTeledeteccionConnection",
      nextToken?: string | null,
    } | null,
    deepLearning?:  {
      __typename: "ModelFormulaDeepLearningConnection",
      nextToken?: string | null,
    } | null,
    historial?:  {
      __typename: "ModelFormulaHistorialConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteConstructorFormulaSubscriptionVariables = {
  filter?: ModelSubscriptionConstructorFormulaFilterInput | null,
};

export type OnDeleteConstructorFormulaSubscription = {
  onDeleteConstructorFormula?:  {
    __typename: "ConstructorFormula",
    id: string,
    nombre: string,
    descripcion: string,
    fuente?: string | null,
    usuarioId?: string | null,
    tipoFormula: TipoFormula,
    estado: boolean,
    expresionJson?: string | null,
    fechaCreacion?: string | null,
    version: number,
    versionActiva: boolean,
    variables?:  {
      __typename: "ModelConstructorFormulaVariableRelConnection",
      nextToken?: string | null,
    } | null,
    teledeteccion?:  {
      __typename: "ModelFormulaTeledeteccionConnection",
      nextToken?: string | null,
    } | null,
    deepLearning?:  {
      __typename: "ModelFormulaDeepLearningConnection",
      nextToken?: string | null,
    } | null,
    historial?:  {
      __typename: "ModelFormulaHistorialConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateConstructorFormulaVariableRelSubscriptionVariables = {
  filter?: ModelSubscriptionConstructorFormulaVariableRelFilterInput | null,
};

export type OnCreateConstructorFormulaVariableRelSubscription = {
  onCreateConstructorFormulaVariableRel?:  {
    __typename: "ConstructorFormulaVariableRel",
    id: string,
    formulaId: string,
    variableId: string,
    formula?:  {
      __typename: "ConstructorFormula",
      id: string,
      nombre: string,
      descripcion: string,
      fuente?: string | null,
      usuarioId?: string | null,
      tipoFormula: TipoFormula,
      estado: boolean,
      expresionJson?: string | null,
      fechaCreacion?: string | null,
      version: number,
      versionActiva: boolean,
      createdAt: string,
      updatedAt: string,
    } | null,
    variable?:  {
      __typename: "ConstructorFormulaVariable",
      id: string,
      nombre: string,
      simbolo: string,
      unidades: string,
      descripcion: string,
      categoriaId?: string | null,
      estado: boolean,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateConstructorFormulaVariableRelSubscriptionVariables = {
  filter?: ModelSubscriptionConstructorFormulaVariableRelFilterInput | null,
};

export type OnUpdateConstructorFormulaVariableRelSubscription = {
  onUpdateConstructorFormulaVariableRel?:  {
    __typename: "ConstructorFormulaVariableRel",
    id: string,
    formulaId: string,
    variableId: string,
    formula?:  {
      __typename: "ConstructorFormula",
      id: string,
      nombre: string,
      descripcion: string,
      fuente?: string | null,
      usuarioId?: string | null,
      tipoFormula: TipoFormula,
      estado: boolean,
      expresionJson?: string | null,
      fechaCreacion?: string | null,
      version: number,
      versionActiva: boolean,
      createdAt: string,
      updatedAt: string,
    } | null,
    variable?:  {
      __typename: "ConstructorFormulaVariable",
      id: string,
      nombre: string,
      simbolo: string,
      unidades: string,
      descripcion: string,
      categoriaId?: string | null,
      estado: boolean,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteConstructorFormulaVariableRelSubscriptionVariables = {
  filter?: ModelSubscriptionConstructorFormulaVariableRelFilterInput | null,
};

export type OnDeleteConstructorFormulaVariableRelSubscription = {
  onDeleteConstructorFormulaVariableRel?:  {
    __typename: "ConstructorFormulaVariableRel",
    id: string,
    formulaId: string,
    variableId: string,
    formula?:  {
      __typename: "ConstructorFormula",
      id: string,
      nombre: string,
      descripcion: string,
      fuente?: string | null,
      usuarioId?: string | null,
      tipoFormula: TipoFormula,
      estado: boolean,
      expresionJson?: string | null,
      fechaCreacion?: string | null,
      version: number,
      versionActiva: boolean,
      createdAt: string,
      updatedAt: string,
    } | null,
    variable?:  {
      __typename: "ConstructorFormulaVariable",
      id: string,
      nombre: string,
      simbolo: string,
      unidades: string,
      descripcion: string,
      categoriaId?: string | null,
      estado: boolean,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateFormulaTeledeteccionSubscriptionVariables = {
  filter?: ModelSubscriptionFormulaTeledeteccionFilterInput | null,
};

export type OnCreateFormulaTeledeteccionSubscription = {
  onCreateFormulaTeledeteccion?:  {
    __typename: "FormulaTeledeteccion",
    id: string,
    formulaId: string,
    codigoScript: string,
    tipoEntrada: string,
    parametrosJson?: string | null,
    formula?:  {
      __typename: "ConstructorFormula",
      id: string,
      nombre: string,
      descripcion: string,
      fuente?: string | null,
      usuarioId?: string | null,
      tipoFormula: TipoFormula,
      estado: boolean,
      expresionJson?: string | null,
      fechaCreacion?: string | null,
      version: number,
      versionActiva: boolean,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateFormulaTeledeteccionSubscriptionVariables = {
  filter?: ModelSubscriptionFormulaTeledeteccionFilterInput | null,
};

export type OnUpdateFormulaTeledeteccionSubscription = {
  onUpdateFormulaTeledeteccion?:  {
    __typename: "FormulaTeledeteccion",
    id: string,
    formulaId: string,
    codigoScript: string,
    tipoEntrada: string,
    parametrosJson?: string | null,
    formula?:  {
      __typename: "ConstructorFormula",
      id: string,
      nombre: string,
      descripcion: string,
      fuente?: string | null,
      usuarioId?: string | null,
      tipoFormula: TipoFormula,
      estado: boolean,
      expresionJson?: string | null,
      fechaCreacion?: string | null,
      version: number,
      versionActiva: boolean,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteFormulaTeledeteccionSubscriptionVariables = {
  filter?: ModelSubscriptionFormulaTeledeteccionFilterInput | null,
};

export type OnDeleteFormulaTeledeteccionSubscription = {
  onDeleteFormulaTeledeteccion?:  {
    __typename: "FormulaTeledeteccion",
    id: string,
    formulaId: string,
    codigoScript: string,
    tipoEntrada: string,
    parametrosJson?: string | null,
    formula?:  {
      __typename: "ConstructorFormula",
      id: string,
      nombre: string,
      descripcion: string,
      fuente?: string | null,
      usuarioId?: string | null,
      tipoFormula: TipoFormula,
      estado: boolean,
      expresionJson?: string | null,
      fechaCreacion?: string | null,
      version: number,
      versionActiva: boolean,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateFormulaDeepLearningSubscriptionVariables = {
  filter?: ModelSubscriptionFormulaDeepLearningFilterInput | null,
};

export type OnCreateFormulaDeepLearningSubscription = {
  onCreateFormulaDeepLearning?:  {
    __typename: "FormulaDeepLearning",
    id: string,
    formulaId: string,
    rutaModelo: string,
    rutaEtiquetas: string,
    parametrosJson?: string | null,
    formula?:  {
      __typename: "ConstructorFormula",
      id: string,
      nombre: string,
      descripcion: string,
      fuente?: string | null,
      usuarioId?: string | null,
      tipoFormula: TipoFormula,
      estado: boolean,
      expresionJson?: string | null,
      fechaCreacion?: string | null,
      version: number,
      versionActiva: boolean,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateFormulaDeepLearningSubscriptionVariables = {
  filter?: ModelSubscriptionFormulaDeepLearningFilterInput | null,
};

export type OnUpdateFormulaDeepLearningSubscription = {
  onUpdateFormulaDeepLearning?:  {
    __typename: "FormulaDeepLearning",
    id: string,
    formulaId: string,
    rutaModelo: string,
    rutaEtiquetas: string,
    parametrosJson?: string | null,
    formula?:  {
      __typename: "ConstructorFormula",
      id: string,
      nombre: string,
      descripcion: string,
      fuente?: string | null,
      usuarioId?: string | null,
      tipoFormula: TipoFormula,
      estado: boolean,
      expresionJson?: string | null,
      fechaCreacion?: string | null,
      version: number,
      versionActiva: boolean,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteFormulaDeepLearningSubscriptionVariables = {
  filter?: ModelSubscriptionFormulaDeepLearningFilterInput | null,
};

export type OnDeleteFormulaDeepLearningSubscription = {
  onDeleteFormulaDeepLearning?:  {
    __typename: "FormulaDeepLearning",
    id: string,
    formulaId: string,
    rutaModelo: string,
    rutaEtiquetas: string,
    parametrosJson?: string | null,
    formula?:  {
      __typename: "ConstructorFormula",
      id: string,
      nombre: string,
      descripcion: string,
      fuente?: string | null,
      usuarioId?: string | null,
      tipoFormula: TipoFormula,
      estado: boolean,
      expresionJson?: string | null,
      fechaCreacion?: string | null,
      version: number,
      versionActiva: boolean,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateFormulaHistorialSubscriptionVariables = {
  filter?: ModelSubscriptionFormulaHistorialFilterInput | null,
};

export type OnCreateFormulaHistorialSubscription = {
  onCreateFormulaHistorial?:  {
    __typename: "FormulaHistorial",
    id: string,
    formulaId: string,
    version: number,
    fechaModificacion?: string | null,
    datosJson: string,
    usuarioId?: string | null,
    formula?:  {
      __typename: "ConstructorFormula",
      id: string,
      nombre: string,
      descripcion: string,
      fuente?: string | null,
      usuarioId?: string | null,
      tipoFormula: TipoFormula,
      estado: boolean,
      expresionJson?: string | null,
      fechaCreacion?: string | null,
      version: number,
      versionActiva: boolean,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateFormulaHistorialSubscriptionVariables = {
  filter?: ModelSubscriptionFormulaHistorialFilterInput | null,
};

export type OnUpdateFormulaHistorialSubscription = {
  onUpdateFormulaHistorial?:  {
    __typename: "FormulaHistorial",
    id: string,
    formulaId: string,
    version: number,
    fechaModificacion?: string | null,
    datosJson: string,
    usuarioId?: string | null,
    formula?:  {
      __typename: "ConstructorFormula",
      id: string,
      nombre: string,
      descripcion: string,
      fuente?: string | null,
      usuarioId?: string | null,
      tipoFormula: TipoFormula,
      estado: boolean,
      expresionJson?: string | null,
      fechaCreacion?: string | null,
      version: number,
      versionActiva: boolean,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteFormulaHistorialSubscriptionVariables = {
  filter?: ModelSubscriptionFormulaHistorialFilterInput | null,
};

export type OnDeleteFormulaHistorialSubscription = {
  onDeleteFormulaHistorial?:  {
    __typename: "FormulaHistorial",
    id: string,
    formulaId: string,
    version: number,
    fechaModificacion?: string | null,
    datosJson: string,
    usuarioId?: string | null,
    formula?:  {
      __typename: "ConstructorFormula",
      id: string,
      nombre: string,
      descripcion: string,
      fuente?: string | null,
      usuarioId?: string | null,
      tipoFormula: TipoFormula,
      estado: boolean,
      expresionJson?: string | null,
      fechaCreacion?: string | null,
      version: number,
      versionActiva: boolean,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateAccessDeadlineSubscriptionVariables = {
  filter?: ModelSubscriptionAccessDeadlineFilterInput | null,
};

export type OnCreateAccessDeadlineSubscription = {
  onCreateAccessDeadline?:  {
    __typename: "AccessDeadline",
    id: string,
    subjectType: SubjectType,
    subjectKey: string,
    deadline: string,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type OnUpdateAccessDeadlineSubscriptionVariables = {
  filter?: ModelSubscriptionAccessDeadlineFilterInput | null,
};

export type OnUpdateAccessDeadlineSubscription = {
  onUpdateAccessDeadline?:  {
    __typename: "AccessDeadline",
    id: string,
    subjectType: SubjectType,
    subjectKey: string,
    deadline: string,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type OnDeleteAccessDeadlineSubscriptionVariables = {
  filter?: ModelSubscriptionAccessDeadlineFilterInput | null,
};

export type OnDeleteAccessDeadlineSubscription = {
  onDeleteAccessDeadline?:  {
    __typename: "AccessDeadline",
    id: string,
    subjectType: SubjectType,
    subjectKey: string,
    deadline: string,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type OnCreateRoutePermissionSubscriptionVariables = {
  filter?: ModelSubscriptionRoutePermissionFilterInput | null,
};

export type OnCreateRoutePermissionSubscription = {
  onCreateRoutePermission?:  {
    __typename: "RoutePermission",
    id: string,
    subjectType: SubjectType,
    subjectKey: string,
    tagName: string,
    method: string,
    allow: boolean,
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateRoutePermissionSubscriptionVariables = {
  filter?: ModelSubscriptionRoutePermissionFilterInput | null,
};

export type OnUpdateRoutePermissionSubscription = {
  onUpdateRoutePermission?:  {
    __typename: "RoutePermission",
    id: string,
    subjectType: SubjectType,
    subjectKey: string,
    tagName: string,
    method: string,
    allow: boolean,
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteRoutePermissionSubscriptionVariables = {
  filter?: ModelSubscriptionRoutePermissionFilterInput | null,
};

export type OnDeleteRoutePermissionSubscription = {
  onDeleteRoutePermission?:  {
    __typename: "RoutePermission",
    id: string,
    subjectType: SubjectType,
    subjectKey: string,
    tagName: string,
    method: string,
    allow: boolean,
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type OnCreateApiCredentialSubscriptionVariables = {
  filter?: ModelSubscriptionApiCredentialFilterInput | null,
};

export type OnCreateApiCredentialSubscription = {
  onCreateApiCredential?:  {
    __typename: "ApiCredential",
    id: string,
    name: string,
    apiKeyHash: string,
    active: boolean,
    allowedIps?: string | null,
    expiresAt?: string | null,
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateApiCredentialSubscriptionVariables = {
  filter?: ModelSubscriptionApiCredentialFilterInput | null,
};

export type OnUpdateApiCredentialSubscription = {
  onUpdateApiCredential?:  {
    __typename: "ApiCredential",
    id: string,
    name: string,
    apiKeyHash: string,
    active: boolean,
    allowedIps?: string | null,
    expiresAt?: string | null,
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteApiCredentialSubscriptionVariables = {
  filter?: ModelSubscriptionApiCredentialFilterInput | null,
};

export type OnDeleteApiCredentialSubscription = {
  onDeleteApiCredential?:  {
    __typename: "ApiCredential",
    id: string,
    name: string,
    apiKeyHash: string,
    active: boolean,
    allowedIps?: string | null,
    expiresAt?: string | null,
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type OnCreatePermVersionSubscriptionVariables = {
  filter?: ModelSubscriptionPermVersionFilterInput | null,
};

export type OnCreatePermVersionSubscription = {
  onCreatePermVersion?:  {
    __typename: "PermVersion",
    id: string,
    updatedAt?: string | null,
    createdAt: string,
  } | null,
};

export type OnUpdatePermVersionSubscriptionVariables = {
  filter?: ModelSubscriptionPermVersionFilterInput | null,
};

export type OnUpdatePermVersionSubscription = {
  onUpdatePermVersion?:  {
    __typename: "PermVersion",
    id: string,
    updatedAt?: string | null,
    createdAt: string,
  } | null,
};

export type OnDeletePermVersionSubscriptionVariables = {
  filter?: ModelSubscriptionPermVersionFilterInput | null,
};

export type OnDeletePermVersionSubscription = {
  onDeletePermVersion?:  {
    __typename: "PermVersion",
    id: string,
    updatedAt?: string | null,
    createdAt: string,
  } | null,
};

export type OnCreateUnitOfMeasureSubscriptionVariables = {
  filter?: ModelSubscriptionUnitOfMeasureFilterInput | null,
};

export type OnCreateUnitOfMeasureSubscription = {
  onCreateUnitOfMeasure?:  {
    __typename: "UnitOfMeasure",
    id: string,
    name: string,
    abbreviation?: string | null,
    features?:  {
      __typename: "ModelFeatureConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUnitOfMeasureSubscriptionVariables = {
  filter?: ModelSubscriptionUnitOfMeasureFilterInput | null,
};

export type OnUpdateUnitOfMeasureSubscription = {
  onUpdateUnitOfMeasure?:  {
    __typename: "UnitOfMeasure",
    id: string,
    name: string,
    abbreviation?: string | null,
    features?:  {
      __typename: "ModelFeatureConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUnitOfMeasureSubscriptionVariables = {
  filter?: ModelSubscriptionUnitOfMeasureFilterInput | null,
};

export type OnDeleteUnitOfMeasureSubscription = {
  onDeleteUnitOfMeasure?:  {
    __typename: "UnitOfMeasure",
    id: string,
    name: string,
    abbreviation?: string | null,
    features?:  {
      __typename: "ModelFeatureConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateProjectSubscriptionVariables = {
  filter?: ModelSubscriptionProjectFilterInput | null,
};

export type OnCreateProjectSubscription = {
  onCreateProject?:  {
    __typename: "Project",
    id: string,
    name: string,
    status: string,
    trees?:  {
      __typename: "ModelTreeConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateProjectSubscriptionVariables = {
  filter?: ModelSubscriptionProjectFilterInput | null,
};

export type OnUpdateProjectSubscription = {
  onUpdateProject?:  {
    __typename: "Project",
    id: string,
    name: string,
    status: string,
    trees?:  {
      __typename: "ModelTreeConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteProjectSubscriptionVariables = {
  filter?: ModelSubscriptionProjectFilterInput | null,
};

export type OnDeleteProjectSubscription = {
  onDeleteProject?:  {
    __typename: "Project",
    id: string,
    name: string,
    status: string,
    trees?:  {
      __typename: "ModelTreeConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateTemplateSubscriptionVariables = {
  filter?: ModelSubscriptionTemplateFilterInput | null,
};

export type OnCreateTemplateSubscription = {
  onCreateTemplate?:  {
    __typename: "Template",
    id: string,
    name: string,
    description?: string | null,
    type: number,
    version?: string | null,
    is_latest: boolean,
    templateParent?:  {
      __typename: "Template",
      id: string,
      name: string,
      description?: string | null,
      type: number,
      version?: string | null,
      is_latest: boolean,
      createdAt: string,
      updatedAt: string,
      templateTemplatesId?: string | null,
    } | null,
    templates?:  {
      __typename: "ModelTemplateConnection",
      nextToken?: string | null,
    } | null,
    templateFeatures?:  {
      __typename: "ModelTemplateFeatureConnection",
      nextToken?: string | null,
    } | null,
    trees?:  {
      __typename: "ModelTreeConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    templateTemplatesId?: string | null,
  } | null,
};

export type OnUpdateTemplateSubscriptionVariables = {
  filter?: ModelSubscriptionTemplateFilterInput | null,
};

export type OnUpdateTemplateSubscription = {
  onUpdateTemplate?:  {
    __typename: "Template",
    id: string,
    name: string,
    description?: string | null,
    type: number,
    version?: string | null,
    is_latest: boolean,
    templateParent?:  {
      __typename: "Template",
      id: string,
      name: string,
      description?: string | null,
      type: number,
      version?: string | null,
      is_latest: boolean,
      createdAt: string,
      updatedAt: string,
      templateTemplatesId?: string | null,
    } | null,
    templates?:  {
      __typename: "ModelTemplateConnection",
      nextToken?: string | null,
    } | null,
    templateFeatures?:  {
      __typename: "ModelTemplateFeatureConnection",
      nextToken?: string | null,
    } | null,
    trees?:  {
      __typename: "ModelTreeConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    templateTemplatesId?: string | null,
  } | null,
};

export type OnDeleteTemplateSubscriptionVariables = {
  filter?: ModelSubscriptionTemplateFilterInput | null,
};

export type OnDeleteTemplateSubscription = {
  onDeleteTemplate?:  {
    __typename: "Template",
    id: string,
    name: string,
    description?: string | null,
    type: number,
    version?: string | null,
    is_latest: boolean,
    templateParent?:  {
      __typename: "Template",
      id: string,
      name: string,
      description?: string | null,
      type: number,
      version?: string | null,
      is_latest: boolean,
      createdAt: string,
      updatedAt: string,
      templateTemplatesId?: string | null,
    } | null,
    templates?:  {
      __typename: "ModelTemplateConnection",
      nextToken?: string | null,
    } | null,
    templateFeatures?:  {
      __typename: "ModelTemplateFeatureConnection",
      nextToken?: string | null,
    } | null,
    trees?:  {
      __typename: "ModelTreeConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    templateTemplatesId?: string | null,
  } | null,
};

export type OnCreateTreeSubscriptionVariables = {
  filter?: ModelSubscriptionTreeFilterInput | null,
};

export type OnCreateTreeSubscription = {
  onCreateTree?:  {
    __typename: "Tree",
    id: string,
    name: string,
    status?: string | null,
    project?:  {
      __typename: "Project",
      id: string,
      name: string,
      status: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    template?:  {
      __typename: "Template",
      id: string,
      name: string,
      description?: string | null,
      type: number,
      version?: string | null,
      is_latest: boolean,
      createdAt: string,
      updatedAt: string,
      templateTemplatesId?: string | null,
    } | null,
    rawData?:  {
      __typename: "ModelRawDataConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    projectTreesId?: string | null,
    templateTreesId?: string | null,
  } | null,
};

export type OnUpdateTreeSubscriptionVariables = {
  filter?: ModelSubscriptionTreeFilterInput | null,
};

export type OnUpdateTreeSubscription = {
  onUpdateTree?:  {
    __typename: "Tree",
    id: string,
    name: string,
    status?: string | null,
    project?:  {
      __typename: "Project",
      id: string,
      name: string,
      status: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    template?:  {
      __typename: "Template",
      id: string,
      name: string,
      description?: string | null,
      type: number,
      version?: string | null,
      is_latest: boolean,
      createdAt: string,
      updatedAt: string,
      templateTemplatesId?: string | null,
    } | null,
    rawData?:  {
      __typename: "ModelRawDataConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    projectTreesId?: string | null,
    templateTreesId?: string | null,
  } | null,
};

export type OnDeleteTreeSubscriptionVariables = {
  filter?: ModelSubscriptionTreeFilterInput | null,
};

export type OnDeleteTreeSubscription = {
  onDeleteTree?:  {
    __typename: "Tree",
    id: string,
    name: string,
    status?: string | null,
    project?:  {
      __typename: "Project",
      id: string,
      name: string,
      status: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    template?:  {
      __typename: "Template",
      id: string,
      name: string,
      description?: string | null,
      type: number,
      version?: string | null,
      is_latest: boolean,
      createdAt: string,
      updatedAt: string,
      templateTemplatesId?: string | null,
    } | null,
    rawData?:  {
      __typename: "ModelRawDataConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    projectTreesId?: string | null,
    templateTreesId?: string | null,
  } | null,
};

export type OnCreateTemplateFeatureSubscriptionVariables = {
  filter?: ModelSubscriptionTemplateFeatureFilterInput | null,
};

export type OnCreateTemplateFeatureSubscription = {
  onCreateTemplateFeature?:  {
    __typename: "TemplateFeature",
    id: string,
    template?:  {
      __typename: "Template",
      id: string,
      name: string,
      description?: string | null,
      type: number,
      version?: string | null,
      is_latest: boolean,
      createdAt: string,
      updatedAt: string,
      templateTemplatesId?: string | null,
    } | null,
    feature?:  {
      __typename: "Feature",
      id: string,
      feature_type?: string | null,
      name: string,
      description?: string | null,
      feature_group?: string | null,
      default_value?: number | null,
      is_float?: boolean | null,
      createdAt: string,
      updatedAt: string,
      unitOfMeasureFeaturesId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    templateTemplateFeaturesId?: string | null,
    featureTemplateFeaturesId?: string | null,
  } | null,
};

export type OnUpdateTemplateFeatureSubscriptionVariables = {
  filter?: ModelSubscriptionTemplateFeatureFilterInput | null,
};

export type OnUpdateTemplateFeatureSubscription = {
  onUpdateTemplateFeature?:  {
    __typename: "TemplateFeature",
    id: string,
    template?:  {
      __typename: "Template",
      id: string,
      name: string,
      description?: string | null,
      type: number,
      version?: string | null,
      is_latest: boolean,
      createdAt: string,
      updatedAt: string,
      templateTemplatesId?: string | null,
    } | null,
    feature?:  {
      __typename: "Feature",
      id: string,
      feature_type?: string | null,
      name: string,
      description?: string | null,
      feature_group?: string | null,
      default_value?: number | null,
      is_float?: boolean | null,
      createdAt: string,
      updatedAt: string,
      unitOfMeasureFeaturesId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    templateTemplateFeaturesId?: string | null,
    featureTemplateFeaturesId?: string | null,
  } | null,
};

export type OnDeleteTemplateFeatureSubscriptionVariables = {
  filter?: ModelSubscriptionTemplateFeatureFilterInput | null,
};

export type OnDeleteTemplateFeatureSubscription = {
  onDeleteTemplateFeature?:  {
    __typename: "TemplateFeature",
    id: string,
    template?:  {
      __typename: "Template",
      id: string,
      name: string,
      description?: string | null,
      type: number,
      version?: string | null,
      is_latest: boolean,
      createdAt: string,
      updatedAt: string,
      templateTemplatesId?: string | null,
    } | null,
    feature?:  {
      __typename: "Feature",
      id: string,
      feature_type?: string | null,
      name: string,
      description?: string | null,
      feature_group?: string | null,
      default_value?: number | null,
      is_float?: boolean | null,
      createdAt: string,
      updatedAt: string,
      unitOfMeasureFeaturesId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    templateTemplateFeaturesId?: string | null,
    featureTemplateFeaturesId?: string | null,
  } | null,
};

export type OnCreateFeatureSubscriptionVariables = {
  filter?: ModelSubscriptionFeatureFilterInput | null,
};

export type OnCreateFeatureSubscription = {
  onCreateFeature?:  {
    __typename: "Feature",
    id: string,
    feature_type?: string | null,
    name: string,
    description?: string | null,
    feature_group?: string | null,
    default_value?: number | null,
    is_float?: boolean | null,
    unitOfMeasure?:  {
      __typename: "UnitOfMeasure",
      id: string,
      name: string,
      abbreviation?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    templateFeatures?:  {
      __typename: "ModelTemplateFeatureConnection",
      nextToken?: string | null,
    } | null,
    rawDatas?:  {
      __typename: "ModelRawDataConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    unitOfMeasureFeaturesId?: string | null,
  } | null,
};

export type OnUpdateFeatureSubscriptionVariables = {
  filter?: ModelSubscriptionFeatureFilterInput | null,
};

export type OnUpdateFeatureSubscription = {
  onUpdateFeature?:  {
    __typename: "Feature",
    id: string,
    feature_type?: string | null,
    name: string,
    description?: string | null,
    feature_group?: string | null,
    default_value?: number | null,
    is_float?: boolean | null,
    unitOfMeasure?:  {
      __typename: "UnitOfMeasure",
      id: string,
      name: string,
      abbreviation?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    templateFeatures?:  {
      __typename: "ModelTemplateFeatureConnection",
      nextToken?: string | null,
    } | null,
    rawDatas?:  {
      __typename: "ModelRawDataConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    unitOfMeasureFeaturesId?: string | null,
  } | null,
};

export type OnDeleteFeatureSubscriptionVariables = {
  filter?: ModelSubscriptionFeatureFilterInput | null,
};

export type OnDeleteFeatureSubscription = {
  onDeleteFeature?:  {
    __typename: "Feature",
    id: string,
    feature_type?: string | null,
    name: string,
    description?: string | null,
    feature_group?: string | null,
    default_value?: number | null,
    is_float?: boolean | null,
    unitOfMeasure?:  {
      __typename: "UnitOfMeasure",
      id: string,
      name: string,
      abbreviation?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    templateFeatures?:  {
      __typename: "ModelTemplateFeatureConnection",
      nextToken?: string | null,
    } | null,
    rawDatas?:  {
      __typename: "ModelRawDataConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    unitOfMeasureFeaturesId?: string | null,
  } | null,
};

export type OnCreateRawDataSubscriptionVariables = {
  filter?: ModelSubscriptionRawDataFilterInput | null,
};

export type OnCreateRawDataSubscription = {
  onCreateRawData?:  {
    __typename: "RawData",
    id: string,
    name?: string | null,
    valueFloat?: number | null,
    valueString?: string | null,
    start_date?: string | null,
    end_date?: string | null,
    feature?:  {
      __typename: "Feature",
      id: string,
      feature_type?: string | null,
      name: string,
      description?: string | null,
      feature_group?: string | null,
      default_value?: number | null,
      is_float?: boolean | null,
      createdAt: string,
      updatedAt: string,
      unitOfMeasureFeaturesId?: string | null,
    } | null,
    tree?:  {
      __typename: "Tree",
      id: string,
      name: string,
      status?: string | null,
      createdAt: string,
      updatedAt: string,
      projectTreesId?: string | null,
      templateTreesId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    treeRawDataId?: string | null,
    featureRawDatasId?: string | null,
  } | null,
};

export type OnUpdateRawDataSubscriptionVariables = {
  filter?: ModelSubscriptionRawDataFilterInput | null,
};

export type OnUpdateRawDataSubscription = {
  onUpdateRawData?:  {
    __typename: "RawData",
    id: string,
    name?: string | null,
    valueFloat?: number | null,
    valueString?: string | null,
    start_date?: string | null,
    end_date?: string | null,
    feature?:  {
      __typename: "Feature",
      id: string,
      feature_type?: string | null,
      name: string,
      description?: string | null,
      feature_group?: string | null,
      default_value?: number | null,
      is_float?: boolean | null,
      createdAt: string,
      updatedAt: string,
      unitOfMeasureFeaturesId?: string | null,
    } | null,
    tree?:  {
      __typename: "Tree",
      id: string,
      name: string,
      status?: string | null,
      createdAt: string,
      updatedAt: string,
      projectTreesId?: string | null,
      templateTreesId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    treeRawDataId?: string | null,
    featureRawDatasId?: string | null,
  } | null,
};

export type OnDeleteRawDataSubscriptionVariables = {
  filter?: ModelSubscriptionRawDataFilterInput | null,
};

export type OnDeleteRawDataSubscription = {
  onDeleteRawData?:  {
    __typename: "RawData",
    id: string,
    name?: string | null,
    valueFloat?: number | null,
    valueString?: string | null,
    start_date?: string | null,
    end_date?: string | null,
    feature?:  {
      __typename: "Feature",
      id: string,
      feature_type?: string | null,
      name: string,
      description?: string | null,
      feature_group?: string | null,
      default_value?: number | null,
      is_float?: boolean | null,
      createdAt: string,
      updatedAt: string,
      unitOfMeasureFeaturesId?: string | null,
    } | null,
    tree?:  {
      __typename: "Tree",
      id: string,
      name: string,
      status?: string | null,
      createdAt: string,
      updatedAt: string,
      projectTreesId?: string | null,
      templateTreesId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    treeRawDataId?: string | null,
    featureRawDatasId?: string | null,
  } | null,
};
