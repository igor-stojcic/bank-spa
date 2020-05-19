
function showAddAccountsView() {
	searchFirstName.value = '';
	searchLastName.value = '';
	document.querySelector('#addAccountsView h3').innerHTML = 'Add New';
	addAccountsView.style.display = 'block';
	accountsView.style.display = 'none';
	editAccountsView.style.display = 'none';
	detailsAccountView.style.display = 'none';
	oneDetailsAccountView.style.display = 'none';
	oneEditAccountsView.style.display = 'none';
	oneAccountsView.style.display = 'none';
	firstNameInput.focus();
}

function saveNewAccount() {
	let newAccount = {
		// id : idInput.value,
		firstName : firstNameInput.value,
		lastName : lastNameInput.value,
		deposit : depositInput.value,
		creditCard : creditCardInput.value,
		address : addressInput.value,
		country : countryInput.value,
		city : cityInput.value,
		zip : zipInput.value,
		email : emailInput.value,
		phone : phoneInput.value
	};
	// VALIDATION
	let error = [];
	if (firstNameInput.value == '') {
		firstNameInput.style.border = '1px solid red';
		error.push('x');
		firstNameInput.addEventListener("focus", clearBorder);
	}
	if (lastNameInput.value == '') {
		lastNameInput.style.border = '1px solid red';
		error.push('x');
		lastNameInput.addEventListener("focus", clearBorder);
	}
	if (depositInput.value == '') {
		depositInput.style.border = '1px solid red';
		error.push('x');
		depositInput.addEventListener("focus", clearBorder);
	}
	if (creditCardInput.value == 'Bank card...') {
		creditCardInput.style.border = '1px solid red';
		error.push('x');
		creditCardInput.addEventListener("focus", clearBorder);
	}
	if (addressInput.value == '') {
		addressInput.style.border = '1px solid red';
		error.push('x');
		addressInput.addEventListener("focus", clearBorder);
	}
	if (countryInput.value == 'Country...') {
		countryInput.style.border = '1px solid red';
		error.push('x');
		countryInput.addEventListener("focus", clearBorder);
	}
	if (cityInput.value == 'City...') {
		cityInput.style.border = '1px solid red';
		error.push('x');
		cityInput.addEventListener("focus", clearBorder);
	}
	if (zipInput.value == '') {
		zipInput.style.border = '1px solid red';
		error.push('x');
		zipInput.addEventListener("focus", clearBorder);
	}
	if (phoneInput.value == '') {
		phoneInput.style.border = '1px solid red';
		error.push('x');
		phoneInput.addEventListener("focus", clearBorder);
	}
	if (error.length == 0) {
    	DB.save(newAccount).then((res)=>{
    		DB.getAll().then((data)=>{
				createAccountTable(data);
			},(err)=>{
				console.log(err);
			});
    		console.log(res);
    	},(err)=>{
    		console.log(err);
    	});		

		firstNameInput.value = '';
		lastNameInput.value = '';
		depositInput.value = '';
		creditCardInput.value = 'Bank card...';
		addressInput.value = '';
		countryInput.value = 'Country...';
		cityInput.value = 'City...';
		zipInput.value = '';
		emailInput.value = '';
		phoneInput.value = 'Phone number 381...';
		showAccountsView();
 	}

 	function clearBorder(e) {
 		this.style.border = '1px solid #ced4da';
 	}
}

