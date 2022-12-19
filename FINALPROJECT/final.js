

           const mymap = L.map('issMap').setView([0, 0], 1);
               const attribution =
                 '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

               const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
               const tiles = L.tileLayer(tileUrl, { attribution });
               tiles.addTo(mymap);

               const issIcon = L.icon({
                 iconUrl: 'iss200.png',
                 iconSize: [50, 32],
                 iconAnchor: [25, 16]
               });
               const marker = L.marker([0, 0], { icon: issIcon }).addTo(mymap);

               const api_url = 'https://api.wheretheiss.at/v1/satellites/25544';

               async function getISS() {
                 console.log("INside get ISS");
                 const response = await fetch(api_url);
                 const data = await response.json();
                 const { latitude, longitude, visibility } = data;

                 marker.setLatLng([latitude, longitude]);
                 mymap.setView([latitude, longitude, visibility], 2);
                 document.getElementById('lat').textContent = latitude.toFixed(2);
                 document.getElementById('long').textContent = longitude.toFixed(2);
                 document.getElementById('vis').textContent = visibility.toFixed(2);

               }

               getISS();

               function haversine(lat1, lon1, lat2, lon2) {
                 // Convert latitudes and longitudes to radians
                 lat1 = toRadians(lat1);
                 lon1 = toRadians(lon1);
                 lat2 = toRadians(lat2);
                 lon2 = toRadians(lon2);

                 // Calculate the distance using the haversine formula
                 const a = Math.pow(Math.sin((lat2 - lat1) / 2), 2) +
                   Math.cos(lat1) * Math.cos(lat2) *
                   Math.pow(Math.sin((lon2 - lon1) / 2), 2);
                 const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
                 const distance = 6371 * c; // 6371 is the radius of the Earth in kilometers

                 console.log(`haversine distance ${distance}`);
                 return distance;
               }

               function toRadians(degrees) {
                 return degrees * (Math.PI / 180);
               }

               const radioUrl2 = "https://listen.kwmr.org/live?listening-from-radio-garden=1671294587";

               async function getISS() {
               const response = await fetch(api_url);
               console.log("getISS");
               const data = await response.json();
               const { latitude, longitude } = data;

               const radioLat1 = 44.6488;
               const radioLon1 = -63.5752;
               const distance1 = haversine(latitude, longitude, radioLat1, radioLon1);


               const radioLat2 = 37.9010;
               const radioLon2 = -122.2929;
               const distance2 = haversine(latitude, longitude, radioLat2, radioLon2);

               if (distance1 < distance2 && distance1 < 1000) {

               const audioElement = document.getElementById("radio");
               audioElement.src = radioUrl2;
               audioElement.play();
               } else if (distance2 < distance1 && distance2 < 1000) {

               }

               console.log("getISS");

               mymap.setView([latitude, longitude], mymap.getZoom());
               marker.setLatLng([latitude, longitude]);

               document.getElementById('lat').textContent = latitude.toFixed(2);
               document.getElementById('lon').textContent = longitude.toFixed(2);
               }

              window.onload = console.log("This is the right js file");
