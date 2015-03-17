Currentevents = new Mongo.Collection('currentevents');

if (Meteor.isClient) {
  Template.body.helpers({
    currentevents: function() {
      return Currentevents.find();
    }
  });


  Template.body.events({
      'submit .new-updates': function(event) {
        var title = event.target.title.value;

        Currentevents.insert({
          title : title,
          createAt: new Date()

        });

        event.target.title.value = "";

        return false;
      }


  });

  Template.currentevent.events({
'click .delete': function() {
  Currentevents.remove(this._id);
}

  });

Accounts.ui.config({
  passwordSignupFields: "USERNAME_ONLY"

 });

Accounts.config({
  forbidClientAccountCreation: true
});


}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
