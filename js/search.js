//ONE Account
let oneAccountsBody = document.querySelector('#oneAccountsBody');
let oneAccountsView = document.querySelector('#oneAccountsView');
//SEARCH--------------
let searchView = document.querySelector('#search-view');
let searchFirstName = document.querySelector('#search-input-firstName');
let searchLastName = document.querySelector('#search-input-lastName');
let searchBtn = document.querySelector('#searchBtn');
//EDIT
let oneEditAccountsView = document.querySelector('#oneEditAccountsView');
let oneIdEdit = document.querySelector('#oneIdEdit');
let oneFirstNameEdit = document.querySelector('#onefirstNameEdit');
let oneLastNameEdit = document.querySelector('#onelastNameEdit');
let oneDepositEdit = document.querySelector('#onedepositEdit');
let oneCreditCardEdit = document.querySelector('#onecreditCardEdit');
let oneAddressEdit = document.querySelector('#oneaddressEdit');
let oneCountryEdit = document.querySelector('#onecountryEdit');
let oneCityEdit = document.querySelector('#onecityEdit');
let oneZipEdit = document.querySelector('#onezipEdit');
let oneEmailEdit = document.querySelector('#oneemailEdit');
let onePhoneEdit = document.querySelector('#onephoneEdit');
let oneEditSaveBtn = document.querySelector('#oneeditSaveBtn');
//  Details Accountss -----------
let oneDetailsAccountView = document.querySelector('#one-accounts-details');
let oneDetailId = document.querySelector('#oneDetailId');
let oneDetailFirstName = document.querySelector('#oneDetailFirstName');
let oneDetailLasttName = document.querySelector('#oneDetailLasttName');
let oneDetailDeposit = document.querySelector('#oneDetailDeposit');
let oneDetailCreditCard = document.querySelector('#oneDetailCreditCard');
let oneDetailAddress = document.querySelector('#oneDetailAddress');
let oneDetailCountry = document.querySelector('#oneDetailCountry');
let oneDetailCity = document.querySelector('#oneDetailCity');
let oneDetailZip = document.querySelector('#oneDetailZip');
let oneDetailEmail = document.querySelector('#oneDetailEmail');
let oneDetailPhone = document.querySelector('#oneDetailPhone');
let accountsViewBtn = document.querySelector('#backwardBtn1');

function createOneAccountTable(oneUser) {
	let text = '';
	for (let i = 0; i < oneUser.length; i++) {
		text += `<tr class="one-all-data-db">
    				<td class="text-danger font-weight-bold">${oneUser[i].id}</td>
    				<td>${oneUser[i].firstName}</td>
    				<td>${oneUser[i].lastName}</td>
    				<td>${oneUser[i].deposit}</td>
    				<td>${oneUser[i].creditCard}</td>
    				<td class="hide-data">${oneUser[i].address}</td>
    				<td class="hide-data">${oneUser[i].country}</td>
    				<td class="hide-data">${oneUser[i].city}</td>
    				<td class="hide-data">${oneUser[i].zip}</td>
    				<td class="hide-data">${oneUser[i].email}</td>
    				<td class="hide-data">${oneUser[i].phone}</td>
	    			<td id="one-edit-delete">
						<button id="oneEditBtn" class="btn btn-secondary btn-sm">Edit</button>
						<button id="oneDeleteBtn" class="btn btn-danger btn-sm">Delete</button>
						<button id="oneDetailsBtn" class="btn btn-success btn-sm">Details</button>
	    			</td>
	    			
    			</tr>`;
	}
	oneAccountsBody.innerHTML = text;
	allOneUserDataFromDb = document.getElementsByClassName('one-all-data-db');
	showOneAccountsView();
}

