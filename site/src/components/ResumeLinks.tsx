import React, { FunctionComponent } from 'react'
import { Box } from 'theme-ui'
import pdfImg from '../../assets/images/pdf.png'
import texImg from '../../assets/images/tex.png'

export default ({
}) => {
  return (
    <div className="grid grid-cols-4 gap-2">
      <div className="col-span-2">
      <img src={pdfImg}/>
      <a href="https://github.com/addamh/resume/raw/master/resume.pdf">Click to download in PDF format</a>
      </div>
      <div className="col-span-2">
        <img src={texImg}/>
        <a href="https://github.com/addamh/resume/raw/master/resume.tex">Click to download in LaTeX format</a>
      </div>
    </div>
  )
}
