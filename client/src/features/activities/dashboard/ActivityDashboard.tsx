import { Grid } from "@mui/material";
import ActivityList from "./ActivityList";
type Props = {
  activities: Activity[];
};

export default function ActivityDashboard({ activities }: Props) {
  return (
    <Grid>
      <Grid size={9}>
        <ActivityList activities={activities} />
      </Grid>
    </Grid>
  );
}
