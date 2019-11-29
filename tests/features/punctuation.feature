Feature: Conversion to Leet - Punctuation
  As a person who requires some phrases to be converted to a leet
  I want to ensure the function does not replace english punctuation characters
  So that I can more confidently use the utility to get my work done faster


  Scenario Outline: Ensure phrases are properly converted according to the requirement
    When I convert "<phrase>" to a leet
    Then the converted phrase should match "<expected_result>"
    Examples:
      | phrase      | expected_result |
      | ~!@#$%^&*() | ~!@#$%^&*()     |
      | -_+=        | -_+=            |
      | {}[]<>      | {}[]<>          |
 #      |       :;"'                               | :;"'                                       |
