/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createAmbulance = /* GraphQL */ `
  mutation CreateAmbulance(
    $input: CreateAmbulanceInput!
    $condition: ModelAmbulanceConditionInput
  ) {
    createAmbulance(input: $input, condition: $condition) {
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
export const updateAmbulance = /* GraphQL */ `
  mutation UpdateAmbulance(
    $input: UpdateAmbulanceInput!
    $condition: ModelAmbulanceConditionInput
  ) {
    updateAmbulance(input: $input, condition: $condition) {
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
export const deleteAmbulance = /* GraphQL */ `
  mutation DeleteAmbulance(
    $input: DeleteAmbulanceInput!
    $condition: ModelAmbulanceConditionInput
  ) {
    deleteAmbulance(input: $input, condition: $condition) {
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
export const createBooking = /* GraphQL */ `
  mutation CreateBooking(
    $input: CreateBookingInput!
    $condition: ModelBookingConditionInput
  ) {
    createBooking(input: $input, condition: $condition) {
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
export const updateBooking = /* GraphQL */ `
  mutation UpdateBooking(
    $input: UpdateBookingInput!
    $condition: ModelBookingConditionInput
  ) {
    updateBooking(input: $input, condition: $condition) {
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
export const deleteBooking = /* GraphQL */ `
  mutation DeleteBooking(
    $input: DeleteBookingInput!
    $condition: ModelBookingConditionInput
  ) {
    deleteBooking(input: $input, condition: $condition) {
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
