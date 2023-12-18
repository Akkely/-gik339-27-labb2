const url = "http://localhost:3000/users";

fetch(url)
	.then((response) => response.json())
	.then((users) => {
    const userList = document.createElement("ul");

		users.forEach((user) => {

      const listItem = document.createElement("li");
      listItem.style.borderColor = user.color;

			listItem.innerHTML = `<p>Name: ${user.firstName} ${user.lastName}
      <br>Username: ${user.username}</br></p>`;
			console.log(user);
		
      userList.appendChild(listItem);
		});

    const container = document.querySelector('.container');
    container.appendChild(userList);
	});




// const uList = document.createElement("ul");

// uList.innerHTML = userArray;
// document.body.appendChild(uList);


// document.childElement("li")
