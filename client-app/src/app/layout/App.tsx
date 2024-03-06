import { Fragment, useEffect, useState } from 'react'
import axios from 'axios';
import { Container} from 'semantic-ui-react';
import { Activity } from '../models/activity';
import NavBar from './NavBAr';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import {v4 as uuid} from 'uuid';
// import DuckItem from './DuckItem'
// import { ducks } from './demo'

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [selectedActivity, setSelectedActivity] =  useState<Activity | undefined>(undefined); // Activity can be undefined
  const [editMode, setEditMode] = useState(false);

  // Fetch data from API
  useEffect(() => {
    axios.get<Activity[]>('http://localhost:5000/api/activities')
      .then((response) => {
        setActivities(response.data)
      })
  }, [])

  function handleSelectActivity(id : string){
    setSelectedActivity(activities.find(act=> act.id === id))
  }

  function handleCancelSelectActivity(){
    setSelectedActivity(undefined);
  }

  function handleFormOpen (id? :string ){
    id ? handleSelectActivity(id) : handleCancelSelectActivity();
    setEditMode(true);
  }

  function handleFormClose(){
    setEditMode(false);
  }

  function handleCreateOrEditeActivity (activity : Activity){
    activity.id ? setActivities([...activities.filter(x =>x.id !== activity.id), activity]) : setActivities([...activities, {...activity, id: uuid()}])//or activities.push(activity);
    if (!selectedActivity ) {
      selectedActivity;
    } else{
      setSelectedActivity(activity);
    }
    handleFormClose();
  }

  function handleDeleteActivity(id: string) {
    const confirmation = window.confirm("Do you want to Delete this Activity?"); 
    
    if (confirmation) {
      setActivities([...activities.filter(x =>  x.id !== id)]);
    }
  }

  return (
    <Fragment>
      <NavBar  onOpenForm={handleFormOpen}/>
      <Container style={{marginTop: '7em'}}>
        <ActivityDashboard
          activities={activities}
          selectedActivity = {selectedActivity}
          onSelectActivity={handleSelectActivity}
          onCancelActivity={handleCancelSelectActivity}
          editMode={editMode}
          onOpenForm={handleFormOpen}
          onCloseForm={handleFormClose}
          CreateOrEdite={handleCreateOrEditeActivity}
          deleteActivity={handleDeleteActivity}
        />
      </Container>
    </Fragment>
  )
}

export  default App;