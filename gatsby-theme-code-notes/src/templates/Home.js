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
        <div class="content">
          <div class="w-full">
            <h1 class="text-xl">
              Coder. <small>engineer. analyst. linguist.</small>
            </h1>
            <span class="availability bg-green-500 p-1 px-3 rounded-md text-sm">
              Available For Hire
            </span>
          </div>

          <div class="grid grid-cols-4 gap- w-full">
            <div class="">
              <img src={meImg} />
            </div>

            <div class="col-span-3 pl-4">
              <h1 class="text-8xl">Addam Hardy</h1>
              <div class="grid grid-cols-4 mt-4">
                <div class="col-span-3 pr-1">
                  <p class="mt-0">
                    Python, Go, Ruby, Javascript, and anything-at-all hacker.
                    Passionate about leadership, data engineering, data science, user driven applications, system
                    architecture design, DIY hardware, amateur radio, and linguistics.
                  </p>
                  <p class="mt-4">💁‍♀️ I do lots of things.</p>
                </div>

                <div class="h-full">
                  <div class="border-2 border-l-slate-200 px-4 border-transparent h-full">
                    <h3>Github:</h3>
                    <h4>
                      <a target="_blank" href="http://www.github.com/addamh">addamh</a>
                    </h4>
                    <h3>LinkedIn:</h3>
                    <h4>
                      <a target="_blank" href="http://www.linkedin.com/in/addamh/">addamh</a>
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
