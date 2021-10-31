/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      username
      email
      bookings {
        items {
          id
          createdAt
          userId
          ambId
          ambNumber
          ambCall
          originLatitude
          originLongitude
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        email
        bookings {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getAmbulance = /* GraphQL */ `
  query GetAmbulance($id: ID!) {
    getAmbulance(id: $id) {
      id
      latitude
      longitude
      heading
      bookings {
        items {
          id
          createdAt
          userId
          ambId
          ambNumber
          ambCall
          originLatitude
          originLongitude
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listAmbulances = /* GraphQL */ `
  query ListAmbulances(
    $filter: ModelAmbulanceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAmbulances(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        latitude
        longitude
        heading
        bookings {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getBooking = /* GraphQL */ `
  query GetBooking($id: ID!) {
    getBooking(id: $id) {
      id
      createdAt
      userId
      user {
        id
        username
        email
        bookings {
          nextToken
        }
        createdAt
        updatedAt
      }
      ambId
      ambNumber
      ambCall
      amb {
        id
        latitude
        longitude
        heading
        bookings {
          nextToken
        }
        createdAt
        updatedAt
      }
      originLatitude
      originLongitude
      updatedAt
    }
  }
`;
export const listBookings = /* GraphQL */ `
  query ListBookings(
    $filter: ModelBookingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBookings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        createdAt
        userId
        user {
          id
          username
          email
          createdAt
          updatedAt
        }
        ambId
        ambNumber
        ambCall
        amb {
          id
          latitude
          longitude
          heading
          createdAt
          updatedAt
        }
        originLatitude
        originLongitude
        updatedAt
      }
      nextToken
    }
  }
`;
