**## Beelink Mini S12 Pro**

* [Portainer](https://github.com/Sapfir0/HomeApps/tree/master/install) — Docker image aggregator

* [Monitoring](https://github.com/Sapfir0/HomeApps/tree/master/prometheus)

  * Prometheus — collects data
  * Grafana — visualization and dashboards
  * Telegraf
  * Node Exporter
  * cAdvisor

* [Immich](https://github.com/Sapfir0/HomeApps/tree/master/immich) — stores photos

* [Heimdall](https://github.com/Sapfir0/HomeApps/tree/master/heimdall) — homepage / dashboard

* [Media server](https://github.com/Sapfir0/HomeApps/tree/master/radarr)

  * Radarr — movie management server (disabled per now)
  * Sonarr — TV series management server (disabled per now)
  * Transmission — BitTorrent client
  * Jellyfin
  * Prowlarr - disabled per now
  * Overseerr - disabled per now

* [iCloud exporter](https://github.com/Sapfir0/HomeApps/tree/master/icloud) — a Docker cron job that retrieves data from iCloud and stores it in the PhotoPrism storage

* [Keenetic Exporter](https://github.com/Sapfir0/HomeApps/tree/master/keenetic-exporter) — exports router and network traffic/load data from the server. The network needs to be added to Prometheus.

* [Minecraft Server](https://github.com/Sapfir0/HomeApps/tree/master/minecraft-server) — to collect analytics and send data to Prometheus, the Prometheus container needs to be connected to the `minecraft-server` network.
