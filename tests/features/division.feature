@division-test

Feature: Conversion to Leet - Regular English
  As a person who requires some basic division
  I want to ensure the function properly calculated thew quotient using other methids than division
  So that I can test my programming skills


  Scenario Template:
    When I divide <numerator> by <denominator>
    Then The response should be equal to <answer>

    Examples:
      | numerator | denominator | answer |
      | 3         | 3           | 1      |
      | 17        | 17          | 1      |
      | 12        | 17          | 0      |
      | 3         | 2           | 1      |
      | 15        | 3           | 5      |
      | 12        | 11          | 1      |
      | -15       | 5           | -3     |
      | 9         | -2          | -4     |