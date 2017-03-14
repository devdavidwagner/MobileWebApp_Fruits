/**
 * Created by David on 3/13/2017.
 */

var Fruit ={

    insert: function (options){

        function txFunction(tx) {
            var sql = "INSERT INTO fruit(id, fruitName, fruitType) " +
                "values(null, ?, ?);";
            // var options = [];

            function successInsert() {
                console.info("Success: insert successful");
                alert("New record added");
            }

            tx.executeSql(sql, options, successInsert, errorHandler);
        }
        db.transaction(txFunction, errorHandler, successTransaction);



    },
    selectAll: function (successSelectAll) {
        function txFunction(tx) {
            var sql = "SELECT * FROM fruit;";
            var options = [];
            // function successSelectAll(tx, results) {
            //     for (var i = 0; i < results.rows.length; i++) {
            //         var row = results.rows[i];
            //         console.info("id: " + row['id'] + " name: " + row['name'] + " fullName: " + row['fullName'] +
            //         " dob: " + row['dob'] + " isFriend: " + row['isFriend']);
            //     }
            //
            //
            // }
            tx.executeSql(sql, options, successSelectAll, errorHandler);
        }
        db.transaction(txFunction, errorHandler, successTransaction);
    },
    select: function (options, successSelectOne) {
        function txFunction(tx) {
            var sql = "SELECT * FROM fruit WHERE id=?;";
            //var options = [];

            // function successSelectOne(tx, results) {
            //     var row = results.rows[0];
            //     console.info("id: " + row['id'] + " name: " + row['name'] + " fullname: " + row['fullName'] +
            //     " dob: " + row['dob'] + " isFriend: " + row['isFriend']);
            // }

            tx.executeSql(sql, options, successSelectOne, errorHandler);
        }
        db.transaction(txFunction, errorHandler, successTransaction);
    },
    update: function (options) {
        function txFunction(tx) {
            var sql = "UPDATE fruit SET fruitName = ?, fruitType=? WHERE id=?;";

            function successUpdate() {
                console.info("Success: Update successful");
                alert("Record updated successfully");
            }

            tx.executeSql(sql, options, successUpdate, errorHandler);
        }

        db.transaction(txFunction, errorHandler, successTransaction);
    },
    delete: function (options) {
        function txFunction(tx) {
            var sql = "DELETE FROM fruit WHERE id=?;";

            function successDelete() {
                console.info("Success: Delete successful");
                alert ("Record deleted successfully");
            }

            tx.executeSql(sql, options, successDelete, errorHandler);
        }

        db.transaction(txFunction, errorHandler, successTransaction);









}
};