# Installation on Ubuntu
- Ubuntu 16.04
- Docker CE 17


1. Install Dependency of DockerCE : apt-transport-https, ca-certificates, curl, software-properties-common
```bash
$ sudo apt install -y apt-transport-https ca-certificates curl software-properties-common
```

2. save docker package repository on apt
```bash
$ curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
$ sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
```

3. Update apt package list
```bash
$ sudo apt update -y
```

4. Install Docker CE
```bash
$ sudo apt install -y docker-ce
```
*** select version ***
```bash
$ sudo apt install -y docker-ce=18.03.0 ce-0 ubuntu
```
