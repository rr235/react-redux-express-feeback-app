import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

const Header = () => <h1>Header</h1>;
const Dashboard = () => <h2>Dashboard</h2>;
const Surveynew = () => <h2>SurveyNew</h2>;
const Landing = () => <h2>Landing</h2>;

const App = () => (
  <div>
    <BrowserRouter>
      <div>
        <Header />
        <Route exact path="/" component={Landing} />
        <Route exact path="/surveys" component={Dashboard} />
        <Route path="/surveys/new" component={Surveynew} />
      </div>
    </BrowserRouter>
  </div>
);

export default App;
