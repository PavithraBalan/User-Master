var app = new function () {
	var url = "https://localhost:5001/api/UserItems";
	userdetails = [];
	this.Xhr = function () {
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function () {
			if (this.readyState == 4 && this.status == 200) {
				userdetails =JSON.parse( this.responseText)
				//document.getElementById("demo").innerHTML = this.responseText;
				var html = "<table border='1|1'>";
				html += "<th>ID</th>";
				html += "<th>NAME</th>";
				html += "<th>EMAILID</th>";
				for (var i = 0; i < userdetails.length; i++) {
					html += "<tr>";
					html += "<td>" + userdetails[i].id + "</td>";
					html += "<td>" + userdetails[i].name + "</td>";
					html += "<td>" + userdetails[i].emailId + "</td>";
					html += '<td><button onclick="app.edit(' + userdetails[i].id + ')">Edit</button></td>';
					html += '<td><button onclick="app.delete(' + userdetails[i].id + ')">Delete</button></td>';
					html += "</tr>";
				}
				html += "</table>";
				document.getElementById("box").innerHTML = html;
			}
		};
		xhttp.open("GET", url, true);
		xhttp.send();
	}
	this.SaveAndUpdate = function () {
		// alert();
		((document.getElementById('Button').innerHTML == "Save") ? this.add() : this.update());
	}
	this.add = function () {
		alert("Add");
		var id = 0;
		var name = document.getElementById("name").value;
		var emailId = document.getElementById("emailId").value;
		userobj = {};
		userobj.id = id;
		userobj.name = name;
		userobj.emailId = emailId;
		alert(JSON.stringify(userobj));
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function () {
			if (this.readyState == 4 && this.status == 201) {
				var xhttp1 = new XMLHttpRequest();
				xhttp1.onreadystatechange = function () {
					if (this.readyState == 4 && this.status == 200) {
						userdetails = JSON.parse(this.responseText)
						//document.getElementById("demo").innerHTML = this.responseText;
						var html = "<table border='1|1'>";
						html += "<th>ID</th>";
						html += "<th>NAME</th>";
						html += "<th>EMAILID</th>";
						for (var i = 0; i < userdetails.length; i++) {
							html += "<tr>";
							html += "<td>" + userdetails[i].id + "</td>";
							html += "<td>" + userdetails[i].name + "</td>";
							html += "<td>" + userdetails[i].emailId + "</td>";
							html += '<td><button onclick="app.edit(' + userdetails[i].id + ')">Edit</button></td>';
							html += '<td><button onclick="app.delete(' + userdetails[i].id + ')">Delete</button></td>';
							html += "</tr>";
						}
						html += "</table>";
						document.getElementById("box").innerHTML = html;
					}
				};
				xhttp1.open("GET", url, true);
				xhttp1.send();

				document.getElementById('id').value = '';
				document.getElementById('name').value = '';
				document.getElementById('emailId').value = '';
			}
		};
		xhttp.open("POST", url);
		xhttp.setRequestHeader("Content-Type", "application/json");
		xhttp.send(JSON.stringify(userobj));
	}
	this.update = function () {
		alert();
		id = parseInt(document.getElementById('id').value);
		name = document.getElementById('name').value;
		emailId = document.getElementById('emailId').value;
		alert(JSON.stringify({ "id": id, "name": name, "emailId": emailId }));
		//var updateobj = JSON.parse({ "id": id, "name": name, "emailId": emailId });
		var updateobj = JSON.stringify({ "id": id, "name": name, "emailId": emailId });
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function () {
			if (this.readyState == 4 && this.status == 200) {
				var xhttp2 = new XMLHttpRequest();
				xhttp2.onreadystatechange = function () {
					if (this.readyState == 4 && this.status == 200) {
						userdetails = JSON.parse(this.responseText)
						//document.getElementById("demo").innerHTML = this.responseText;
						var html = "<table border='1|1'>";
						html += "<th>ID</th>";
						html += "<th>NAME</th>";
						html += "<th>EMAILID</th>";
						for (var i = 0; i < userdetails.length; i++) {
							html += "<tr>";
							html += "<td>" + userdetails[i].id + "</td>";
							html += "<td>" + userdetails[i].name + "</td>";
							html += "<td>" + userdetails[i].emailId + "</td>";
							html += '<td><button onclick="app.edit(' + userdetails[i].id + ')">Edit</button></td>';
							html += '<td><button onclick="app.delete(' + userdetails[i].id + ')">Delete</button></td>';
							html += "</tr>";
						}
						html += "</table>";
						document.getElementById("box").innerHTML = html;
					}
				};
				xhttp2.open("GET", url, true);
				xhttp2.send();
				document.getElementById('id').value = '';
				document.getElementById('name').value = '';
				document.getElementById('emailId').value = '';
			}
		};
		xhttp.open("PUT", url + "/" + updateindex);
		xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
		xhttp.send(updateobj);
		updateindex = 0;
		document.getElementById('Button').innerHTML = "Save";
	}
	this.edit = function (id) {
		alert(id);
		document.getElementById('Button').innerHTML = "Update";
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function () {
			if (this.readyState == 4 && this.status == 200) {
				var updates=JSON.parse(this.responseText)
				alert(JSON.stringify(updates));
				updateindex = updates.id;
				document.getElementById('id').value = updates.id;
				document.getElementById('name').value = updates.name;
				document.getElementById('emailId').value = updates.emailId;

			}
		};
		xhttp.open("GET", url + "/" + id);
		xhttp.send();
	}
	this.delete = function (deleteid) {
		alert(deleteid)
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function () {
			if (this.readyState == 4 && this.status == 200) {
				var xhttp3 = new XMLHttpRequest();
				xhttp3.onreadystatechange = function () {
					if (this.readyState == 4 && this.status == 200) {
						userdetails = JSON.parse(this.responseText)
						//document.getElementById("demo").innerHTML = this.responseText;
						var html = "<table border='1|1'>";
						html += "<th>ID</th>";
						html += "<th>NAME</th>";
						html += "<th>EMAILID</th>";
						for (var i = 0; i < userdetails.length; i++) {
							html += "<tr>";
							html += "<td>" + userdetails[i].id + "</td>";
							html += "<td>" + userdetails[i].name + "</td>";
							html += "<td>" + userdetails[i].emailId + "</td>";
							html += '<td><button onclick="app.edit(' + userdetails[i].id + ')">Edit</button></td>';
							html += '<td><button onclick="app.delete(' + userdetails[i].id + ')">Delete</button></td>';
							html += "</tr>";
						}
						html += "</table>";
						document.getElementById("box").innerHTML = html;
					}
				};
				xhttp3.open("GET", url, true);
				xhttp3.send();
			}
		};
		xhttp.open("DELETE", url + "/" + deleteid);
		xhttp.send();
	}
}