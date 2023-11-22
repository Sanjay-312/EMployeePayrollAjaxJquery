$(document).ready(function () {
    ShowEmployeeData();
    
})

function ShowEmployeeData() {
    $.ajax({
        url: '/Employee/GetAllEmployees',
        type: 'Get',
        dataType: 'json',
        contentType: 'application/json;charset=utf-8;',
        success: function (result,status,xhr) {
            var object = '';
            $.each(result, function (index, item) {
                object += '<tr>';
                object += '<td>' + item.empId + '</td>';
                object += '<td>' + item.empName + '</td>';
                object += '<td>' + item.gender + '</td>';
                object += '<td>' + item.department + '</td>';
                object += '<td>' + item.salary + '</td>';
                object += '<td>' + item.startDate + '</td>';
                object += '<td>' + item.image + '</td>';
                object += '<td>' + item.notes + '</td>';
                object += '<td><a href="#" class="btn btn-primary" onclick="Edit(' + item.empId+')">Edit</a> || <a href="#" class="btn btn-danger" onclick="DeleteEmp(' + item.empId + ')">Delete</a> </td>';
                object += '</tr>';
            });
            $('#table_data').html(object);
        },
        error: function () {
            alert('unable to fetch data');
        }

    })
};
$('#btnAddEmployee').click(function () {
    clearTextBox();
    $('#empModal').modal('show');
    $('#empId').hide();
    
    $('#AddEmpHead').show();
    $('#updateEmpHead').hide();
    $('#saveBtn').show();
    $('#updateBtn').hide()


})

function AddEmployee() {debugger
    var EmpData = {
        EmpName:$('#name').val(),
        Gender:$('#gender').val(),
        Department:$('#department').val(),
        Salary:$('#salary').val(),
        StartDate:$('#startDate').val(),
        Image: $('#image').val(),
        Notes: $('#notes').val()
    }
    $.ajax({
        url: '/Employee/AddEmployee',
        type: 'Post',
        data: EmpData,
        contentType: 'application/x-www-form-urlencoded;charset=utf-8;',
        dataType: 'json',
        success: function () {
            alert("data saved");
            ShowEmployeeData();
       
            hideModalPopup();
            clearTextBox();
        },
        error: function () {
            alert("data not saved");
        }

    })
    
};

function hideModalPopup() {
    $('#empModal').modal('hide');

}

function clearTextBox() {
        $('#name').val(''),
        $('#gender').val(''),
        $('#department').val(''),
        $('#salary').val(''),
        $('#startDate').val(''),
        $('#image').val(''),
        $('#notes').val('')

}

function DeleteEmp (id){
    debugger;
    if (confirm('Are you sure you want to delete')) {

        $.ajax({
            url: '/Employee/DeleteEmp?id=' + id,
            success: function () {
                alert("record deleted");
                ShowEmployeeData();
                
            },
            error: function () {
                alert("data cant delete");
            }
        })
    }
    
}

function Edit(id) {debugger
    $.ajax({
        url: '/Employee/EditEmp?id=' + id,
        type: 'Get',
        contentType: 'application/json;charset=utf-8',
        dataType: 'json',
        success: function (response) {
            $('#AddEmpHead').hide();
            $('#updateEmpHead').show();
            
            $('#empModal').modal('show');
            $('#empId').val(response.empId);
            $('#name').val(response.empName);
            $('#gender').val(response.gender);
            $('#department').val(response.department);
            $('#salary').val(response.salary);
            $('#startDate').val(response.startDate);
            $('#image').val(response.image);
            $('#notes').val(response.notes);
            $('#saveBtn').hide();
            $('#updateBtn').show()
            //$('#saveButton').css('display', 'none');
            //$('#updateButton').css('display','block');
            
            

        },
        error: function () {
            alert("data not found");
        }

    })

}

function updateEmployee() {debugger
    var EmpData = {
        EmpId: $('#empId').val(),
        EmpName: $('#name').val(),
        Gender: $('#gender').val(),
        Department: $('#department').val(),
        Salary: $('#salary').val(),
        StartDate: $('#startDate').val(),
        Image: $('#image').val(),
        Notes: $('#notes').val()
    }
    $.ajax({
        url: '/Employee/UpdateEmployee',
        type: 'post',
        data: EmpData,
        contentType: 'application/x-www-form-urlencoded;charset=utf-8;',
        dataType: 'json',
        success: function () {
            alert("data updated!!");
            clearTextBox();
            hideModalPopup();
            ShowEmployeeData();
            
            
        },
        error: function () {
            alert("data not updated ");
        }

    })

}


