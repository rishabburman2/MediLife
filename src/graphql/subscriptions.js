/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateAmbulance = /* GraphQL */ `
  subscription OnCreateAmbulance {
    onCreateAmbulance {
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
export const onUpdateAmbulance = /* GraphQL */ `
  subscription OnUpdateAmbulance {
    onUpdateAmbulance {
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
export const onDeleteAmbulance = /* GraphQL */ `
  subscription OnDeleteAmbulance {
    onDeleteAmbulance {
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
export const onCreateBooking = /* GraphQL */ `
  subscription OnCreateBooking {
    onCreateBooking {
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
export const onUpdateBooking = /* GraphQL */ `
  subscription OnUpdateBooking {
    onUpdateBooking {
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
export const onDeleteBooking = /* GraphQL */ `
  subscription OnDeleteBooking {
    onDeleteBooking {
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
