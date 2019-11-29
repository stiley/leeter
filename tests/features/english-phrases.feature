Feature: Conversion to Leet - Regular English
  As a person who requires some phrases to be converted to a leet
  I want to ensure the function properly replaces english characters and phrases
  So that I can more confidently use the utility to get my work done faster


  Scenario Outline: Ensure phrases are properly converted according to the requirement
    When I convert "<phrase>" to a leet
    Then the converted phrase should match "<expected_result>"
    Examples:
      | phrase                                     | expected_result                            |
      |                                            |                                            |
      | aA                                         | 44                                         |
      | eE                                         | 33                                         |
      | iI                                         | 11                                         |
      | oO                                         | 00                                         |
      | sS                                         | 55                                         |
      | tT                                         | 77                                         |
      | bD                                         | 55                                         |
      | 123456789                                  | 123456789                                  |
      | Down by the river                          | 50wn 5y 7h3 r1v3r                          |
      | Let's have some fun.                       | L37'5 h4v3 50m3 fun.                       |
      | C is for cookie, that's good enough for me | C 15 f0r c00k13, 7h47'5 g00d 3n0ugh f0r m3 |
      | By the power of Grayskull!                 | By 7h3 p0w3r 0f Gr4y5kull!                 |



