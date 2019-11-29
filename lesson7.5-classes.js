(function () {
    'use strict';

    class Employee {
        constructor(name) {
            this.name = name;
        }

        shoutName() {
            return this.name.toUpperCase();
        }

        static reverseName(employee) {
            return employee.name.split('').reverse().join('');
        }

        work() {
            console.log(this.name, 'is working');
        }
    }

    class Boss extends Employee {
        work() {
            console.log(this.name, 'is bossing');
            console.log(super.shoutName());
        }
    }

    let emp = new Employee('Bob');
    console.log(emp.shoutName());

    console.log(Employee.reverseName(emp));

    let boss = new Boss('Dan');
    emp.work();
    boss.work();
})();