function showOneAccountsView() {
	document.querySelector('#oneAccountsView h3').innerHTML = 'Accounts';
	oneAccountsView.style.display = 'block';
	oneDetailsAccountView.style.display = 'none';
	oneEditAccountsView.style.display = 'none';
	accountsView.style.display = 'none';
	// searchView.style.visibility = 'hidden';
	addAccountsView.style.display = 'none';
	editAccountsView.style.display = 'none';
	detailsAccountView.style.display = 'none';

	for (let i = 0; i < allOneUserDataFromDb.length; i++) {
		if (i % 2 != 0) {
			allOneUserDataFromDb[i].children[0].style.background = '#f2f2f2';
			allOneUserDataFromDb[i].children[1].style.background = '#f2f2f2';
			allOneUserDataFromDb[i].children[2].style.background = '#f2f2f2';
			allOneUserDataFromDb[i].children[3].style.background = '#f2f2f2';
			allOneUserDataFromDb[i].children[4].style.background = '#f2f2f2';
		}
		allOneUserDataFromDb[i].children[11].style.display = 'block';
		allOneUserDataFromDb[i].children[11].style.display = 'block';
		allOneUserDataFromDb[i].children[11].children[0].addEventListener('click',showOneEditOrDeleteAccountsView);
		allOneUserDataFromDb[i].children[11].children[1].addEventListener('click',deleteOneAccount);
		allOneUserDataFromDb[i].children[11].children[2].addEventListener('click',showOneDetailsAccount);
	}
}

function showOneDetailsAccount(e) {
	accountsViewBtn.addEventListener('click',showOneAccountsView);
	oneDetailsAccountView.style.display = 'block';
	oneEditAccountsView.style.display = 'none';
	oneAccountsView.style.display = 'none';
	// searchView.style.display = 'none';
	accountsView.style.display = 'none';
	addAccountsView.style.display = 'none';
	editAccountsView.style.display = 'none';
	detailsAccountView.style.display = 'none';

	let accounts = this.parentNode.parentNode;
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
	oneDetailFirstName.value = firstName;
	oneDetailLasttName.value = lastName;
	oneDetailDeposit.value = deposit;
	oneDetailCreditCard.value = bankCard;
	oneDetailAddress.value = addressed;
	oneDetailCountry.value = state;
	oneDetailCity.value = town;
	oneDetailZip.value = zipCode;
	oneDetailEmail.value = emailAddress;
	oneDetailPhone.value = phoneNumber;
}

function showOneEditOrDeleteAccountsView(e) {
	document.querySelector('#oneAccountsView h3').innerHTML = 'Edit / Delete';
	oneEditAccountsView.style.display = 'block';
	oneDetailsAccountView.style.display = 'none';
	oneAccountsView.style.display = 'none';
	// searchView.style.display = 'none';
	accountsView.style.display = 'none';
	addAccountsView.style.display = 'none';
	editAccountsView.style.display = 'none';
	detailsAccountView.style.display = 'none';
	oneEditSaveBtn.addEventListener('click',saveOneEditedAccount);

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

	oneIdEdit.value = idNum;
	oneFirstNameEdit.value = firstName;
	oneLastNameEdit.value = lastName;
	oneDepositEdit.value = deposit;
	oneCreditCardEdit.value = bankCard;
	oneAddressEdit.value = addressed;
	oneCountryEdit.value = state;
	(town == '')? oneCityEdit.value = 'City...' : oneCityEdit.value = town;
	oneZipEdit.value = zipCode;
	oneEmailEdit.value = emailAddress;
	onePhoneEdit.value = phoneNumber;
	
	accountsView.style.display = 'none';
	
	oneFirstNameEdit.focus();

	function saveOneEditedAccount() {
		let temp = {
			id : oneIdEdit.value,
			firstName : oneFirstNameEdit.value,
			lastName : oneLastNameEdit.value,
			deposit : oneDepositEdit.value,
			creditCard : oneCreditCardEdit.value,
			address : oneAddressEdit.value,
			country : oneCountryEdit.value,
			city : oneCityEdit.value,
			zip : oneZipEdit.value,
			email : oneEmailEdit.value,
			phone : onePhoneEdit.value
		};

		DB.saveEdited(temp).then((res)=>{
			DB.getAll().then((data)=>{
				createAccountTable(data);
				searchUser();
			},(err)=>{
				console.log(err);
			});
    		console.log(res);
    	},(err)=>{
    		console.log(err);
    	});
	}
}

function deleteOneAccount(e) {

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
