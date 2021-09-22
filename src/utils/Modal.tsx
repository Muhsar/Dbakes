import { Dialog, DialogTitle, DialogContent, TextareaAutosize } from '@material-ui/core'
import React from 'react'

export default function ModalLayout({title, trigger, content, open, setOpen}) {
  // const [open, setOpen] = React.useState<boolean>(false)

  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClickClose = () => {
    setOpen(false)
  }
  
  
  return (
    <>
      
      {trigger}
      <Dialog onClose={handleClickClose} aria-labelledby="simple-dialog-title" open={open} fullWidth className="">
        <DialogTitle id="simple-dialog-title">
        <div className="modal-title d-flex align-items-center" id="modal-title-change-username">
                        <div>
                            <div className="mr-3 shadow icon icon-sm icon-shape icon-success rounded-circle">
                                {/* <LocalAtmIcon className='cursor-pointer ' /> */}
                            </div>
                        </div>
                        <div>
              <h6 className="mb-0">
                {
                  title
                }
              </h6>
                        </div>
          </div>
        </DialogTitle>
        <DialogContent className='my-auto h-auto'>
          {content}
</DialogContent>
</Dialog>
    </>
  )
}
