'use strict';

var messages = new Meteor.Collection('messages');

if (Meteor.isClient) {
  
  Template.main.messages = function() {
    return messages.find({}).fetch();
  };
  Template.main.user = function() {
    return Session.get('name');
  };
  Template.main.nameEntered = function() {
    return !Session.equals('name', undefined);
  };

  Template.main.events({
    'change input.message': function(event, template) {
      messages.insert({
        name: Session.get('name'),
        text: event.target.value
      });
    },
    'change input.name': function(event, template) {
      Session.set('name', event.target.value);
    }
  });
}