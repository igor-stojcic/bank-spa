class DB {
	static getAll(){
		return new Promise((resolve,reject)=>{
			let xml = new XMLHttpRequest();
			xml.onreadystatechange = () => {
				if (xml.readyState == 4 && xml.status == 200) {
					xml.responseText
					// console.log(xml.responseText);
					resolve(JSON.parse(xml.responseText));
				}
			}
			xml.open('GET','get_data.php');
			xml.send();
		})
	}
	// SLANJE ADD PODATAKA U BAZU
	static save(newAccount){
		return new Promise((resolve,reject)=>{
			let xml = new XMLHttpRequest();
			xml.onreadystatechange = () => {
				if (xml.readyState == 4 && xml.status == 200) {
					resolve(xml.responseText);
				}
			}
			xml.open('POST','save_data.php');
			xml.setRequestHeader("Content-type","application/json");
			xml.send(JSON.stringify(newAccount));
		})
	}
	// SLANJE EDIT PODATAKA U BAZU
	static saveEdited(temp){
		return new Promise((resolve,reject)=>{
			let xml = new XMLHttpRequest();
			xml.onreadystatechange = () => {
				if (xml.readyState == 4 && xml.status == 200) {
					resolve(xml.responseText);
				}
			}
			xml.open('POST','save_edited_data.php');
			xml.setRequestHeader("Content-type","application/json");
			xml.send(JSON.stringify(temp));
		})
	}
	// DELETE PODATAKA SA BAZE
	static delete(deldata){
		return new Promise((resolve,reject)=>{
			let xml = new XMLHttpRequest();
			xml.onreadystatechange = () => {
				if (xml.readyState == 4 && xml.status == 200) {
					resolve(xml.responseText);
				}
			}
			xml.open('POST','delete_data.php');
			xml.send(deldata.id);
		})
	}

	static getOneUser(oneUserData){
		return new Promise((resolve,reject)=>{
			let xml = new XMLHttpRequest();
			xml.onreadystatechange = () => {
				if (xml.readyState == 4 && xml.status == 200) {
					xml.responseText
					// console.log(xml.responseText);
					resolve(xml.responseText);
				}
			}
			xml.open('POST','get_user.php');
			xml.setRequestHeader("Content-type","application/json");
			xml.send(JSON.stringify(oneUserData));
		})
	}


}