import { Box, Paper } from "@mui/material"
import React, { useEffect } from "react"
import IubendaService, { IubendaDocument } from "../../Services/IubendaService"
import { CircularProgress } from "@mui/material";

const DocumentViewer: React.FC<{type: IubendaDocument}> = ({type}) => {

  const [document, setDocument] = React.useState<string | null>(null)

  const getDocument = () => {
    let service = new IubendaService()
    service.getDocument(type).then(
      (message: any) => {
        setDocument(message.content)
      },
      (error) => {
        console.log(error.description)
      }
    )
  }
  
  useEffect(() => {
    getDocument()
  }, [getDocument])

  return (
    <Box>
      <Paper style={{ padding: "24pt" }}>
        {
          document != null ?
            <div dangerouslySetInnerHTML={{ __html: document }}/>
          :
            <CircularProgress />
        }
      </Paper>
    </Box>
  )
}

export default DocumentViewer
