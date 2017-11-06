<h2>Creación de Heroes:</h2>
<div class="container-fluid"
     ng-controller="HeroeController as ctrl">
    <label>Nombre: </label><input type="text" ng-model="ctrl.nombre">
    <label>Alias: </label><input type="text" ng-model="ctrl.alias">
    <button ng-click="ctrl.addHeroe()">Guardar</button>
</div>
<hr>
<div class="container-fluid"
     ng-controller="HabilidadController as ctrl">
    <h2>Heroes:</h2>
    <ul>
        <li ng-repeat="heroe in ctrl.getHeroeList()">{{heroe.nombre}} - {{heroe.alias}} - {{heroe.habilidades}} <button ng-click="ctrl.addPoderes(heroe)" ng-if="heroe.habilidades < 1">Dar Poderes</button></li>
    </ul>
</div>

