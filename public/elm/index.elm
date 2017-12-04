import Html exposing (text, div, Html)
import List
import Tuple

main =
  tuplesExam
    |> text
--  text <|
--    funcyNum

--divide (sum 100) 10
--  |> div

divide: Float -> Float -> String
divide first second =
  first / second
    |> toString

sum: Float -> Float
sum number =
  number + 200
  
funcyNum =
  let
    num = [1, 2, 3, 4]
  in
    num
      |> List.reverse
      |> toString
      
tuplesExam =
  let
    something = (True, " Message:")
  in
    if(Tuple.first something) then
      "Success" ++ Tuple.second something
    else
      "Failed" ++ Tuple.second something