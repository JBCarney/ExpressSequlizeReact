'use strict';

module.exports = {
    up: function(queryInterface, Sequelize) {
        /*
          Add altering commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
          return queryInterface.bulkInsert('Person', [{
            name: 'John Doe',
            isBetaMember: false
          }], {});
        */
        return queryInterface.bulkInsert('Employees', [
            {Alias:null,Name:'Aung Moe',Nrc:null,JobTitle:'Sale Manager',Active:false,RetiredDate:null,BasicSalary:null,HiredDate:'2012-03-01',GroupID:2,createdAt:'2012-03-01',updatedAt:'2012-03-01'},
{Alias:null,Name:'Moe Sat Pwint',Nrc:null,JobTitle:'Accountant',Active:false,RetiredDate:null,BasicSalary:null,HiredDate:'2013-01-31',GroupID:3,createdAt:'2013-01-31',updatedAt:'2013-01-31'},
{Alias:null,Name:'Tin Shein',Nrc:null,JobTitle:'Sale',Active:false,RetiredDate:null,BasicSalary:null,HiredDate:'2016-06-09',GroupID:3,createdAt:'2016-06-09',updatedAt:'2016-06-09'},
{Alias:null,Name:'Tet Lu Aung',Nrc:null,JobTitle:'Sale',Active:false,RetiredDate:null,BasicSalary:null,HiredDate:'2016-06-09',GroupID:3,createdAt:'2016-06-09',updatedAt:'2016-06-09'},
{Alias:null,Name:'Si Thu Aung',Nrc:null,JobTitle:'Sale',Active:false,RetiredDate:null,BasicSalary:null,HiredDate:'2016-06-09',GroupID:3,createdAt:'2016-06-09',updatedAt:'2016-06-09'},
{Alias:null,Name:'Khaing Thandar',Nrc:null,JobTitle:'Sale',Active:false,RetiredDate:null,BasicSalary:null,HiredDate:'2016-06-08',GroupID:3,createdAt:'2016-06-08',updatedAt:'2016-06-08'},
{Alias:null,Name:'Nandar Kyaw',Nrc:null,JobTitle:'Cashier',Active:false,RetiredDate:null,BasicSalary:null,HiredDate:'2016-06-09',GroupID:3,createdAt:'2016-06-09',updatedAt:'2016-06-09'},
{Alias:null,Name:'Yoon Myat Thwel',Nrc:null,JobTitle:'Sale',Active:false,RetiredDate:null,BasicSalary:null,HiredDate:'2016-06-09',GroupID:3,createdAt:'2016-06-09',updatedAt:'2016-06-09'},
{Alias:null,Name:'Aung Ko Win',Nrc:null,JobTitle:'Sale',Active:false,RetiredDate:null,BasicSalary:null,HiredDate:'2016-06-09',GroupID:3,createdAt:'2016-06-09',updatedAt:'2016-06-09'},
{Alias:null,Name:'Aung Ko Min',Nrc:'',JobTitle:'Driver',Active:false,RetiredDate:null,BasicSalary:null,HiredDate:'2016-06-08',GroupID:1,createdAt:'2016-06-08',updatedAt:'2016-06-08'},
{Alias:null,Name:'Min Aung',Nrc:null,JobTitle:'Driver',Active:false,RetiredDate:null,BasicSalary:null,HiredDate:'2016-06-08',GroupID:1,createdAt:'2016-06-08',updatedAt:'2016-06-08'},
{Alias:null,Name:'Htay Htay Than',Nrc:null,JobTitle:'Marketing',Active:false,RetiredDate:null,BasicSalary:null,HiredDate:'2016-06-09',GroupID:3,createdAt:'2016-06-09',updatedAt:'2016-06-09'},
{Alias:null,Name:'Win Win Aye',Nrc:null,JobTitle:'Accountant',Active:false,RetiredDate:null,BasicSalary:null,HiredDate:'2016-06-09',GroupID:2,createdAt:'2016-06-09',updatedAt:'2016-06-09'},
{Alias:null,Name:'Aye Aye Thein',Nrc:null,JobTitle:'Administration',Active:false,RetiredDate:null,BasicSalary:null,HiredDate:'2016-06-09',GroupID:1,createdAt:'2016-06-09',updatedAt:'2016-06-09'},
{Alias:'W',Name:'Wah Wah Khaing',Nrc:null,JobTitle:'Accountant',Active:false,RetiredDate:null,BasicSalary:null,HiredDate:'2016-02-29',GroupID:2,createdAt:'2016-02-29',updatedAt:'2016-02-29'},
{Alias:'T',Name:'Tin Zar Hlaing',Nrc:null,JobTitle:'Accountant',Active:false,RetiredDate:null,BasicSalary:null,HiredDate:'2016-02-29',GroupID:2,createdAt:'2016-02-29',updatedAt:'2016-02-29'},
{Alias:'N',Name:'Nyi Nyi Lwin',Nrc:null,JobTitle:'Sale',Active:false,RetiredDate:null,BasicSalary:null,HiredDate:'2016-04-03',GroupID:3,createdAt:'2016-04-03',updatedAt:'2016-04-03'},
{Alias:'C',Name:'Chit Chit Zaw',Nrc:null,JobTitle:'Cashier',Active:false,RetiredDate:null,BasicSalary:null,HiredDate:'2016-05-15',GroupID:3,createdAt:'2016-05-15',updatedAt:'2016-05-15'},
{Alias:'NN',Name:'Naung Moe',Nrc:null,JobTitle:'Sale',Active:false,RetiredDate:null,BasicSalary:null,HiredDate:'2016-06-30',GroupID:3,createdAt:'2016-06-30',updatedAt:'2016-06-30'},
{Alias:null,Name:'Nay Zar Lin',Nrc:null,JobTitle:'sale',Active:false,RetiredDate:null,BasicSalary:null,HiredDate:'2016-05-05',GroupID:3,createdAt:'2016-05-05',updatedAt:'2016-05-05'},
{Alias:null,Name:'Tun Lin Aung',Nrc:null,JobTitle:'Driver',Active:false,RetiredDate:null,BasicSalary:null,HiredDate:'2016-07-11',GroupID:1,createdAt:'2016-07-11',updatedAt:'2016-07-11'},
{Alias:null,Name:'Lei Thuzar Aung',Nrc:null,JobTitle:'HR',Active:false,RetiredDate:null,BasicSalary:null,HiredDate:'2016-07-17',GroupID:1,createdAt:'2016-07-17',updatedAt:'2016-07-17'}
        ]);
    },

    down: function(queryInterface, Sequelize) {
        /*
          Add reverting commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
          return queryInterface.bulkDelete('Person', null, {});
        */
       return queryInterface.bulkDelete('Employee',null,{});
    }
};
