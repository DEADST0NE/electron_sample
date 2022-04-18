import { HashRouter } from "react-router-dom";

import { Pages } from './pages';

import './styles/index.scss';

const App = () => {
  return (
    <div className="App">
      <HashRouter>
        <Pages />
      </HashRouter>
    </div>
  )
}

export { App };