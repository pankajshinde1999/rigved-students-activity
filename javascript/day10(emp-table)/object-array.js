function funcall() {
    var myarray = [
        {
            customerId: 1122, firstname: 'Sachin', lastname: 'Tendulkar',
            address: { state: 'Maharashta', city: 'Mumbai' }
        },
        {
            customerId: 1233, firstname: 'Rahul', lastname: 'Dravid',
            address: { state: 'Karnataka', city: 'Bangalore' }
        },

        {
            customerId: 1344, firstname: 'Rohit', lastname: 'Sharma',
            address: { state: 'Maharashta', city: 'Pune' }
        },
        {
            customerId: 1455, firstname: 'Jasprit', lastname: 'Bumrah',
            address: { state: 'Gujarat', city: 'Surat' }
        },
        {
            customerId: 1566, firstname: 'Jayant', lastname: 'Yadav',
            address: { state: 'Uttar Pradesh', city: 'Bihar' }
        },

    ]
    var html = "<table border='1|1'>"
    setTimeout(()=>{
    
        html += '<th>Customer ID</th>'
        html += '<th>Full Name </th>'
        html += '<th>State</th>'
        html += '<th>City</th>'
        for (var i = 0; i < myarray.length; i++) {

            html += '<tr>';
            html += '<td>' + myarray[i].customerId + '</td>';
            html += '<td>' + myarray[i].firstname + '&nbsp' + myarray[i].lastname + '</td>';
            html += '<td>' + myarray[i].address.state + '</td>';
            html += '<td>' + myarray[i].address.city + '</td>';
            html += '</tr>';
        }
        document.getElementById('table').innerHTML = html
    },500);
}
funcall()