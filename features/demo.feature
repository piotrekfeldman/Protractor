Feature: I am goin' to validate functions
@Calculator

Scenario: Calculator Add functionality

Given I will navigate to "calc" Site
When I add two numbers "3" and "5"
Then The output should be "9"

@Angular
Scenario: Angular functionality

Given I will navigate to "angularjs" Site