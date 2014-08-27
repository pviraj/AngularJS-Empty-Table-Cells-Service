AngularJS Empty Table Cells Service
===================================
A service to create empty cells within a defined set of cell. This is to create a consistent looking table.

## Basic Setup

* Add the service below to your project
* Call the service within your <td> passing in the correct JSON dataset
* View the example project here: http://plnkr.co/edit/Ru2aE46DCJDILcKHd5cu

## Empty Cells Service

<code>
  app.factory('serviceEmptyCells', function() {
  
      return {
        getEmptyCells: function(len) {
          var emptyCells = [];
          for (var i = 0; i < 12 - len; i++) {
            emptyCells.push(i);
          }
          return emptyCells;
        }
      };
    });
</code>

## Notes

This should be a directive rather than a service. However, if you run the service on a <th> the emprty cells are not produced in IE8 (if you're not supporting IE8, it should be good to go).

## Bugs?

Please add them to the [Issue Tracker][issues] with as much info as possible, especially source code demonstrating the issue.
