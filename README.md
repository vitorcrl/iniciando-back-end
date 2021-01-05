![https://fiqueemcasa.nic.ifrn.edu.br/img/servicos/rock.png](https://fiqueemcasa.nic.ifrn.edu.br/img/servicos/rock.png)


# ⭐Iniciando o Back-end⭐

Nesse projeto Iniciamos o Back-end do app, GoBarber para o projeto de Conclusão do Bootcamp Rocketseat.

## ⭐Banco de dados⭐

migrations no projeto são definidas as versoes de cada banco. Ex cada migration faz uma alteracao no banco para que outro dev chegue e somente instale elas.

Dessa forma é possivel manter a estrutura do banco de dados atualizada, com varias alteracoes e versoes dele, como o funcionamento do git.

## ⭐Typeorm⭐

A entidade e definida para o mapeamento do banco de dados e cadastro de funcoes. (e necessario ativar o Decorator do ts para utilizar o @  antes da funcao.)

O Entity torna a classe um parametro para nossa entidade

## ⭐JWT Token⭐

JWT =JsonWebToken

Se refere a um token de autenticacao de senha 

Esse token primeiramente contem o algoritmo, no caso a criptografia que o a senha foi feita em HASH para sua autenticacao, Contendo PAYLOAD que seria informacoes do usuario como dados adicionais como id,nome etc. E por fim temos a assinatura de autenticacao do token onde podemos saber se foi violado, tornando aprova de edicoes e burlamento do JWT.

## ⭐Adicionando Fotos⭐

Nesse passo utilizaremos o multer para transferir as fotos, inicialmente para uma pasta criada na nossa raiz, apartir disso enviaremos e utilizando o gitignore vamos nao permitir o upload das fotos para o github nem o nosso sistema.
