Feature: Registro de álbum
    Como usuário Administrador
    Quero cadastrar álbuns
    Para cadastrar músicas


Scenario: Cadastrando álbum
    Given Estou logado como o usuário Administrador de email "admin@dizer.com" e senha "admin"
    And Estou na página de "Cadastrar novo álbum" do artista "Doja Cat"
    When Preencho os campos "nome do álbum", "ano de lançamento" e "url_foto álbum" com os valores "Harrys House", "2020" e "https://images.pexels.com/photos/919278/pexels-photo-919278.jpeg?auto=compress&cs=tinysrgb&w=400"
    And Clico em "Adicionar"
    Then O sistema mostra uma mensagem de "Álbum cadastrado!"


Scenario: Cadastrando álbum com nome vazio
    Given Estou logado como o usuário Administrador de email "admin@dizer.com" e senha "admin"
    And Estou na página de "Cadastrar novo álbum" do artista "Rihanna"
    When Preencho os campos "nome do álbum", "ano de lançamento" e "url_foto álbum" com os valores "", "2001" e "https://images.pexels.com/photos/593655/pexels-photo-593655.jpeg?auto=compress&cs=tinysrgb&w=400"
    And Clico em "Adicionar"
    Then O sistema mostra uma mensagem de "Campo inválido!"
    And O campo "nome do álbum" fica realçado


Scenario: Cadastrando álbum com ano de lançamento vazio
    Given Estou logado como o usuário Administrador de email "admin@dizer.com" e senha "admin"
    And Estou na página de "Cadastrar novo álbum" do artista "Taylor Swift"
    When Preencho os campos "nome do álbum", "ano de lançamento" e "url_foto álbum" com os valores "Noons", "" e "https://images.pexels.com/photos/247597/pexels-photo-247597.jpeg?auto=compress&cs=tinysrgb&w=400"
    And Clico em "Adicionar"
    Then O sistema mostra uma mensagem de "Campo inválido!"
    And O campo "ano de lançamento" fica realçado


Scenario: Cadastrando álbum com link para foto vazio
    Given Estou logado como o usuário Administrador de email "admin@dizer.com" e senha "admin"
    And Estou na página de "Cadastrar novo álbum" do artista "Taylor Swift"
    When Preencho os campos "nome do álbum", "ano de lançamento" e "url_foto álbum" com os valores "Noons", "2009" e ""
    And Clico em "Adicionar"
    Then O sistema mostra uma mensagem de "Campo inválido!"
    And O campo "url_foto álbum" fica realçado
