import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
import { Header, List } from 'semantic-ui-react';
// import DuckItem from './DuckItem'
// import { ducks } from './demo'

function App() {
  const  [activities, setActivities] = useState([]);

  // Fetch data from API
  useEffect(() => {
    axios.get('http://localhost:5000/api/activities')
    .then((response) => {
      setActivities(response.data)
    })
  }, [])

  return (
    <div>
      <Header  as='h1' icon='users' content='Reactivities'/>
      <List>  
        {activities.map((activity: any) => (
          <List.Item key={activity._id}>
            {activity.title}
          </List.Item>
        ))}
      </List>
      
    </div>
  )
}

export default App
