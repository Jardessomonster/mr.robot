#! /usr/bin/env node

const start = async () => {}

start().then(_ => {
  // eslint-disable-next-line global-require
  import('./src/app/app')
})
