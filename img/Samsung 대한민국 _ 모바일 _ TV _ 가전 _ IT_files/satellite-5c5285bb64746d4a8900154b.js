function fcTrack(type,data){
  	var fcData = data;
    _satellite.setVar('fcEvent',type);
    _satellite.setVar('fcData',fcData);
    _satellite.track('floatingChat');
}

function fcTrack(type,data,agent){
  	var fcData = data;
    _satellite.setVar('fcEvent',type);
    _satellite.setVar('fcData',fcData);
    _satellite.setVar('fcAgent',agent);
    _satellite.track('floatingChat');
}
