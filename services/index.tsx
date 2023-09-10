import { request, gql } from "graphql-request";

const GRPHQL_URL =
  "https://api-ca-central-1.hygraph.com/v2/clmbsweqg0xir01t88ju97is0/master";
export const getCarsList = async () => {
  const query = gql`
    query CarLists {
      carLists {
        carAvg
        createdAt
        id
        name
        price
        carType
        carBrand
        publishedAt
        updatedAt
        seat
        image {
          url
        }
      }
    }
  `;
  const result = await request(GRPHQL_URL, query);

  return result;
};

export const getStoreLocations = async () => {
  const query = gql`
    query CarLists {
      storeLocations {
        address
      }
    }
  `;
  const result = await request(GRPHQL_URL, query);

  return result;
};
