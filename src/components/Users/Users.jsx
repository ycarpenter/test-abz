import React from "react";
import User from "../User/User"
import Link from "../Link/Link"
import "../Users/_users.scss"

export default function Users() {

  const [users, setUsers] = React.useState([]);
  const [counter, setCounter] = React.useState(1);
  const [lastPage, setLastPage] = React.useState(null);

  const getUsers = async () => {
    const res = await fetch(`https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${counter}&count=6`);
    const data = await res.json();
    setUsers(data.users)
    setLastPage(data.total_pages)
    console.log(counter)
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
    getUsers()
  }, [])

  function handleUsers(event) {
    event.preventDefault()
    setCounter(prevState =>
      prevState + 1
    )

    console.log(counter + "=>" + lastPage)
    getUsers();
  }

  return (
    <section className="section users" id="users">
      <h2 className="section__heading">Working with GET request</h2>
      <div className="users__list">
        {userCard}
      </div>
      {(counter === lastPage + 1) ? "" : <Link
        href="#"
        text="Show more"
        className="link user__link"
        onClick={handleUsers}
      />}
    </section>
  )
}
