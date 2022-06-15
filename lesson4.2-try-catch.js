'use strict';

try {
  // something that may result in an error
  doesntExist();
} catch (error) {
  console.log('an error occurred:', error);
}