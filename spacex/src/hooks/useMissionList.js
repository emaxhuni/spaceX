import { useQuery, gql } from "@apollo/client";

const GET_DATA = gql`
  {
    launchesPast(limit: 10) {
      id
      mission_name
      rocket {
        rocket_name
      }
      ships {
        name
        image
      }
    }
  }
`;

export const useMissionList = () => {
  const { loading, error, data } = useQuery(GET_DATA);

  return {
    error,
    data,
    loading,
  };
};
