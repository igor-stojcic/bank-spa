let accountsBody = document.querySelector('#accountsBody');
let accountsBtn = document.querySelector('#accountsBtn');
let addAccountsBtn = document.querySelector('#addAccountsBtn');
let editOrDeleteAccountsBtn = document.querySelector('#editOrDeleteAccountsBtn');
let accountsView = document.querySelector('#accountsView');
let saveBtn = document.querySelector('#saveBtn');
let displayTime = document.querySelector('#display-time');
let displayDate = document.querySelector('#display-date');
let logOutBtn = document.querySelector('#log-out');
let logOutForm = document.querySelector('#form-logOut');
//  Add Account --------------
let idInput = document.querySelector('#idInput');
let firstNameInput = document.querySelector('#firstName');
let lastNameInput = document.querySelector('#lastName');
let depositInput = document.querySelector('#deposit');
let creditCardInput = document.querySelector('#bank-card');
let addressInput = document.querySelector('#address');
let countryInput = document.querySelector('#country');
let cityInput = document.querySelector('#city');
let zipInput = document.querySelector('#zip');
let emailInput = document.querySelector('#email');
let phoneInput = document.querySelector('#phone');
//  Edit account -------------
let editAccountsView = document.querySelector('#editAccountsView');
let idEdit = document.querySelector('#idEdit');
let firstNameEdit = document.querySelector('#firstNameEdit');
let lastNameEdit = document.querySelector('#lastNameEdit');
let depositEdit = document.querySelector('#depositEdit');
let creditCardEdit = document.querySelector('#creditCardEdit');
let addressEdit = document.querySelector('#addressEdit');
let countryEdit = document.querySelector('#countryEdit');
let cityEdit = document.querySelector('#cityEdit');
let zipEdit = document.querySelector('#zipEdit');
let emailEdit = document.querySelector('#emailEdit');
let phoneEdit = document.querySelector('#phoneEdit');
let editSaveBtn = document.querySelector('#editSaveBtn');
//  Details Accountss -----------
let detailsAccountView = document.querySelector('#accounts-details');
let detailId = document.querySelector('#detailId');
let detailFirstName = document.querySelector('#detailFirstName');
let detailLasttName = document.querySelector('#detailLasttName');
let detailDeposit = document.querySelector('#detailDeposit');
let detailCreditCard = document.querySelector('#detailCreditCard');
let detailAddress = document.querySelector('#detailAddress');
let detailCountry = document.querySelector('#detailCountry');
let detailCity = document.querySelector('#detailCity');
let detailZip = document.querySelector('#detailZip');
let detailEmail = document.querySelector('#detailEmail');
let detailPhone = document.querySelector('#detailPhone');
// -------------------------
makeCityes();

// MYSQL --------
DB.getAll().then((data)=>{
	createAccountTable(data);
},(err)=>{
	console.log(err);
});

let allDataFromDb;
addAccountsBtn.addEventListener('click',showAddAccountsView);
accountsBtn.addEventListener('click',showAccountsView);
saveBtn.addEventListener('click',saveNewAccount);
editOrDeleteAccountsBtn.addEventListener('click',showEditOrDeleteAccountsView);
searchBtn.addEventListener('click',searchUser);

// TIME
setInterval(function () {
	let date = new Date();
	let months = ["01","02","03","04","05","06","07","08","09","10","11","12"];
	let hours = addZero(date.getHours());
	let minutes = addZero(date.getMinutes());
	let sec = addZero(date.getSeconds());
	let day = addZero(date.getDate());
	let month = months[date.getMonth()];
	let year = date.getFullYear();
	displayDate.innerHTML = `<small>${day}-${month}-${year}</small>`;
	displayTime.innerHTML = `<small>${hours}:${minutes}:${sec}</small>`;

	function addZero(i) {
		if (i < 10) {
		  i = "0" + i;
		}
		return i;
	}
},1000);

