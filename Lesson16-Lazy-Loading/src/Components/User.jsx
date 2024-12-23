import React from 'react';
import { useParams } from 'react-router-dom';

function User() {
  // Get the userId parameter from the URL
  const { userId } = useParams();

  return (
    <div>
      <h1>User ID: {userId}</h1>
      {/* You can fetch user details using userId or display it as needed */}
      {/* You can pass this "userId" with API so to fetch partucular data. */}
    </div>
  );
}

export default User;
