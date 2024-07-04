import { BrowserWindow, Menu, Tray, nativeImage } from 'electron'
import path from 'path'

export function createTray(window: BrowserWindow) {
  const icon = nativeImage.createFromPath(
    path.resolve(__dirname, 'rotionTemplate.png'),
  )

  const tray = new Tray(icon)

  const menu = Menu.buildFromTemplate([
    { label: 'Rotion' },
    { type: 'separator' },
    {
      label: 'Criar novo documento',
      click: () => {
        window.webContents.send('new-document')
      },
    },
    {
      type: 'separator',
    },
    {
      label: 'Documentos recentes',
      enabled: false,
    },
    {
      label: 'Discover',
      accelerator: 'CommandoOrControl+1',
    },
    {
      label: 'Ignite',
      accelerator: 'CommandoOrControl+2',
    },
    {
      label: 'Explorer',
      accelerator: 'CommandoOrControl+3',
    },
    {
      type: 'separator',
    },
    {
      label: 'Sair do Rotion',
      role: 'quit',
    },
  ])

  tray.setContextMenu(menu)
}
