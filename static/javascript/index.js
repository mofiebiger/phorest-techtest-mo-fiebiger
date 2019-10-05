function searchSelection(){

  var Selected = document.getElementById("dropdown");
  var Value = Selected.options[Selected.selectedIndex].value;
  console.log(Value);

  var textValue = document.getElementById("userInput").value;
  console.log(textValue);

  $.ajax({
            'async': 'true',
            'url': "https://api-gateway-dev.phorest.com/third-party-api-server/api/business/eTC3QY5W3p_HmGHezKfxJw/client?" + Value + "=" + textValue + "&page=0&size=20",
            'type': 'get',
            'headers':  {
                  "Authorization": "Basic " + "Z2xvYmFsL2Nsb3VkQGFwaWV4YW1wbGVzLmNvbTpWTWxSby9laCtYZDhNfmw="
            },
            'dataType': 'json',

        }).done(function (result) {
          var stringified = JSON.stringify(result);
          var parsedObj = JSON.parse(stringified);
          var availableClients = false;
          var object = parsedObj._embedded;
          var clients = object.clients;

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

          for (var i = 0; i < clients.length; i++){
              var fName = clients[i].firstName;
              var lName = clients[i].lastName;
              var email = clients[i].email;
              var phone = clients[i].mobile;
              console.log(phone);
              id = clients[i].clientId;

              if(textValue == fName || textValue == lName || textValue == email || textValue == phone){
                  availableClients = true;
                  clientTable += '<tr><td>' + fName + '</td><td>' + lName + '</td>';
                  clientTable += '<td>' + email + '</td><td>' + phone + '</td>';
                  clientTable += '<td><button type="button" class="btn btn-default" data-toggle="modal" data-target="#myModal">'
                  clientTable += 'Create</button></td></tr>';
                  clientTable += '</tbody></table>'
              }
          }
          if (!availableClients) {
              document.getElementById("errorText").innerHTML = "No clients with this criteria. Try again";
          }
          else {

              document.getElementById("clientTable").innerHTML = clientTable;
              return id;
          }
      })
} //searchSelection Ends


function voucherSelection() {

  var now = new Date;
  var nowISOS = now.toISOString();

  var year = now.getFullYear();
  var month = now.getMonth();
  var day = now.getDate();

  var nextYear = new Date(year + 1, month, day);
  var nextYearISOS = nextYear.toISOString();


  var balance = document.getElementById("voucherInput").value;
  var clientId = id;





  data = '{ \"clientId\": \"' + clientId + '\", \"creatingBranchId\": \"SE-J0emUgQnya14mOGdQSw\", \"expiryDate\": \"'
  data += nowISOS + '\", \"issueDate\": \"' + nextYearISOS + '\", \"links\": [ { \"href\": \"string\", \"rel\": \"string\", \"templated\": true } ], \"originalBalance\":' + balance + '}';


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
          .done(function (result) {
            var stringified = JSON.stringify(result);
            var parsedObj = JSON.parse(stringified);

            var voucherId = parsedObj.voucherId;
            var balance = parsedObj.originalBalance;
            var serialNumber = parsedObj.serialNumber;
            var experation = parsedObj.expiryDate;

            var displayVoucher = "<h4 class='importantVouchRes'> Your request was successful! </h4><br>";
            displayVoucher += "<div id='DisVoucherResults'><h5> Voucher ID: </h5>" + voucherId + "<br>";
            displayVoucher += "<h5> Serial Number: </h5>" + serialNumber + "<br>";
            displayVoucher += "<h5> Experation Date: </h5>" + nextYear + "<br>";
            displayVoucher += "<h5> Balance: </h5>" + "€" + balance + "<br></div>";
            displayVoucher += "<h4 class='importantVouchRes'> Thank You! </h4>";
            document.getElementById("voucherResults").innerHTML = displayVoucher;

          })
          .fail(function (error) {
            var displayVoucher = "<h4 class='importantVouchRes'>Sorry, your voucher cannot be processed. Please try again!</h4>";
            document.getElementById("voucherResults").innerHTML = displayVoucher;
          })
} //voucherSelection Ends
