Feature: Conversion to Leet - non english characters
  As a person who requires some phrases to be converted to a leet
  I want to ensure the function properly handles non english characters
  So that I can be sure the non english customers are not impacted by the conversion

  Scenario Outline: Ensure phrases that contain non english characters are propeerly handled in the conversion
    When I convert "<phrase>" to a leet
    Then the converted phrase should match "<expected_result>"
    Examples:
      | phrase                      | expected_result             |
      | cédille                     | céd1ll3                     |
      | â, ê, î, ô, û,a,e           | â, ê, î, ô, û,4,3           |
      | à, è, ù                     | à, è, ù                     |
      | ë, ï, ü.                    | ë, ï, ü.                    |
    #SPANISH
      | (á, é, í, ó, ú, ü, ñ, ¿, ¡) | (á, é, í, ó, ú, ü, ñ, ¿, ¡) |
    #Chinese
      | 传/傳                       | 传/傳                        |


