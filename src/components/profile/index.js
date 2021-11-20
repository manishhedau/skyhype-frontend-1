import React from 'react'
import EditProfile from './sections/EditProfile'
import Groups from './sections/Groups'



import ProfileLinkSection from '../Profile_Link_Section/profile_link_section';


function Profile() {
    return (
        <section className="edit-profile-section">

            <div className="responsive-profile-link" style={{ marginBottom: "1rem" }}>
                <ProfileLinkSection />
            </div>
            <EditProfile />
            <Groups />
        </section>
    )
}

export default Profile
