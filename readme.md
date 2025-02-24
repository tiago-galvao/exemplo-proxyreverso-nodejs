<div align="center">

# 🔄 Aplicação Proxy da API de Avaliações V2

Uma aplicação proxy robusta em Node.js 18 para conectar gateways legados e modernizados de forma eficiente.

[Começar](#começando) •
[Documentação](#documentação) •
[Contribuir](#contribuindo) •
[Suporte](#suporte)

</div>

</br>
</br>
</br>

## 🚀 Sobre o Projeto

Esta aplicação proxy foi desenvolvida para resolver o desafio específico de conectar sistemas legados com arquiteturas modernizadas. Algumas características principais:

* **Compatibilidade Garantida** - Gerencia seamlessly a comunicação entre X-Gateway e Y-Gateway
* **Performance Otimizada** - Desenvolvido com Node.js 18 para máxima eficiência
* **Fácil Manutenção** - Código organizado e bem documentado
* **Altamente Configurável** - Flexível para diferentes cenários de uso

### Fluxo de Dados
```mermaid
graph LR
    A[X-Gateway] --> B[Proxy] --> C[Y-Gateway]
```

### 🛠️ Construído Com

* [Node.js 18](https://nodejs.org/)
* [Express](https://expressjs.com/)

## 🏁 Começando

Siga estas instruções para ter uma cópia do projeto rodando em sua máquina local.

### Pré-requisitos

* Node.js 18
* NPM (geralmente vem com Node.js)
```bash
npm install npm@latest -g
```

### Instalação

1. Clone o repositório
```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
```

2. Instale as dependências
```bash
npm install
```

3. Inicie a aplicação
```bash
npm run start
```

## 📁 Estrutura do Projeto

```
projeto/
├── configmap/                # Configurações do ambiente
├── src/
│   ├── config/               # Configurações da aplicação
│   ├── services/             # Serviços externos
│   └── server.js             # Ponto de entrada
└── [package.json, README.md, .npmrc, .iupipes.yml, .gitignore]
```

## 📚 Documentação

Para mais informações, consulte:

* [Documentação de Jornadas Cloud Pública PaaS](https://github-pages-dev.cloud.itau.com.br/itau-up2-docs/docs/documentacao/jornadas/cloud-publica/paas/)
* [Documentação da Plataforma PaaS 2.0](https://github-pages-dev.cloud.itau.com.br/itau-ev3-doc-docplataformapaas/paas20/_print/#pg-6e50a82b6da04e8a5ebc5f32a1a5c376)

## 🤝 Contribuindo

1. Faça um Fork do projeto
2. Crie sua Feature Branch (`git checkout -b feature/sua-branch`)
3. Commit suas mudanças (`git commit -m 'Add some suas alterações'`)
4. Push para a Branch (`git push origin feature/sua-branch`)
5. Abra um Pull Request

## 📫 Suporte

Para suporte e questões, por favor abra uma issue no repositório ou contate a equipe responsável.

</br>
</br>
</br>

<div align="center">
Desenvolvido com ❤️ pela Equipe de Biometria
</div>
