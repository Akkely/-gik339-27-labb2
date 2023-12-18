const url = "http://localhost:3000/users";

fetch(url)
	.then((response) => response.json())
	.then((users) => {
    const userList = document.createElement("ul");

		users.forEach((user) => {

      const listItem = document.createElement("li");
      listItem.style.borderColor = user.color;

			listItem.innerHTML = `<p>ID: ${user.id} <br> Name: ${user.firstName} ${user.lastName}
      <br> Username: ${user.username} <br>Favorit color: ${user.color} </p>`;
			console.log(user);
		
      userList.appendChild(listItem);
		});
    document.body.appendChild(userList);
	});
