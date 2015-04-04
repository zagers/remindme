// client only code

Template.reminders.helpers({
	reminders: function(){
		return Reminders.find({}, { sort: {name: 1}});
	},
	selectedName: function(){
		var reminder = Reminders.findOne(Session.get("selectedReminder"));
		return reminder && reminder.name;
	}
});

Template.reminder.helpers({
	isDone: function(done){
		if (done)
			return "DONE"
		else
		 	return "NOT DONE"
	},
	selected: function(){
		return Session.equals("selectedReminder", this._id) ? "selected" : ""
	}
});

Template.reminder.events({
	'click': function(){
		Session.set("selectedReminder", this._id);
	}
});