@findpatents-test

Feature: Check for USPTO patents based on Company name
  As a person who requires some information about patents a company may hold
  I want to ensure the search works as expected
  So that I can rely on the api response to further my analysis


  Scenario Outline:
    When I search for the company "<company_name>"
    Then The system should indicate the company has patents as "<has_patent>"


    Examples:
      | company_name       | has_patent |
      | Ford Motor Company | true       |
      | ZASAAS             | false      |
      | zxccsdvf           | dstg       |

