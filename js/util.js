/**
 * Created by David on 3/13/2017.
 */
function insertFruitPic(s){

    $("#fruitChoice img").remove();
    $("#fruitChoiceEdit img").remove();
    if(s.value == "Berry")
    {
        $('#fruitChoice').append('<img id="berry" src="img/strawBerry.png" height="100" width="100" />');
        $('#fruitChoiceEdit').append('<img id="berry" src="img/strawBerry.png" height="100" width="100" />');
    }
    if(s.value == "Citrus")
    {
        $('#fruitChoice').append('<img id="citrus" src="img/citrus.png" height="100" width="100" />');
        $('#fruitChoiceEdit').append('<img id="berry" src="img/citrus.png" height="100" width="100" />');

    }
    if(s.value == "Melon")
    {
        $('#fruitChoice').append('<img id="melon" src="img/melon.jpg" height="100" width="100" />');
        $('#fruitChoiceEdit').append('<img id="berry" src="img/melon.jpg" height="100" width="100" />');
    }
     if(s.value == "Apple")
    {
        $('#fruitChoice').append('<img id="apple" src="img/apple.png" height="100" width="100" />');
        $('#fruitChoiceEdit').append('<img id="berry" src="img/apple.png" height="100" width="100" />');
    }


};


function validate_addFruit(){

    var form = $('#frmAddFruit');



    form.validate({


        rules:{

            fruitName:{
                required: true
            },
             fruitType:{

                required: true
             }




        },

        messages:{

            fruitName:{
                required: "You must choose a fruit name!"
            },

            fruitType:{

                required: "Choose a fruit type!"
            }



        }





    });

    return form.valid();



}