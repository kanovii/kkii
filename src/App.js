import logo from './logo.svg';
import './App.css';

const postsWeMade = [
  {
    date: '7/1'


  },
  {
    date: '7/3'
    

  }
]

function Post({date}) {
  return(
    <div> 
      {date}
      <div> PIC</div>
    </div>
    
  )
}

function renderPosts(items) {
  return(
    <Post date={items.date} />

  )
}

function App() {
  return (
    <div className='App'>
      {postsWeMade.map(items => 
        <Post date={items.date} />
      )}

      {postsWeMade.map(renderPosts)}
    </div>
  );
}

export default App;
