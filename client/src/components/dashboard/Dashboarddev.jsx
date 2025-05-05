// import React from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { getCurrentProfile } from '../../actions/profileAction';

// const Dashboard = () => {

//   return (
//     <div>
//       <h1 className="text-2xl font-bold mt-25 mb-4 text-red-700">Dashboard</h1>
//     </div>
//   );
// };

// Dashboard.propTypes = {
//   getCurrentProfile: PropTypes.func.isRequired,
//   auth: PropTypes.object.isRequired,
//   profile: PropTypes.object.isRequired,
// };

// const mapStateToProps = state => ({
//   profile: state.profile, // You missed mapping profile here
//   auth: state.auth,
//   errors: state.errors,
// });

// export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);



import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../actions/profileAction';

const Dashboard = ({ getCurrentProfile, auth, profile }) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  const { user } = auth;
  const { loading, profile: userProfile } = profile;

  // Check if the user profile is loaded and not empty
  // const isProfileLoaded = !loading && userProfile !== null;
  // const isProfileEmpty = userProfile === null || Object.keys(userProfile).length === 0;


  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <p className="text-lg">Welcome, {user && user.name}!</p>

      {loading ? (
        <p className="text-gray-500 mt-2">Loading profile...</p>
      ) : userProfile ? (
        <div className="mt-4">
          <h2 className="text-xl font-semibold">Profile Info</h2>
          <p><strong>Company:</strong> {userProfile.company || 'N/A'}</p>
          <p><strong>Website:</strong> {userProfile.website || 'N/A'}</p>
          <p><strong>Location:</strong> {userProfile.location || 'N/A'}</p>
          {/* Add more fields as needed */}
        </div>
      ) : (
        <p className="text-red-500 mt-2">No profile found. Please create one.</p>
      )}
    </div>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth,
});

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);
