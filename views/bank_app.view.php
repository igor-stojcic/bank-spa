<?php require_once "partials/top.php"; ?>

	<!-- HEADER -->
	
	<div id="header" class="jumbotron jumbotron-fluid text-center p-0">
		<div class="container-fluid p-0">
			<div class="row ml-0 mr-0">
				<div class="col-sm-12">
					<div class="row pl-1 pr-1">
						<div id="display-time" class="mr-auto"></div>
						<div id="hello-user" class="ml-auto"><small>User: <?php echo $_SESSION['name']; ?></small></div>
					</div>
					<div class="row pl-1 pr-1">
				    	<div id="display-date" class="mr-auto"></div>
				    	<div id="log-out" class="btn-group-vertical ml-auto mt-1">
				    		<?php if(isset($_SESSION['privilege'])): ?>
					    		<div>
					    			<a href="register.php" class="btn btn-sm btn-outline-secondary pt-0 pb-0"><small>Register User</small></a>
					    		</div>
				    		<?php endif; ?>
				    		<a href="logout.php" class="btn btn-sm btn-outline-danger mt-1 pt-0 pb-0"><small>Logout</small></a>
				    	</div>
			    	</div>
			    	
			    	<img src="logo/Wonder-Woman.svg" id="logo" class="rounded mx-auto mt-n5" alt="Bank logo" width="100" height="100">

			    	<p class="h4 mt-n3">Wolf Bank</p>

			    	<button id="accountsBtn" class="btn btn-primary">Accounts</button>
			    	<button id="addAccountsBtn" class="btn btn-success">Add account</button>
			    	<button id="editOrDeleteAccountsBtn" class="btn btn-warning">Edit/Delete</button>
			    	<!-- SEARCH -->
					<div id="search-view" class="col-md-2 offset-md-5 col-10 offset-1 mt-2 pb-2">
				    	<div id="search-section" class="input-group input-group-sm">
				    		<input type="text" id="search-input-firstName" class="form-control" placeholder="FirstName">
				    		<input type="text" id="search-input-lastName" class="form-control" placeholder="LastName">
				    		<div class="input-group-append">
				   				<button type="submit" id="searchBtn" class="btn btn-primary">Search</button>
				   			</div>
				   		</div>
			   		</div>
			    </div>
		    </div>
		</div>
	</div>
    

    <div class="container">
    	<!-- ACCOYNTS vIEW -->
    	<div id="accountsView" class="row">
    		<div class="col-12">
    		<h3>Accounts</h3>
    			<div class="row">
			    	<div class="col-10 offset-1">
			    		<div class="table-responsive">
				    		<table class="table">
				    			<thead>
				    				<tr>
				    					<th>ID</th>
				    					<th>First name</th>
				    					<th>Last name</th>
				    					<th>Deposit</th>
				    					<th>Credit Card</th>
				    				</tr>
				    			</thead>
				    			<tbody id="accountsBody"></tbody>
				    		</table>
			    		</div>
			    	</div>
	    		</div>
	    	</div>
    	</div>

		<!--   ACCOUNTS DETAILS VIEW   -->
		<div id="accounts-details" class="row">
			<div class="col-12">
    			<h3>Account Details</h3>
	    		<div class="row">
	    			<div class="col-10 offset-1">
 
				        <div class="row">
	    					<div class="col-md-2 mb-3">
				            	<input id="detailId" type="number" class="form-control font-weight-bold text-danger border border-dark rounded-pill text-center" placeholder="id" readonly>
				            </div>
	    					
				        	<div class="col-md-5 mb-3">
				            	<label for="detailFirstName">First name</label>
					        	<input type="text" class="form-control" id="detailFirstName" readonly>
				        	</div>
				          	<div class="col-md-5 mb-3">
				          		<label for="detailLasttName">Last name</label>
					        	<input type="text" class="form-control" id="detailLasttName" readonly>
				        	</div>
				        </div>
						
						<div class="row">
							<div class="col-md-7 mb-3">
								<label for="detailDeposit">deposit</label>
					        	<input type="text" class="form-control" id="detailDeposit" readonly>
							</div>
							<div class="col-md-5 mb-3">
								<label for="detailCreditCard">Credit Card</label>
					        	<input type="text" class="form-control" id="detailCreditCard" readonly>
	    					</div>
	    				</div>
						
						<div class="row">
							<div class="col-md-12 mb-3">
								<label for="detailAddress">Address</label>
					        	<input type="text" class="form-control" id="detailAddress" readonly>
					        </div>
				        </div>

				        <div class="row">
				        	<div class="col-md-6 mb-3">
				            	<label for="detailCountry">Country</label>
					        	<input type="text" class="form-control" id="detailCountry" readonly>
				        	</div>
				        	<div class="col-md-4 mb-3">
				            	<label for="detailCity">City</label>
					        	<input type="text" class="form-control" id="detailCity" readonly>
				        	</div>

				        	<div class="col-md-2 mb-3">
				            	<label for="detailZip">Zip code</label>
					        	<input type="text" class="form-control" id="detailZip" readonly>
				        	</div>
				        </div>
						
						<div class="row">
				        	<div class="col-md-6 mb-3">
				        		<label for="detailEmail">E-mail</label>
					        	<input type="text" class="form-control" id="detailEmail" readonly>
				        	</div>
				        	<div class="col-md-6 mb-3">
				        		<label for="detailPhone">Phone</label>
					        	<input type="text" class="form-control" id="detailPhone" readonly>
				        	</div>
				        </div>

	    			</div>
	    		</div>
    		</div>
    	</div>


    	<!-- ADD NEW ACCOUNTS VIEW -->
    	<div id="addAccountsView" class="row">
    		<div class="col-12">
    			<h3>Add Accounts</h3>
	    		<div class="row">
	    			<div class="col-10 offset-1">
	    				
	    				<div class="row">
				        	<div class="col-md-6 mb-4">
				            	<input type="text" class="form-control" id="firstName" placeholder="First name">
				        	</div>
				          	<div class="col-md-6 mb-4">
				            	<input type="text" class="form-control" id="lastName" placeholder="Last name">
				        	</div>
				        </div>
						
						<div class="row">
							<div class="col-md-6 mb-4">
	    						<input type="number" id="deposit" class="form-control" placeholder="deposit">
							</div>
							<div class="col-md-6 mb-4">
	    						<select class="custom-select d-block w-100" id="bank-card">
				            		<option>Bank card...</option>
				            		<option>Visa</option>
				            		<option>Visa Debit</option>
				            		<option>DinaCard</option>
				            		<option>Master</option>
				            		<option>MasterCard Debit</option>
				            		<option>Maestro</option>
				            		<option>American Express</option>
				            		<option>Visa pre-paid</option>
				            	</select>
	    					</div>
	    				</div>
						
						<div class="row">
							<div class="col-md-12 mb-4">
					          	<input type="text" id="address" class="form-control" placeholder="Address">
					        </div>
				        </div>

				        <div class="row">
				        	<div class="col-md-6 mb-4">
				            	<select id="country" class="custom-select d-block w-100">
				            		<option>Country...</option>
				            		<option>Serbia</option>
				            	</select>
				        	</div>
				        	<div class="col-md-4 mb-4">
				            	<select id="city" class="custom-select d-block w-100">
				            		<!-- <option >City...</option> -->
				            	</select>
				        	</div>

				        	<div class="col-md-2 mb-4">
				            	<input type="text" id="zip" class="form-control" placeholder="Zip" maxlength="5">
				        	</div>
				        </div>
						
						<div class="row">
				        	<div class="col-md-6 mb-4">
				        		<input type="email" id="email" class="form-control" placeholder="Email (Optional) - you@example.com">
				        	</div>
				        	<div class="col-md-6 mb-4">
				        		<input type="text" id="phone" class="form-control" placeholder="Phone number 381...">
				        	</div>
				        </div>
				    	
	    				<button id="saveBtn" class="btn btn-primary form-control">Save</button>
	    				
	    			</div>
	    		</div>
    		</div>
    	</div>
    	<!-- EDIT ACCOUNTS VIEW -->
    	<div id="editAccountsView" class="row">
    		<div class="col-12">
    			<h3>Edit Accounts</h3>
				<div class="row">
	    			<div class="col-10 offset-1">
	    				
	    				<div class="row">
	    					<div class="col-md-2 mb-4">
				            	<input id="idEdit" type="number" class="form-control font-weight-bold text-danger border border-dark rounded-pill text-center" placeholder="id" readonly>
				            </div>
	    					
				        	<div class="col-md-5 mb-4">
				            	<input type="text" id="firstNameEdit" class="form-control" placeholder="First name"  >
				        	</div>
				          	<div class="col-md-5 mb-4">
				            	<input type="text" id="lastNameEdit" class="form-control" placeholder="Last name"  >
				        	</div>
				        </div>
						
						<div class="row">
							<div class="col-md-7 mb-4">
	    						<input type="number" id="depositEdit" class="form-control" placeholder="deposit" >
							</div>
							<div class="col-md-5 mb-4">
	    						<select id="creditCardEdit" class="custom-select d-block w-100" >
				            		<option >Bank card...</option>
				            		<option>Visa</option>
				            		<option>Visa Debit</option>
				            		<option>DinaCard</option>
				            		<option>Master</option>
				            		<option>MasterCard Debit</option>
				            		<option>Maestro</option>
				            		<option>American Express</option>
				            		<option>Visa pre-paid</option>
				            	</select>
	    					</div>
	    				</div>
						
						<div class="row">
							<div class="col-md-12 mb-4">
					          	<input type="text" id="addressEdit" class="form-control" placeholder="Address" >
					        </div>
				        </div>

				        <div class="row">
				        	<div class="col-md-6 mb-4">
				            	<select id="countryEdit" class="custom-select d-block w-100" >
				            		<option >Country...</option>
				            		<option>Serbia</option>
				            	</select>
				        	</div>
				        	<div class="col-md-4 mb-4">
				            	<select id="cityEdit" class="custom-select d-block w-100" >
				            		<!-- <option >City...</option> -->
				            	</select>
				        	</div>

				        	<div class="col-md-2 mb-4">
				            	<input type="text" id="zipEdit" class="form-control" placeholder="Zip" maxlength="5">
				        	</div>
				        </div>
						
						<div class="row">
				        	<div class="col-md-6 mb-4">
				        		<input type="email" id="emailEdit" class="form-control" placeholder="Email (Optional) - you@example.com">
				        	</div>
				        	<div class="col-md-6 mb-4">
				        		<input type="text" id="phoneEdit" class="form-control" placeholder="Phone number 381..." >
				        	</div>
				        </div>

	    				<button id="editSaveBtn" class="btn btn-primary form-control">Save</button>

	    			</div>
	    		</div>
    		</div>
    	</div>

		<!-- ONE ACCOUNT VIEW -->

		<div id="oneAccountsView" class="row">
    		<div class="col-12">
    			<h3>Accounts</h3>
	    		<div class="row">
	    			<div class="col-12 offset-1">
	    				<table class="table">
	    					<thead>
	    						<tr>
	    							<th>ID</th>
	    							<th>First name</th>
	    							<th>Last name</th>
	    							<th>Deposit</th>
	    							<th>Credit Card</th>
	    							<!-- <th>Menu</th> -->
	    						</tr>
	    					</thead>
	    					<tbody id="oneAccountsBody"></tbody>
	    				</table>
	    			</div>
	    		</div>
    		</div>
    	</div>

		<div id="one-accounts-details" class="row">
			
			<div class="col-12">
				<button id="backwardBtn1" class="btn btn-outline-dark position-absolute backward">Accounts view</button>
    			<h3>Account Details</h3>
					
	    		<div class="row">
	    			<div class="col-10 offset-1">
 
				        <div class="row">
	    					
				        	<div class="col-md-6 mb-3">
				            	<label for="detailFirstName">First name</label>
					        	<input type="text" class="form-control" id="oneDetailFirstName" readonly>
				        	</div>
				          	<div class="col-md-6 mb-3">
				          		<label for="detailLasttName">Last name</label>
					        	<input type="text" class="form-control" id="oneDetailLasttName" readonly>
				        	</div>
				        </div>
						
						<div class="row">
							<div class="col-md-6 mb-3">
								<label for="detailDeposit">deposit</label>
					        	<input type="text" class="form-control" id="oneDetailDeposit" readonly>
							</div>
							<div class="col-md-6 mb-3">
								<label for="detailCreditCard">Credit Card</label>
					        	<input type="text" class="form-control" id="oneDetailCreditCard" readonly>
	    					</div>
	    				</div>
						
						<div class="row">
							<div class="col-md-12 mb-3">
								<label for="detailAddress">Address</label>
					        	<input type="text" class="form-control" id="oneDetailAddress" readonly>
					        </div>
				        </div>

				        <div class="row">
				        	<div class="col-md-6 mb-3">
				            	<label for="detailCountry">Country</label>
					        	<input type="text" class="form-control" id="oneDetailCountry" readonly>
				        	</div>
				        	<div class="col-md-4 mb-3">
				            	<label for="detailCity">City</label>
					        	<input type="text" class="form-control" id="oneDetailCity" readonly>
				        	</div>

				        	<div class="col-md-2 mb-3">
				            	<label for="detailZip">Zip code</label>
					        	<input type="text" class="form-control" id="oneDetailZip" readonly>
				        	</div>
				        </div>
						
						<div class="row">
				        	<div class="col-md-6 mb-3">
				        		<label for="detailEmail">E-mail</label>
					        	<input type="text" class="form-control" id="oneDetailEmail" readonly>
				        	</div>
				        	<div class="col-md-6 mb-3">
				        		<label for="detailPhone">Phone</label>
					        	<input type="text" class="form-control" id="oneDetailPhone" readonly>
				        	</div>
				        </div>

	    			</div>
	    		</div>
    		</div>
    	</div>
		<div id="oneEditAccountsView" class="row">
    		<div class="col-12">
    			<h3>Edit Accounts</h3>
				<div class="row">
	    			<div class="col-10 offset-1">
	    				
	    				<div class="row">
	    					<div class="col-md-2 mb-4">
				            	<input id="oneIdEdit" type="number" class="form-control font-weight-bold text-danger border border-dark rounded-pill text-center" placeholder="id" readonly>
				            </div>
	    					
				        	<div class="col-md-5 mb-4">
				            	<input type="text" id="onefirstNameEdit" class="form-control" placeholder="First name"  >
				        	</div>
				          	<div class="col-md-5 mb-4">
				            	<input type="text" id="onelastNameEdit" class="form-control" placeholder="Last name"  >
				        	</div>
				        </div>
						
						<div class="row">
							<div class="col-md-7 mb-4">
	    						<input type="number" id="onedepositEdit" class="form-control" placeholder="deposit" >
							</div>
							<div class="col-md-5 mb-4">
	    						<select id="onecreditCardEdit" class="custom-select d-block w-100" >
				            		<option >Bank card...</option>
				            		<option>Visa</option>
				            		<option>Visa Debit</option>
				            		<option>DinaCard</option>
				            		<option>Master</option>
				            		<option>MasterCard Debit</option>
				            		<option>Maestro</option>
				            		<option>American Express</option>
				            		<option>Visa pre-paid</option>
				            	</select>
	    					</div>
	    				</div>
						
						<div class="row">
							<div class="col-md-12 mb-4">
					          	<input type="text" id="oneaddressEdit" class="form-control" placeholder="Address" >
					        </div>
				        </div>

				        <div class="row">
				        	<div class="col-md-6 mb-4">
				            	<select id="onecountryEdit" class="custom-select d-block w-100" >
				            		<option >Country...</option>
				            		<option>Serbia</option>
				            	</select>
				        	</div>
				        	<div class="col-md-4 mb-4">
				            	<select id="onecityEdit" class="custom-select d-block w-100" >
				            		<!-- <option >City...</option> -->
				            	</select>
				        	</div>

				        	<div class="col-md-2 mb-4">
				            	<input type="text" id="onezipEdit" class="form-control" placeholder="Zip" maxlength="5">
				        	</div>
				        </div>
						
						<div class="row">
				        	<div class="col-md-6 mb-4">
				        		<input type="email" id="oneemailEdit" class="form-control" placeholder="Email (Optional) - you@example.com">
				        	</div>
				        	<div class="col-md-6 mb-4">
				        		<input type="text" id="onephoneEdit" class="form-control" placeholder="Phone number 381..." >
				        	</div>
				        </div>

	    				<button id="oneeditSaveBtn" class="btn btn-primary form-control">Save</button>

	    			</div>
	    		</div>
    		</div>
    	</div>




    </div>

	<script src="js/DB.js"></script>
	<script src="js/search.js"></script>
	<script src="js/confirmDeleteBox.js"></script>
    <script src="js/main.js"></script>

<?php require_once "partials/bottom.php"; ?>