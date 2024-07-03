export interface Document {
  id: string
  title: string
  content?: string
}

// RESQUEST

export interface SaveDocumentRequest extends Document {}

export interface FetchDocumentRequest {
  id: string
}

export interface DeleteDocumentRequest {
  id: string
}

// RESPONSE
export interface FetchAllDocumentsReponse {
  data: Document[]
}

export interface FetchDocumentResponse {
  data: Document
}

export interface CreateDocumentResponse {
  data: Document
}
