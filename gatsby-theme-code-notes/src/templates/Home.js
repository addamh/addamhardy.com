import React from 'react'
import { Layout } from '../components/Layout'
import { jsx, Box, Flex, Heading, Link, Text, css } from 'theme-ui'
import meImg from '../../../site/assets/me.jpg'

const HomePage = ({ pageContext, location }) => {
  return (
    <Layout
      path={location.pathname}
      basePath={pageContext.basePath}
      hasUntagged={pageContext.hasUntagged}
      tags={pageContext.tags}
      pages={pageContext.pages}
      title={'about me'}
    >
      <Box>
        <div className="content">
          <div className="w-full pt-4">
            <h1 className="text-xl">
              Coder. <small>engineer. analyst. linguist.</small>
            </h1>
            <span className="availability bg-green-600 p-1 px-3 rounded-md text-sm dark:text-gray-100">
              Available For Hire
            </span>
          </div>

          <div className="grid sm:grid-cols-1 md:grid-cols-4 w-full">
            <div className="">
              <img src={meImg} />
            </div>

            <div className="md:col-span-3 md:pl-4">
              <h1 className="text-4xl md:text-8xl pt-2">Addam Hardy</h1>
              <div className="grid md:grid-cols-4 mt-4">
                <div className="col-span-3 pr-1">
                  <p className="mt-0">
                    Python, Go, Ruby, Javascript, and anything-at-all hacker.
                    Passionate about leadership, data engineering, data science, user driven applications, system
                    architecture design, DIY hardware, amateur radio, and linguistics.
                  </p>
                  <p className="mt-4">💁‍♀️ I do lots of things.</p>
                </div>

                <div className="h-full hidden md:block">
                  <div className="border-2 border-l-slate-200 px-4 border-transparent h-full">
                    <h3>Github:</h3>
                    <h4>
                      <a target="_blank" href="http://www.github.com/addamh">addamh</a>
                    </h4>
                    <h3>LinkedIn:</h3>
                    <h4>
                      <a target="_blank" href="http://www.linkedin.com/in/addamh/">addamh</a>
                    </h4>
                    <h3>Call Sign:</h3>
                    <h4>
                      N5HAX
                    </h4>                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Box>
    </Layout>
  )
}

export default HomePage