function createAccountTable(data) {
	let text = '';
	for (let i = 0; i < data.length; i++) {
		text += `<tr class="all-data-db">
    				<td class="text-danger font-weight-bold">${data[i].id}</td>
    				<td>${data[i].firstName}</td>
    				<td>${data[i].lastName}</td>
    				<td>${data[i].deposit}</td>
    				<td>${data[i].creditCard}</td>
    				<td class="hide-data">${data[i].address}</td>
    				<td class="hide-data">${data[i].country}</td>
    				<td class="hide-data">${data[i].city}</td>
    				<td class="hide-data">${data[i].zip}</td>
    				<td class="hide-data">${data[i].email}</td>
    				<td class="hide-data">${data[i].phone}</td>
	    			<td id="edit-delete">
						<button id="editBtn" class="btn btn-secondary btn-sm">Edit</button>
						<button id="deleteBtn" class="btn btn-danger btn-sm">Delete</button>
	    			</td>
	    			<td id="details">
						<button id="detailsBtn" class="btn btn-success btn-sm">Details</button>
	    			</td>
    			</tr>`;
	}
	accountsBody.innerHTML = text;
	allDataFromDb = document.getElementsByClassName('all-data-db');
	showAccountsView();
}

function showAccountsView() {
	document.querySelector('#accountsView h3').innerHTML = 'Accounts';
	searchView.style.display = 'block';
	accountsView.style.display = 'block';
	addAccountsView.style.display = 'none';
	editAccountsView.style.display = 'none';
	detailsAccountView.style.display = 'none';
	oneDetailsAccountView.style.display = 'none';
	oneEditAccountsView.style.display = 'none';
	oneAccountsView.style.display = 'none';

	for (let i = 0; i < allDataFromDb.length; i++) {
		if (i % 2 != 0) {
			allDataFromDb[i].children[0].style.background = '#f2f2f2';
			allDataFromDb[i].children[1].style.background = '#f2f2f2';
			allDataFromDb[i].children[2].style.background = '#f2f2f2';
			allDataFromDb[i].children[3].style.background = '#f2f2f2';
			allDataFromDb[i].children[4].style.background = '#f2f2f2';
		}

		allDataFromDb[i].children[11].style.display = 'none';
		allDataFromDb[i].children[11].style.display = 'none';
		allDataFromDb[i].children[12].style.display = 'block';
		allDataFromDb[i].children[12].children[0].addEventListener('click',showDetailsAccount);
	}
}

function searchUser(e) {
	let accountCounter = 0;
	if (searchFirstName.value != '' || searchLastName.value != '') {
		for (let i = 0; i < allDataFromDb.length; i++) {
			if (allDataFromDb[i].children[1].textContent == searchFirstName.value || allDataFromDb[i].children[2].textContent == searchLastName.value) {
				let oneUserData = {
					firstName : allDataFromDb[i].children[1].textContent,
					lastName : allDataFromDb[i].children[2].textContent
				};
	
				DB.getOneUser(oneUserData).then((oneUser)=>{
					createOneAccountTable(JSON.parse(oneUser));
				},(err)=>{
					console.log(err);
				});
			}else{
				accountCounter++;
			}
		}
	}

	if(accountCounter == allDataFromDb.length){
		notFoundAccount();
		accountCounter = 0;
	}
}

function notFoundAccount() {
	searchFirstName.style.color = 'red';
	searchFirstName.value = 'No match';
	searchLastName.style.color = 'red';
	searchLastName.value = 'No match';
	setTimeout(function () {
		searchFirstName.style.color = '#000';
		searchFirstName.value = '';
		searchLastName.style.color = '#000';
		searchLastName.value = '';
	},1000);
}

function showDetailsAccount(e) {
	detailsAccountView.style.display = 'block';
	accountsView.style.display = 'none';
	addAccountsView.style.display = 'none';
	editAccountsView.style.display = 'none';
	oneDetailsAccountView.style.display = 'none';
	oneEditAccountsView.style.display = 'none';
	oneAccountsView.style.display = 'none';

	let accounts = this.parentNode.parentNode;
	let idNum = accounts.children[0].textContent;
	let firstName = accounts.children[1].textContent;
	let lastName = accounts.children[2].textContent;
	let deposit = accounts.children[3].textContent;
	let bankCard = accounts.children[4].textContent;
	let addressed = accounts.children[5].textContent;
	let state = accounts.children[6].textContent;
	let town = accounts.children[7].textContent;
	let zipCode = accounts.children[8].textContent;
	let emailAddress = accounts.children[9].textContent;
	let phoneNumber = accounts.children[10].textContent;
	detailId.value = idNum;
	detailFirstName.value = firstName;
	detailLasttName.value = lastName;
	detailDeposit.value = deposit;
	detailCreditCard.value = bankCard;
	detailAddress.value = addressed;
	detailCountry.value = state;
	detailCity.value = town;
	detailZip.value = zipCode;
	detailEmail.value = emailAddress;
	detailPhone.value = phoneNumber;
}


// function logOut() {
// 	logOutForm.submit();
// }
