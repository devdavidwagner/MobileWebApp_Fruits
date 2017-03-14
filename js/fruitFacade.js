/**
 * Created by David on 3/13/2017.
 */

function addFruit(){

    //check validation
    if ((validate_addFruit())) {
        console.info("Validation ok");


        var fruitName = $("#fruitName").val();
        var fruitType = $("input[name=fruitType]:checked").val();
        //insert a record to the DB
        var options = [fruitName, fruitType];
        Fruit.insert(options);
    }
    else {
        console.info("Validation failed");
    }
}


function showOneFruit(){
    var id = localStorage.getItem("id");
    var options = [id];

    function successSelectOne(tx, results) {
        var htmlCode = "";
        for (var i = 0; i < results.rows.length; i++) {
            var row = results.rows[i];
            console.info("id: " + row['id'] + " fruitName: " + row['fruitName'] + " fruitType: " + row['fruitType']);



            $('#fruitNameEdit').val(row['fruitName']);

            if(row['fruitType'] == "Berry")
            {
             $("#BerryEdit").prop("checked", true);
             $("#BerryEdit").checkboxradio('refresh');


            }
            if(row['fruitType'] == "Citrus")
            {
                $("#CitrusEdit").prop("checked", true);
                $("#CitrusEdit").checkboxradio('refresh');
            }
            if(row['fruitType'] == "Melon")
            {
                $("#MelonEdit").prop("checked", true);
                $("#MelonEdit").checkboxradio('refresh');
            }
            if(row['fruitType'] == "Apple")
            {
                $("#AppleEdit").prop("checked", true);
                $("#AppleEdit").checkboxradio('refresh');
            }


        }

    }


    Fruit.select(options, successSelectOne);




}

function editFruit() {
    var id = localStorage.getItem("id");
    var name = $("#fruitNameEdit").val();
    var type = $("input[name=fruitType]:checked").val();


    var options = [name, type, id];
    Fruit.update(options);
    $(location).prop('href', "#fruitPage");  //important
}

function deleteFruit(){

    var id = localStorage.getItem("id");
    var options = [id];

    Fruit.delete(options);
    $(location).prop('href', "#fruitPage");  //important


}


function clearDatabase() {
    var result = confirm("Really want to clear database? all data will be lost");
    try {
        if (result) {
            DB.dropTables();
            alert("Database cleared");
        }
    } catch (e) {
        alert(e);
    }


}

function showAllFruits(){

    function successSelectAll(tx, results) {
        var htmlCode = "";
        for (var i = 0; i < results.rows.length; i++) {
            var row = results.rows[i];
            console.info("id: " + row['id'] + " fruitName: " + row['fruitName'] + " fruitType: " + row['fruitType']);

            var img = '';

            if(row['fruitType'] == "Berry")
            {
                htmlCode += "<li><a data-role='button' data-row-id=" + row['id'] +
                    " href='#'>" +
                    "<h1>Name: " + row['fruitName'] + "</h1><br>" +
                    '<img src="img/strawBerry.png" height="50" width="50" />' +
                    "<a/></li>";
            }
            if(row['fruitType'] == "Citrus")
            {
                htmlCode += "<li><a data-role='button' data-row-id=" + row['id'] +
                    " href='#'>" +
                    "<h1>Name: " + row['fruitName'] + "</h1><br>" +
                    '<img src="img/citrus.png" height="50" width="50" />' +
                    "<a/></li>";
            }
            if(row['fruitType'] == "Melon")
            {
                htmlCode += "<li><a data-role='button' data-row-id=" + row['id'] +
                    " href='#'>" +
                    "<h1>Name: " + row['fruitName'] + "</h1><br>" +
                    '<img src="img/melon.jpg" height="50" width="50" />' +
                    "<a/></li>";
            }
            if(row['fruitType'] == "Apple")
            {
                htmlCode += "<li><a data-role='button' data-row-id=" + row['id'] +
                    " href='#'>" +
                    "<h1>Name: " + row['fruitName'] + "</h1><br>" +
                    '<img src="img/apple.png" height="50" width="50" />' +
                    "<a/></li>";
            }


        }

        var lv = $("#fruitList");
        lv = lv.html(htmlCode);
        lv.listview("refresh");
        $("#fruitList a").on("click", clickHandler);

        function clickHandler() {
            localStorage.setItem("id", $(this).attr("data-row-id"));
            $(location).prop('href', "#editFruit");
            // this will also work
            // $.mobile.changePage("#pageModify", {transition:'none'});
        }


    }


    Fruit.selectAll(successSelectAll);



}