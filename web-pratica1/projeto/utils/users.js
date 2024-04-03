export const get_users = () => {
  const users = JSON.parse(localStorage.getItem("users") || "[]")

  return users
}

export const add_user = ({ name, email, password }) => {
  const users = get_users()

  users.push({ name, email, password })


  localStorage.setItem("users", JSON.stringify(users))
}
