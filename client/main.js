import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.madLib.onCreated(function madLibOnCreated() {

});

Template.madLib.helpers({

});

Template.madLib.events({
  'click #submit-button'(event, instance) {
    // event.preventDefault();

    console.log("Hello, world");

  },
  'submit #form'(event, instance){
    event.preventDefault();
    let form = event.target;
    let madLibText = "'" +form.exclamation.value + "!', you say, as you " + form.adverb.value + " jump onto your " + form.noun.value + " and " + form.verb.value +" into the sunset.";
    console.info(madLibText);
    const header = $('#mad-lib-header');
    console.log(header);
    header.hide();
    header.text(madLibText);
    header.css("color","#0000ff");
    header.fadeIn("slow");

  }
});
