var customer=[];

$('#btnCustomer').click(function () {


    let customerID = $("#txtCustomerID").val();
    let customerName = $("#txtCustomerName").val();
    let customerAddress = $("#txtCustomerAddress").val();
    let customerSalary = $("#txtCustomerSalary").val();

    //cus Object
    var cusObject={
        cusId:customerID,
        cusName:customerName,
        cusAddress:customerAddress,
        cusSalary:customerSalary
    }

    customer.push(cusObject);
    setData();


});

function setData() {
    $('#tblCustomers').empty();

    for (let customerElement of customer) {
        var row=`<tr><td>${customerElement.cusId}</td><td>${customerElement.cusName}</td><td>${customerElement.cusAddress}</td><td>${customerElement.cusSalary}</td></tr>`;

        $('#tblCustomers').append(row);
    }
}

$('#btnSearchButton').click(function () {
    // for (let customerKey of customer) {
    //
    //     //check the ComboBox Id Equal
    //
    //     if($('#cusCombo').val()==="ID"){
    //         //check Id
    //         if(customerKey.cusId===$('#inputCusSearch').val()){
    //             $('#id').val(customerKey.cusId);
    //             $('#name').val(customerKey.cusName);
    //             $('#salary').val(customerKey.cusSalary);
    //             $('#address').val(customerKey.cusAddress);
    //         }
    //     }else if($('#cusCombo').val()==="1"){
    //         //check Name
    //         if(customerKey.cusName===$('#inputCusSearch').val()){
    //             $('#id').val(customerKey.cusId);
    //             $('#name').val(customerKey.cusName);
    //             $('#salary').val(customerKey.cusSalary);
    //             $('#address').val(customerKey.cusAddress);
    //         }
    //     }
    //
    // }


});

