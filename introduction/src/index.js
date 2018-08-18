const ko = require("knockout");
// This is a simple *viewmodel* - JavaScript that defines the data and behavior of your UI
function AppViewModel() {
  // observable でくるむと、view -> viewModel の bind もするようになる
  this.firstName = ko.observable("Bert");
  this.lastName = ko.observable("Bertington");
}

// Activates knockout.js
ko.applyBindings(new AppViewModel());
