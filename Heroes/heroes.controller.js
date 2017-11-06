(function () {
    angular
            .module('app')
            .controller('HeroeController', HeroeController);

    HeroeController.inject = ['HeroeService'];

    function HeroeController(HeroeService) {
        var self = this;
        self.id = 1;
        self.nombre = null;
        self.alias = null;

        ///////////////
        self.addHeroe = addHeroe;

        ///////////////

        init();

        function init() {
            $("#loader").hide();
        }

        function addHeroe() {
            var heroe = {
                id: self.id,
                nombre: self.nombre,
                alias: self.alias,
                habilidades: []
            };
            HeroeService.addHeroe(heroe);
            self.id++;
        }


    }
})();