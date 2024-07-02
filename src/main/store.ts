import Store from 'electron-store'

interface StoreType {
  documents: Record<string, unknown>
}

export const store = new Store<StoreType>({
  defaults: {
    documents: {},
  },
})
