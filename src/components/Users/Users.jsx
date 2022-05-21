import React from "react";
import User from "../User/User"
import Link from "../Link/Link"
import "../Users/_users.scss"

export default function Users() {

  const [users, setUsers] = React.useState([]);

  const usersData = async () => {
    const res = await fetch("https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6");
    const data = await res.json();
    setUsers(data.users)
  }

  const userCard = users.map(user =>
    <User
      key={user.id}
      name={user.name}
      phone={user.phone}
      photo={user.photo}
      position={user.position}
    />
  )

  React.useEffect(() => {
    usersData()
  }, [])

  return (
    <section className="section users">
      <h2 className="section__heading">Working with GET request</h2>
      <div className="users__list">
        {userCard}
      </div>
      <Link
        href="#"
        text="Show more"
        className="link user__link"
      />
    </section>
  )
}
