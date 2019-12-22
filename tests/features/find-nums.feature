@findnums-test



Feature: Conversion to Leet - Regular English
  As a person who requires some basic division
  I want to ensure the function properly calculated thew quotient using other methids than division
  So that I can test my programming skills


  Scenario Outline:
    When I pass the array os integers "<list_of_int>" and look for the sum of "<target_sum>"
    Then The system should identify the result as "<combination>"

    Examples:
    |list_of_int|target_sum|combination|
    | 1,2,3,4,5,6 | 11         | 5,6          |