// server only code
Meteor.startup(function () {
	if (Reminders.find().count() === 0){
		var remind_list = [["Take Pill", "Daily"], ["Take out garbage", "Weekly"], ["Take out recycling", "Bi-Weekly"]];
		
		_.each(remind_list, function(reminder){
			Reminders.insert({
				name: reminder[0],
				frequency: reminder[1],
				done: false
			});
		});
	}
});