var web_dropoutforecast = angular.module('web_dropoutforecast',["ngRoute"]);

//Component Configuration
web_dropoutforecast.component('navbarPage',{
    templateUrl: "views/navbar.html"
})
.component('footerPage',{
    templateUrl: "views/footer.html"
});

//App Routing
web_dropoutforecast.config(function($routeProvider, $locationProvider){
    $routeProvider
    .when("/",{
        templateUrl: "views/home.html"
    })
    .when("/equipo",{
        templateUrl: "views/equipo.html",
        controller: "equipoCtrl"
    })
    .when("/proyecto",{
        templateUrl: "views/proyecto.html"
    })
    .when("/contacto",{
        templateUrl: "views/contacto.html"
    })
    .when("/redes",{
        templateUrl: "views/redesociales.html",
        controller:"redesCtrl"
    })
    .otherwise({
        templateUrl: "views/home.html"
    });
    $locationProvider.hashPrefix("");
})
