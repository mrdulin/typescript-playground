type Waypoint = UtmNZ | GeoNZ;

export interface GeoNZ {
  latitude: number;
  longtitude: number;
}

export interface UtmNZ {
  latitude: number;
  longtitude: number;
  zone: number;
}

class Example {
  waypoint = {
    zone: 1,
  };
  renderWaypoint(waypoint: Waypoint): string {
    if (!waypoint.latitude || !waypoint.longtitude) return 'נ.צ. לא תקין';
    if (isUTM(waypoint)) return renderUTM(waypoint);
    else return renderGeo(waypoint);
  }
}

function isUTM(waypoint: Waypoint): waypoint is UtmNZ {
  return 'zone' in waypoint;
}

function renderGeo(waypoint: GeoNZ): string {
  return 'geo';
}
function renderUTM(waypoint: UtmNZ): string {
  return 'utm';
}

const utm: Waypoint = { zone: 123, latitude: 123, longtitude: 321 };

const exmaple = new Example();
console.log(exmaple.renderWaypoint(utm));
