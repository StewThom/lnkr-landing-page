import React from "react"
import { ReactComponent as AppStoreBadge } from "../../../Resources/Icons/AppStoreBadge/EN/Download_on_App_Store/Black_lockup/SVG/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg"

const AppStoreDownloadButton: React.FC<{ style?: any }> = ({ style }) => {

  const downloadPressed = () => {
    window.open("https://apps.apple.com/us/app/lnkr/id1430893328")
  }

  return(
    <AppStoreBadge onClick={downloadPressed} style={{ ...style, cursor: "pointer" }}/>
  )
}

export default AppStoreDownloadButton