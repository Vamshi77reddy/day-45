window.addEventListener('DOMContentLoaded',(event) => {
    createInnerHtml();
})

const createInnerHtml = () => {
    const headerHtml =
       `<th>Profile</th>
        <th>Name</th>
        <th>Gender</th>
        <th>Department</th>
        <th>Salary</th>
        <th>Start Date</th>
        <th>Actions</th>`;

    let employeePayrollDataList = createEmployeePayrollJSON();
    if(employeePayrollDataList.length == 0) return;
    let innerHtml = `${headerHtml}`;
    for(const employeePayrollData of employeePayrollDataList){
        innerHtml = `${innerHtml}
        <tr>
        <td>
        <img class="profile" src="${employeePayrollData._profileImage}" alt="profile_img-1"></td>
        <td>${employeePayrollData._name}</td>
        <td>${employeePayrollData._gender}</td>
        <td>${getDepartmentHtml(employeePayrollData._department)}</td>      
        <td>${employeePayrollData._salary}</td>
        <td>${employeePayrollData._startDate}</td>
        <td>
        <img src="/assets/icons/delete-black-18dp.svg" alt="delete" id="1" onclick="remove(this)">
        <img src="/assets/icons/create-black-18dp.svg" alt="edit" id="1" onclick="update(this)">
        </td>
        </tr>`;
    }
    document.querySelector('#display').innerHTML = innerHtml;
}
const getDepartmentHtml = (departmentList) => {
    let departmentHtml = '';
    for(const department of departmentList){
      departmentHtml = `${departmentHtml} <div class='dept-label'>${department}</div>`
    }
    return departmentHtml
}
const createEmployeePayrollJSON = () => {
    let employeePayrollListLocal = [
      {
        _name: 'Teja',
        _gender: 'Female',
        _department: [
          'HR'
        ],
        _salary: 400000,
        _startDate: '20 Jul 2016',
        _note: 'Hello',
        _id: new Date().getTime(),
        _profileImage: '/assets/profile-images/Ellipse -4.png' 
      },
      {
        _name: 'Vamshi',
        _gender: 'Male',
        _department: [
          'Engineer'
        ],
        _salary: 450000,
        _startDate: '02 Mar 2020',
        _note: 'hello',
        _id: new Date().getTime(),
        _profileImage: '/assets/profile-images/Ellipse -3.png'
      }
    ];
        return localStorage.getItem("employeePayrollList")
}