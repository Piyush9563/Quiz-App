import '../styles/App.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

/** import components */
import Instruction from './Instruction';
import Quiz from './Quiz';
import Result from './Result';
import { CheckUserExist } from '../helper/helper';


/** react routes */
const router = createBrowserRouter([
  {
    path : '/',
    element : <Instruction></Instruction>
  },
  {
    path : '/take-quiz',
    element : <CheckUserExist><Quiz /></CheckUserExist>
  },
  {
    path : '/result',
    element : <CheckUserExist><Result /></CheckUserExist>
  },
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
