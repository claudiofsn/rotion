import { Menu, Tray, app, nativeImage } from 'electron'
import path from 'path'

app.whenReady().then(() => {
  const icon = nativeImage.createFromPath(
    path.resolve(__dirname, 'rotionTemplate.png'),
  )

  const tray = new Tray(icon)

  const menu = Menu.buildFromTemplate([{ label: 'Rotion' }])

  tray.setContextMenu(menu)
})
