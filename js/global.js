/**
 * Created by David on 3/13/2017.
 */

$( document ).ready( function(){




    initDB();

    validate_addFruit();



    $('.fruitType').click(function(){


        insertFruitPic(this);



        });

    $('.fruitTypeEdit').click(function(){


        insertFruitPic(this);



    });

    $('#btnAdd').click(function(){

        addFruit();

    });

    $('#btnEdit').click(function(){

        editFruit();

    });

    $('#btnDelete').click(function(){

        deleteFruit();

    });

    $('#btnClearDatabase').click(function(){

        clearDatabase();

    });



    $("#fruitPage").on("pageshow", showFruits);
    $("#editFruit").on("pageshow", showFruitEdit);


});


function initDB() {
    console.info("Creating database ...");
    try {
        DB.createDatabase();
        if (db) {
            console.info("Creating tables ...");
            DB.createTables();
        }

    } catch (e) {
        console.error("Error: (Fatal) Error in initDB, can not proceed" + e.toString());
    }
}

function showFruits() {
    showAllFruits();
}

function showFruitEdit(){
    showOneFruit();
}