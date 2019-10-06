// this document is broken up into two sections (methods) searchSelection and voucherSelection
// searchSelection takes the input values from the dropdown box and text box
// and puts these inputs as variables to the Get request to the Phorest Client API
function searchSelection(){

  // the variables selected and value call and take the value from the dropdown
  // these values are linked to the json keys: fName, Lname, email, and phone
  var Selected = document.getElementById("dropdown");
  var Value = Selected.options[Selected.selectedIndex].value;

  // the variable textValue call and take the value from the textbox
  // this value must correspond to the selectedvalues above for the api to work
  var textValue = document.getElementById("userInput").value;

  // Here we are using an ajax get function to call the api and recieve the api information to the front end
  // I've replaced the key (fName) with the "value" variable and the value pair (John) with the "textValue" variable
  $.ajax({
            'async': 'true',
            'url': "https://api-gateway-dev.phorest.com/third-party-api-server/api/business/eTC3QY5W3p_HmGHezKfxJw/client?" + Value + "=" + textValue + "&page=0&size=20",
            'type': 'get',
            'headers':  {
                  "Authorization": "Basic " + "Z2xvYmFsL2Nsb3VkQGFwaWV4YW1wbGVzLmNvbTpWTWxSby9laCtYZDhNfmw="
            },
            'dataType': 'json',

            // here the call returns the result which stringifies and parses the data
        }).done(function (result) {
          var stringified = JSON.stringify(result);
          var parsedObj = JSON.parse(stringified);
          var availableClients = false;
          var object = parsedObj._embedded;
          var clients = object.clients;

          // creating the table header
          var clientTable = '<table>';
              clientTable += '<table class="table table-bordered table-striped">';
              clientTable += '<thead>'
              clientTable += '<tr>'
              clientTable += '<th>First Name</th>'
              clientTable += '<th>Last Name</th>'
              clientTable += '<th>Email</th>'
              clientTable += '<th>Phone</th>'
              clientTable += '<th>Voucher</th>'
              clientTable += '</tr>'
              clientTable += '</thead>'

          // looping through the json array to display all values which match the given input
          for (var i = 0; i < clients.length; i++){
              var fName = clients[i].firstName;
              var lName = clients[i].lastName;
              var email = clients[i].email;
              var phone = clients[i].mobile;

              // the value idea is made global so it can be used in the method voucherSelection
              id = clients[i].clientId;

              // checking if the input text value matches any api values and then returns information in the clientTable
              if(textValue == fName || textValue == lName || textValue == email || textValue == phone){

                  //availableClients variable is added as a form of error handling - this becomes true if inputs match
                  availableClients = true;
                  clientTable += '<tr><td>' + fName + '</td><td>' + lName + '</td>';
                  clientTable += '<td>' + email + '</td><td>' + phone + '</td>';
                  clientTable += '<td><button type="button" class="btn btn-default" data-toggle="modal" data-target="#myModal">'
                  clientTable += 'Create</button></td></tr>';
                  clientTable += '</tbody></table>'
              }
          }

          // if the inputs do not match then availableClients becomes false and displays an error message
          // this is a bit wonky and works in some cases but not all......
          if (!availableClients) {
              document.getElementById("errorText").innerHTML = "No clients with this criteria. Try again";
          }
          else {
              // the table is displayed if the values match and the clientId is returned
              document.getElementById("clientTable").innerHTML = clientTable;
              return id;
          }
      })
} //searchSelection Ends
module.exports = searchSelection;

// voucherSelection takes the input values from the returned clientId from the previous method
// and puts the id, current datetime and future datatime inputs as variables to the Post request to the Phorest Voucher API
function voucherSelection() {

  // the now variable uses the javascript create date method which returns the value of the current date and time
  // the nowISOS converts the javascript syntax to accepted date time syntax for the Phorest API
  var now = new Date;
  var nowISOS = now.toISOString();

  // create variables for the year month and day
  var year = now.getFullYear();
  var month = now.getMonth();
  var day = now.getDate();

  // combining variables to create a date time for one year in the future of voucher creation
  // similarly nextYearISOS converts the datetime syntax to ISOS
  var nextYear = new Date(year + 1, month, day);
  var nextYearISOS = nextYear.toISOString();

  // the balance variable is taken from the textbox in the modal popup.
  // this will be the input for how much the voucher is
  var balance = document.getElementById("voucherInput").value;
  var clientId = id;

  // the data with dynamic variables in Phorest api syntax
  data = '{ \"clientId\": \"' + clientId + '\", \"creatingBranchId\": \"SE-J0emUgQnya14mOGdQSw\", \"expiryDate\": \"'
  data += nowISOS + '\", \"issueDate\": \"' + nextYearISOS + '\", \"links\": [ { \"href\": \"string\", \"rel\": \"string\", \"templated\": true } ], \"originalBalance\":' + balance + '}';

  // ajax post request to create a voucher
  $.ajax({
            url: "https://api-gateway-dev.phorest.com/third-party-api-server/api/business/eTC3QY5W3p_HmGHezKfxJw/voucher",
            type: 'Post',
            headers:  {
                  "Accept" : "*/*",
                  "Authorization": "Basic " + "Z2xvYmFsL2Nsb3VkQGFwaWV4YW1wbGVzLmNvbTpWTWxSby9laCtYZDhNfmw="
            },
            dataType: 'json',
            contentType: "application/json",
            data : data,
          })
          // stringifies and parses results (voucher success information)
          .done(function (result) {
            var stringified = JSON.stringify(result);
            var parsedObj = JSON.parse(stringified);

            var voucherId = parsedObj.voucherId;
            var balance = parsedObj.originalBalance;
            var serialNumber = parsedObj.serialNumber;
            var experation = parsedObj.expiryDate;

            // the displayVoucher variable dynamicly prints the results if the voucher was processed successfully
            var displayVoucher = "<h4 class='importantVouchRes'> Your request was successful! </h4><br>";
            displayVoucher += "<div id='DisVoucherResults'><h5> Voucher ID: </h5>" + voucherId + "<br>";
            displayVoucher += "<h5> Serial Number: </h5>" + serialNumber + "<br>";
            displayVoucher += "<h5> Experation Date: </h5>" + nextYear + "<br>";
            displayVoucher += "<h5> Balance: </h5>" + "€" + balance + "<br></div>";
            displayVoucher += "<h4 class='importantVouchRes'> Thank You! </h4>";
            document.getElementById("voucherResults").innerHTML = displayVoucher;

          })

          // if the voucher is not processed successfully there will be an error returned for the user
          .fail(function (error) {
            var displayVoucher = "<h4 class='importantVouchRes'>Sorry, your voucher cannot be processed. Please try again!</h4>";
            document.getElementById("voucherResults").innerHTML = displayVoucher;
          })
} //voucherSelection Ends
