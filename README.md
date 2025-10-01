# 📊 Trabalho Victory - Visualização de Dados

Projeto acadêmico desenvolvido com React e Victory para demonstrar diferentes tipos de gráficos e visualizações de dados.

## 🚀 Tecnologias Utilizadas

- **React 18** - Biblioteca JavaScript para interfaces de usuário
- **Victory** - Biblioteca de gráficos para React
- **Vite** - Build tool moderna e rápida
- **CSS3** - Estilização moderna com gradientes e animações

## 📦 Instalação

1. Instale as dependências:
```bash
npm install
```

## 🎯 Como Executar

1. Execute o projeto em modo de desenvolvimento:
```bash
npm run dev
```

2. Abra o navegador em `http://localhost:3000`

## 📊 Funcionalidades do Projeto

### 📈 Página de Gráficos
Visualize diferentes tipos de gráficos com dados estáticos:

1. **Gráfico de Linha** - Tendências ao longo do tempo
2. **Gráfico de Barras** - Comparações entre categorias
3. **Gráfico de Pizza** - Proporções e porcentagens
4. **Gráfico de Área** - Volumes e variações acumuladas

### 🎮 Simulador Interativo
Página interativa com atualização em tempo real:

- **Entrada de Dados** - Simule compras de produtos
- **Visualização JSON** - Veja os dados atualizando dinamicamente
- **Gráfico em Tempo Real** - Acompanhe as mudanças instantaneamente
- **Estatísticas** - Total de vendas e produto mais vendido
- **Layout Dividido** - Interface intuitiva em 3 painéis

## 🎨 Características

- ✨ Interface moderna e responsiva
- 🎯 Design limpo e profissional
- 📱 Totalmente responsivo para mobile
- 🔄 Animações suaves nos gráficos
- 🎨 Gradientes e efeitos visuais modernos
- 📊 Tooltips interativos nos gráficos
- 📁 Dados separados em arquivos JSON
- 🎮 Simulador interativo com atualização em tempo real
- 🗺️ Navegação entre páginas com React Router
- 📊 Visualização de dados em formato JSON

## 📁 Estrutura do Projeto

```
trabalho-victory/
├── src/
│   ├── components/
│   │   ├── charts/
│   │   │   ├── LineChartExample.jsx
│   │   │   ├── BarChartExample.jsx
│   │   │   ├── PieChartExample.jsx
│   │   │   └── AreaChartExample.jsx
│   │   ├── ChartCard.jsx
│   │   ├── ChartCard.css
│   │   ├── Navbar.jsx
│   │   └── Navbar.css
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Simulator.jsx
│   │   └── Simulator.css
│   ├── data/
│   │   ├── lineChartData.json
│   │   ├── barChartData.json
│   │   ├── pieChartData.json
│   │   ├── areaChartData.json
│   │   └── README.md
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

## 🛠️ Como Editar os Dados dos Gráficos

Os dados de cada gráfico estão separados em arquivos JSON na pasta `src/data/`:

1. **Abra o arquivo JSON** correspondente ao gráfico que deseja modificar:
   - `lineChartData.json` - Gráfico de Linha
   - `barChartData.json` - Gráfico de Barras
   - `pieChartData.json` - Gráfico de Pizza
   - `areaChartData.json` - Gráfico de Área

2. **Edite os valores** no formato:
```json
{
  "title": "Título do gráfico",
  "data": [
    { "x": "valor_x", "y": valor_y },
    { "x": "valor_x", "y": valor_y }
  ]
}
```

3. **Salve o arquivo** - as mudanças serão aplicadas automaticamente

📖 Consulte `src/data/README.md` para mais detalhes sobre como editar cada tipo de dado.

## 🎮 Usando o Simulador Interativo

Acesse a página do simulador clicando em **"🎮 Simulador"** no menu superior.

**Funcionalidades:**
1. Selecione um produto no dropdown
2. Clique em "Adicionar +1" para incrementar as vendas
3. Veja o gráfico e JSON atualizarem em tempo real!
4. Use "Resetar" para voltar aos valores iniciais

📖 Para mais detalhes, consulte o `SIMULADOR.md`

## 🎨 Customização Avançada

Para customizações além dos dados:

- **Cores**: Edite as propriedades `style` e `colorScale` nos componentes
- **Tamanhos**: Ajuste `width` e `height` nos componentes
- **Animações**: Modifique as propriedades `animate`
- **Tooltips**: Personalize os `labels` e `labelComponent`

## 📚 Documentação Victory

Para mais informações sobre como usar a biblioteca Victory:
- [Documentação Oficial](https://formidable.com/open-source/victory/)
- [Exemplos de Gráficos](https://formidable.com/open-source/victory/gallery)

## 🎓 Uso Acadêmico

Este projeto foi desenvolvido para fins acadêmicos e pode ser utilizado como:
- Base para trabalhos de visualização de dados
- Exemplo de implementação de gráficos em React
- Referência para projetos com Victory
- Estudo de separação de dados e componentes

## 📄 Build para Produção

Para criar uma versão otimizada para produção:

```bash
npm run build
```

Os arquivos otimizados serão gerados na pasta `dist/`.

## 🤝 Contribuindo

Sinta-se à vontade para adicionar novos tipos de gráficos ou melhorar os existentes!

---

Desenvolvido com ❤️ para fins acadêmicos
