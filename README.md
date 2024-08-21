

## Приложения для домашнего сервера

1. Устаналиваем Docker по [актуальному гайду](https://docs.docker.com/engine/install/ubuntu) или с помощью скрипта `./install/docker.sh`.

1. Устанавливаем Portainer (`install/docker-compose.yml`), там добавляем другие репозитории как stack.

1. [Настраиваем](https://www.dmosk.ru/instruktions.php?object=samba-ubuntu) Samba


### Prometheus

[Таргеты](http://192.168.1.136:9090/targets?search=)

Экспортит все данные с сервера и не только

### Photoprism

Хранит все фотографии и всех радует 

### Minecraft server

Говорит сам за себя

Для того, чтобы была аналитика и данные приходили в Prometheus, нужно добавить контейнеру прометея сеть из minecraft-server.

### TPWS

[Код на роутере](https://github.com/Sapfir0/keenetic-opkg) 

### Home assistant

Развернут на отдельной машине с помощью HA OS. [Репозиторий](https://github.com/Sapfir0/home-assistant).



Из задач улучшений на будущее:

* Сделать так, чтобы докер контейнер Prometheus имел доступ ко всем дискам, которые есть в системе
