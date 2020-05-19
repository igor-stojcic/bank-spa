
function showEditOrDeleteAccountsView() {
	document.querySelector('#accountsView h3').innerHTML = 'Edit / Delete';
	searchView.style.visibility = 'visible';
	accountsView.style.display = 'block';
	addAccountsView.style.display = 'none';
	editAccountsView.style.display = 'none';
	detailsAccountView.style.display = 'none';
	oneDetailsAccountView.style.display = 'none';
	oneEditAccountsView.style.display = 'none';
	oneAccountsView.style.display = 'none';

	for (var i = 0; i < allDataFromDb.length; i++) {
		allDataFromDb[i].children[11].style.display = 'block';
		allDataFromDb[i].children[11].style.display = 'block';
		allDataFromDb[i].children[12].style.display = 'none';
		allDataFromDb[i].children[11].children[0].addEventListener('click',editAccount);
		allDataFromDb[i].children[11].children[1].addEventListener('click',deleteAccount);
	}

}

function editAccount(e) {
	searchView.style.visibility = 'hidden';
	editSaveBtn.addEventListener('click',saveEditedAccount);
	let accounts = this.parentNode.parentNode;
	let idNum = parseInt(accounts.children[0].textContent);
	let firstName = accounts.children[1].textContent;
	let lastName = accounts.children[2].textContent;
	let deposit = parseInt(accounts.children[3].textContent);
	let bankCard = accounts.children[4].textContent;
	let addressed = accounts.children[5].textContent;
	let state = accounts.children[6].textContent;
	let town = accounts.children[7].textContent;
	let zipCode = parseInt(accounts.children[8].textContent);
	let emailAddress = accounts.children[9].textContent;
	let phoneNumber = accounts.children[10].textContent;

	idEdit.value = idNum;
	firstNameEdit.value = firstName;
	lastNameEdit.value = lastName;
	depositEdit.value = deposit;
	creditCardEdit.value = bankCard;
	addressEdit.value = addressed;
	countryEdit.value = state;
	(town == '')? cityEdit.value = 'City...' : cityEdit.value = town;
	zipEdit.value = zipCode;
	emailEdit.value = emailAddress;
	phoneEdit.value = phoneNumber;
	
	accountsView.style.display = 'none';
	editAccountsView.style.display = 'block';
	firstNameEdit.focus();

	function saveEditedAccount() {
		let temp = {
			id : idEdit.value,
			firstName : firstNameEdit.value,
			lastName : lastNameEdit.value,
			deposit : depositEdit.value,
			creditCard : creditCardEdit.value,
			address : addressEdit.value,
			country : countryEdit.value,
			city : cityEdit.value,
			zip : zipEdit.value,
			email : emailEdit.value,
			phone : phoneEdit.value
		};

		DB.saveEdited(temp).then((res)=>{
			DB.getAll().then((data)=>{
				createAccountTable(data);
				showEditOrDeleteAccountsView();
			},(err)=>{
				console.log(err);
			});
    		console.log(res);
    	},(err)=>{
    		console.log(err);
    	});
		
	}
}

function deleteAccount(e) {
	let accounts = this.parentNode.parentNode;
	let idNum = parseInt(accounts.children[0].textContent);
	let firstName = accounts.children[1].textContent;
	let lastName = accounts.children[2].textContent;
	let deposit = parseInt(accounts.children[3].textContent);
	let bankCard = accounts.children[4].textContent;
	let address = accounts.children[5].textContent;
	let country = accounts.children[6].textContent;
	let city = accounts.children[7].textContent;
	let zip = parseInt(accounts.children[8].textContent);
	let email = accounts.children[9].textContent;
	let phone = accounts.children[10].textContent;
	let deldata = {
			id : idNum,
			firstName : firstName,
			lastName : lastName,
			deposit : deposit,
			creditCard : bankCard,
			address : address,
			country : country,
			city : city,
			zip : zip,
			email : email,
			phone : phone
		};

	let accountName = deldata.firstName + " " + deldata.lastName;

	confirmDialog(accountName, (ans) => {
		if (ans) {
 			DB.delete(deldata).then((res)=>{
			DB.getAll().then((data)=>{
				createAccountTable(data);
				showEditOrDeleteAccountsView();
			},(err)=>{
				console.log(err);
			});
    			console.log(res);
    		},(err)=>{
    			console.log(err);
    		});	
 		}
	});

}
