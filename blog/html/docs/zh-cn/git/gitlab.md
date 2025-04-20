# gitlab

> Dockerfile

``` docker
FROM nginx:latest

COPY out/ /usr/share/nginx/html

COPY default.conf/etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx","-g","daemon off;"]
```

> docker-compose
``` yml
version: "3"

services:
  web:
    image: 'gitlab/gitlab-ce:11.3.1-ce.0'
    container_name: gitlab
    restart: always
    environment:
      GITLAB_OMNIBUS_CONFIG: |
        external_url 'http://git.blackmatch.cn'
        # email setting
        gitlab_rails['smtp_enable'] = true
        gitlab_rails['smtp_address'] = "smtp.gmail.com"
        gitlab_rails['smtp_port'] = 587
        gitlab_rails['smtp_user_name'] = "my.email@gmail.com"
        gitlab_rails['smtp_password'] = "my-gmail-password"
        gitlab_rails['smtp_domain'] = "smtp.gmail.com"
        gitlab_rails['smtp_authentication'] = "login"
        gitlab_rails['smtp_enable_starttls_auto'] = true
        gitlab_rails['smtp_tls'] = false
        gitlab_rails['smtp_openssl_verify_mode'] = 'peer'
    ports:
      - '80:80'
      - '443:443'
      - '33:22'
    volumes:
      - './srv/gitlab/config:/etc/gitlab'
      - './srv/gitlab/logs:/var/log/gitlab'
      - './srv/gitlab/data:/var/opt/gitlab'

```
> gitlab-runner
``` yml

```
