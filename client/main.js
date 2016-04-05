import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.madLib.onCreated(function madLibOnCreated() {
  
});

Template.madLib.helpers({

});

Template.madLib.events({
  'click #submit-button'(event, instance) {
    event.preventDefault();

    console.log("Hello, world");
  },
});
