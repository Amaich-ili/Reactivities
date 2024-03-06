import { Grid, GridColumn} from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";
import ActivityList from "./ActivityList";
import ActivityDetails from "../details/ActivityDetails";
import ActivityForm from "../form/ActivityForm";

interface Props {
    activities: Activity[];
    selectedActivity: Activity | undefined;
    editMode: boolean;
    onOpenForm: (id: string) => void;
    onCloseForm: () => void;
    onSelectActivity: (id: string) => void;
    onCancelActivity: () => void;
    CreateOrEdite: (activity: Activity) => void;
    deleteActivity: (id: string) => void;
}

export default function ActivityDashboard({activities, selectedActivity,  onSelectActivity, onCancelActivity, editMode, onOpenForm, onCloseForm, CreateOrEdite, deleteActivity}: Props) {
    return (
        <Grid >
            <GridColumn width={10}>
                <ActivityList 
                    activities={activities} 
                    onSelectActivity={onSelectActivity}
                    deleteActivity={deleteActivity}
                />
            </GridColumn>

            <GridColumn width={6}>
                {selectedActivity && !editMode &&
                <ActivityDetails 
                    activity={selectedActivity} 
                    onCancelActivity={onCancelActivity}
                    onOpenForm={onOpenForm}
                />}

                {editMode &&
                <ActivityForm 
                    activity={selectedActivity} 
                    onOpenForm={onOpenForm} 
                    onCloseForm={onCloseForm}
                    CreateOrEdite={CreateOrEdite}
                />}
            </GridColumn>
        </Grid>
    )
}

{/* <List>
    {activities.map(activity => (
        <List.Item key={activity.id}>
            {activity.title}
        </List.Item>
    ))}
</List> */}