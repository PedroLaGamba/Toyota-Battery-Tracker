[README.md](https://github.com/user-attachments/files/22368696/README.md)
# Toyota Battery Tracker - Sistema Blockchain para Sustentabilidade

## Visão Geral

O Toyota Battery Tracker é um sistema blockchain completo desenvolvido para rastreamento e verificação do estado de baterias de carros híbridos da Toyota, com foco no descarte sustentável seguindo os princípios dos 3 Rs: **Reduzir**, **Reutilizar** e **Reciclar**.

Este projeto foi desenvolvido para o hackathon da Toyota, apresentando uma solução inovadora que combina tecnologia blockchain, sustentabilidade e transparência na cadeia de descarte de baterias.

## Características Principais

### 🔒 **Transparência Total**
- Rastreamento imutável do ciclo de vida completo das baterias na blockchain
- Registro permanente de todas as transações e mudanças de propriedade
- Histórico público acessível via QR Code em cada bateria

### ♻️ **Sustentabilidade**
- Incentivos para descarte correto através de sistema de tokenização
- Avaliação automática para reutilização de baterias
- Promoção dos 3 Rs: Reduzir, Reutilizar e Reciclar

### 🌐 **Acesso Fácil**
- Interface web intuitiva para diferentes tipos de usuários
- QR Code em cada bateria para consulta instantânea do histórico
- Painéis especializados para Toyota, concessionárias e empresas de reciclagem

## Arquitetura do Sistema

### Blockchain
- **Rede:** Polygon (Matic) - Escolhida por sua escalabilidade, baixo custo e compatibilidade com EVM
- **Contratos Inteligentes:** Desenvolvidos em Solidity
- **Oráculos:** Integração simulada para dados de sensores (expansível para Chainlink)

### Frontend
- **Framework:** React com Vite
- **UI/UX:** Tailwind CSS + shadcn/ui
- **Web3:** ethers.js para interação com blockchain
- **Funcionalidades:** QR Code, roteamento, dashboards responsivos

### Componentes Principais
1. **Contrato BatteryTracker.sol** - Gerenciamento completo do ciclo de vida das baterias
2. **Interface Web React** - Painéis para diferentes usuários
3. **Sistema de QR Code** - Acesso público ao histórico das baterias
4. **Módulo de Incentivos** - Tokenização para recompensar práticas sustentáveis

## Estrutura do Projeto

```
toyota-battery-tracker/
├── contracts/
│   └── BatteryTracker.sol          # Contrato inteligente principal
├── src/
│   ├── components/                 # Componentes React reutilizáveis
│   ├── pages/                      # Páginas da aplicação
│   ├── services/                   # Serviços de interação com blockchain
│   ├── App.jsx                     # Componente principal
│   └── main.jsx                    # Ponto de entrada
├── public/                         # Arquivos estáticos
├── README.md                       # Este arquivo
└── package.json                    # Dependências do projeto
```

## Funcionalidades por Usuário

### 🏢 **Painel Toyota**
- Visão geral de todas as baterias registradas
- Registro de novas baterias no sistema
- Atualização de dados de saúde via oráculos
- Emissão de incentivos para práticas sustentáveis
- Estatísticas e métricas do sistema

### 🏪 **Painel Concessionária**
- Inventário de baterias sob responsabilidade
- Transferência de propriedade para clientes
- Registro de manutenção e reparos
- Acesso ao QR Code das baterias

### ♻️ **Painel Reciclagem**
- Lista de baterias recebidas para processamento
- Registro de descarte final
- Avaliação para reutilização
- Solicitação de incentivos

### 🌍 **Acesso Público**
- Consulta do histórico via QR Code
- Informações de transparência
- Status de sustentabilidade da bateria

## Tecnologias Utilizadas

### Blockchain
- **Solidity** ^0.8.0 - Linguagem para contratos inteligentes
- **Polygon (Matic)** - Rede blockchain escolhida
- **ethers.js** - Biblioteca para interação Web3

### Frontend
- **React** 18+ - Framework JavaScript
- **Vite** - Build tool e dev server
- **Tailwind CSS** - Framework CSS utilitário
- **shadcn/ui** - Componentes UI modernos
- **Lucide React** - Ícones
- **react-router-dom** - Roteamento
- **react-qr-code** - Geração de QR Codes

### Desenvolvimento
- **pnpm** - Gerenciador de pacotes
- **ESLint** - Linting de código
- **Node.js** 22+ - Runtime JavaScript



## Instalação e Configuração

### Pré-requisitos

- **Node.js** 18+ 
- **pnpm** (recomendado) ou npm
- **Git**
- **Metamask** ou carteira Web3 compatível

### Passo a Passo

#### 1. Clone o Repositório
```bash
git clone https://github.com/toyota/battery-tracker.git
cd toyota-battery-tracker
```

#### 2. Instale as Dependências
```bash
pnpm install
# ou
npm install
```

#### 3. Configure o Ambiente
Crie um arquivo `.env` na raiz do projeto:
```env
VITE_CONTRACT_ADDRESS=0x...  # Endereço do contrato deployado
VITE_NETWORK_ID=137          # Polygon Mainnet (ou 80001 para Mumbai Testnet)
VITE_RPC_URL=https://polygon-rpc.com/
```

#### 4. Execute o Projeto
```bash
pnpm run dev
# ou
npm run dev
```

A aplicação estará disponível em `http://localhost:5173`

### Deploy do Contrato Inteligente

#### 1. Instale Hardhat (Opcional)
```bash
npm install --save-dev hardhat @nomiclabs/hardhat-ethers ethers
```

#### 2. Configure o Hardhat
Crie `hardhat.config.js`:
```javascript
require("@nomiclabs/hardhat-ethers");

module.exports = {
  solidity: "0.8.0",
  networks: {
    polygon: {
      url: "https://polygon-rpc.com/",
      accounts: [process.env.PRIVATE_KEY]
    }
  }
};
```

#### 3. Deploy na Polygon
```bash
npx hardhat run scripts/deploy.js --network polygon
```

### Configuração da Carteira

#### 1. Adicione a Rede Polygon ao Metamask
- **Nome da Rede:** Polygon Mainnet
- **RPC URL:** https://polygon-rpc.com/
- **Chain ID:** 137
- **Símbolo:** MATIC
- **Block Explorer:** https://polygonscan.com/

#### 2. Obtenha MATIC para Taxas de Gas
- Use uma exchange para comprar MATIC
- Ou use uma bridge para transferir de Ethereum

## Como Usar o Sistema

### Para a Toyota (Administrador)

1. **Acesse o Painel Toyota**
   - Navegue para `/toyota`
   - Conecte sua carteira Metamask

2. **Registre uma Nova Bateria**
   - Vá para a aba "Registrar Bateria"
   - Insira o ID único da bateria (formato: TOY-HYB-XXX-BAT-XXX)
   - Defina a data de fabricação
   - Confirme a transação

3. **Atualize Dados de Saúde**
   - Use a aba "Atualizar Saúde"
   - Insira novos valores de SoH e ciclos
   - Esta função simula dados de oráculos

4. **Emita Incentivos**
   - Acesse "Incentivos"
   - Selecione a bateria e destinatário
   - Defina o valor do incentivo

### Para Concessionárias

1. **Acesse o Painel da Concessionária**
   - Navegue para `/dealer`
   - Conecte sua carteira

2. **Gerencie Inventário**
   - Visualize baterias em estoque
   - Acesse QR Codes das baterias

3. **Transfira Propriedade**
   - Use a aba "Transferir"
   - Selecione a bateria
   - Insira o endereço do novo proprietário

4. **Registre Manutenção**
   - Documente serviços realizados
   - Mantenha histórico atualizado

### Para Empresas de Reciclagem

1. **Acesse o Painel de Reciclagem**
   - Navegue para `/recycler`
   - Conecte sua carteira

2. **Processe Baterias Recebidas**
   - Visualize baterias para processamento
   - Verifique status e condições

3. **Registre Descarte**
   - Documente o descarte final
   - Especifique o motivo

4. **Avalie para Reutilização**
   - Determine se pode ser reutilizada
   - Registre a avaliação na blockchain

### Para o Público Geral

1. **Escaneie o QR Code**
   - Use qualquer leitor de QR Code
   - Ou acesse diretamente `/battery/{id}`

2. **Consulte o Histórico**
   - Visualize informações públicas
   - Verifique status de sustentabilidade
   - Acompanhe o SoH da bateria

## Fluxo de Vida da Bateria

### 1. **Fabricação** 🏭
- Toyota registra nova bateria na blockchain
- Define ID único e data de fabricação
- SoH inicial: 100%

### 2. **Distribuição** 🚚
- Transferência para concessionária
- Registro da mudança de propriedade
- Atualização do inventário

### 3. **Venda** 🛒
- Concessionária transfere para cliente final
- Cliente recebe QR Code para acompanhamento
- Histórico público disponível

### 4. **Uso** 🔋
- Monitoramento contínuo via oráculos
- Atualizações de SoH e ciclos
- Registro de manutenções

### 5. **Fim de Vida** ⚠️
- Cliente entrega para reciclagem
- Transferência para empresa autorizada
- Avaliação para reutilização

### 6. **Descarte/Reutilização** ♻️
- Registro final na blockchain
- Emissão de incentivos
- Fechamento do ciclo sustentável

## Benefícios do Sistema

### 🌱 **Ambientais**
- Redução do desperdício através da reutilização
- Rastreamento completo para descarte responsável
- Incentivos para práticas sustentáveis
- Transparência na cadeia de reciclagem

### 💼 **Empresariais**
- Compliance com regulamentações ambientais
- Melhoria da imagem corporativa
- Otimização da cadeia de suprimentos
- Redução de custos operacionais

### 👥 **Sociais**
- Transparência para consumidores
- Educação sobre sustentabilidade
- Responsabilidade compartilhada
- Confiança através da blockchain

### 🔧 **Técnicos**
- Imutabilidade dos registros
- Descentralização e segurança
- Escalabilidade na Polygon
- Interoperabilidade Web3


## Contratos Inteligentes

### BatteryTracker.sol

O contrato principal implementa todas as funcionalidades necessárias para o rastreamento de baterias:

#### Estruturas de Dados
```solidity
struct Battery {
    string batteryId;           // ID único da bateria
    address currentOwner;       // Proprietário atual
    uint256 manufactureDate;    // Data de fabricação
    uint256 stateOfHealth;      // SoH (0-100%)
    uint256 chargeCycles;       // Número de ciclos
    string maintenanceHistory;  // Histórico de manutenção
    uint256 disposalDate;       // Data de descarte
    string disposalReason;      // Motivo do descarte
    bool canBeReused;          // Pode ser reutilizada
    bool isDisposed;           // Foi descartada
}
```

#### Principais Funções
- `registerBattery()` - Registra nova bateria
- `transferOwnership()` - Transfere propriedade
- `updateBatteryHealth()` - Atualiza SoH via oráculo
- `recordMaintenance()` - Registra manutenção
- `recordDisposal()` - Registra descarte
- `evaluateForReuse()` - Avalia reutilização
- `issueIncentive()` - Emite incentivos

#### Eventos
- `BatteryRegistered` - Nova bateria registrada
- `OwnershipTransferred` - Propriedade transferida
- `BatteryHealthUpdated` - Saúde atualizada
- `MaintenanceRecorded` - Manutenção registrada
- `DisposalRecorded` - Descarte registrado
- `ReuseEvaluated` - Reutilização avaliada
- `IncentiveIssued` - Incentivo emitido

## Segurança e Auditoria

### Medidas de Segurança Implementadas

#### 1. **Controle de Acesso**
- Modificadores `onlyToyota` para funções administrativas
- Verificação de propriedade para transferências
- Validação de endereços e parâmetros

#### 2. **Validação de Dados**
- Verificação de existência de baterias
- Validação de ranges (SoH 0-100%)
- Prevenção de duplicatas

#### 3. **Imutabilidade**
- Registros permanentes na blockchain
- Histórico não alterável
- Transparência total

#### 4. **Boas Práticas Solidity**
- Uso de versão específica do compilador
- Tratamento adequado de erros
- Documentação completa do código

### Recomendações para Produção

1. **Auditoria de Segurança**
   - Revisão por especialistas em segurança blockchain
   - Testes de penetração
   - Análise de vulnerabilidades

2. **Testes Extensivos**
   - Testes unitários completos
   - Testes de integração
   - Simulação de cenários adversos

3. **Monitoramento**
   - Alertas para transações suspeitas
   - Monitoramento de eventos
   - Backup de dados críticos

## Expansões Futuras

### 🔮 **Funcionalidades Planejadas**

#### 1. **Integração com IoT**
- Sensores físicos nas baterias
- Coleta automática de dados
- Oráculos Chainlink para dados reais

#### 2. **Marketplace de Baterias**
- Compra e venda de baterias usadas
- Sistema de reputação
- Pagamentos em criptomoedas

#### 3. **IA e Machine Learning**
- Predição de vida útil
- Otimização de rotas de reciclagem
- Análise preditiva de falhas

#### 4. **Expansão Multi-marca**
- Suporte para outras montadoras
- Padrão universal de rastreamento
- Interoperabilidade entre sistemas

#### 5. **Carbon Credits**
- Tokenização de créditos de carbono
- Recompensas por práticas sustentáveis
- Marketplace de créditos ambientais

### 🌐 **Integrações Externas**

#### 1. **Sistemas Governamentais**
- Compliance automático com regulamentações
- Relatórios para órgãos ambientais
- Certificações digitais

#### 2. **Parceiros da Cadeia**
- Integração com fornecedores
- Sistemas de logística
- Plataformas de e-commerce

#### 3. **Organizações Ambientais**
- Certificações de sustentabilidade
- Auditoria independente
- Relatórios de impacto ambiental

## Contribuição

### Como Contribuir

1. **Fork o Repositório**
2. **Crie uma Branch** (`git checkout -b feature/nova-funcionalidade`)
3. **Commit suas Mudanças** (`git commit -m 'Adiciona nova funcionalidade'`)
4. **Push para a Branch** (`git push origin feature/nova-funcionalidade`)
5. **Abra um Pull Request**

### Diretrizes de Contribuição

- Siga os padrões de código estabelecidos
- Adicione testes para novas funcionalidades
- Documente mudanças no README
- Mantenha commits pequenos e focados

### Reportar Bugs

Use as Issues do GitHub para reportar bugs, incluindo:
- Descrição detalhada do problema
- Passos para reproduzir
- Ambiente (browser, versão, etc.)
- Screenshots se aplicável

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

## Contato e Suporte

### Equipe de Desenvolvimento
- **Email:** battery-tracker@toyota.com
- **Discord:** [Toyota Blockchain Community](https://discord.gg/toyota-blockchain)
- **Twitter:** [@ToyotaBlockchain](https://twitter.com/ToyotaBlockchain)

### Documentação Adicional
- [Wiki do Projeto](https://github.com/toyota/battery-tracker/wiki)
- [API Documentation](https://docs.toyota-battery-tracker.com)
- [Video Tutorials](https://youtube.com/toyota-blockchain)

## Agradecimentos

Agradecemos a todos que contribuíram para este projeto:

- **Equipe Toyota** - Visão e requisitos do projeto
- **Comunidade Blockchain** - Feedback e sugestões
- **Desenvolvedores Open Source** - Ferramentas e bibliotecas
- **Especialistas em Sustentabilidade** - Orientação sobre práticas ambientais

---

**Desenvolvido com ❤️ para um futuro mais sustentável**

*Este projeto representa o compromisso da Toyota com a inovação tecnológica e a responsabilidade ambiental, utilizando blockchain para criar transparência e incentivar práticas sustentáveis na indústria automotiva.*

