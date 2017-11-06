(function () {
    angular
            .module('app')
            .controller('HabilidadController', HabilidadController);

    HabilidadController.inject = ['HeroeService'];

    function HabilidadController(HeroeService) {
        var self = this;

        ///////////////

        self.getHeroeList = getHeroeList;
        self.addPoderes = addPoderes;

        ///////////////

        function getHeroeList() {
            return HeroeService.getHeroeList();
        }

        function addPoderes(heroe) {
            HeroeService.addPoderes(heroe);
        }
    }
})();