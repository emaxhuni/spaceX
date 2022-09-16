import { useQuery, gql } from "@apollo/client";

const GET_MISSIONS = gql`
  query GetRocket($id: ID!) {
    launch(id: $id) {
      id
      mission_name
      launch_date_local
      rocket {
        rocket_name
        rocket {
          description
          wikipedia
          country
        }
      }
    }
    ships {
      image
    }
  }
`;

export const useMission = (id) => {
  const { data, error, loading } = useQuery(GET_MISSIONS, {
    variables: {
      id,
    },
  });

  return {
    data,
    error,
    loading,
  };
};
