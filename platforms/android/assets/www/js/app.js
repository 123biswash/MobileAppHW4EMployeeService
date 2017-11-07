// We use an "Immediate Function" to initialize the application to avoid leaving anything behind in the global scope
(function () {

    /* ---------------------------------- Local Variables ---------------------------------- */
    var service = new EmployeeService();
    service.initialize().done(function () {
        console.log("Service initialized");
    });

    /* --------------------------------- Event Registration -------------------------------- */
    $('.search-key1').on('keyup', findByName);
    $('.search-key2').on('keyup', finByName)
    $('.help-btn').on('click', function() {
        alert("Employee Directory v3.4");
    });

    
    document.addEventListener('deviceready',
        function () {
        // Override default HTML alert
        // with native dialog
        if (device.platform != "browser") {
        window.alert = function (message) {
        navigator.notification.alert(
        message, // message
        null, // callback
        "Workshop on Android", // title
        'OK' // buttonName
        );
        };
        }
        }, false);
    
    /* ---------------------------------- Local Functions ---------------------------------- */
    function findByName() {
        service.findByName($('.search-key1').val()).done(function (employees) {
            //var check=$('.search-key').val();
            var l = employees.length;
            var e;
            //if (check.length < 3){
                //$('.employee-list').empty();
            //}else{
                $('.employee-list').empty();
                for (var i = 0; i < l; i++) {
                e = employees[i];
                $('.employee-list').append('<li><a href="#employees/' + e.id + '">' + e.firstName + ' </a></li>');
                }

            //}
           
            });
        
        service.findByName($('.search-key2').val()).done(function (employees) {
            //var check=$('.search-key').val();
            var l = employees.length;
            var e;
            //if (check.length < 3){
                //$('.employee-list').empty();
            //}else{
                $('.employee-list').empty();
                for (var i = 0; i < l; i++) {
                e = employees[i];
                $('.employee-list').append('<li><a href="#employees/' + e.id + '">' + e.lastName + '</a></li>');
                }

            //}
           
            });
        
    }

}());