import home from './components/home';
import portfolio from './components/portfolio/Portfolio';
import stocks from './components/stocks/stocks';

export const routes = [
    {path: '/', component: home},
    {path: '/portfolio', component: portfolio},
    {path: '/stocks', component: stocks}

];