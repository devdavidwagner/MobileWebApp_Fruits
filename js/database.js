/**
 * Created by David on 3/13/2017.
 */
var db;

function errorHandler(tx, error)
{
    console.error("SQL Error: " + tx + " (" + error.code + ") --"  + error.message);

}

function successTransaction(){

    console.info("Sucessful transaction");
}

var DB = {

    createDatabase: function () {

        var shortName = "FruitDB";
        var version = "1.0";
        var displayName = "DB for Fruit App";
        var dbSize = 2 * 1024 *1024;

        console.info("Creating Database...");

        function dbCreateSuccess(){
            console.info("Database successfuly created");

        }

        db = openDatabase(shortName, version, displayName, dbSize, dbCreateSuccess);

    },

    createTables: function () {

        function txFunction(tx) {
            console.info("Creating tables ...");


            var sql = "CREATE TABLE IF NOT EXISTS fruit(" +
                "id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT," +
                "fruitName VARCHAR(20) NOT NULL," +
                "fruitType VARCHAR(20))";

            var options = [];
            function successCreate() {
                console.info("Success: Table creation successful");
            }

            tx.executeSql(sql, options, successCreate, errorHandler);


        }

        db.transaction(txFunction, errorHandler, successTransaction);
    },
    dropTables: function () {

        function txFunction(tx) {
            console.info("Dropping tables ...");


            var sql = "DROP TABLE IF EXISTS fruit;";
            var options = [];
            function successDrop() {
                console.info("Success: Dropping table successful");
            }
            tx.executeSql(sql, options, successDrop, errorHandler);
        }
        db.transaction(txFunction, errorHandler, successTransaction);
    }
};