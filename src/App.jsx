import { Route, Switch, BrowserRouter} from 'react-router-dom';
import Home from './components/Home'
import Article from './components/Article';
import {React,useState,useEffect} from 'react';
import { feed } from './apis/inshort'
import { categories } from './constants'
import Sections from './components/Sections';


function App() {
  const [newsFeed, setNewsFeed] = useState({});
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState([]);



  useEffect(() => {
    const getFeed = (category) =>{
        let data = {};
        category.forEach(async (item)=>{
            const res = await feed(item.toLowerCase())
            data[res.category] = await res.data;
            setNewsFeed(data)
            if(Object.keys(data).length === categories.length)
                setLoading(false)
        })
    }
    getFeed(categories)
}, [])


if(loading) return <h1>Loading</h1>

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
        <Route path='/:category/:slug'>
            <Home setFilter={setFilter}/>
            <Article newsFeed={newsFeed}/>
          </Route>
          <Route path='/'>
            <Home setFilter={setFilter}/>
            <Sections filter={filter} newsFeed={newsFeed}/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
