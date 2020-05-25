$(document).ready(appendingToDom);
let totalMonthly = 0;
function appendingToDom(){
    $('#enterButton').on('click', function updatingEmployee(){
        
        
        
        
            let firstName = $('#firstNameInput').val();
            console.log(firstName);
            
            let lastName = $('#lastNameInput').val();
            let idNumber = $('#idNumberInput').val();
            let jobTitle = $('#jobTitleInput').val();
            let annualSalary = $('#annualSalaryInput').val();
            totalMonthly += (annualSalary / 12);
        
        let total = $('#totalCosts');
        total.text('Total Monthly: $' + Math.round(totalMonthly));
        if (totalMonthly > 20000) {
            $('#totalCosts').css('text-shadow', '2px 2px 5px red');
        }
        else{
            $('#totalCosts').css('text-shadow', 'white');
        }
        
        if (firstName.length === 0 || lastName.length === 0 || idNumber.length === 0 || jobTitle.length === 0 || isNaN(annualSalary)){
            //Display error message for incomplete input
            $('#notEnoughInput').fadeIn(2000);
        }
        else {
            //Hide error message and execute code
            $('#notEnoughInput').fadeOut(2000);
            //empty input fields
           empty();
           
           //addEmployee(firstName, lastName, idNumber, jobTitle, annualSalary);
            
            let listElement = $('<tr></tr>');
            listElement.append(`<td>${firstName}</td>`);
            listElement.append(`<td>${lastName}</td>`);
            listElement.append(`<td>${idNumber}</td>`);
            listElement.append(`<td>${jobTitle}</td>`);
            listElement.append(`<td>${annualSalary}</td>`);
            listElement.append(`<td><button class=delete-button>Delete Row</button></td>`);
            
            $('table tbody').append(listElement);
        }
        $('.delete-button').on('click', function (event) {
            const element = event.target
            $(element).parents('tr').fadeOut(3000);
        });

});
}


function empty(){
    $('#firstNameInput').val('');
    $('#lastNameInput').val('');
    $('#idNumberInput').val('');
    $('#jobTitleInput').val('');
    $('#annualSalaryInput').val('');
};

