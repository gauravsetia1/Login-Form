var users = {
	0: {
		name: "Vineet",
		email: "abc@def.com",
		username: "vineetks",
		password: "vineetks",
		mobile: 9123456780
	},
	
	1: {
		name: "Administrator",
		email: "abc@def.com",
		username: "admin",
		password: "admin",
		mobile: 9123456780	
	},
	
	2: {
		name: "User 3",
		email: "abc@def.com",
		username: "user3",
		password: "user3",
		mobile: 9123456780
	},
	
	3: {
		name: "Gaurav",
		email: "gauavsetia1999@gmail.com",
		username: "gaurav",
		password: "1234",
		mobile: 9123456780
	}
}

var arr  = [];
var keys = Object.keys(users);

for(var i=0;i<keys.length;i++)
{
  var key  = keys[i];
  arr[key] = users[key];
}


function submitForm(e) {
	console.log("Printing the event:");
	console.log(e);
	e.preventDefault();
	var uname = document.getElementById("username").value;
	var pword = document.getElementById("password").value;
	console.log(`Username: ${uname}`);
	console.log(`Password: ${pword}`);
	
	var c=0;
	for(var i=0;i<arr.length;i++)
	{
		if(arr[i].username == uname && arr[i].password == pword)
		{
			localStorage.setItem("name",arr[i].username)
			location.assign("profile.html");
		}
		else
		{
			c++;
		}
	}
	if(c==arr.length)
	{
		alert("Invalid User");
	}
	
}

function vals()
{
	var n = localStorage.getItem("name");
	
	for(var i=0;i<arr.length;i++)
	{
		if(n==arr[i].username)
		{
			document.getElementById("name").innerHTML = arr[i].name;
			document.getElementById("mob").innerHTML = arr[i].mobile;
			document.getElementById("email").innerHTML = arr[i].email;
		}
	}
}

function sign_out()
{
	localStorage.removeItem("name");
	location.assign("loginform.html");
}

