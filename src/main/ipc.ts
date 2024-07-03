import { ipcMain } from 'electron'
import { IPC } from '@shared/constants/ipc'
import { randomUUID } from 'node:crypto'
import {
  CreateDocumentResponse,
  DeleteDocumentRequest,
  Document,
  FetchAllDocumentsReponse,
  FetchDocumentRequest,
  FetchDocumentResponse,
  SaveDocumentRequest,
} from '@shared/types/ipc'
import { store } from './store'

ipcMain.handle(
  IPC.DOCUMENT.FETCH_ALL,
  async (): Promise<FetchAllDocumentsReponse> => {
    return {
      data: Object.values(store.get('documents')),
    }
  },
)

ipcMain.handle(
  IPC.DOCUMENT.FETCH,
  async (_, { id }: FetchDocumentRequest): Promise<FetchDocumentResponse> => {
    const document = store.get(`documents.${id}`) as Document

    return {
      data: document,
    }
  },
)
ipcMain.handle(
  IPC.DOCUMENT.CREATE,
  async (): Promise<CreateDocumentResponse> => {
    const id = randomUUID()

    const document: Document = {
      id,
      title: 'Untitled',
    }

    store.set(`documents.${id}`, document)

    return {
      data: document,
    }
  },
)
ipcMain.handle(
  IPC.DOCUMENT.SAVE,
  async (_, { id, title, content }: SaveDocumentRequest): Promise<void> => {
    store.set(`documents.${id}`, {
      id,
      title,
      content,
    })
  },
)
ipcMain.handle(
  IPC.DOCUMENT.DELETE,
  async (_, { id }: DeleteDocumentRequest): Promise<void> => {
    // @ts-expect-error (https://github.com/sindresorhus/electron-store/issues/196)
    store.delete(`documents.${id}`)
  },
)

/*
        { id: '1', title: 'Ignite', content: '' },
        { id: '2', title: 'Discover', content: '' },
        { id: '3', title: 'Rocketseat', content: '' },
        { id: '4', title: 'Docs', content: '' },
         */
