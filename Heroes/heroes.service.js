(function () {
    angular
            .module('app')
            .service('HeroeService', HeroeService);

    function HeroeService() {
        var self = this;
        self.poderList = ['Inteligecia', 'Energia Solar', 'Manejo de Clima', 'Curación', 'Duplicación', 'Manipulación'];
        self.heroeList = [];

        return {
            addHeroe: addHeroe,
            getHeroeList: getHeroeList,
            addPoderes: addPoderes
        };

        function addHeroe(heroe) {
            self.heroeList.push(heroe);
        }

        function getHeroeList() {
            return self.heroeList;
        }

        function addPoderes(heroe) {
            heroe.habilidades = self.poderList;
        }

    }
})();