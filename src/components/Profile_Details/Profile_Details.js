import React from 'react'
import "./Profile_Details.css";
import { useHistory } from 'react-router-dom';
function ProfileDetails() {
    const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();
        history.push("/user-interests")
    }

    return (

        <div className="profile__container">
            <div className="profile__heading">
                <h1>
                    Profile Details
                </h1>
            </div>

            <main className="profile__detail__container">
                <form action="" onSubmit={handleSubmit}>

                    <div className="form__profile__row">
                        <div className="form__profile__field">
                            <label htmlFor="mobile-number">Registered Mobile Number</label>
                            <input type="text" />
                        </div>
                    </div>
                    <div className="form__profile__row">
                        <div className="form__profile__field">
                            <label htmlFor="gender">Gender</label>
                            <select name="" id="gender">
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="others">Others</option>
                            </select>
                        </div>
                        <div className="form__profile__field">
                            <label htmlFor="dob">Date of Birth</label>
                            <input type="date" id="dob" />
                        </div>
                    </div>
                    <div className="form__btn">
                        <button className="btn btn-primary">Update</button>
                    </div>
                </form>
            </main>
        </div>
    )
}

export default ProfileDetails
