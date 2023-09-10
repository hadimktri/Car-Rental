import { request, gql } from "graphql-request";

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

  const result = await request(
    "https://api-ca-central-1.hygraph.com/v2/clmbsweqg0xir01t88ju97is0/master",
    query
  );

  return result;
};
