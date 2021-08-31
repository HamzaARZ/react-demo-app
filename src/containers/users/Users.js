import React, { useEffect, useState } from "react";

const Users = props => {

    const [user, setUser] = useState(null);

    useEffect(() => {
        setUser(null)
    }, [])
    console.log(props);

    return (
        <div>
            <h2>
                users
            </h2>
            {user &&
                <p>
                    usen name: {user.name}
                    usen id: {user.id}
                </p>}

            {/* <p>{props.location.userProps}</p> */}
        </div>
    )
}

export default Users;
