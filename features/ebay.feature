Feature: Ebay search results

  Scenario Outline: As a user, I want to know how much results came back for an specific product

    Given I open <URL> page in chrome browser
    When I input <product> in the search bar
    And I tap on glass icon
    Then I should see the number of results for my search

    Examples: 
      | URL          | product |
      | www.ebay.com | pilas   |
    