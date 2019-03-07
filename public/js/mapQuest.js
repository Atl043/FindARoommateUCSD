function initMap() {
    
	L.mapquest.key = 'QGHcirQrYxbsfP8KMAzmhggMCm7UaKNL';

	var map = L.mapquest.map('map', {
		center: [32.88, -117.236],
		layers: L.mapquest.tileLayer('map'),
		zoom: 12
	});

	L.marker([32.857648, -117.209139]).addTo(map)
}