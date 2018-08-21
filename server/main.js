import _ from 'lodash';
import { image, helpers, address } from 'faker';
import { Meteor } from 'meteor/meteor';
import { Employees } from '../imports/collections/employees';

Meteor.startup(() => {


  //check if data exist
  const numberRecords = Employees.find({}).count();
  if(!numberRecords) {
    //generate data
    _.times(5000, () => {
      const { name, email, phone} = helpers.createCard();

      //save data
      Employees.insert({
        name,
        email,
        phone, 
        avatar: image.avatar()
      })
    });
  }

  Meteor.publish('employees', function(per_page) {
    return Employees.find({}, { limit: per_page });
  })
})