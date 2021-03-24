import * as React from "react"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react"

import {Home} from './pages/Home'
import { AddProduct } from "./pages/AddProduct"
import { ProductDetails } from "./pages/ProductDetails"


export const App = () => (
  <ChakraProvider theme={theme}>
    <Router>
      <Switch>
        <Route path='/product/:id' exact component={ProductDetails}/>
        <Route path='/addProduct' exact component={AddProduct}/>
        <Route path='/' exact component={Home}/>
      </Switch>
    </Router>
  </ChakraProvider>
)
