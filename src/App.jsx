import React from 'react'
import MainLayout from './layout/MainLayout'
import './styles/normalize.css'
import './styles/globals.scss'
import CardContainer from './containers/CardContainer'
const App = () => {
  return (
    <MainLayout>
      <CardContainer />
    </MainLayout>
  )
}

export default App