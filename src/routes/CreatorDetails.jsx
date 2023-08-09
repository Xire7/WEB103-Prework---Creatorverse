import { useRouteLoaderData, useParams } from "react-router-dom";
import CreatorProfile from "../components/CreatorProfile";

const searchTarget = (array, id) => {
  for (let i = 0; i < array.length; i++) {
    // console.log('CURRENT ID:', id, '===', array[i].id, i, array[i])
    if (array[i].id === id) {
      return array[i];
    }
  }
  return null;

}

const CreatorDetails = () => {
  const data = useRouteLoaderData('fetchCreator');
  console.log(data);
  const { creatorId } = useParams();
  const target = searchTarget(data, Number.parseInt(creatorId, 10));
  return (
    <CreatorProfile
      name={target.name}
      id={target.id}
      url={target.url}
      imageURL={target.imageURL}
      description={target.description}
    />
  );
};

export default CreatorDetails;

export const loadCreator = async () => {
  const response = await fetch(
    "https://rnoxkhhmdlohjaiyxyhg.supabase.co/rest/v1/creators",
    {
      headers: {
        "Content-Type": "application/json",
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJub3hraGhtZGxvaGphaXl4eWhnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTEzNzU4MjIsImV4cCI6MjAwNjk1MTgyMn0.gFlrrwFzsu4syIqQTrT3mW2fphtB4ABUr1ives18f6k",
      },
    },
    { method: "GET" }
  );

  if (!response.ok) {
    alert("Error retrieving database info");
  }
  return response.json();
};
