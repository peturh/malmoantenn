/**
 * Created by petur on 2015-02-18.
 */
var app = require('app');
app.directive('waveSurfer', [function () {

    return {
        restrict: 'A',
        link: function (scope, element, attr) {
            var el = element[0];
            scope.wavesurfer = Object.create(WaveSurfer);
            scope.wavesurfer.init({
                container: el,
                waveColor: '#eee',
                progressColor: '#000'
            });

            scope.wavesurfer.on('ready', function () {
                scope.loading = false;
                scope.loaded = true;
                scope.start();
            });
            element.bind('click',function(){
                scope.wavesurfer.load(song);
            })

        }
    };

}]);