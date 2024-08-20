
install_portainer:
	ansible-playbook playbooks/portainer.yml

install_docker:
	ansible-playbook -k -K playbooks/docker.yml

install_photoprism:
	ansible-playbook playbooks/photoprism.yml

install_minecraft_server:
	ansible-playbook playbooks/minecraft_server.yml

install_grafana:
	ansible-playbook playbooks/minecraft_server.yml

