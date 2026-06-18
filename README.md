# 🏥 Painel do Enfermeiro — Croatá dos Martins

> **Emerson Rodrigues Cardoso** · Enfermeiro · USF I  
> Acesso em produção: [https://emerson1993rc.github.io/Enfermeiro](https://emerson1993rc.github.io/Enfermeiro)

Página inicial centralizada com todas as ferramentas de trabalho da APS: análise de produção mensal, indicadores de qualidade (C2–C7), rotinas e recursos complementares.

---

## 📁 Estrutura do repositório

```
Enfermeiro/
├── index.html       ← Página principal (este painel)
└── README.md        ← Este arquivo
```

---

## 🚀 Passo a passo — Criar o repositório e publicar no GitHub Pages

### 1. Criar o repositório no GitHub

1. Acesse [github.com](https://github.com) e faça login na sua conta **Emerson1993RC**
2. Clique no botão **"+"** (canto superior direito) → **"New repository"**
3. Preencha:
   - **Repository name:** `Enfermeiro` ← exatamente assim, com E maiúsculo
   - **Description:** `Painel de ferramentas de trabalho — Enfermeiro USF I`
   - Marque **Public**
   - ✅ Marque **"Add a README file"**
4. Clique em **"Create repository"**

---

### 2. Fazer upload dos arquivos

Você tem duas opções:

#### Opção A — Pela interface do GitHub (mais simples)

1. Dentro do repositório recém-criado, clique em **"Add file"** → **"Upload files"**
2. Arraste os arquivos `index.html` e `README.md` para a área de upload
3. Em **"Commit changes"**, escreva: `Adiciona página inicial do painel`
4. Clique em **"Commit changes"**

#### Opção B — Pelo VS Code + Git (recomendado para futuras edições)

```bash
# No terminal do VS Code:
git clone https://github.com/Emerson1993RC/Enfermeiro.git
cd Enfermeiro

# Copie o index.html para esta pasta, depois:
git add .
git commit -m "Adiciona página inicial do painel"
git push origin main
```

---

### 3. Ativar o GitHub Pages

1. No repositório, clique na aba **"Settings"** (ícone de engrenagem)
2. No menu lateral esquerdo, clique em **"Pages"**
3. Em **"Branch"**, selecione `main` e a pasta `/ (root)`
4. Clique em **"Save"**
5. Aguarde cerca de 1–2 minutos
6. O GitHub mostrará o link:  
   **✅ `https://emerson1993rc.github.io/Enfermeiro`**

> 💡 Se o link não aparecer imediatamente, atualize a página de Settings após 2 minutos.

---

### 4. Testar o acesso

Abra o navegador e acesse:

```
https://emerson1993rc.github.io/Enfermeiro
```

ou

```
https://emerson1993rc.github.io/Enfermeiro/index.html
```

Ambos funcionam.

---

## ✏️ Como atualizar o painel no futuro

### Adicionar um novo link

1. Abra o `index.html` no VS Code
2. Localize o card correspondente (Produção, Indicadores ou Outras Ferramentas)
3. Copie um bloco `<a class="link-item">` existente e edite o `href`, o título e a descrição
4. Salve e faça o commit:

```bash
git add index.html
git commit -m "Adiciona link X ao painel"
git push
```

### Criar um novo card de menu

Copie um dos blocos `<div class="menu-card">` no `index.html` e personalize o ícone (`card-icon`), título (`card-title`), descrição (`card-desc`) e os links internos.

---

## 🔗 Links cadastrados

### 📊 Produção
| Ferramenta | URL |
|---|---|
| Análise de Produção | https://emerson1993rc.github.io/Produ-o-da-equipe/analise.html |
| Produção ACS | https://emerson1993rc.github.io/Produ-o-da-equipe/ACS.html |
| Cadastro | https://emerson1993rc.github.io/Indicador_saude/cadastro/index.html |

### 📈 Indicadores
| Indicador | URL |
|---|---|
| C2 – Pré-natal | https://emerson1993rc.github.io/Indicador_saude/C2/index.html |
| C3 – Prevenção ginecológica | https://emerson1993rc.github.io/Indicador_saude/C3/index.html |
| C4 – Hipertensão | https://emerson1993rc.github.io/Indicador_saude/C4/index.html |
| C5 – Diabetes | https://emerson1993rc.github.io/Indicador_saude/C5/index.html |
| C6 – Saúde da criança | https://emerson1993rc.github.io/Indicador_saude/C6/index.html |
| C7 – Saúde bucal | https://emerson1993rc.github.io/Indicador_saude/C7/index.html |

### 🛠️ Outras Ferramentas
| Ferramenta | URL |
|---|---|
| Rotina de Trabalho | https://emerson1993rc.github.io/Ferramentas/Rotina.html |
| Indicadores Varjota | https://indicadores-saude-varjota.vercel.app/ |

---

## 💡 Sugestões para o espaço em branco

O painel já tem uma seção "Recursos Rápidos" com dicas e atalhos. Outras ideias para expandir no futuro:

- **📅 Calendário de competências** — datas de fechamento do SISAB por mês
- **📌 Avisos e lembretes** — campo editável para recados da equipe
- **📰 Novidades da APS** — feed de RSS do Ministério da Saúde
- **🔢 Calculadora de indicadores** — meta × cadastro → resultado estimado

---

*Repositório mantido por Emerson Rodrigues Cardoso — USF I Croatá dos Martins, Varjota-CE*
