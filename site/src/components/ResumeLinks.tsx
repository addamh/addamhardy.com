import React, { FunctionComponent } from 'react'
import { Box } from 'theme-ui'
import pdfImg from '../../assets/images/pdf.png'
import texImg from '../../assets/images/tex.png'
import resumePdf from '../../assets/Addam_Hardy_Resume_04-01-2022-18-52-17.pdf'

export default ({
}) => {
  return (
    <div className="grid grid-cols-4 gap-2">
      <div className="col-span-2">
      <img src={pdfImg}/>
      <a href={resumePdf}>Click to download in PDF format</a>
      </div>
    </div>
  )
}
